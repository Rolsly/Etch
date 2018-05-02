let grid = prompt("How big do you want your grid?")

for (j = 0; j < Number(grid); j++){
  const container = document.querySelector('#container');
  const line = document.createElement('div');
  line.classList.add(j)
  line.style.display ="block";
  container.appendChild(line);

  for (i = 0; i < Number(grid); i++){
    document.querySelector('line');
    const square = document.createElement('span');
    square.classList.add(i)
    square.style.padding = "5px 5px 5px 5px";
    square.style.margin = "0px 0px 0px 0px";
    square.style.display ="inline-block";
    square.style.border = "solid gray 1px";
    line.appendChild(square);
  }
}
