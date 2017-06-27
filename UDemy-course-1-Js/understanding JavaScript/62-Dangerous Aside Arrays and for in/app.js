Array.prototype.myCustomFeature= 'cool!';


var arr = ['jaja','zeke','sam'];

for (var prop in arr){
    
    log('Logged ' + prop + ': ' + arr[prop]);
}
