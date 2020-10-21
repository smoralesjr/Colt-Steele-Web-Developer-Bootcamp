var age = prompt("Enter your age: ");

if (age < 0) {
  document.body.innerHTML+= "<h2> Error!!! Age is negative!</h2>";
  
} else if ( age === 21 ) {
  document.body.innerHTML+= "<h2>Happy 21st Birthday!</h2>";
  
} else if ( age % 2 !== 0 )
  document.body.innerHTML+= "<h2>Your age is odd!</h2>"
else {
  
  document.body.innerHTML+="<h2>It's all good son!</h2>";
}