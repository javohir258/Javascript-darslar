let buttonColors = ['red', 'blue', 'green', 'yellow']


let gamePattern = []
let userPattern = []
let started = false
let lvl = 0


function playSound(name){
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

function playAnimation(name) {
    $('#' + name).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}



function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed")
    }, 100)
}

function nextSequence(){
    userPattern = []
    let randomNumber = Math.round(Math.random() * 3)
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)

    playAnimation(randomChosenColor)
    playSound(randomChosenColor)
    lvl++
    $('h1').text('Level:'  + lvl)
    return randomNumber
}
$('.btn').click(function () {
    let userChosenColor =$(this).attr('id')
    animatePress(userChosenColor)
    userPattern.push(userChosenColor)
    playSound(userChosenColor)
    console.log(userPattern)
    checkAnswer(lvl)
})
$(document).keypress(function () {
    if(!started){
        nextSequence()
        started = true
    }
})

function checkAnswer(currentLevel) {
    let lastAnswerIndex = userPattern.length-1
    if (userPattern[lastAnswerIndex] === gamePattern[lastAnswerIndex]) {
        if (userPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence()
            }, 100 )
        }
        
    } else{
        playSound('wrong')
        $('body').addClass('game-over')
        setTimeout(function(){
            $('body').removeClass('game-over')
        }, 200);
        $('h1').text('Game Over, Press any key to start')
    }
}


function startOver() {
    lvl = 0
    gamePattern = []
    started = false
}