function collz(n){
    global.count=1;
    
    function seq(n){
        if(n==1){
            return global.count;
        }
        if(n%2 == 0){
            n = n/2;
            global.count +=1;
            seq(n);
        }else{
            n = 3*n + 1;
            global.count +=1;
            seq(n);
        }; 
    };
    seq(n)
    return global.count
};

var num = 0;
var n = 0;
for(var i=1;i<=1000000;i++){
    var hold = collz(i);
    if(hold > num){
        num = hold;
        n = i;
    };
};

console.log("longest collatz sequance number is:",n)
console.log("with a number of :",num)