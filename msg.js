var loopHandle = null;
var messageCounter = 0;

// The messageSystem object is where you should do all of your work
// Use any combination of javascript, HTML and CSS that you feeling
// is appropriate
messageSystem = {
    showMessage: function(msg) {
        alert(msg);
    }
}


function showMsg() {
    quotes = [
    "What we've got here is failure to communicate.",
    'Go ahead, make my day.',
    "I've got a bad feeling about this.",
    "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
    "I find your lack of faith disturbing.",
    "You're gonna need a bigger boat.",
    "Tell Mike it was only business.",
    "I have come here to chew bubble gum and kick ass, and I'm all out of bubble gum."
    ];
    messageSystem.showMessage(_.sample(quotes));
    
}

function getMsg() {
    quotes = [
    "What we've got here is failure to communicate.",
    'Go ahead, make my day.',
    "I've got a bad feeling about this.",
    "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
    "I find your lack of faith disturbing.",
    "You're gonna need a bigger boat.",
    "Tell Mike it was only business.",
    "I have come here to chew bubble gum and kick ass, and I'm all out of bubble gum."
    ];
    return _.sample(quotes);
    
}

function loop() {
    showMsg();
    var rand = Math.round(Math.random() * (3000 - 500)) + 500;
    loopHandle = setTimeout(loop, rand);
}


$(function () {
    $closeMessage = function (tagId) {
        $("#" + tagId.id).dialog("close");  
    }

    $msgLoop = function () {
        var theMsg = getMsg();
        messageCounter = messageCounter + 1;
        var tagId = "dialogMessages" + messageCounter;


        $("#dialogMessages").append("<div id=" + tagId + " class='messageBox' </div>)");

        $("#" + tagId).dialog({
            autoOpen: false,
            title: "Message",
            position: { my: "top", at: "top", of: window }
        });
        $("#" + tagId).html("<script language='JavaScript'> setTimeout( function() { $closeMessage(" + tagId + "); }, 3000 ); </script> <p>" + theMsg + "</p>");
        $("#" + tagId).dialog("open");

        var rand = Math.round(Math.random() * (3000 - 500)) + 500;
        loopHandle = setTimeout($msgLoop, rand);
    },


   $('#msgButton').click(function() {
       var btn = $(this),
      btnTxt = btn.text();
       if (btnTxt === 'Start Messages') {
           btn.text('Stop Messages');
           loopHandle = setTimeout($msgLoop, 500);
       } else {
           btn.text('Start Messages');
           clearTimeout(loopHandle);
           loopHandle = null;
       }
   } );
});
