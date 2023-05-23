// $(document).ready(function() {
//     $(window).on("scroll", function() {
//       if ($(window).scrollTop() >= 20) {
//         $(".header").addClass("with-effect");
//       } else {
//         $(".header").removeClass("with-effect");
//       }
//     });
//   });


document.getElementById('phone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  });






