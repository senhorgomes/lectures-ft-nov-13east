let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        // this.students.forEach(
        //     student => console.log(this.title + ': ' + student) //Our group: Alice
        // );
        this.students.forEach(
            function(student) { // this = to the group Object
                console.log(this.title + ': ' + student); //It reassigned "this"
            }.bind(this)
          );
    }
};

group.showList();

let exampleOfReassignment = []

// exampleOfReassignment = {}

// console.log(exampleOfReassignment)

const simpleDogObject = {
    name: "Airbud",
    age: 2,
    bark: function(){
        console.log("WOOF!")
    },
    happyBirthday: function () {
        const newFunction = function(){
            console.log(`Happy Birthday ${this.name}, you are now ${this.age + 1}!`) // undefined + 1 = NaN
        }.bind(this)
        newFunction();
        // console.log(`Happy Birthday ${this.name}, you are now ${this.age + 1}!`) // undefined + 1 = NaN
    }
}

simpleDogObject.happyBirthday()