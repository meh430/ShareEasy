const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.clearStorage = functions.storage.object().onFinalize(object => { 
    const storageRef = admin.storage().bucket("gs://shareeasy-dd2ce.appspot.com");
    storageRef.getFiles((err, files) => {
        if (!err) {
            for (let i = 0; i < files.length; i++) {
                files[i].getMetadata().then(data => {
                    return console.log("data: " + JSON.stringify(data[0]));
                }).catch(err => {
                    return console.log("error: " + err);
                });
            }
        }
    });

    return console.log("Finished");
});