const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

// can't use scheduled functions because you have to pay. I guess listening to the storage bucket will have to do for now
exports.clearStorage = functions.storage.object().onFinalize(object => { 
    const storageRef = admin.storage().bucket("gs://shareeasy-dd2ce.appspot.com");
    storageRef.getFiles((err, files) => {
        if (!err) {
            for (let i = 0; i < files.length; i++) {
                files[i].getMetadata().then(data => {
                    let timeElapsed = Date.now() - Date.parse(data[0]['timeCreated'])
                    if (timeElapsed >= (12 * 60 * 60 * 1000 )) {
                        files[i].delete((err, apiResponse) => { 
                            if (err) {
                                console.log(err);
                            }
                        })
                    }
                    return console.log("data: " + JSON.stringify(data[0]) + ", " + timeElapsed);
                }).catch(err => {
                    return console.log("error: " + err);
                });
            }
        }
    });

    return console.log("Finished");
});