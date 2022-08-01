const express = require("express");
const { SERVER_PORT } = require("./environment");
const db = require("./db");
const app = express();
app.use(express.json());

// Récupérer une application et ses courses
app.get("/applicationandcourses/:id", async (req, res) => {
  try {
    const [[application]] = await db
      .promise()
      .query("SELECT * FROM application WHERE id = ?", [req.params.id]);

    const [courses] = await db
      .promise()
      .query(
        "SELECT * FROM application app INNER JOIN course c ON app.id=c.application_id WHERE c.application_id=?",
        [req.params.id]
      );

    if (application) res.send({ application, courses });
    else res.sendStatus(404);
  } catch (err) {
    console.error(err);
    res.sendStatus(500).send("something wrong happened");
  }
});

// Créer une application :
app.post("/applications", async (req, res) => {
  try {
    const { nom, num_version } = req.body;
    const [application] = await db
      .promise()
      .query("INSERT INTO application (nom, num_version) VALUES (?,?)", [
        nom,
        num_version,
      ]);
    res.status(200).send(application);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Créer une course liée à une application
app.post("/courses", async (req, res) => {
  try {
    const { nom, date_creation, application_id } = req.body;
    const [course] = await db
      .promise()
      .query(
        "INSERT INTO course (nom, date_creation, application_id) VALUES (?,?,?)",
        [nom, date_creation, application_id]
      );
    res.status(200).send(course);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// listen to incoming requests
app.listen(SERVER_PORT, () => console.log("Express server is running"));

db.connect((err) => {
  if (err) console.error("error connecting to db");
});

module.exports.app = app;
