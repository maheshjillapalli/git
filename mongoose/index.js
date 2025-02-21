const express = require('express');
const app = express();

app.use(express.json());
const port = 4001;

const mongoose = require('mongoose');


const Employee = require('./src/modals/employee.modal');

app.get("/getEmployees", async (req, res) => {
    const employeeData = await Employee.find();
    
    res.json({
            message: "Employee data fetched",
            status: true,
            data: employeeData
        });
});

app.post('/createEmployee', async (req, res) => {
    const empData = req.body;
    const addEmployee = new Employee(empData);

    const createdData = await addEmployee.save();

    res.json({
        message: "Employee record created",
        status: true,
        data: createdData,
    });
});










const dbUrl = `mongodb+srv://chennakesavkuchi:
qOXMQCBPwtPWrp2Q@cluster0.n2ffn.mongodb.net/
employees?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbUrl).then(() => {
    console.log("Connected with mongoose...");
}).catch((error) => {
    console.log(`Connection failure with 
        mongoose ${error}`);
});

app.listen(port, () => {
    console.log(`Server is running at 
        http://localhost:${port}`);
});