var express = require('express');
var app = express();
app.use(express.json());
const students = [
    {
        id: 1,
        name: "krishna",
        email: "krishna@cvr.ac.in",
        phone: 12345678985
    },
    {
        id: 2,
        name: "karthik",
        email: "karthik@cvr.ac.in",
        phone: 1234567555
    }
];
app.get('/', (req, res) => {
    res.send("Welcome to REST API CRUD Development");
});

app.get('/students', (req, res) => {
    res.send(students);
});

app.post('/students', (req, res) => {
    const student = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    }
    students.push(student);
    res.send(student);
});


app.put('/students/:id', (req, res) => {
    const student = students.find((student) => {
        return student.id === parseInt(req.params.id)
    });

    if (!student) {
        res.status(404).send("student not found with the given id");
    }

    student.name = req.body.name;
    student.email = req.body.email;
    student.phone = req.body.phone;
    res.send(student);
});

app.delete('/students/:id', (req, res) => {
    const student = students.find((student) => {
        return student.id === parseInt(req.params.id)
    });

    if (!student) {
        res.status(404).send("student not found with the given id");
    }

    var x = students.indexOf(student);
    students.splice(x, 1);
    res.send(student);
});

app.listen(1234, () => {
    console.log("Server started at port 1234");
});