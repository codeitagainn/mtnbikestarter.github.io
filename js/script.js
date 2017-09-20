$(document).ready(function(){
  $('.checking-checked').click(function(){
    console.log('checked');
    console.log( $(this).is(':checked'));
  });
  displayNextQuestion(0)
  slideoutLeft()
})

function slideoutLeft() {
  $('.next-question').click(function() {
    gatherAnswers(this)
    let current_question = $(this).closest('.question-wrapper')
    current_question.hide("slide", {direction: "left"}, 1100);
    getNextQuestion(current_question)
  })
}

const arr = []
function gatherAnswers(answers) {
  if ($(answers).prop("tagName") === "BUTTON")  {
    let button_siblings = $(answers).siblings()

    button_siblings.each(function() {
      if ($(this).prop("checked") == true) {
        arr.push($(this).val())
      }
    })
  } else {
    arr.push($(answers).val());
  }
  console.log(arr);
}

function getNextQuestion(current_display) {
  let current_index = $(current_display).index()
  let new_question_index = current_index + 1
  displayNextQuestion(new_question_index)
}

function displayNextQuestion(question_index) {
  let question = $('.question-wrapper')[question_index]
  $(question).animate({'margin-top': '300px'}, 1700);
}

// $(document).ready(function(){
//   displayNextQuestion(0)
//   slideoutLeft()
// })
//
// function slideoutLeft() {
//   $('.progress-form').click(function() {
//     $(this).hide("slide", {direction: "left"}, 1100);
//     getNextQuestion(this)
//   })
// }
//
// function getNextQuestion(current_display) {
//   let current_index = $(current_display).index()
//   let new_question_index = current_index + 1
//   displayNextQuestion(new_question_index)
// }
//
// function displayNextQuestion(question_index) {
//   let question = $('.progress-form')[question_index]
//   $(question).animate({'margin-top': '200px'}, 1700);
// }
