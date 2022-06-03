function quizAnalyzer(
  colorParam,
  foodParam,
  rollerbladesParam,
  llamasParam,
  alienNameParam
) {
  const allArgumentsTestVar = `You selected: ${colorParam.toString()}, ${foodParam.toString()}, ${rollerbladesParam.toString()}, ${llamasParam.toString()}, and ${alienNameParam.toString()}.`;
  console.log(allArgumentsTestVar);

  if (colorParam === 'red' || colorParam === 'yellow') {
    const quizResult = 'You should learn Javascript';
    console.log('You should learn Javascript');
    $('#language-quiz-result-container').text(quizResult);
  } else if (colorParam === 'blue' || colorParam === 'green') {
    const quizResult = 'You should learn C#';
    console.log('You should learn C#');
    $('#language-quiz-result-container').text(quizResult);
  } else {
    const quizResult = 'You should learn Python';
    console.log('You should learn Python');
    $('#language-quiz-result-container').text(quizResult);
  }
}

$(document).ready(function () {
  $('#languages-quiz-form').submit(function (event) {
    event.preventDefault();
    // console.log('Form submitted!');

    const colorResponse = $('#colorQuestion').val();
    // console.log(colorResponse);

    const foodResponse = $('input:radio[name=foodQuestion]:checked').val();
    // console.log(foodResponse);

    const rollerbladesResponse = $(
      'input:radio[name=rollerbladesQuestion]:checked'
    ).val();
    // console.log(rollerbladesResponse);

    const llamasResponse = parseInt($('#llamasQuestion').val());
    // console.log(llamasResponse);

    const alienNameResponse = $('#alienNameQuestion').val();
    // console.log(alienNameResponse);

    quizAnalyzer(
      colorResponse,
      foodResponse,
      rollerbladesResponse,
      llamasResponse,
      alienNameResponse
    );
    document.getElementById('languages-quiz-form').reset();
  });
});
