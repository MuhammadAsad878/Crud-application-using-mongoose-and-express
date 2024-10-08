const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Students = require("./models/Student.js");
const ejs_engine = require("ejs-mate");

const app = express();
const port = 3000;

app.set("view engine", "ejs"); // sets view engine to ejs
app.set("views", path.join(__dirname, "views")); // sets views directory to views
app.engine("ejs", ejs_engine);

// Middle wares
app.use(express.urlencoded({ extended: true })); // use express urlendoded
app.use(express.static(path.join(__dirname, "public"))); // use public dir for static files
app.use(express.json()); // parse json data
app.use(methodOverride("_method")); // use method-override for differenct requests

// app.get('/student/:id',(req,res)=>{
//   res.send('Get request ');
// })

// index route
app.get("/students", async (req, res) => {
  let student = await Students.find().sort({ createdAt: -1 });
  // console.log(student);
  res.render("index.ejs", { students: student });
});

// Destroy Route
app.delete("/student/:id", (req, res) => {
  let { id } = req.params;
  try {
    Students.findByIdAndDelete(id)
      .then((result) => {
        setTimeout(() => {
          res.redirect("/students");
        });
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    res.render("error.ejs", { error });
  }
});
// search route
app.get("/search", async (req, res) => {
  try {
    let { search_query } = req.query;
    if (!search_query || typeof search_query !== "string") {
      return res.render("empty.ejs");
    }
    try {
      const students = await Students.find({
        $or: [
          { name: { $regex: search_query, $options: "i" } },
          { rollNo: { $regex: search_query, $options: "i" } },
        ],
      }).sort({ createdAt: -1 });

      if (students.length === 0) {
        res.render("empty.ejs");
      } else {
        res.render("index.ejs", { students: students });
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    throw error;
  }
});

// post route
app.post("/student", async (req, res,next) => {
  try {
    let { name, rollNo, department, section, semester } = req.body;
    let newStudent = new Students({
      name: name,
      rollNo: rollNo,
      department: department,
      section: section,
      semester: semester,
    });
    let resultant = await newStudent.save();
    if (!resultant) {
      throw new Error(resultant);
    }
    res.redirect("/students");
  } catch (error) {
    next(error);
  }
});

// Update PUT route
app.put('/student/:id',(req,res)=>{
  try{d
    let stdId = req.params.id;
    if(!stdId){
      res.render('error.ejs',{error:'Student Not Found'});
      console.log('Put route searchec...');
    }else{
      res.send(stdId);
    }

  }catch(error){
    throw new Error(error);
  }
 
})
// 404 route
app.use((error, req, res,next) => {
  res.send(error);
});

// Server Created
app.listen(port, () => {
  console.log("Server Started at port = ", port);
});
