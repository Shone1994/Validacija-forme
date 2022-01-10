$(document).ready(function () {

    if ($('.contact-form').length > 0) {

        $('.contact-form').validate({
            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhiglight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            rules: {
                ime: {
                    required: true,
                    minlength: 3
                },
                prezime: {
                    required: true,
                    minlength: 3
                },
                pol: {
                    required: true
                },
                godina_rodjenja: {
                    required: true,
                    minlength: 4
                },
                adresa: {
                    required: true,
                    maxlength: 30
                },
                grad: {
                    required: true,
                    maxlength: 20
                },
                password: {
                    required: true,
                    minlength: 8
                },
                repassword: {
                    required: true,
                    minlength: 8,
                    equalTo: '#password'
                },
                poruka: {
                    required: true
                },
                pitanje1: {
                    required: true
                },
                pitanje2: {
                    required: true
                }
            },
            messages: {
                ime:{
                    required: 'Ime* polje je obavezno polje.',
                    minlength: 'Ime* mora da sadrzi najmanje 3 karaktera.'
                },
                prezime: {
                    required: 'Prezime* polje je obavezno polje.',
                    minlength: 'Prezime* mora da sadrzi najmanje 3 karaktera.'
                },
                pol: {
                    required: 'Pol* polje je obavezno polje.'
                },
                godina_rodjenja: {
                    required: 'Godina rodjenaja* polje je obavezno polje.',
                    minlength: 'Godina rodjenaja* mora da sadrzi najvise 4 karaktera.'
                },
                adresa: {
                    required: 'Adresa* polje je obavezno polje.',
                    maxlength: 'Adresa* moze da sadrzi najvise 30 karaktera.'
                },
                grad: {
                    required: 'Grad* polje je obavezno polje.',
                    maxlength: 'Grad* moze da sadrzi najvise 20 karaktera.'
                },
                password: {
                    required: 'Password* polje je obavezno polje.',
                    minlength: 'Password* mora da sadrzi najmanje 8 karaktera.'
                },
                repassword: {
                    required: 'RePassword* polje je obavezno polje.',
                    minlength: 'Password* mora da sadrzi najmanje 8 karaktera.',
                    equalTo: '#password'
                },
                poruka: {
                    required: 'Poruka* polje je obavezno polje.'
                },
                pitanje1: {
                    required: 'Pitanje1* polje je obavezno polje.'
                },
                pitanje2: {
                    required: 'Pitanje2* polje je obavezno polje.'
                }
            }

        });


    }


});

