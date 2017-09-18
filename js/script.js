$(document).ready(function(){
  displayNextQuestion(0)
  slideoutLeft()
})

function slideoutLeft() {
  $('.progress-form').click(function() {
    $(this).hide("slide", {direction: "left"}, 1100);
    getNextQuestion(this)
  })
}

function getNextQuestion(current_display) {
  let current_index = $(current_display).index()
  let new_question_index = current_index + 1
  displayNextQuestion(new_question_index)
}

function displayNextQuestion(question_index) {
  let question = $('.progress-form')[question_index]
  $(question).animate({'margin-top': '200px'}, 1700);
}

// TO DO's
// get setup on new github
// add answers
// add underlines
// save all answers
// responsive css
// deploy to githubpages
// make it not go to the next screen on questions that need multiple answers (make the okay box the progression)
