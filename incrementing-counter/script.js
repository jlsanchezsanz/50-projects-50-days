const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updatCounter = () => {
    const target = +counter.getAttribute('data-target');
    const content = +counter.innerText;
    const increment = target / 200;

    if (content < target) {
      counter.innerText = `${Math.ceil(content + increment)}`;
      setTimeout(updatCounter, 1);
    } else {
      counter.innerText = target;
    }
  }

  updatCounter();
});