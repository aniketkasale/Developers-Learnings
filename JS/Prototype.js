function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function (){
    console.log('Hello '+ this.name)
}

const aniket = new Person('Aniket');

aniket.sayHello()

