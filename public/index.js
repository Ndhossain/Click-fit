// responsive menu open function
$("#ham-button-open").click(function(){
    $('#nav-menu').slideDown("slow");
    $('#nav-menu').addClass("menu-items position-absolute");
    $("#menu-icon").animate({right: '0px'});
});
// responsive menu open function
$("#ham-button-close").click(function(){
    $('#nav-menu').slideUp("slow", () => {
        $('#nav-menu').removeClass("menu-items position-absolute");
    });
    $("#menu-icon").animate({right: '-30px'});
});
// Nav bar after scroll change function
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 60 ){
            $('#my-navbar').removeClass('position-absolute m-3');
            $('#my-navbar').addClass('navbar-scroll');
        }
        else{
            $('#my-navbar').removeClass('navbar-scroll');
            $('#my-navbar').addClass('position-absolute m-3');
        }
    });
});
// ajax call for the api
$(function () {
    $.get("http://numbersapi.com/1/30/date?json", function(data, status){
        if(status === 'success') {
            $("#api-text").text(data.text);
            $("#type").text(data.type);
            $("#date").text(data.year);
            $("#day").text(data.number);
        } else {
            $("#api-text").text('No quotes found');
        }
    });
})

// $(function () {
//     $.get("http://localhost:5000/test", function(data, status){
//         console.log(data)
//     });
// })

// $(function () {
//     var mount = function () {
//         $('#animate-text').css('color','red')
//     }
//     var unmount = function () {
//         $('#animate-text').css('color','#fff')
//     }
//     $('#about').scrollIntoView(mount, unmount)
// })

$.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(function () {
    $('#about').waypoint(function (direction) {
        $('#api-text').addClass('animated zoomIn');
    }, {
        offset: '10%'
    })
    // if ($('#animate-text').isInViewport()) {
    //     //  Use .blogcard instead of this
    //     $('#animate-text').show(300)
    //     console.log('success.')
    // } else {
    //     //  Remove class
    //     $('#animate-text').hide(300)
    //     console.log('No success.')
    // }
}
)
// dropingzone
$(function () {
    $('#fileupload').fileupload({
        url: 'http://localhost:5000/upload',
        dropZone: $('.dropzone'),
        dataType: 'json',
        autoUpload: false
    }).on('drop dragover', function (e) {
        if(e.originalEvent.type === 'dragover') {
            $('.dropzone').addClass('afterDrag')
        };
    }).on('fileuploadadd', function (e, data) {
        e.preventDefault();
        $('.dropzone').removeClass('afterDrag');
        $('#files').empty();
        data.submit();
        console.log(data)
        data.originalFiles.forEach(file => {
            if (file){
                let reader = new FileReader();
                reader.onload = function(event){
                    $('#files').append(`<div class="col-md-4"><img class="img-fluid" src="${event.target.result}" alt="upload image" /></div>`);
                }
                reader.readAsDataURL(file);
            }
        });
    }).on('fileuploaddone', function (e, data) {
        console.log(data)
    }).on('fileuploadprogressall', function (e, data) {
        console.log(data);
        // var progress = parseInt(data.loaded / data.total * 100, 10);
        // $('progress').html(`Compeleted ${progress} %`)
    })
});

// submit excercise form

// $("#submitButton").click(function (e) {
//     e.preventDefault();
//     // $('#formData').submit()
// })
