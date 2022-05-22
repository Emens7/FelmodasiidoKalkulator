//const yearsNumber = document.querySelector('.yearsNumber').value;
const day = document.querySelector('#day');
const lastWork = document.queryCommandIndeterm('#lastWork');
const buttonYearsNumber = document.querySelector('.buttonYearsNumber');

buttonYearsNumber.addEventListener('click', () => {

    let workYear = document.querySelector('.yearsNumber').value;

    let day;

    switch (true) {
      case (workYear < 3):
        day = 30;
        break;
      case (workYear >= 3 && workYear < 5):
        day = 35;
        break;
      case (workYear >= 5 && workYear < 8):
         day = 45;
        break;
      case (workYear >= 8 && workYear < 10):
        day = 50;
        break;
      case (workYear >= 10 && workYear < 15):
        day = 55;
        break;
      case (workYear >= 15 && workYear < 18):
        day = 60;
        break;
      case (workYear >= 18 && workYear <=20):
        day = 70;
      case (workYear > 20):
        day = 90;
    
    };

    document.getElementById('day').innerHTML = `${workYear} év után ${day} nap a felmondási idő`;

    const event = new Date();

    event.setDate(event.getDate() + day);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    //console.log(event.toLocaleDateString('hu-HU', options));

    document.querySelector('#lastWork').innerHTML = `<p>A mai naptól ${event.toLocaleDateString('hu-HU', options)} a felmondási idő utolsó napja ${day} naptári nappal számolva.
   </p><p> Az adatok tájékoztató jellegűek!</p>`;

});



function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    target.value = value;
  }

  function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
  }

  const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
  );

  const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
  );

  decrementButtons.forEach(btn => {
    btn.addEventListener("click", decrement);
  });

  incrementButtons.forEach(btn => {
    btn.addEventListener("click", increment);
  });

 