function calculator() {
  var capital = document.getElementById('capital');
  var interest = document.getElementById('interest');
  var interestfloat;
  var time = document.getElementById('time');
  var typetime = document.getElementById('typetime');
  var total;
  var months;
  var fieldempty = false;
  var alertemptfields = "Please type the fields Correctly: "
  var alertM ;

  if (capital.value == null || capital.value == 0) {
    alertemptfields = alertemptfields + "\n" + "- Capital"
    fieldempty = true;
  }
  if (interest.value == null || interest.value == 0) {
    alertemptfields = alertemptfields + "\n" + "- Interest"
    fieldempty = true;
  }
  if (time.value == null || time.value == 0) {
    alertemptfields = alertemptfields + "\n" + "- Time"
    fieldempty = true;
  }
  if (fieldempty) {
    alert(alertemptfields);
  }
  else {
    if (typetime.value == 2) {
      months = time.value / 12;
      interestfloat = interest.value / 100;
      total = capital.value * interestfloat * months;
      alertM = "If you deposit " + capital.value + "\n";
      alertM = alertM + " at an interest rate of " + interest.value + " %"+ "\n";
      alertM = alertM + " You Will receive an amount of " + total.toFixed(2); + "\n";
      alert(alertM);
    }
    else{
      if (typetime.value == 1) {
        months = time.value;
        interestfloat = interest.value / 100;
        total = capital.value * interestfloat * months;
        alertM = "If you deposit " + capital.value + "\n";
        alertM = alertM + " at an interest rate of " + interest.value + " %"+ "\n";
        alertM = alertM + " You Will receive an amount of " + total.toFixed(2); + "\n";
        alert(alertM);
      }
      else {
      alert("Error in Type of time")
      }
    }
  }
}
