import React from "react";
import "../App.css";
import { UploadItem } from "./UploadItem";

let uploads = JSON.parse(localStorage.getItem("SAVED_LINKS"));
uploads = uploads ? uploads : [];

const createListItems = (uploadList) => {
    let ret = [];
    for (let i = 0; i < uploadList.length; i++) {
        const currLink = uploadList[i]
        ret.push(
            <li style={{display: "inline-block"}}>
                <UploadItem
                    fileType={currLink.fileType}
                    fileName={currLink.fileName}
                    expireTime="24 hrs"
                    downloadLink={currLink.dLink}
                />
            </li>
        );
    }

    return ret.length > 0 ? ret : [<li><h3 className="fileName">No Uploads...</h3></li>];
};

export class PastLinksComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pastLinks: createListItems(uploads) };
        this.updateList = this.updateList.bind(this)
        setInterval(this.updateList, 1000);
        console.log(uploads)
    }

    updateList() {
        uploads = JSON.parse(localStorage.getItem("SAVED_LINKS"));
        uploads = uploads ? uploads : [];
        this.setState({pastLinks: createListItems(uploads)})
    }

    render() {
        return (
            <div className="section">
                <h3 className="sectionInfo">Generated download links</h3>
                <ul className="pastUploads">
                    {this.state.pastLinks}
                </ul>
            </div>
        );
    }
}
