$('document').ready(function(){

//Audios
var n1 = 'mp3/1.mp3';
var n2 = 'mp3/2.mp3';
var n3 = 'mp3/3.mp3';
var n4 = 'mp3/4.mp3';
var n5 = 'mp3/5.mp3';
var n6 = 'mp3/6.mp3';
var n7 = 'mp3/7.mp3';
var n8 = 'mp3/8.mp3';
var n9 = 'mp3/9.mp3';
var n10 = 'mp3/10.mp3';
var n11 = 'mp3/11.mp3';
var n12 = 'mp3/12.mp3';


//Key-Codes
var q_key = 81;
var w_key = 87;
var e_key = 69;
var r_key = 82;
var t_key = 84;
var y_key = 89;
var u_key = 85;

var two_key = 50;
var three_key = 51;
var five_key = 53;
var six_key = 54;
var seven_key = 55;


//Buttons



    
//buttons
var do_note = {
    el: $('#do'),
    sound: n1,
    is_pressed: 'do-active pressed',
    key_code: q_key,
    color: "#F25541"
}


var do_dies = {
    el: $('#do-dies'),
    sound: n2,
    is_pressed: 'do-dies-active pressed',
    key_code: two_key,
    color: "#000000"
}


var re = {
    el: $('#re'),
    sound: n3,
    is_pressed: 're-active pressed',
    key_code: w_key,
    color: "#FEB153"
}


var re_dies = {
    el: $('#re-dies'),
    sound: n4,
    is_pressed: 're-dies-active pressed',
    key_code: three_key,
    color: "#9A9A9A"
}


var mi = {
    el: $('#mi'),
    sound: n5,
    is_pressed: 'mi-active pressed',
    key_code: e_key,
    color: "#FDE32F"
}


var fa = {
    el: $('#fa'),
    sound: n6,
    is_pressed: 'fa-active pressed',
    key_code: r_key,
    color: "#5CBB57"
}


var fa_dies = {
    el: $('#fa-dies'),
    sound: n7,
    is_pressed: 'fa-dies-active pressed',
    key_code: five_key,
    color: "#FFFFFF"
}


var sol = {
    el: $('#sol'),
    sound: n8,
    is_pressed: 'sol-active pressed',
    key_code: t_key,
    color: "#00BBD3"
}


var sol_dies = {
    el: $('#sol-dies'),
    sound: n9,
    is_pressed: 'sol-dies-active pressed',
    key_code: six_key,
    color: "#946A3F"
}


var la = {
    el: $('#la'),
    sound: n10,
    is_pressed: 'la-active pressed',
    key_code: y_key,
    color: "#4C92D0"
}


var la_dies = {
    el: $('#la-dies'),
    sound: n11,
    is_pressed: 'la-dies-active pressed',
    key_code: seven_key,
    color: "#90CFA8"
}

 
var si = {
    el: $('#si'),
    sound: n12,
    is_pressed: 'si-active pressed',
    key_code: u_key,
    color: "#9364AA"
}


var notes_arr = [do_note, do_dies, re, re_dies, mi, fa, fa_dies, sol, sol_dies, la, la_dies, si];
var visualisation = $("#visualisation");

var visualisate = function(current) {
    var random_size = Math.floor(Math.random()*300)
    visualisation.addClass("round");
    visualisation.css("backgroundColor", current.color);
    visualisation.css("width", random_size +"px");
    visualisation.css("height", random_size +"px");
}



//Click events
do_note.el.on('click', function(){
    var audio = new Audio(n1);
    audio.play();
});

do_dies.el.on('click', function(){
    var audio = new Audio(do_dies.sound);
    audio.play();
});

re.el.on('click', function(){
    var audio = new Audio(n3);
    audio.play();
});

re_dies.el.on('click', function(){
    var audio = new Audio(n4);
    audio.play();
});

mi.el.on('click', function(){
    var audio = new Audio(n5);
    audio.play();
});

fa.el.on('click', function(){
    var audio = new Audio(n6);
    audio.play();
});

fa_dies.el.on('click', function(){
    var audio = new Audio(n7);
    audio.play();
});

sol.el.on('click', function(){
    var audio = new Audio(n8);
    audio.play();
});

sol_dies.el.on('click', function(){
    var audio = new Audio(n9);
    audio.play();
});

la.el.on('click', function(){
    var audio = new Audio(n10);
    audio.play();
});

la_dies.el.on('click', function(){
    var audio = new Audio(n11);
    audio.play();
});

si.el.on('click', function(){
    var audio = new Audio(n12);
    audio.play();
});





   
//Keyboard events
var window_k = $(window);



window_k.keydown(function(e){
    for (var i = 0; i < notes_arr.length ; i++) {
        var current = notes_arr[i];
        if (e.keyCode === current.key_code) {
            //set pressed state view

            current.el.addClass(current.is_pressed);

            //music!

            audio = new Audio(current.sound);
            audio.play();

            //some visualisation
            visualisate(current);
            
        }
    }
});


window_k.keyup(function(e){
        for (var i = 0; i < notes_arr.length ; i++) {
        var current = notes_arr[i];
        if (e.keyCode === current.key_code) {
            current.el.toggleClass(current.is_pressed);
            visualisation.removeClass("round");


        }
    }
});

});