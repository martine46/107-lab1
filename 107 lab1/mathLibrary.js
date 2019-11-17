module.exports = {
    version: function(){
        return "v1.0";
    },

    lowerNumber: function(num1, num2){
        if (num1 < num2) return num1;
        else return num2;
        
    },

    lowerInArray: function(list){
        var lowest = list[0];
        for (var i = 1; i < list.length; i++){
            if(list[i] < lowest){
                lowest = list[i];
            }
        }

        return lowest;

    },

    isItEven: function(num){
        if(num %2 == 0){
            return true;
        }

        return false;
    },

    sum: function(num1, num2){
        return num1 + num2;
    
    },
    divide: function(num1, num2){
        if(num1 == 0 || num2 == 0) return 0
        return num1 / num2;
    }
};