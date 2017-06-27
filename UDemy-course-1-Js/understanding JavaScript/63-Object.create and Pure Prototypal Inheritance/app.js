var person = {
    fname: 'Default',
    lname: 'Default',
    x: 0,
    y: 0,
    greet: function(){
        return 'Hi '+ this.fname;
    },
    add: function(){

        var res  = this.x + this.y;
        return res;
    }
}

var john = Object.create(person);
john.fname = 'Sam';
john.lname = 'De Gracia';
log(john.fname)

//log(john);

var addThem = Object.create(person);

addThem.x = 3;
addThem.y = 5;
addThem.res = this.x + person.y;

log(addThem.add());
log(addThem.add());
log(addThem.add());























var _x = {

    nox: "",
    noy: "",
    func: function(){

        if(this.nox){
            log(this.nox + this.noy + ' Alright');
        }else{
            log('Happy');


        }
    }


} 

var joinThem = Object.create(_x);
//
//joinThem.nox = 'Sam  ';
//joinThem.noy = 'Doe';

log(joinThem.func());