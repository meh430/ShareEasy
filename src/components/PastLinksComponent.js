import React from "react";
import "../App.css";
import { UploadItem } from "./UploadItem";

let uploads = JSON.parse(localStorage.getItem("SAVED_LINKS"));
uploads = uploads ? uploads : [];

const createListItems = (uploadList) => {
    let ret = [];

    for (let i = 0; i < uploadList.length; i++) {
        const currLink = uploadList[i];
        let elapsedTime = Math.floor((Date.now() - currLink.genDate) / (60 * 60 * 1000));
        if (elapsedTime >= 12) {
            continue;
        }

        let expiresIn = 12 - elapsedTime;
        if (expiresIn === 0) {
            expiresIn = "<1";
        }

        ret.push(
            <li style={{ display: "inline-block" }} key={`link_${i}`}>
                <UploadItem
                    fileType={currLink.fileType}
                    fileName={currLink.fileName}
                    expireTime={expiresIn}
                    downloadLink={currLink.dLink}
                />
            </li>
        );
    }

    return ret.length > 0
        ? ret
        : [
              <li key="no_items">
                  <h3 className="fileName">No Uploads...</h3>
              </li>,
          ];
};

export class PastLinksComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pastLinks: createListItems(uploads) };
        this.updateList = this.updateList.bind(this);
        this.deleteLinks = this.deleteLinks.bind(this);
        setInterval(this.updateList, 1000);
        console.log(uploads);
    }
    
    //TODO: figure out why this is not working
    deleteLinks() {
        localStorage.setItem("SAVED_LINKS", "[]");
        localStorage.removeItem("SAVED_LINKS");
        localStorage.clear();
        this.setState({ pastLinks: [] });
    }

    updateList() {
        uploads = JSON.parse(localStorage.getItem("SAVED_LINKS"));
        uploads = uploads ? uploads : [];
        this.setState({ pastLinks: createListItems(uploads) });
    }

    render() {
        return (
            <div className="section">
                <h3 className="sectionInfo">Generated download links</h3>
                {this.state.pastLinks.length > 0 ? (
                    <div className="deleteItems" onClick={this.deleteLinks}>
                        Delete Links{" "}
                        <div
                            style={{
                                display: "inline-block",
                                padding: "8px",
                                paddingLeft: "12px",
                                marginLeft: "12px",
                                fontSize: "16px",
                            }}
                        >
                            <i className="fas fa-trash" style={{ cursor: "pointer" }} onClick={this.deleteLinks}></i>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
                <ul className="pastUploads">{this.state.pastLinks}</ul>
            </div>
        );
    }
}