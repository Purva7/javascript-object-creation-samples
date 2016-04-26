"USE strict"

var peopleFactory = function(name, age, state) {
	var temp= {};
  
  temp.age = age;
  temp.name = name;
  temp.state = state;
  
  temp.printPerson = function(){
  console.log(this.name + "," + this.age + "," + this.state);
  }
  return temp;
};

var person1 = peopleFactory('Adam',22,'MO');
var person2 = peopleFactory('Mary',24,'KS');

person1.printPerson();
person2.printPerson();