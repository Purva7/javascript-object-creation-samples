"USE strict"

/* prototype pattern 
* In javascript, every object gets a shared space called
* prototype - uses that space with a function to
* mimic class.
*/

var peopleProto = function() {
};

peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";
peopleProto.prototype.state = "NA";

peopleProto.prototype.printPerson = function(){
	console.log(this.name + "," +this.age + ","  +this.state);
};

var person1 = new peopleProto();
person1.name = "Adam";
person1.age = 24;
person1.state = "MO";

var person2 = new peopleProto();
person2.name = "Mary";
person2.age = 32;
person2.state = "KS";

person1.printPerson();
person2.printPerson();

console.log('age' in person2);
console.log(person1.hasOwnProperty('age'));