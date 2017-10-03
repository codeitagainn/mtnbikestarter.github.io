$(document).ready(function(){
  $(".button-collapse").sideNav({edge: 'right'});
  displayFirstQuestion(0)
  slideoutLeft()
  displayBackArrow()
  previousQuestionArrow()
  nextQuestionArrow()
})

function slideoutLeft() {
  $('.next-question').click(function() {
    let current_question = $('.displayed')
    current_question.hide("slide", {direction: "right"}, 1300);
    getNextQuestion(current_question)
  })
}

function displayBackArrow() {
  if ($('.displayed').attr('id') == 'usage-type') {
    $('.previous-arrow').css('display', 'none')
  } else {
    $('.previous-arrow').fadeIn(2500)
  }
}

// let backArrowClicks = []
// function displayForwardArrow() {
//   let currentQuestion = $('.displayed').attr('id')
//   backArrowClicks.push(currentQuestion)
//   // $('.next-arrow').css('display', 'block')
// }

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
}

function getNextQuestion(current_question) {
  current_question = current_question.attr('id')
  for (let question of questions) {
    if (question == current_question) {
      let current_index = questions.indexOf(current_question)
      let next_question = current_index + 1
      showNextQuestionFirstRun(current_question, next_question)
    }
  }
}

function displayFirstQuestion(question_index) {
  let question = $('.displayed')
  question.css('display', 'block')
  question.animate({'margin-top': '200px'}, 1700)
}


const questions = ['usage-type', 'usage-frequency', 'budget']
function nextQuestionArrow() {
  $('.next-arrow').click(function(){
    let current_question = $('.displayed').attr('id')

    for (let question of questions) {
      if (question == current_question) {
        let current_index = questions.indexOf(current_question)
        let next_question = current_index + 1
        showNextQuestion(current_question, next_question)
      }
    }
  })
}

function previousQuestionArrow() {
  $('.previous-arrow').click(function() {
    let current_question = $('.displayed').attr('id')

    for (let question of questions) {
      if (question == current_question) {
        let current_index = questions.indexOf(current_question)
        let previous_question_index = current_index - 1
        displayPreviousQuestion(current_question, previous_question_index)
      }
    }
  })
}

function displayPreviousQuestion(current_question, previous_question_index) {
  let current = $('#' + current_question)
  current.removeClass('displayed')
  current.addClass('not-displayed')
  current.css('display', 'none')

  let previous_question = questions[previous_question_index]
  let previous = $('#' + previous_question)
  previous.removeClass('not-displayed')
  previous.addClass('displayed')
  previous.css('display', 'block')
  displayBackArrow()
}


function showNextQuestion(current_question, next_question) {
  let current = $('#' + current_question)
  current.removeClass('displayed')
  current.addClass('not-displayed')
  current.css('display', 'none')

  let next = $('#' + questions[next_question])
  next.removeClass('not-displayed')
  next.addClass('displayed')
  next.css('display', 'block')
  next.animate({'margin-top': '200px'}, 1700)

  displayBackArrow()
}

function showNextQuestionFirstRun(current_question, next_question) {
  let current = $('#' + current_question)
  current.removeClass('displayed')
  current.addClass('not-displayed')

  let next = $('#' + questions[next_question])
  next.removeClass('not-displayed')
  next.addClass('displayed')
  next.css('display', 'block')
  next.animate({'margin-top': '200px'}, 1700)
  displayBackArrow()
}
