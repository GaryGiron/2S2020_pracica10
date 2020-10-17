var cash = {};
cash.coins = [10000,5000,2000,1000,500,100,50,25,10,5,1];

cash.getChange = function(totalPayable, cashPaid){
    var change =[], length = cash.coins.length,
    remaining = cashPaid - totalPayable;
    for(var i=0; i<length;i++){
        var coin = cash.coins[i];
        if(remaining/coin >=1){
            var times = Math.floor(remaining/coin);
            for(var j=0; j<times;j++){
                change.push(coin);
                remaining=remaining-coin;
            }
        }

    }
    return change;
};

cash.getSomethingElse = function(data){
    console.log(data);
};

module.exports=cash;