const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const Firestore = require("@google-cloud/firestore");

const db = new Firestore({
    projectId: "tovoice",
    keyFilename: "./server/firestore-config.json"
});

const app = express();
app.enable("trust proxy");
app.use(bodyParser.json());
app.use(cors());

const port = 3001;
const router = express.Router();

const textToSpeech = require("@google-cloud/text-to-speech");
const path = require("path");
const fs = require("fs");
const util = require("util");

const client = new textToSpeech.TextToSpeechClient();

async function convertTextToVoiceAndSave(text) {
    const request = {
        input: {
            text: text
        },
        voice: {
            languageCode: "en-US",
            ssmlGender: "FEMALE"
        },
        audioConfig: {
            audioEncoding: "MP3"
        }
    };

    const [response] = await client.synthesizeSpeech(request);
    _writeFile(response.audioContent);
    return response.audioContent;
}

async function _writeFile(data) {
    const writeFile = util.promisify(fs.writeFile);
    await writeFile("src/output1.mp3", data.mp3, "binary");
    return data;
}

// server should get voice recoding
router.post("/to-voice", (req, res) => {
    convertTextToVoiceAndSave(req.body.text)
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            Error(err);
        });
});

// server should get voice recoding and save it to DB
router.post("/save-voice", (req, res) => {
    convertTextToVoiceAndSave(req.body.text)
        .then(result => {
            db.collection("my-recordings")
                .doc(req.body.id)
                .set({
                    name: req.body.name,
                    mp3: result
                })
                .then(response => {
                    res.send(response);
                })
                .catch(err => {
                    Error(err);
                });
        })
        .catch(err => {
            Error(err);
        });
});

// server should save voice recoding and title to DB
router.post("/save", (req, res) => {
    db.collection("my-recordings")
        .doc(req.body.id)
        .set({
            ...req.body
        })
        .then(response => {
            res.send(response);
            return response;
        })
        .catch(err => {
            Error(err);
        });
});

// server should return last saved item
router.get("/recording/:id", (req, res) => {
    db.collection("my-recordings")
        .doc(req.params.id)
        .get()
        .then(doc => {
            if (!doc.exists) {
                res.send("No such document!");
            } else {
                _writeFile(doc.data()).then(response => {
                    return res.send(JSON.stringify(response));
                });
            }
        })
        .catch(err => {
            Error(err);
        });
});

// server should return a paginated list of the last 10 items from the DB
router.get("/recordings", (req, res) => {
    db.collection("my-recordings")
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                return res.send(JSON.stringify(doc.data()));
            });
        })
        .catch(err => {
            Error(err);
        });
});

app.use("/", router);

app.listen(port, () => {
    console.log("Listening on port " + port);
});