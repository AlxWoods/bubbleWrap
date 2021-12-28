
const container = document.querySelector('.container');
let divs = '';
var audio = document.getElementById('sound1');

function makeBoard(numberOfBoxes){
   document.documentElement.style.setProperty('--size', numberOfBoxes);
   numberOfBoxes = numberOfBoxes * numberOfBoxes;
   for(let i = 0; i < numberOfBoxes; i++){
      const box = document.createElement('div');
      box.className = 'box';
      box.id = 'box'+i;
      container.appendChild(box);
   }
   divs = document.querySelectorAll('.box');
}
makeBoard(16);


function change(){
   result = window.prompt('enter a new board size');
   removeAllChildNodes(container);
   makeBoard(result);
   divs = document.querySelectorAll('.box');
   //console.table(divs);

   /**   EventListeners are here becuase the elements for the 
    *    original eventListenerselements after removed clearing */
   divs.forEach(div => div.addEventListener('click',clickEtch));
   document.getElementById('clear').addEventListener('click', function() {
      clear();
   });
   document.getElementById('change').addEventListener('click', function() {
      change();
   });
}


function clickEtch(e) {
   if (this.className != 'changedBox'){
      audio.currentTime = 0;
      audio.play();
   }
   this.className = 'changedBox';
}

function clear(e){
   var boxes = document.querySelectorAll('.changedBox');
   for (var i = 0; i < boxes.length; i++) {
      boxes[i].className = 'box';
   }
}

function removeAllChildNodes(parent) {
   while (parent.firstChild) {
       parent.removeChild(parent.firstChild);
   }
}


divs.forEach(div => div.addEventListener('click',clickEtch));
document.getElementById('clear').addEventListener('click', function() {
   clear();
});
document.getElementById('change').addEventListener('click', function() {
   change();
});
