function quizAnalyzer(response1) {
  if (response1 === 'red' || response1 === 'yellow') {
    const quizResult = 'You should learn Javascript';
    $('#language-quiz-result-announcement').text(quizResult);
  } else if (response1 === 'blue' || response1 === 'green') {
    const quizResult = 'You should learn C#';
    $('#language-quiz-result-announcement').text(quizResult);
  } else if (response1 === 'orange' || response1 === 'purple') {
    const quizResult = 'You should learn Python';
    $('#language-quiz-result-announcement').text(quizResult);
  } else {
    alert(
      'Something went wrong, please reload this webpage and submit your responses again.'
    );
  }
}

function showLanguageQuizResultContainer() {
  $('#language-quiz-result-container').show();
}

function warningMessage() {
  $(
    `<div id="incomplete-form-warning"><p class="light-color">Please complete the entire form to proceed</p><button class="light-color">Continue</button>`
  ).appendTo('body');
  $('#incomplete-form-warning').addClass('warning-message');
  $('#incomplete-form-warning > button').click(function () {
    $('#incomplete-form-warning').remove();
  });
}

$(document).ready(function () {
  $('#languages-quiz-form').submit(function (event) {
    event.preventDefault();

    const colorResponse = $('#colorQuestion').val();

    const foodResponse = $('input:radio[name=foodQuestion]:checked').val();

    const rollerbladesResponse = $(
      'input:radio[name=rollerbladesQuestion]:checked'
    ).val();

    const llamasResponse = parseInt($('#llamasQuestion').val());

    const alienNameResponse = $('#alienNameQuestion').val();

    if (
      !colorResponse ||
      !foodResponse ||
      !rollerbladesResponse ||
      !llamasResponse ||
      !alienNameResponse
    ) {
      // alert('Please complete the entire form to proceed');
      warningMessage();
      $('form').effect('shake');
    } else {
      quizAnalyzer(colorResponse);

      showLanguageQuizResultContainer();

      document.getElementById('languages-quiz-form').reset();

      $('#languages-quiz-form').click(function () {
        $('#language-quiz-result-container').hide();
        $('#language-quiz-result-announcement').empty();
      });
    }
  });
});
