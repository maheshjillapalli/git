let person = {
    name: "captain mahesh",
    age: 30,
    greet: function (name) {
      return `hey this is my identity ${this.name}`;
    },
  };
  
  console.log(person.name); 
  console.log(person.greet("mahesh jillapalli"));
  