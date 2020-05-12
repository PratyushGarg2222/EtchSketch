
var container = document.getElementById("container");

makeGrid(16);


function makeGrid(squares){

    console.log("Hi");

    container.style.gridTemplateRows = `repeat(${squares}, ${container.clientHeight/squares}px)`;
    container.style.gridTemplateColumns = `repeat(${squares}, ${container.clientWidth/squares}px)`; 
    
    let totSquares = squares*squares;
    for(let i=0; i<totSquares; i++){

            var con = document.createElement("div");
            con.classList.add("cell");
            container.appendChild(con);

    }

    play();

}

function play(){

    let cells = document.querySelectorAll(".cell");

    for(let i=0; i<cells.length; i++){
      
        cells[i].addEventListener("mouseover",function(){
          
            cells[i].classList.add("black");

        });

    }

}

var resetB = document.querySelector("#reset");

resetB.addEventListener("click", function(){


    container.innerHTML = '';

    let num = prompt("Enter new Grid size: ");
    makeGrid(num);

});