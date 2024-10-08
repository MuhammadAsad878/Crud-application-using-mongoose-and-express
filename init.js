const Student = require('./models/Student.js');

const students = [
  {
    "name": "Ali Khan",
    "rollNo": "CS-0000000101",
    "department": "Computer Science",
    "semester": 5,
    "section": "A"
  },
  {
    "name": "Sara Ahmed",
    "rollNo": "CS-0000000102",
    "department": "Computer Science",
    "semester": 5,
    "section": "B"
  },
  {
    "name": "Usman Ali",
    "rollNo": "EE-0000000201",
    "department": "Electrical Engineering",
    "semester": 6,
    "section": "A"
  },
  {
    "name": "Fatima Zahra",
    "rollNo": "ME-0000000301",
    "department": "Mechanical Engineering",
    "semester": 3,
    "section": "C"
  },
  {
    "name": "Ahmad Sheikh",
    "rollNo": "CS-0000000103",
    "department": "Computer Science",
    "semester": 7,
    "section": "A"
  },
  {
    "name": "Hira Ansari",
    "rollNo": "BBA-0000000401",
    "department": "Business Administration",
    "semester": 8,
    "section": "D"
  },
  {
    "name": "Adeel Raza",
    "rollNo": "EE-0000000202",
    "department": "Electrical Engineering",
    "semester": 6,
    "section": "B"
  },
  {
    "name": "Amna Farooq",
    "rollNo": "CS-0000000104",
    "department": "Computer Science",
    "semester": 5,
    "section": "C"
  },
  {
    "name": "Bilal Zafar",
    "rollNo": "ME-0000000302",
    "department": "Mechanical Engineering",
    "semester": 4,
    "section": "B"
  },
  {
    "name": "Nida Yousuf",
    "rollNo": "BBA-0000000402",
    "department": "Business Administration",
    "semester": 8,
    "section": "C"
  },
  {
    "name": "Zain Malik",
    "rollNo": "CS-0000000105",
    "department": "Computer Science",
    "semester": 5,
    "section": "A"
  },{
    "name": "Dilawar Ali",
    "rollNo": "S22BENLT1M02024",
    "department": "English Literature",
    "semester": 6,
    "section": "MA"
  },{
    "name": "Muhammad Asad",
    "rollNo": "S22BDOCS1M02024",
    "department": "Computer Science",
    "semester": 6,
    "section": "MB"
  }
];


Student.insertMany(students)
.then((result)=>{
  console.log(result);
})
.catch((error)=>{
  console.log(error);
})