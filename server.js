require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());


app.get("/getCourses", async (req, res) => {
  try {
    const allCourses = await pool.query(
      "SELECT * FROM courses order by instructor ASC"
    );
    res.json(allCourses.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/courseDelete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCourse = await pool.query(
      "DELETE FROM courses WHERE courseid = $1",
      [id]
    );
    if (deleteCourse.rowCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
      
    }
  } catch (err) {
    console.log(err.message);
  }
});



app.listen(3002, () => {
  console.log("Server has started on port 3002");
});
