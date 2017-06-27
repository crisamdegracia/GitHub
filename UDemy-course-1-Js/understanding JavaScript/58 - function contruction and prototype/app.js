function Person(firstname,lastname){
    
    log(this)
    
    this.firstname = firstname;
    this.lastname = lastname;
    log('This function is invoked');

    
}

Person.prototype.getFullname = function(){
    
    return this.firstname+ ' ' + this.lastname;
}


var john = new Person('Sam','Bee');

log(john);


var jaja = new Person('Zeke', 'Bozs');
log(jaja);

Person.prototype.getFormalFullname = function(){
    
    return this.firstname+ ' ' + this.lastname;
}

log(john.getFormalFullname());















