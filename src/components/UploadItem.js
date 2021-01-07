import React from "react";
import "../App.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const iconStyle = {
    fontSize: "52px",
    color: "red",
    margin: "14px",
};
const mediaIcons = {
    image: "fas fa-file-image",
    video: "far fa-file-video",
    audio: "far fa-file-audio",
    pdf: "far fa-file-pdf",
    text: "far fa-file-alt",
    zip: "far fa-file-archive",
    upload: "fas fa-upload",
};


//fileName: string
//fileType: string
//downloadLink: string
//expireTime: optional string
export class UploadItem extends React.Component {
    constructor(props) {
        super(props);
        this.displayLink = this.displayLink.bind(this);
        this.displayMediaIcon = this.displayMediaIcon.bind(this);
        this.copiedText = this.copiedText.bind(this);
        this.state = { copyState: "#a5bef0" };
    }

    copiedText(event) {
        this.setState({ copyState: "#c4f5d6", copyMargin: "4px" });
    }

    displayMediaIcon() {
        if (this.props.fileName.length === 0 || this.props.fileType.length === 0) {
            return mediaIcons.upload;
        } else {
            const mediaKeys = Object.keys(mediaIcons);
            for (let i = 0; i < mediaKeys.length; i++) {
                if (this.props.fileType.includes(mediaKeys[i])) {
                    return mediaIcons[mediaKeys[i]];
                }
            }

            return mediaIcons.text;
        }
    }

    displayLink() {
        if (this.props.downloadLink.length !== 0) {
            return (
                <div className="dLink" style={{ backgroundColor: this.state.copyState }}>
                    {this.props.downloadLink}{" "}
                    <CopyToClipboard text={this.props.downloadLink}>
                        <div
                            onClick={this.copiedText}
                            style={{
                                borderLeft: "solid 1px black",
                                display: "inline-block",
                                padding: "8px",
                                paddingLeft: "12px",
                                marginLeft: "12px",
                                fontSize: "16px",
                            }}
                        >
                            <i className="far fa-clone" style={{ cursor: "pointer" }} onClick={this.copiedText}></i>
                        </div>
                    </CopyToClipboard>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="upItem">
                <div className="upItemText">
                    <i className={this.displayMediaIcon().toString()} style={iconStyle} />
                    <h3 className="fileName">
                        {this.props.fileName.length === 0 ? "Please upload a file..." : this.props.fileName}
                    </h3>
                </div>

                {this.displayLink()}

                {this.props.expireTime ? <h3 className="fileName">{"Expires in " + this.props.expireTime + " hrs"}</h3> : <div></div>}
            </div>
        );
    }
}
