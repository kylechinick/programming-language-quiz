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
  });
});
