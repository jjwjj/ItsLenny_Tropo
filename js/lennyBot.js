answer();

var ii;
var num = "";
var lennyfile = "";
var result;
var baseurl = "http://_________";  // put your path to the sound files here
var hello = "";

for (ii=1;ii<20;ii++) {
    num = (ii<10?"0":"") + ii;
    lennyfile = baseurl+"Lenny"+num+".ulaw.mp3";
    hello = baseurl+"Hello01_pause.mp3";
    
    result = ask(lennyfile,
    {   
        choices:"Lorem ipsum dolor sit amet consectetur adipiscing elit,Vivamus viverra erat semper neque scelerisque aliquet,Ut ultrices lectus",
        speechCompleteTimeout:1,
        speechIncompleteTimeout:1,
        bargein:false,
        timeout:7,
        onTimeout: function() {say(hello)}
    });

    wait(10);
}

wait(1000);

hangup();