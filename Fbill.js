var bill = prompt("Total Amout of your bill:");
var no = prompt("Number of friends:");
document.write("Total amout of bill is : ", bill,"<br>");
document.write("Pay Rupee per friend : ",(bill/no).toFixed(2), "<br>");