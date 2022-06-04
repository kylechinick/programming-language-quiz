function quizAnalyzer(colorParam) {
  if (colorParam === 'red' || colorParam === 'yellow') {
    const quizResult = 'You should learn Javascript';
    $('#language-quiz-result-announcement').text(quizResult);
  } else if (colorParam === 'blue' || colorParam === 'green') {
    const quizResult = 'You should learn C#';
    $('#language-quiz-result-announcement').text(quizResult);
  } else if (colorParam === 'orange' || colorParam === 'purple') {
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

    quizAnalyzer(
      colorResponse,
      foodResponse,
      rollerbladesResponse,
      llamasResponse,
      alienNameResponse
    );

    showLanguageQuizResultContainer();

    document.getElementById('languages-quiz-form').reset();

    $('#languages-quiz-form').click(function () {
      $('#language-quiz-result-container').hide();
      $('#language-quiz-result-announcement').empty();
    });
  });
});
