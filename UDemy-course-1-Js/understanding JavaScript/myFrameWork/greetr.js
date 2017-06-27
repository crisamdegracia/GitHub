(function(global,$){

    var Greetr = function(firstname, lastname,language){
        return new Greetr.init(firstname,lastname,language);

    }


    var supportedLang = ['en','es'];


    var greetings = {
        en:'Hello',
        es:'Hola'

    };

    var formalGreetings = {
        en: 'Greeting',
        es: 'Saludos'
    };


    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    Greetr.prototype  = {

        fullname: function(){

            return this.firstname+ ' ' +this.lastname;
        },

        validate: function(){

            if(supportedLang.indexOf(this.language === -1 )){
                throw "Invalid language";
            }

        },

        greeting: function(){
            return greetings[this.language] + ' ' + this.firstname + '!';
        },

        formalGreeting: function(){


            return formalGreetings[this.language]+ ' ' + this.fullname();
        },

        greet: function(formal){


            var msg;

            if(formal){
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if(console){
                log(msg);
            }
            //this refers to the calling object at execution time
            //makes the method chainable
            return this;
        },

        logs: function(){

            if(console){

                log(logMessages[this.language] + ': '+ this.fullname());
            }
            return this;
        },

        setLang:function(lang) {

            this.language = lang ;

            this.validate();

            return this;
        },

        HTMLgreetings: function(selector,formal){

        if(!$) {
        throw 'Missing jQuery not loaded'
    }
    if(!selector){
        throw 'Missing JQuery Selector';
    }

    var msg;
    if(formal){
        msg = this.formalGreeting();

    }

    else {

        msg = this.greeting();
    }
    
    $(selector.html(msg)); 
    
    
    
    return this;

}



 };






 Greetr.init = function(firstname,lastname,language){

    var self = this;

    self.firstname = firstname || 'Default';
    self.lastname = lastname || 'Default';
    self.language = language || 'en';

}


Greetr.init.prototype = Greetr.prototype;

global.Greetr = global.G$ = Greetr;




var log = function(a){
    console.log(a);
}
global.log = log;


})(window,jQuery);