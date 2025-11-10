let gem = document.querySelector(".gem-cost");
let parsedGem = parseFloat(gem.innerHTML);

let clickerCost = querySelector(".clicker-cost");
let parsedClickerCost = parseFloat(clickercost.innerHTML);

function incrementGem() {
  parsedGem += 1;
  gem.innerHTML = parsedGem;
}

function buyClicker() {
  if (parsedGem >= parsedClickerCost) {
    parsedGem -= parsedClickerCost;
    gem.innerHTML = parsedGem;
  }
}
