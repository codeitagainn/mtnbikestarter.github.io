window.answers = { usageType: [], usageFrequency: "", budget: "", height: "", sandSnow: "", gender: "" }

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
  disableLowBudgetsForCcAndDh()
  underlineDarkGreenQuestionHeaders()
  // minusPlusToggle()
})

// function minusPlusToggle() {
//   $('.terms').children().click(function() {
//     // for the thing clicked add the remove add_circle
//     // for everything else keep add circle
//     $($(this).find($('.terms-icon'))).text('remove_circle')
//     // $('.active').find($('.terms-icon')).text('remove_circle')
//     if ($('.terms').children().hasClass('active')) {
//       $($(this).find($('.terms-icon'))).text('remove_circle')
//     } else {
//       $('.terms').children().each(function() {
//         $($(this).find($('.terms-icon'))).text('add_circle')
//       })
//     }
//   })
// }

function underlineDarkGreenQuestionHeaders() {
  $('.question-header-wrapper:odd').children().css('border-bottom', '2px solid #417B5A')
}

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

  // NOTE: All trail and trail riding selections
  if (answers.budget == "under-500" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && answers.height == "4.10-5.3") {
      envCheckForUrlPush('diamondback/overdrive-27/diamondback-27-overdrive-sm')
  } else if (answers.budget == "under-500" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && answers.height == "5.4-5.7") {
      envCheckForUrlPush('diamondback/overdrive-27/diamondback-27-overdrive-sm')
  } else if (answers.budget == "under-500" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && answers.height == "5.8-5.11") {
      envCheckForUrlPush('diamondback/overdrive-27/diamondback-27-overdrive-med')
  } else if (answers.budget == "under-500" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && answers.height == "6-6.2") {
      envCheckForUrlPush('diamondback/overdrive-27/diamondback-27-overdrive-lg')
  } else if (answers.budget == "under-500" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && answers.height == "6.3-6.5") {
      envCheckForUrlPush('raleigh/tokul/raleigh-tokul-1-xl')
  }

  else if (answers.budget == "500-1000" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && answers.height == "4.10-5.4") {
      envCheckForUrlPush('diamondback/overdrive-29/diamondback-29-overdrive-sm')
  } else if (answers.budget == "500-1000" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && answers.height == "5.4-5.7") {
      envCheckForUrlPush('diamondback/overdrive-29/diamondback-29-overdrive-sm')
  } else if (answers.budget == "500-1000" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && answers.height == "5.8-5.11") {
      envCheckForUrlPush('diamondback/overdrive-29/diamondback-29-overdrive-md')
  } else if (answers.budget == "500-1000" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && answers.height == "6-6.2") {
      envCheckForUrlPush('diamondback/overdrive-29/diamondback-29-overdrive-lg')
  } else if (answers.budget == "500-1000" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && answers.height == "6.3-6.5") {
      envCheckForUrlPush('diamondback/overdrive-29/diamondback-29-overdrive-xl')

  } else if (answers.budget == "1000-2000" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && (answers.height == "5.4-5.7" || answers.height == "4.10-5.3")) {
      envCheckForUrlPush('ghost/kato-3/ghost-kato-3-27-sm')
  } else if (answers.budget == "1000-2000" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && answers.height == "5.8-5.11") {
      envCheckForUrlPush('ghost/kato-3/ghost-kato-3-27-md')
  } else if (answers.budget == "1000-2000" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && (answers.height == "6-6.2" || answers.height == "6.3-6.5")) {
      envCheckForUrlPush('ghost/kato-3/ghost-kato-3-27-lg')


  } else if (answers.budget == "2000-3000" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && (answers.height == "5.4-5.7" || answers.height == "4.10-5.3")) {
      envCheckForUrlPush('diamondback/release-3/diamondback-release-3-sm')
  } else if (answers.budget == "2000-3000" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && answers.height == "5.8-5.11") {
      envCheckForUrlPush('diamondback/release-3/diamondback-release-3-md')
  } else if (answers.budget == "2000-3000" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && answers.height == "6-6.2") {
      envCheckForUrlPush('diamondback/release-3/diamondback-release-3-lg')
  } else if (answers.budget == "2000-3000" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && answers.height == "6.3-6.5") {
      envCheckForUrlPush('diamondback/release-3/diamondback-release-3-xl')

  } else if (answers.budget == "3000-4000" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && (answers.height == "5.4-5.7" || answers.height == "4.10-5.3")) {
      envCheckForUrlPush('diamondback/mission-pro/diamondback-2017-mission-pro-sm')
  } else if (answers.budget == "3000-4000" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && answers.height == "5.8-5.11") {
      envCheckForUrlPush('diamondback/mission-pro/diamondback-2017-mission-pro-md')
  } else if (answers.budget == "3000-4000" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && answers.height == "6-6.2") {
      envCheckForUrlPush('diamondback/mission-pro/diamondback-2017-mission-pro-lg')
  } else if (answers.budget == "3000-4000" && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && answers.height == "6.3-6.5") {
      envCheckForUrlPush('diamondback/mission-pro/diamondback-2017-mission-pro-xl')


  } else if ((answers.budget == "greater-4000") && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && (answers.height == "5.4-5.7" || answers.height == "4.10-5.3")) {
      envCheckForUrlPush('yeti/yeti-sb-4.5/yeti-sb-4.5-sm')
  } else if ((answers.budget == "greater-4000") && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && (answers.height == "5.8-5.11")) {
      envCheckForUrlPush('yeti/yeti-sb-4.5/yeti-sb-4.5-md')
  } else if ((answers.budget == "greater-4000") && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && (answers.height == "6.3-6.5")) {
      envCheckForUrlPush('yeti/yeti-sb-4.5/yeti-sb-4.5-lg')
  } else if ((answers.budget == "greater-4000") && (answers.usageType.length > 1 || answers.usageType[0] == 'trail riding') && (answers.height == "6.3-6.5")) {
      envCheckForUrlPush('yeti/yeti-sb-4.5/yeti-sb-4.5-xl')

  // NOTE: Cross Country specific bikes
  } else if (answers.budget == "1000-2000" && (answers.usageType[0] == 'cross-country') && (answers.height == "4.10-5.3" || answers.height == "5.4-5.7")) {
      envCheckForUrlPush('trek/procaliber-6/trek-procaliber-6-sm')
  } else if (answers.budget == "1000-2000" && (answers.usageType[0] == 'cross-country') && (answers.height == "5.8-5.11")) {
      envCheckForUrlPush('trek/procaliber-6/trek-procaliber-6-md')
  } else if (answers.budget == "1000-2000" && (answers.usageType[0] == 'cross-country') && (answers.height == "6-6.2")) {
      envCheckForUrlPush('trek/procaliber-6/trek-procaliber-6-lg')
  } else if (answers.budget == "1000-2000" && (answers.usageType[0] == 'cross-country') && (answers.height == "6.3-6.5")) {
      envCheckForUrlPush('trek/procaliber-6/trek-procaliber-6-xl')

  } else if (answers.budget == "2000-3000" && (answers.usageType[0] == 'cross-country') && (answers.height == "4.10-5.3" || answers.height == "5.4-5.7")) {
      envCheckForUrlPush('trek/top-fuel/trek-top-fuel-8-sm')
  } else if (answers.budget == "2000-3000" && (answers.usageType[0] == 'cross-country') && answers.height == "5.8-5.11") {
      envCheckForUrlPush('trek/top-fuel/trek-top-fuel-8-md')
  } else if (answers.budget == "2000-3000" && (answers.usageType[0] == 'cross-country') && answers.height == "6-6.2") {
      envCheckForUrlPush('trek/top-fuel/trek-top-fuel-8-lg')
  } else if (answers.budget == "2000-3000" && (answers.usageType[0] == 'cross-country') && answers.height == "6.3-6.5") {
      envCheckForUrlPush('trek/top-fuel/trek-top-fuel-8-xl')

  } else if (answers.budget == "3000-4000" && (answers.usageType[0] == 'cross-country') && (answers.height == "4.10-5.3" || answers.height == "5.4-5.7")) {
      envCheckForUrlPush('trek/procaliber-9p7/trek-procaliber-9p7-sm')
  } else if (answers.budget == "3000-4000" && (answers.usageType[0] == 'cross-country') && answers.height == "5.8-5.11") {
      envCheckForUrlPush('trek/procaliber-9p7/trek-procaliber-9p7-md')
  } else if (answers.budget == "3000-4000" && (answers.usageType[0] == 'cross-country') && answers.height == "6-6.2") {
      envCheckForUrlPush('trek/procaliber-9p7/trek-procaliber-9p7-lg')
  } else if (answers.budget == "3000-4000" && (answers.usageType[0] == 'cross-country') && answers.height == "6.3-6.5") {
      envCheckForUrlPush('trek/procaliber-9p7/trek-procaliber-9p7-xl')

  } else if (answers.budget == "greater-4000" && (answers.usageType[0] == 'cross-country') && (answers.height == "4.10-5.3" || answers.height == "5.4-5.7")) {
      envCheckForUrlPush('trek/procaliber-9p8/trek-procaliber-9p8-sm')
  } else if (answers.budget == "greater-4000" && (answers.usageType[0] == 'cross-country') && answers.height == "5.8-5.11") {
      envCheckForUrlPush('trek/procaliber-9p8/trek-procaliber-9p8-md')
  } else if (answers.budget == "greater-4000" && (answers.usageType[0] == 'cross-country') && answers.height == "6-6.2") {
      envCheckForUrlPush('trek/procaliber-9p8/trek-procaliber-9p8-lg')
  } else if (answers.budget == "greater-4000" && (answers.usageType[0] == 'cross-country') && answers.height == "6.3-6.5") {
      envCheckForUrlPush('trek/procaliber-9p8/trek-procaliber-9p8-xl')

  // NOTE: Enduro / All Bike bikes
  } else if (answers.budget == "500-1000" && (answers.usageType[0] == 'enduro') && (answers.height == "4.10-5.4" || answers.height == "5.4-5.7")) {
      envCheckForUrlPush('ghost/kato-7/ghost-kato-3-27-sm')
  } else if (answers.budget == "500-1000" && (answers.usageType[0] == 'enduro') && answers.height == "5.8-5.11") {
      envCheckForUrlPush('ghost/kato-7/ghost-kato-3-27-md')

  } else if (answers.budget == "1000-2000" && (answers.usageType[0] == 'enduro') && (answers.height == "5.4-5.7" || answers.height == "4.10-5.3")) {
      envCheckForUrlPush('diamondback/release-1/diamondback-release-1-sm')
  } else if (answers.budget == "1000-2000" && (answers.usageType[0] == 'enduro') && answers.height == "5.8-5.11") {
      envCheckForUrlPush('diamondback/release-1/diamondback-release-1-md')
  } else if (answers.budget == "1000-2000" && (answers.usageType[0] == 'enduro') && answers.height == "6.3-6.5") {
      envCheckForUrlPush('diamondback/release-1/diamondback-release-1-lg')
  } else if (answers.budget == "1000-2000" && (answers.usageType[0] == 'enduro') && answers.height == "6.3-6.5") {
      envCheckForUrlPush('undeclared-path/undeclared-path')

  } else if (answers.budget == "2000-3000" && (answers.usageType[0] == 'enduro') && (answers.height == "5.4-5.7" || answers.height == "4.10-5.3")) {
      envCheckForUrlPush('diamondback/release-3/diamondback-release-3-sm')
  } else if (answers.budget == "2000-3000" && (answers.usageType[0] == 'enduro') && answers.height == "5.8-5.11") {
      envCheckForUrlPush('diamondback/release-3/diamondback-release-3-md')
  } else if (answers.budget == "2000-3000" && (answers.usageType[0] == 'enduro') && answers.height == "6-6.2") {
      envCheckForUrlPush('diamondback/release-3/diamondback-release-3-lg')
  } else if (answers.budget == "2000-3000" && (answers.usageType[0] == 'enduro') && answers.height == "6.3-6.5") {
      envCheckForUrlPush('diamondback/release-3/diamondback-release-3-xl')

  } else if (answers.budget == "3000-4000" && (answers.usageType[0] == 'enduro') && (answers.height == "5.4-5.7" || answers.height == "4.10-5.3")) {
      envCheckForUrlPush('diamondback/catch-2/diamondback-catch-2-sm')
  } else if (answers.budget == "3000-4000" && (answers.usageType[0] == 'enduro') && answers.height == "5.8-5.11") {
      envCheckForUrlPush('diamondback/catch-2/diamondback-catch-2-md')
  } else if (answers.budget == "3000-4000" && (answers.usageType[0] == 'enduro') && answers.height == "6-6.2") {
      envCheckForUrlPush('diamondback/catch-2/diamondback-catch-2-lg')
  } else if (answers.budget == "3000-4000" && (answers.usageType[0] == 'enduro') && answers.height == "6.3-6.5") {
      envCheckForUrlPush('diamondback/catch-2/diamondback-catch-2-xl')

  } else if (answers.budget == "greater-4000" && (answers.usageType[0] == 'enduro') && (answers.height == "5.4-5.7" || answers.height == "4.10-5.3")) {
      envCheckForUrlPush('yeti/yeti-sb-4.5/yeti-sb-4.5-sm')
  } else if (answers.budget == "greater-4000" && (answers.usageType[0] == 'enduro') && answers.height == "5.8-5.11") {
      envCheckForUrlPush('yeti/yeti-sb-4.5/yeti-sb-4.5-md')
  } else if (answers.budget == "greater-4000" && (answers.usageType[0] == 'enduro') && answers.height == "6.3-6.5") {
      envCheckForUrlPush('yeti/yeti-sb-4.5/yeti-sb-4.5-lg')
  } else if (answers.budget == "greater-4000" && (answers.usageType[0] == 'enduro') && answers.height == "6.3-6.5") {
      envCheckForUrlPush('yeti/yeti-sb-4.5/yeti-sb-4.5-xl')
  } else {
    envCheckForUrlPush('undeclared-path/undeclared-path')
  }
}

