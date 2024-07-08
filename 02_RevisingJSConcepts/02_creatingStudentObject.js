const student = {
    name : 'Sam',
    roll_number: 32,
    greet(){
        console.log("Hello my name is", this.name, "and my roll number is", this.roll_number);
    }
}

student.greet();