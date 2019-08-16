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
    }

  });
});
