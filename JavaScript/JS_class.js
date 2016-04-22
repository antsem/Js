/**
 * JS Class
 */

// constructor

function Person(name)
{
    this.name = name;
}

// add method

Person.prototype.sayName()
{
    console.log(this.name);
}

// use

var John = new Person('John');

John.sayName();
