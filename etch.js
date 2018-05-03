let grid = prompt("How big do you want your grid? (Between 1-100)"); //Obtains a variable between 1-100

if(grid <= 100 && grid > 0){ //If prompt answer is between 1-100 begins a loop
  for (j = 0; j < Number(grid); j++){ //Creates rows equal to grid
    const container = document.querySelector('#container'); //Selects the div #container and creates a working variable
    const line = document.createElement('div'); //Creates a new div in #container, and creates a working variable
    line.classList.add("row"); //Each new row is given the class "row"
    line.style.display ="block"; //Stacks them on top of one another
    line.style.height =  (750 / grid).toString() + "px"; //Sets the height of each row, overall grid height is stable, size of row depends on number of rows
    container.appendChild(line); //Saves changes to html

    for (i = 0; i < Number(grid); i++){ //Creates cells equal to grid
      document.querySelector('line');
      const square = document.createElement('span');
      square.classList.add("cell")
      square.style.width =  (750 / grid).toString() + "px";
      square.style.height =  (750 / grid).toString() + "px";
      square.style.backgroundColor = "white" //Starting colour is white
      square.style.display ="inline-block"; //Places them in a line
      line.appendChild(square);
    }
  }
} else {
        location.reload(); //If grid !== 1-100 page is reset
    }

const btn = document.querySelector('#btn');
btn.addEventListener("click", () => { //Waits for button to be clicked
  location.reload(); //Resets the page
})

const change = document.getElementsByClassName('cell');
  for(k = 0; k<change.length; k++){ //Attaches a condition to every cell
    change[k].onmouseover = function(){ //When mouse hovers over cell
      this.style.backgroundColor = "gray" //Colour changes to greydocument.getElementsByClassName("cell").style.transition = "all 0.01s";
    }
  }

  document.getElementsByClassName("cell").style.transition = "all 0.01s";
