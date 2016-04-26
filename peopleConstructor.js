"use strict"
/* constructor pattern 
* negative is that each person object has its own method
* 100 objects - 100 instance of that method.
*/

/* functions are first class objects in javascript */
var peopleConstructor = function(name, age, state){
	this.name = name;
	this.age = age;
	this.state = state ;
	
	this.printPerson = function(){
		console.log( this.name + "," + this.age + "," + this.state);
	};
};

var person1 = new peopleConstructor('Vish',31,'MO');
var person2 = new peopleConstructor('Vishal','24','KS');

person1.printPerson();
person2.printPerson();