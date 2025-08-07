var dayOfTheWeek = function(cc, mm, yy, dd) {
return ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
};




// user interface
  $(document).ready(function() {
    $("form").submit(function(event) {
      event.preventDefault();
    var dateOfBirth = $("#date").val();
    var myGender = $("#gender").val();
    var gender = myGender.toLowerCase();
    var gender = myGender.toLowerCase();
      var cc = parseInt(dateOfBirth.slice(0, 2));
      var yy = parseInt(dateOfBirth.slice(2, 4));
      var mm = parseInt(dateOfBirth.slice(5, 7));
      var dd = parseInt(dateOfBirth.slice(8, 12));
      var day = Math.trunc(dayOfTheWeek(cc, mm, yy, dd));
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
      var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
      var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
      if (dd > 31 || dd < 1 || mm < 1 || mm >12 || dd === "Nan" || mm === "Nan") {
      alert("Invalid Date of Birth!");
      }

      else if (day === 0 && gender === "male") {
       var akanName = "Your Akan name is " + maleNames[0] + " since you were born on a " + days[0] + ".";
      }

      else if (day === 1 && gender === "male") {
       var akanName = "Your Akan name is " + maleNames[1] + " since you were born on a " + days[1] + ".";
      }

      else if (day === 2 && gender === "male") {
       var akanName = "Your Akan name is " + maleNames[2] + " since you were born on a " + days[2] + ".";
      }

      else if (day === 3 && gender === "male") {
       var akanName = "Your Akan name is " + maleNames[3] + " since you were born on a " + days[3] + ".";
      }

      else if (day === 4 && gender === "male") {
        var akanName = "Your Akan name is " + maleNames[4] +" since you were born on a " + days[4] + ".";
      }

      else if (day === 5 && gender === "male") {
          var akanName = "Your Akan name is " + maleNames[5] +" since you were born on a " + days[5] + ".";
      }

      else if (day === 6 && gender === "male") {
       var akanName = "Your Akan name is " + maleNames[6] + " since you were born on a " + days[6] + ".";
      }

      else if (day === 0 && gender === "female") {
       var akanName = "Your Akan name is " + femaleNames[0] + " since you were born on a " + days[0] + ".";
      }

      else if (day === 1 && gender === "female") {
      var akanName = "Your Akan name is " + femaleNames[1] + " since you were born on a " + days[1] + ".";
      }

      else if (day === 2 && gender === "female") {
       var akanName = "Your Akan name is " + femaleNames[2] + " since you were born on a " + days[2] + ".";
      }

      else if (day === 3 && gender === "female") {
       var akanName = "Your Akan name is " + femaleNames[3] +" since you were born on a " + days[3] + ".";
      }

      else if (day === 4 && gender === "female") {
      var akanName = "Your Akan name is " + femaleNames[4] + " since you were born on a " + days[4] + ".";
      }

      else if (day === 5 && gender === "female") {
       var akanName = "Your Akan name is " + femaleNames[5] + " since you were born on a " + days[5] + ".";
      }

      else if (day === 6 && gender === "female") {
      var akanName = "Your Akan name is " + femaleNames[6] + " since you were born on a " + days[6] + ".";
      }
         $("#output").text(akanName);
  });
  });
