/*document.addEventListener("DOMContentLoaded", function() {
  
  let buttons = document.getElementsByTagName("button");

  for (let button of my buttons) {
    button.addEventListener("click"), function() {
      let playerChoice = this.getAttribute("data-choice");
      playGame(playerChoice);
    });
      
};

function playGame(playerChoice) {
    let result = questions[playerChoice];
    updateScores(result);
}

function updateScores() {
  
}
*/
let questions = [
  {
    question: 'The occipital area of the skull is located in what part of the skull?',
    option1: 'Front',
    option2: 'Back',
    option3: 'Top',
    answer: 'Back',
  },
  {
    question: 'The biceps femoris muscle is located in what part of the body?',
    option1: 'Shoulder', 
    option2: 'Arm',
    option3: 'Leg',
    answer: 'Leg',
  },
  {
    question: 'The elbow is an example of what type of joint?',
    option1: 'Pivot joint',
    option2: 'Hinge joint',
    option3: 'Ball and Socket joint',
    answer: 'Hinge joint',
  },
   { 
    question: 'The muscles located at the front of the thigh are known as what?',
    option1: 'Adductors', 
    option2: 'Hamstrings', 
    option3: 'Quadriceps',
    answer: 'Quadriceps',
   },
   {
    question: 'The C1 vertebra is called?',
    option1: 'Atlas',
    option2: 'Axis',
    option3: 'Amino',
    answer: 'Atlas'
   }, 
   {
    question: 'The three bones that form the ankle are the fibula, tibia and which other bone?',
    option1: 'Talus',
    option2: 'Calcaneous',
    option3: 'Cuboid',
    answer: 'Talus',
   },
   {
    question: 'Which vessel returns unoxygenated blood to the lungs?',
    option1: 'Aorta',
    option2: 'Pulmonary artery',
    option3: 'Pulmonary vein',
    answer: 'Pulmonary artery'
   }, 
    {
    question: 'Ligaments and Tendons are composed of what type of tissue?',
    option1: 'Epithelial',
    option2: 'Adipose',
    option3: 'Connective',
    answer: 'Connective',
    },
     {
    question: 'The anatomical term for the head is?',
    option1: 'Cephalic',
    option2: 'Cervical',
    option3: 'Thoracic',
    answer: 'Cephalic',
     }, 
      {
    question: 'Mastication is the term for what?',
    option1: 'Chewing',
    option2: 'Snoring',
    option3: 'Swallowing',
    answer: 'Chewing'
      }  
    ];
/*  
function gameArea() {

}

*/