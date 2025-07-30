var dayOfTheWeek = function(cc, mm, yy, dd) {
return ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
};
var dateOfBirth = prompt("Enter your date of birth(YYYY/MM/DD)");
var cc = parseInt(dateOfBirth.slice(0, 2));
var yy = parseInt(dateOfBirth.slice(2, 4));
var mm = parseInt(dateOfBirth.slice(5, 7));
var dd = parseInt(dateOfBirth.slice(8, 10));
var day = Math.trunc(dayOfTheWeek(cc, mm, yy, dd));
alert(day);
