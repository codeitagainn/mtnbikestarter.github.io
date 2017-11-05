$(document).ready(function(){
  $(".button-collapse").sideNav({edge: 'right'});
  checkBoxEnable()
  gatherAnswers()
  displayFirstQuestion(0)
  slideoutLeft()
  displayBackArrow()
  previousQuestionArrow()
  nextQuestionArrow()
  lastQuestionCheck()
})

function checkBoxEnable() {
  $('.multiple-select-wrapper :input').click(function() {
    let checkBoxes = $('.multiple-select-wrapper :checked')

    if (checkBoxes.length > 0) {
      $('.multiple-select-btn').removeAttr('disabled')
    } else {
      $('.multiple-select-btn').attr('disabled', 'disabled')
    }
  })
}

function lastQuestionCheck() {
  $('.next-question').click(function() {
    if ($('.last-question :checked').length > 0) {
      setTimeout(function(){
        $('.previous-arrow').css('display', 'none')
        determineResults()
      }, 1300)
    }
  })
}

function determineResults() {
  let answers = window.answers
  // TODO: refactor decision logic
  if (answers.budget < "500" && answers.usageType.length > 2) {
    // check for local vs prod
    if (window.location.href == "file:///Users/jackburum/mountain-bike-starter/index.html") {
      window.location.href = "file:///Users/jackburum/mountain-bike-starter/bikes/diamondback-29-ht.html"
    } else {
      window.location.href = "https://mtnbikestarter.github.io/bikes/diamondback-29-ht.html"
    }
  } else if (1 > 2) {
    console.log('succcks');
  } else {
    console.log('not right path');
  }
}

function slideoutLeft() {
  $('.next-question').click(function() {
    let current_question = $('.displayed')
    current_question.hide("slide", {direction: "right"}, 1300);
    getNextQuestion(current_question)
  })
}

function displayBackArrow() {
  if ($('.displayed').attr('id') == 'past-experience') {
    $('.previous-arrow').css('display', 'none')
  } else {
    $('.previous-arrow').fadeIn(2500)
  }
}

window.answers = { usageType: [], usageFrequency: "", budget: "" }
function gatherAnswers() {
  $('.next-question').click(function() {
    let first_checkbox = $('.multiple-select-wrapper :checked')[0]
    let second_checkbox = $('.multiple-select-wrapper :checked')[1]
    let third_checkbox = $('.multiple-select-wrapper :checked')[2]
    window.answers.usageType = removeUndefined([$(first_checkbox).val(), $(second_checkbox).val(), $(third_checkbox).val()])
    window.answers.usageFrequency = $('#usage-frequency :checked').val()
    window.answers.budget = $('#budget :checked').val()
  })
}

function removeUndefined(array) {
  let i = 0
  for (let item of array) {
    if (item == undefined) {
      array.splice(i, 1)
    }

    i++
  }
  return array
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
  checkWindowAndDisplay(question)
}


const questions = ['past-experience', 'usage-type', 'usage-frequency', 'budget', 'height', 'gender', 'snow-sand', 'smooth-ride-vs-parts', 'jump-riding']
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
  checkWindowAndDisplay(next)
  displayBackArrow()
}

function checkWindowAndDisplay(next) {
  switch ($(window).width()) {
    case 320:
      next.animate({'margin-top': '200px'}, 1700)
      break
    case 375:
      next.animate({'margin-top': '250px'}, 1700)
      break
    case 414:
      next.animate({'margin-top': '290px'}, 1700)
      break
    case 768:
      next.animate({'margin-top': '400px'}, 1700)
      break
    default:
      next.animate({'margin-top': '250px'}, 1700)
      break
  }
}
