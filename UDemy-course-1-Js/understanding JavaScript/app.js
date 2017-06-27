function buildFunction(){
    
    var newArr = [],
        i = 0;
        
        for( ; i < 3 ; i++ ){
            
           newArr.push(
               function(){
               console.log(i);
           });
        }
        
    return newArr
}

var x = buildFunction();

x[0]();
x[1]();
x[2]();
x[3]();