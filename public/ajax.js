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
