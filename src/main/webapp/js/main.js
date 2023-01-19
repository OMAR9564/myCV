var tabLinks = document.getElementsByClassName(`tab-links`);
var tabContents = document.getElementsByClassName(`tab-contents`);

function opentab(tabname) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove(`active-link`);
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove(`active-tab`);
    }
    event.currentTarget.classList.add(`active-link`);
    document.getElementById(tabname).classList.add(`active-tab`);
}

var sideMenu = document.getElementById(`sideMenu`);

function openMenu() {
    sideMenu.style.right = `0`;
}
function closeMenu() {
    sideMenu.style.right = `-200px`;
}



// Type Animation

var myText = `SOFTWARE ENGINEER, BACK END & APP DEVELOPER.`,
        textIndex = 0;
var htmlTypeText = document.getElementById(`type`);
var typeIsWrited = true;
typeAnimat();
function typeAnimat() {
    `use strict`;

    var typeWriter = setInterval(function () {
        var lastIndex = htmlTypeText.textContent.lastIndexOf('|');

        var replacement = '';

        htmlTypeText.textContent = htmlTypeText.textContent.substring(0, lastIndex) + replacement + htmlTypeText.textContent.substring(lastIndex + 1);

        htmlTypeText.textContent += myText[textIndex];
        htmlTypeText.textContent += `|`;

        textIndex += 1;

        if (textIndex > myText.length - 1) {
            clearInterval(typeWriter);
        }
        if (htmlTypeText.textContent[htmlTypeText.textContent.length - 2] == `.`)
            typeIsWriting = true;

        else
            typeIsWriting = false;
    }, 100);


}
;
// show and hide Animation

var logo_ = `logoUnder`;
var scor = `type`;
var opac = 0;
var temp = `|`;

renderLoop();

function renderLoop() {
    `use strict`;
    var el;
    setTimeout(function () {

        if (opac == 0) {
            opac = 1;
            temp = `|`;

        } else {
            opac = 0;
            temp = ``;
        }
        document.getElementById(logo_).style.opacity = opac;
        if (typeIsWriting)
            document.getElementById(scor).textContent = myText + temp;

        window.requestAnimationFrame(renderLoop);
    }, 700);
}

// Binery Code 
$(document).ready(function () {
    var lines = 24;
    var textLength = 88;


    for (i = 0; i < lines - 1; i++) {
        $(`.num`).first().clone().insertAfter($(`.num`).first());
    }

    var checkNum = true;
    setInterval(function () {
        $(`.num`).each(function () {
            if ($(this).text().length < textLength) {
                $(this).text(($(this).text() + Math.round(Math.random())));
            } else
                checkNum = false;
        });
    }, 10);

    setInterval(function () {
        $(`.num`).each(function () {
            if (checkNum == false) {
                $(this).text(Math.round(Math.random()) + $(this).text().substring(0, $(this).text().length - 1))
            } else
                checkNum = true;
        });
    }, 150);



});

$('.cFormInput').blur(function (e) {
    e.preventDefault();
    var valueI = $(this).text(),
            realI = $(this).attr('data-target'),
            input;
    $(this).removeClass('focus');
    if ($(this).is(':empty')) {
        $(this).removeClass('typing');
    } else {
        input = document.getElementsByClassName(realI)[0];
        input.value = valueI;
    }
});
$(' .cFormInput').bind('DOMNodeInserted DOMNodeRemoved', function () {
    $(this).addClass('typing');
});
$('.cFormInput').focus(function (e) {
    e.preventDefault();
    $(this).addClass('focus');
});


$(".sendButton").click(function () {
    $(".alert").show('medium');
    setTimeout(function () {
        $(".alert").hide('medium');
    }, 5000);
});
$(".sendButton .close").click(function () {
    $(".alert").hide('medium');
});



function CustomAlert(){
    this.alert = function(message,title){
        document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';

        let dialogoverlay = document.getElementById('dialogoverlay');
        let dialogbox = document.getElementById('dialogbox');

        let winH = window.innerHeight;
        dialogoverlay.style.height = winH+"px";

        dialogbox.style.top = "100px";

        dialogoverlay.style.display = "block";
        dialogbox.style.display = "block";

        document.getElementById('dialogboxhead').style.display = 'block';

        if(typeof title === 'undefined') {
            document.getElementById('dialogboxhead').style.display = 'none';
        } else {
            document.getElementById('dialogboxhead').innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> '+ title;
        }
        document.getElementById('dialogboxbody').innerHTML = message;
        document.getElementById('dialogboxfoot').innerHTML = '<button class="pure-material-button-contained active" onclick="customAlert.ok()">OK</button>';
    }

    this.ok = function(){
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }
}

let customAlert = new CustomAlert();