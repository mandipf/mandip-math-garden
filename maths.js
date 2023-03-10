var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    const n2 = Math.round(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}

function checkAnswer(){
    
    const prediction = predictImage();
    console.log(`answer: ${answer}, prediction: ${prediction}`); 

    if (prediction == answer){
        score++ 
        if (score <= 6){
            console.log(`Correct! Score ${score}`);
            backgroundImages.push(`url('images/background${score}.svg')`);      
        } else {
            alert('Congratulations, your garden is complete! Would you like to play again?');
            backgroundImages = []
            score = 0
        }
        document.body.style.backgroundImage = backgroundImages;

        
    } else {
        if (score > 0) {
            score--;
        }
        console.log(`Wrong! Score ${score}`);
        alert('That\'s not correct. Please check your calculation or write more clearly');
        setTimeout(function () {
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;
        }, 1000);
    }
}