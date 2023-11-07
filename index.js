// Write your solution here!

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    const Object = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
    return Object
}

function createEmployeeRecords(nestedArray) {
    const employeeRecords = nestedArray.map(arrayOne => createEmployeeRecord(arrayOne))
    return employeeRecords
}

function createTimeInEvent(employee, dateStamp) {
    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.slice(11,15)),
        date: dateStamp.slice(0,10)
    });
    return employee
}

function createTimeOutEvent(employee, dateStamp) {
    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateStamp.slice(11,15)),
        date: dateStamp.slice(0,10)
    });
    return employee
}

function hoursWorkedOnDate(employee, date) {
    const timeIn = employee.timeInEvents.find((element) => element.date === date).hour
    const timeOut = employee.timeOutEvents.find((element) => element.date === date).hour
    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(employee, date) {
    const rate = employee.payPerHour
    const hoursWorked = hoursWorkedOnDate(employee, date)
    return rate * hoursWorked
}

function allWagesFor(employee) {
    const wages = employee.timeInEvents.map(timeInObject => wagesEarnedOnDate(employee, timeInObject.date))
    const totalWages = wages.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(employee);
    return totalWages
}

function calculatePayroll(records) {
    const sumEmployeePay = records.map((employee) => allWagesFor(employee))
    console.log(records);
    return sumEmployeePay.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

