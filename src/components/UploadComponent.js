import React from "react";
import "../App.css";
import firebase from "../Firebase";
import { UploadItem } from "./UploadItem";
import { shortenReqHeaders } from "../Credentials";
const SAVED_LINKS = 'SAVED_LINKS'
const storageRef = firebase.storage().ref();
let uploadTask;
let uploads = JSON.parse(localStorage.getItem(SAVED_LINKS))
uploads = uploads ? uploads : []

//link item: {fileName, fileType, link}

export class UploadComponent extends React.Component {
    constructor(props) {
        super(props);
        this.uploadClicked = this.uploadClicked.bind(this);
        this.onFileSelected = this.onFileSelected.bind(this);
        this.displayProgress = this.displayProgress.bind(this);
        this.state = { fileName: "", downloadLink: "", fileType: "", uploadRunning: false, progress: 0 };
    }

    displayProgress() {
        if (this.state.uploadRunning) {
            return <progress value={this.state.progress} max="100" style={{ width: "80%" }} />;
        } else {
            return <i style={{ display: "none" }} />;
        }
    }

    uploadClicked(event) {
        if (!this.state.uploadRunning) {
            this.setState({ fileName: "", downloadLink: "", fileType: "", uploadRunning: false, progress: 0 });
            this.refs.fileUpload.click();
        }
    }

    //TODO: handle errors
    onFileSelected(event) {
        event.stopPropagation();
        event.preventDefault();
        const selectedFile = event.target.files[0];
        if (selectedFile && !this.state.uploadRunning) {
            let fName = selectedFile["name"];
            fName = fName.replace(/\s/g, "");
            uploadTask = storageRef.child(fName).put(selectedFile);
            this.setState({ fileName: fName, fileType: selectedFile.type });
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
                        let shortenRequest = {
                            destination: downloadURL,
                        };

                        fetch("https://api.rebrandly.com/v1/links", {
                            method: "POST",
                            headers: shortenReqHeaders,
                            body: JSON.stringify(shortenRequest),
                        })
                            .then((res) => {
                                return res.json();
                            })
                            .then((link) => {
                                console.log(link);
                                this.setState({
                                    downloadLink: link.shortUrl,
                                    uploadRunning: false,
                                    progress: 100,
                                    fileName: fName,
                                    fileType: selectedFile.type,
                                });

                                uploads.push({ fileName: fName, fileType: selectedFile.type, dLink: link.shortUrl });
                                localStorage.setItem(SAVED_LINKS, JSON.stringify(uploads));
                            });
                    });
                }
            );
            console.log(selectedFile);
            this.setState({ fileName: fName, uploadRunning: true });
        }
    }

    render() {
        //TODO: figure out expiration countdown and auto deletion
        return (
            <div className="section">
                <h3 className="sectionInfo">
                    Upload a file to generate a download link that can easily be shared with others. Files that are
                    uploaded stay available to download for 24 hours.
                </h3>
                <a onClick={this.uploadClicked} className="uploadButton" style={{ color: "white" }}>
                    Upload File
                </a>
                <input
                    type="file"
                    id="file"
                    ref="fileUpload"
                    style={{ display: "none" }}
                    onChange={this.onFileSelected}
                />

                {this.state.fileName !== "" ? (
                    <UploadItem
                        fileType={this.state.fileType}
                        fileName={this.state.fileName}
                        expireTime="24 hrs"
                        downloadLink={this.state.downloadLink}
                    />
                ) : (
                    <i />
                )}
                {this.displayProgress()}
            </div>
        );
    }
}
