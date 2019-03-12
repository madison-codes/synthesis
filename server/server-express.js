const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.enable("trust proxy");

app.use(bodyParser.json());
app.use(cors());

const port = 3001;
const router = express.Router();

const textToSpeech = require("@google-cloud/text-to-speech");
const util = require("util");

async function convertTextToVoice(text) {
    console.log(text);
    const client = new textToSpeech.TextToSpeechClient();
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

    // Performs the Text-to-Speech request
    const [response] = await client.synthesizeSpeech(request);
    // Write the binary audio content to a local file
    const writeFile = util.promisify(fs.writeFile);
    await writeFile("src/output.mp3", response.audioContent, "binary");
    return response.audioContent;
    console.log("Audio content written to file: output.mp3");
}

const Firestore = require("@google-cloud/firestore");

const db = new Firestore({
    projectId: "synthesis-234002",
    keyFilename: "./server/firestore-config.json"
});

router.post("/voice", (req, res) => {
    convertTextToVoice(req.body.text).then((res) => {
            var docRef = db.collection("recordings").doc("001uCHmtHvWiOvgJr9CL");

            docRef.set({
                    owner: "Mad",
                    "recording-name": "new recording",
                    mp3: res,
                    wave: "Lovelace"
                })
                .then((response) => {
                    console.log('RESPONSE', response);
                })
        })
        .catch((error) => {
            console.log(error);
        })
});

router.get("/get-recording", (req, res) => {
    db.collection('recordings').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
                res.send(doc.data());
            });
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
})

















// SAVE PII
router.post("/new", (req, res) => {
    const pii = datastore.key("pii");
    const id = (Math.floor(Math.random() * (1000 - 0 + 1)) + 0).toString();
    const entity = {
        key: pii,
        data: {
            id: id,
            message: req.body
        }
    };
    datastore
        .save(entity)
        .then(data => {
            res.send(JSON.stringify(data));
        })
        .catch(error => {
            console.log(error);
        });
});

// GET All PII
router.get("/pii", (req, res) => {
    const query = datastore.createQuery("pii");
    datastore.runQuery(query).then(result => {
        res.send(result);
    });
});

router.get("/jwt", (req, res) => {
    if (req.query.userID) {
        const token = jwt.sign({
                pid: ironCoreConfig.projectId,
                sid: ironCoreConfig.segmentId,
                kid: ironCoreConfig.serviceKeyId
            },
            privateKey, {
                algorithm: "ES256",
                expiresIn: "2m",
                subject: req.query.userID
            }
        );
        res.send(token);
    } else res.status(404).send("Not found");
});

app.use("/", router);

app.listen(port, () => {
    console.log("Listening on port " + port);
});