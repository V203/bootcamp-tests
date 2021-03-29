var allPaarl = function(rgNums){
 
var regNums2 = rgNums.split(", ");
  var temp = [];
  
  var reg = regNums2;
 for(var i=0;i < reg.length;i++){

if(reg[i].startsWith("CJ")){
    
     temp.push(reg[i]);
    
    } 
