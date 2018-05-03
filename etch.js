let grid = prompt("How big do you want your grid? (Between 1-100)")

if(grid <= 100 && grid > 0){
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
      square.style.display ="inline-block";
      square.style.border = "solid gray 1px";
      line.appendChild(square);
    }
  }
} else {
        location.reload();
    }

const btn = document.querySelector('#btn');
btn.addEventListener("click", () => {
  location.reload();
})
