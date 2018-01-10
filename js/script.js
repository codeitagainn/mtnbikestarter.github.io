window.answers = { usageType: [], usageFrequency: "", budget: "", height: "", sandSnow: "", gender: "" }

$(document).ready(function(){
  $(".button-collapse").sideNav({edge: 'right'});
  checkBoxEnable()
  gatherAnswers()
  displayFirstQuestion(0)
  slideOutRight()
  displayBackArrow()
  lastQuestionCheck()
  disableLowBudgetsForCcAndDh()
  minusPlusToggle()
  initializeDropDown()
  underlineActiveProject()
  updateProgressBar()
  progressItemDisplay()
})

function initializeDropDown() {
  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
    }
  );
}

function underlineActiveProject() {
  $('.active-sport').mouseout(function() {
    $(this).css('border-bottom', '2px solid #06D6A0')
  })
}

function minusPlusToggle() {
  $('.terms').children().click(function() {
    if ($('.terms').children().hasClass('active')) {
      // if the element clicked has a class of active, make that add_circle
      // otherwise make that remove circle
      let activeElement = $('.active')[1]
      let actualHtml = $(activeElement).children()[0]
      $(actualHtml).text('add_circle')

      // What about if the thing clicked doesnt have it?
      if ($(this).hasClass('active')) {
        let termsIcons = $($(this).find($('.terms-icon')))
        let termIcon = $(termsIcons)[0]
        $(termIcon).text('add_circle')
      } else {
        let termsIcons = $($(this).find($('.terms-icon')))
        let termIcon = $(termsIcons)[0]
        $(termIcon).text('remove_circle')
      }


      // $($(this).find($('.terms-icon'))).text('remove_circle')
    } else {
      // if there is no class of active then set the clicked item to remove circle
      $($(this).find($('.terms-icon'))).text('remove_circle')
    }
  })
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

function slideOutRight() {
  $('.next-question').click(function() {
    let current_question = $('.displayed')
    current_question.hide("slide", {direction: "right"}, 600);
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
  current_question.removeClass('displayed')
  current_question.addClass('not-displayed')
  current_question = current_question.attr('id')


  let nextQuestionId = questions.indexOf(current_question) + 1
  let nextQuestion = $('#' + questions[nextQuestionId]);
  nextQuestion.css('display', 'block')
  nextQuestion.addClass('displayed')
  checkWindowAndDisplay(nextQuestion)
}

function checkWindowAndDisplay(next) {
  switch ($(window).width()) {
    case 320:
      next.animate({'margin-top': '220px'}, 1700)
      break
    case 375:
      next.animate({'margin-top': '250px'}, 1700)
      break
    case 414:
      next.animate({'margin-top': '240px'}, 1700)
      break
    case 768:
      next.animate({'margin-top': '250px'}, 1700)
      break
    default:
      next.animate({'margin-top': '200px'}, 1700)
      break
  }
}

const questions = ['past-experience', 'usage-type', 'snow-sand', 'budget', 'height', 'gender', 'smooth-ride-vs-parts']
function updateProgressBar() {
  $('.next-question').click(function() {
    let questionParent = $(this).closest('.question-wrapper-item');
    let questionWrapper = $(questionParent).closest('.question-wrapper');
    $(questionWrapper).addClass('was-active')

    mapProgressBarToQuestion()
  })
}

function mapProgressBarToQuestion() {
  let displayedItem = $('.displayed')
  let currentQuestion = $(displayedItem).attr('id')

  switch (currentQuestion) {
    case 'past-experience':
      removeCheckedItems('past-experience-progress')
      break
    case 'usage-type':
      removeCheckedItems('usage-type-progress')
      break;
    case 'snow-sand':
      removeCheckedItems('snow-sand-progress')
      break;
    case 'budget':
      removeCheckedItems('budget-progress')
      break;
    case 'height':
      removeCheckedItems('height-progress')
      break;
    case 'gender':
      removeCheckedItems('gender-progress')
      break;
    case 'smooth-ride-vs-parts':
      removeCheckedItems('smooth-ride-vs-parts-progress')
      break;
  }
}

const progressItems = ["past-experience-progress", "usage-type-progress", "snow-sand-progress", "budget-progress", "height-progress", "gender-progress", "smooth-ride-vs-parts-progress"]
function removeCheckedItems(progressItem) {
  $.each(progressItems, function(i, val) {
    if (val == progressItem) {
      $('#' + val).removeAttr('disabled')
      $('#' + val).prop('checked', true)
    } else {
      $('#' + val).removeAttr('checked')
    }
  })
}

function progressItemDisplay() {
  $('.progress-item').click(function() {
    $('.displayed').addClass('not-displayed')
    let displayedQuestion = $('.displayed').attr('id')
    let displayedQuestionSelector = $('#' + displayedQuestion)
    displayedQuestionSelector.removeClass('displayed')
    displayedQuestionSelector.hide("slide", {direction: "left"}, 900);


    let progressItem = $(this).attr('id')

    switch (progressItem) {
      case 'past-experience-progress':
        removeDisplayedItem()
        $('#past-experience').show("fold", 1400)
        $('#past-experience').removeClass('not-displayed')
        $('#past-experience').addClass('displayed')
        break
      case 'usage-type-progress':
        removeDisplayedItem()
        $('#usage-type').show("fold", 1400)
        $('#usage-type').removeClass('not-displayed')
        $('#usage-type').addClass('displayed')
        break
      case 'snow-sand-progress':
        removeDisplayedItem()
        $('#snow-sand').show("fold", 1400)
        $('#snow-sand').removeClass('not-displayed')
        $('#snow-sand').addClass('displayed')
        break
      case 'budget-progress':
        removeDisplayedItem()
        $('#budget').show("fold", 1400)
        $('#budget').removeClass('not-displayed')
        $('#budget').addClass('displayed')
        break
      case 'height-progress':
        removeDisplayedItem()
        $('#height').show("fold", 1400)
        $('#height').removeClass('not-displayed')
        $('#height').addClass('displayed')
        break
      case 'gender-progress':
        removeDisplayedItem()
        $('#gender').show("fold", 1400)
        $('#gender').removeClass('not-displayed')
        $('#gender').addClass('displayed')
        break
      case 'smooth-ride-vs-parts-progress':
        removeDisplayedItem()
        $('#smooth-ride-vs-parts').show("fold", 1600)
        $('#smooth-ride-vs-parts').removeClass('not-displayed')
        $('#smooth-ride-vs-parts').addClass('displayed')
        break
    }
  })
}

function removeDisplayedItem() {
  $('.displayed').css('display', 'none')
}

function displayFirstQuestion(question_index) {
  let question = $('.displayed')
  question.css('display', 'block')
  checkWindowAndDisplay(question)
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
