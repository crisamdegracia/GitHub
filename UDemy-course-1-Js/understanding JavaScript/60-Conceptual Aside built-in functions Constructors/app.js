function Person(firstname,lastname){
    
    log(this)
    this.firstname = firstname;
    this.lastname = lastname;
    log('This function is invoked');

    
}

var john = new Person('Sam','Bee');

log(john);


var jaja = new Person('Zeke', 'Bozs');
log(jaja)

