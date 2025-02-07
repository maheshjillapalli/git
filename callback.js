const greetFn = (name) => {
         console.log(`CSE-B STUDENTS:- ${name}!`);
     }
    
     function processName(callback) {
       const name = "VERY TALENTED";
       callback(name);
     }
     processName(greetFn);
    
    