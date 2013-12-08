var url = window.location.href,
    baseURL = url.split('#');



$('input[data-link]').on('click', function(e){
    e.preventDefault();
    var id = $(this).data('link');
    window.location.href = baseURL[0] + id;
});



$('input[data-register]').on('click', function(e){
    e.preventDefault();

    var email = $('#signUpemail').val(),
        password = $('#signUppassword').val();

    localStorage.setItem('username', email);
    localStorage.setItem('password', password);

    window.location.href = baseURL[0] + '#Innlogget';
});



$('#username').html(localStorage.getItem('username'));


$('.flexslider').flexslider({
  animation: 'slide'
});

