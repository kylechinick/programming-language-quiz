function quizAnalyzer(
  colorParam,
  foodParam,
  rollerbladesParam,
  llamasParam,
  alienNameParam
) {
  const allArgumentsTestVar = `You selected: ${colorParam.toString()}, ${foodParam.toString()}, ${rollerbladesParam.toString()}, ${llamasParam.toString()}, and ${alienNameParam.toString()}.`;
  console.log(allArgumentsTestVar);
  if (colorParam === 'yellow') {
    const quizResult = 'YOU SHOULD LEARN JAVASCRIPT';
    $('#language-quiz-result-container').text(quizResult);
  } else {
    const quizResult = 'YOU SHOULD HAVE CHOSEN THE COLOR YELLOW';
    $('#language-quiz-result-container').text(quizResult);
  }
}

$(document).ready(function () {
  $('#languagesQuizForm').submit(function (event) {
    event.preventDefault();
    console.log('Form submitted!');

    const colorResponse = $('#colorQuestion').val();
    console.log(colorResponse);

    const foodResponse = $('input:radio[name=foodQuestion]:checked').val();
    console.log(foodResponse);

    const rollerbladesResponse = $(
      'input:radio[name=rollerbladesQuestion]:checked'
    ).val();
    console.log(rollerbladesResponse);

    const llamasResponse = parseInt($('#llamasQuestion').val());
    console.log(llamasResponse);

    const alienNameResponse = $('#alienNameQuestion').val();
    console.log(alienNameResponse);

    quizAnalyzer(
      colorResponse,
      foodResponse,
      rollerbladesResponse,
      llamasResponse,
      alienNameResponse
    );
  });
});
