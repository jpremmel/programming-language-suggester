$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    $(".results").hide();
    var q1=$("input:radio[name=q1]:checked").val();
    var q2=$("input:radio[name=q2]:checked").val();
    var q3=$("input:radio[name=q3]:checked").val();
    var q4=$("input:radio[name=q4]:checked").val();
    var q5=$("input:radio[name=q5]:checked").val();

    if (!q1 || !q2 || !q3 || !q4 || !q5) {
      alert("Please answer all of the questions.");
    } else if (q1 === "yes" && q3 != "yes" && q5 != "yes") {
      $("#js").show();
    } else if (q2 === "yes" && q4 != "yes") {
      $("#python").show();
    } else if (q3 === "yes") {
      $("#swift").show();
    } else if (q4 === "yes") {
      $("#java").show();
    } else if (q5 === "yes") {
      $("#ruby").show();
    } else {
      $("#python").show();
    }
  });
  $("#clear").click(function() {
    $("#quiz").trigger("reset");
    $(".results").hide();
  });
});