function envCheckForUrlPush(bike_file) {
  if (window.location.href == "file:///Users/jackburum/mountain-bike-starter/mountain-bike-selection-tool.html") {
    window.location.href = `file:///Users/jackburum/mountain-bike-starter/bikes/${bike_file}.html`
  } else {
    window.location.href = `https://mtnbikestarter.github.io/bikes/${bike_file}.html`
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

function gatherAnswers() {
  $('.next-question').click(function() {
    let first_checkbox = $('.multiple-select-wrapper :checked')[0]
    let second_checkbox = $('.multiple-select-wrapper :checked')[1]
    let third_checkbox = $('.multiple-select-wrapper :checked')[2]
    window.answers.usageType = removeUndefined([$(first_checkbox).val(), $(second_checkbox).val(), $(third_checkbox).val()])
    window.answers.budget = $('#budget :checked').val()
    window.answers.height = $('#height :checked').val()
    window.answers.sandSnow = $('#snow-sand :checked').val()
    window.answers.gender = $('#gender :checked').val()
  })
}

function removeUndefined(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == undefined) {
      array.splice(i, 1)
      i--
    }
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

function disableLowBudgetsForCcAndDh() {
  $('.next-question').click(function() {
    let answers = window.answers

    if ((answers.usageType.length == 1) && (answers.usageType[0] == 'cross-country')) {
      $('#under-500').prop('disabled', true)
      $('#500-1000').prop('disabled', true)
      $('#1000-2000').prop('disabled', false)
    } else if ((answers.usageType.length == 1) && (answers.usageType[0] == 'enduro'))  {
      $('#500-1000').prop('disabled', true)
    } else if (answers.usageType.length > 2 && answers.sandSnow == 'yes-snow')  {
      $('#under-500').prop('disabled', false)
      $('#greater-4000').prop('disabled', false)
    } else if (answers.usageType.length <= 2 && answers.sandSnow == 'yes-snow')  {
      $('#under-500').prop('disabled', true)
      $('#greater-4000').prop('disabled', true)
    } else {
      $('#under-500').prop('disabled', false)
      $('#500-1000').prop('disabled', false)
      $('#1000-2000').prop('disabled', false)
      $('#greater-4000').prop('disabled', false)
    }
  })
}

function displayFirstQuestion(question_index) {
  let question = $('.displayed')
  question.css('display', 'block')
  checkWindowAndDisplay(question)
}


const questions = ['past-experience', 'usage-type', 'snow-sand', 'budget', 'height', 'gender', 'smooth-ride-vs-parts', 'jump-riding']
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
