const decreaseBtn = document.getElemntById("decreaseBtn");
const resetBtn = document.getElemntById("resetBtn");
const increaseBtn = document.getElemntById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
     count++; 
     countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
     count--;
     countLabel.textContent = count;
    }



resetBtn.onclick = function(){
     count = 0;
      countLabel.textContent = count;
}

const minNum = 1;
const maxNum = 100;
const answer = Math.random () * (maxNum - minNum + 1);
console.log (answer);
