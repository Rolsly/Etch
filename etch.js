
for (j = 0; j < 100; j++){
  const container = document.querySelector('#container');
  const line = document.createElement('div');
  line.classList.add(j)
  container.appendChild(line);

  for (i = 0; i < 100; i++){
    document.querySelector('line');
    const square = document.createElement('span');
    square.classList.add(i)
    square.style.padding = "5px 5px 5px 5px";
    square.style.display ="inline-block";
    square.style.border = "solid gray 1px";
    line.appendChild(square);
  }
}
