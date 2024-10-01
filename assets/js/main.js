const controls = document.querySelectorAll('.controls');
const body = document.body;
let emphasisElements = document.querySelectorAll('main h1, main h3, main h2 + p, .portfolio-item p');

controls.forEach(control => control.addEventListener('click', event => {
  const target = event.target;
  changeDisplayMode(target);
}));

function changeDisplayMode(target) {
  if (target.classList.contains('active')) {
    return;
  }
  else {
    setData(target.value);
    // set inactive/active state on relevant control buttons
    let parent = target.parentNode;
    let parentButtons = parent.querySelectorAll('.controls');
    parentButtons.forEach(button => button.classList.remove('active'));
    target.classList.add('active');
  }
}

function setData(data) {
  if (body.classList.contains('emphatic')) {
    emphasisElements.forEach(element => {
      element.tagName === 'H3' ? element.querySelector('a').innerText = element.querySelector('a').innerText.replace('!!!', '') : element.innerHTML = element.innerHTML.replaceAll('!!!', '.');
    })
  }
  body.removeAttribute('class');
  if (data === 'bad') { body.classList.add('bad'); }
  else if (data === 'fancy') { body.classList.add('fancy'); }
  else if (data === 'emphatic') {
    body.classList.add('emphatic');
    emphatisize();
  }
}

function emphatisize() {
  body.classList.add('emphatic');
  emphasisElements.forEach(element => {
    element.tagName === 'H3' ? element.querySelector('a').innerText += '!!!' : element.innerHTML = element.innerHTML.replaceAll('.', '!!!');
  });
}

// Display more portfolio items
const hiddenEls = document.querySelectorAll('.hidden');
let hiddenElsArray = Array.from(hiddenEls);
document.getElementById('more').addEventListener('click', function(event) {
  hiddenElsArray.forEach(function (el, index) {
    if (index <= 3) {
      el.classList.remove('hidden')
    }
  })
  hiddenElsArray.splice(0, 4);
  if (!hiddenElsArray.length) {
    event.target.remove();
  }
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 'auto',
  spaceBetween: 30,
  slidesOffsetBefore: 30,
  slidesOffsetAfter: 30,
  freeMode: true,
  a11y: true
});
