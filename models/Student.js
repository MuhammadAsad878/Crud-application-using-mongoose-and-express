const mongoose = require("mongoose");
main();
async function main() {
  await mongoose.connect("mongodb://127.0.0.1/College");
}

// Student Schema 
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
    maxLength: 10,
  },
  department: {
    type: String,
    maxLength: 30,
  },
  semester: {
    type: Number,
    required: true,
  },
  img:{
    type:String,
    default:'public\\images\\profile.jpeg',
    required:true,
  }
}, {timestamps:true});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
