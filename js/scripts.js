//Front-end
$(document).ready(function{}
  $("form.form-inline").submit(function(event) {
      var inputNumber = Math.ceil($("input#number").val());
      console.log(inputNumber);
      var result = []

      if (isNaN(inputNumber) || inputNumber < 3) {
        alert("please enter a positive integer")
      } else {
        result = pongs(Number(inputNumber));

        result = result.map(function(number, i) {
          return "<li>" + getImage(number) + "</li>";
        });
        $("ul#numberList").html(result.join(""));
      }
      event.preventDefault();
    });
  });
