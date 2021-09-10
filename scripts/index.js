var errors;
$(document).ready(function () {
    $('#hungergames-submit').click(function(e){
        var names = [];
        for (let index = 1; index <= 12; index++) {
            var name = $('#name' + index).val();  
            names.push(name);         
        }
        $.ajax({
            type: 'GET',
            url: 'https://sonnerrs-bot.herokuapp.com/hungergames/' + names.join("&"),
            processData: false,
            contentType: false,
            cache: false
        })
            .done(function (data) {
                var html = "<p>" + data.join('<br>') + "</p>";
                $('body').html(html);
                console.log(data);
            });
    });


    var date = new Date();
    if(date.getTime() < 1630886400000){
        $('.pulv-heading-signupclosed').css({"display" : "none"});
    }

    setTimeout(function () {
        $('.loading-spinner-container').fadeOut("fast");
        $('body').removeClass('noscroll');
    }, 4500);

    $('.sidebar__openbutton').click(function () {
        if ($('#sidebar__btn').hasClass("fa-arrow-right")) {
            $(".container").animate({ "right": "-=170px" }, 1000, function () { });
            $(".sidebar").animate({ "right": "-=340px" }, 1000, function () {
                $('.sidebar__btn').removeClass("fa-arrow-right").addClass("fa-arrow-left");
            });
        } else {
            $(".container").animate({ "right": "+=170px" }, 1000, function () { });
            $(".sidebar").animate({ "right": "+=340px" }, 1000, function () {
                $('.sidebar__btn').removeClass("fa-arrow-left").addClass("fa-arrow-right");
            });
        }
    });

    $('.container__socials--hideandseek').click(function () {
        $('.modal').fadeIn("fast");
        $('body').addClass("noscroll-modal");
    });

    function hideModal() {
        $('.modal').fadeOut("fast");
        $('body').removeClass("noscroll-modal");
    }

    $(document).mousedown(function (e) {
        if ($('body').hasClass("noscroll-modal")) {
            var container = $('.modal__form');
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                hideModal();
            }
        }
    });

    $('#fileinput').change(function () {
        var filename = $('#fileinput').val().split(/(\\|\/)/g).pop();
        $('#filelabel').removeClass('error');
        if (!filename.match(/\.(bmp|gif|jpg|jpeg|png)$/i)) {
            $('#form__file-error').text("Only .bmp, .gif, .jpg, .jpeg and .png type files are supported.");
            $('#filelabel').addClass('error');
        }
        $('#form__file-label').text(filename);
        document.getElementById("container").src = "";
    });


    window.setInterval(function () {
        $('.sidebar__btncontainer').animate({ "left": "-=38px" }, 1000, function () {
            $('.sidebar__btncontainer').animate({ "left": "-=38px" }, 1000, function () {
                $('.sidebar__btncontainer').animate({ "left": "-=38px" }, 1000, function () {
                    $('.sidebar__btncontainer').css("left", "6px");
                });
            });
        });
    }, 3000);

    $('#form__idea').submit(function (e) {
        e.preventDefault();
        var data = new FormData($('#form__idea')[0]);
        $.ajax({
            type: 'POST',
            url: 'https://sonnerrs-bot.herokuapp.com/image/',
            enctype: 'multipart/form-data',
            data: data,
            processData: false,
            contentType: false,
            cache: false
        })
            .done(function (data) {
                if (data.success) {
                    hideModal();
                    $('#form__file-label').text("");
                    document.getElementById("container").src = "";
                    $('#form__idea')[0].reset();
                    alert("Your message has been sent.");
                }
            });
    });

    $('#form__raid').submit(function (e) {
        e.preventDefault();
        var ids = ["osrsname", "discordname", "experienceid", "kc", "gearid", "joinid"];
            for (var i = 0; i < ids.length; i++) {
                if($("#" + ids[i]).prev().hasClass("pulv-error-message")){
                    $("#" + ids[i]).prev().remove()
                    if($("#" + ids[i]).is("input")){
                        $("#" + ids[i]).removeClass("pulv-input--error");
                        $("#" + ids[i]).parent().removeClass("pulv-form-group--error");
                    }else{
                        $("#" + ids[i]).parent().parent().removeClass("pulv-form-group--error");
                    }
                }
            }

        var data = new FormData($('#form__raid')[0]);
        $.ajax({
            type: 'POST',
            url: 'https://sonnerrs-bot.herokuapp.com/raid/',
            enctype: 'multipart/form-data',
            data: data,
            processData: false,
            contentType: false,
            cache: false
        })
            .done(function (data) {
                console.log(data);
                if (data.success) {
                    $('#form__raid')[0].reset();
                    alert("Your message has been sent.");
                } else {
                    if (data && data.errors) {
                        for (var i = 0; i < data.errors.length; i++) {
                            $('<span id="osrsname-error" class="pulv-error-message"><span class="pulv-visually-hidden">Error:</span> ' + data.errors[i].message + '</span>').insertBefore("#" + data.errors[i].formid);
                            if($("#" + data.errors[i].formid).is("input")){
                                $("#" + data.errors[i].formid).addClass("pulv-input--error");
                                $("#" + data.errors[i].formid).parent().addClass("pulv-form-group--error");
                            }else{
                                $("#" + data.errors[i].formid).parent().parent().addClass("pulv-form-group--error");
                            }
                        }
                        $("#" + data.errors[0].formid).parent().attr("tabindex", -1).focus();
                    }
                }
            });
    });
    
    $('#form__bingosignup').submit(function (e) {
        e.preventDefault();
        var ids = ["osrsname", "combatlevel", "experienceid", "gearid", "time", "joinid" ];
            for (var i = 0; i < ids.length; i++) {
                if($("#" + ids[i]).prev().hasClass("pulv-error-message")){
                    $("#" + ids[i]).prev().remove()
                    if($("#" + ids[i]).is("input")){
                        $("#" + ids[i]).removeClass("pulv-input--error");
                        $("#" + ids[i]).parent().removeClass("pulv-form-group--error");
                    }else{
                        $("#" + ids[i]).parent().parent().removeClass("pulv-form-group--error");
                    }
                }
            }

        var data = new FormData($('#form__bingosignup')[0]);
        $.ajax({
            type: 'POST',
            url: 'https://sonnerrs-bot.herokuapp.com/bingosignup/',
            enctype: 'multipart/form-data',
            data: data,
            processData: false,
            contentType: false,
            cache: false
        })
            .done(function (data) {
                console.log(data);
                if (data.success) {
                    $('#form__bingosignup')[0].reset();
                    var audio = document.getElementById("audio");
                    audio.play();
                    alert("Your message has been sent.");
                } else {
                    if (data && data.errors) {
                        for (var i = 0; i < data.errors.length; i++) {
                            $('<span id="osrsname-error" class="pulv-error-message"><span class="pulv-visually-hidden">Error:</span> ' + data.errors[i].message + '</span>').insertBefore("#" + data.errors[i].formid);
                            if($("#" + data.errors[i].formid).is("input")){
                                $("#" + data.errors[i].formid).addClass("pulv-input--error");
                                $("#" + data.errors[i].formid).parent().addClass("pulv-form-group--error");
                            }else{
                                $("#" + data.errors[i].formid).parent().parent().addClass("pulv-form-group--error");
                            }
                        }
                        $("#" + data.errors[0].formid).parent().attr("tabindex", -1).focus();
                    }
                }
            });
    });

    const fileInput = document.getElementById("fileinput");

    window.addEventListener('paste', e => {
        fileInput.files = e.clipboardData.files;
    });

    document.onpaste = function (pasteEvent) {
        // consider the first item (can be easily extended for multiple items)
        var item = pasteEvent.clipboardData.items[0];

        if (item.type.indexOf("image") === 0) {
            var blob = item.getAsFile();

            var reader = new FileReader();
            reader.onload = function (event) {
                document.getElementById("container").src = event.target.result;
            };
            try {
                reader.readAsDataURL(blob);
                $('#form__file-label').text("Pasted image from clipboard");
            } catch (e) {
                alert("There was an issue reading your clipboard data.");
            }
        }
    }
});