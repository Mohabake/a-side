// $(document).ready(function(){
//   $('.message a').click(function(){
//     $('form').animate({height:"toggle", opacity:"toggle"},"slow");
//   });
//   $('#register').click(function(){
//   $('.login-form').hide();
//   });
// });



$(document).ready(function(){
$("#login-button").click(function(){
  $("form.register-form").hide();
  $("form.login-form").show();
});
$("#register-button").click(function(){
  $("form.login-form").hide();
  $("form.register-form").show();
});
});
