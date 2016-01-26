$("document").ready(function (e){

  function validateEmail(email){
    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
  }

  function validate(){
  $("#result").text("");
  var email = $("#email").val();
  if (validateEmail(email)) {
    alert("Successfully submitted, spam emails coming now.");
  } else {
    alert("Not an email!");
  }
  return false;
}

$("form").bind("submit", validate);



//start Tommy's JS
   $(".allBtn").click(function(){
      $(".metal").show();
      $(".wood").show();
      $(".analog").show();
      $(".digital").show();
      
});

    $(".woodBtn").click(function(){
      $(".metal").hide();
      $(".wood").show();
      
});
     
     $(".metalBtn").click(function(){
      $(".wood").hide();
      $(".metal").show();
      
}); 

     $(".analogBtn").click(function(){
      $(".digital").hide();
      $(".analog").show();
      
}); 

$(".digitalBtn").click(function(){
      $(".analog").hide();
      $(".digital").show();
      
});
//end Tommy's JS






});