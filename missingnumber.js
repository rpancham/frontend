var a = [4,3,2,7,8,2,3,1],
  count = 5;
  count = 6;
var missing = new Array();

for (var i = 1; i <= count; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing); 