"USE strict"
/*
*dynamic prototype pattern
*/


var peopleDynamicProto = function(name, age,state) {
	this.age = age;
	this.name = name;
	this.state = state;
	
	if (typeof this.printPerson !== 'function'){
		peopleDynamicProto.prototype.printPerson = function(){
			console.log(this.name + ","+ this.age + "," + this.state);
		}
	}
};



var person1 = new peopleDynamicProto("adam",24,"MO");


var person2 = new peopleDynamicProto("Mary",30,"KS");

person1.printPerson();
person2.printPerson();

console.log('age' in person2);
console.log(person1.hasOwnProperty('age'));
