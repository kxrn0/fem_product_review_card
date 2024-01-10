function count_down() {
  const element: HTMLDivElement = document.querySelector(".countdown")!;
  const start = Number(element.dataset.start);
  const end = Number(element.dataset.end);
  const step = 0.1;
  let current = start;
  const interval = setInterval(() => {
    if (current <= end) return clearInterval(interval);

    element.innerText = `$${current.toFixed(2)}`;
    current -= step;
  }, 16);
}

count_down();
