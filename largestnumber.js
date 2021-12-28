var largestNumber = function(nums) {
    return nums.sort(function (a,b){
        var num = (b +   a) - (a +   b)
        console.log((b +   a) + " - " + (a +  + b) + " = " + (num));
        if(num > 0) console.log(a + " > " + b);
        else console.log(a + " < " + b);
        return (b +   a) - (a +   b);
    }).join('').replace(/^0*/,'') || '0';
};
var lnumber= [3, 30, 34, 5, 9]
console.log(largestNumber(lnumber));