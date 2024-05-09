// this new

function student(Name, lastname, age, city) {
    this.fname = Name,
    this.lname = lastname,
    this.age = age,
    this.city = city
}

let student1 = new student("Aryan","Sihag", 18,"Sirsa")

console.log(student1);

let student2 = new student("Rahul", "Hoda", 18, "Hisar")

console.log(student2);
