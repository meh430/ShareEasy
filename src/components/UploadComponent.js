import React from "react";
import "../App.css";
import firebase from "../Firebase.js";

const storageRef = firebase.storage().ref();
let uploadTask;
export class UploadComponent extends React.Component {
    constructor(props) {
        super(props);
        this.uploadClicked = this.uploadClicked.bind(this);
        this.onFileSelected = this.onFileSelected.bind(this);
        this.state = { fileName: "Please upload a file...", uploadRunning: false, progress: 0 };
    }

    uploadClicked(event) {
        this.refs.fileUpload.click();
    }

    onFileSelected(event) {
        event.stopPropagation();
        event.preventDefault();
        const selectedFile = event.target.files[0];
        if (selectedFile && !this.state.uploadRunning) {
            let fName = selectedFile["name"];
            fName = fName.replace(/\s/g, "");
            uploadTask = storageRef.child("uploads/" + fName).put(selectedFile);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    this.setState({ progress: progress, uploadRunning: true });
                },
                (err) => {
                    console.log(err);
                },
                () => {
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        console.log("File available at", downloadURL);
                        this.setState({ progress: downloadURL, uploadRunning: false });
                    });
                }
            );
            console.log(selectedFile);
            this.setState({ fileName: fName, uploadRunning: true });
        }
    }

    //info
    //upload button
    //filename
    //progressbar -> done download link
    render() {
        return (
            <div className="section">
                <h3 className="sectionInfo">
                    Upload a file to generate a download link that can easily be shared with others. Files that are
                    uploaded stay available to download for 24 hours.
                </h3>
                <a onClick={this.uploadClicked} className="uploadButton">
                    Upload File
                </a>
                <input
                    type="file"
                    id="file"
                    ref="fileUpload"
                    style={{ display: "none" }}
                    onChange={this.onFileSelected}
                />

                <h4 className="fileName">{this.state.fileName}</h4>
                <h4 className="fileName">{this.state.progress}</h4>
            </div>
        );
    }
}
