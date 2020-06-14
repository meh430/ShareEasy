import React from "react";
import "../App.css";

const iconStyle = {
    fontSize: "52px",
    color: "red",
    margin: "10px"
}
const mediaIcons = {
    image: "fas fa-file-image",
    video: "far fa-file-video",
    audio: "far fa-file-audio",
    pdf: "far fa-file-pdf",
    text:"far fa-file-alt",
    zip: "far fa-file-archive",
    upload: "fas fa-upload"
};
export class UploadItem extends React.Component {
    constructor(props) {
        super(props);
        this.displayLink = this.displayLink.bind(this);
        this.displayMediaIcon = this.displayMediaIcon.bind(this);
    }

    displayMediaIcon() {
        console.log(this.props.fileName.length)
        if (this.props.fileName.length === 0) {
            return mediaIcons.upload
        } else {
            const mediaKeys = Object.keys(mediaIcons)
            for (let i = 0; i < mediaKeys.length; i++) {
                if (this.props.fileType.includes(mediaKeys[i])) {
                    return mediaIcons[mediaKeys[i]]
                }
            }

            return mediaIcons.text
        }
    }

    displayLink() {
        if(!this.props.running && this.props.downloadLink.length != 0) {
            return <h3 className="fileName">{this.props.downloadLink}</h3>;
        }
    }

    render() {
        return (
            <div className="upItem">
                <i className={this.displayMediaIcon().toString()} style={iconStyle}/>
                <h3 className="fileName">{this.props.fileName.length === 0 ? "Please upload a file..." : this.props.fileName}</h3>
                {this.displayLink()} 
            </div>
        );
    }
}
