let petsBlock = document.querySelectorAll('.animals');
let currentPetsBlock = 0;
let isEnabled = true;
const cards = createCardPet()
let allCards
const cardsInBlock = petsBlock[0].querySelectorAll('.photo-animal');

function changeCurrentPetsBlock(n) {
	currentPetsBlock = (n + petsBlock.length) % petsBlock.length;
    createCards()
}

function hideItem(direction) {
	isEnabled = false;
    petsBlock[currentPetsBlock].classList.add(direction);
	petsBlock[currentPetsBlock].onanimationend = function() {
        this.classList.remove(direction);
		this.classList.add('no-active');
	};
}

function showItem(direction) {
    petsBlock[currentPetsBlock].classList.add('next', direction);
    petsBlock[currentPetsBlock].classList.remove('no-active');
    petsBlock[currentPetsBlock].onanimationend = function() {
        this.classList.remove(direction);
        this.classList.remove('next');
		isEnabled = true;
	};
}

function nextItem(n) {
	hideItem('to-left');
    changeCurrentPetsBlock(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
    changeCurrentPetsBlock(n - 1);
	showItem('from-left');
}

function createCardPet(){
    let newCards = []
    let card = document.createElement("div")
    card.classList.toggle('photo-animal')
    let img = document.createElement("div")
    img.classList.toggle('create-card')
    img.style.width = '366px'
    img.style.height = '366px'
    img.style.backgroundImage = 'url(../../assets/images/alligator.jpg)'
    img.style.backgroundRepeat = 'no-repeat'
    img.style.backgroundPosition = 'center center'
    img.style.backgroundSize = '366px 366px'
    img.style.transition = "0.5s"
    img.style.borderRadius = "5px 5px 0px 0px"
    let underCard = document.createElement("div")
    underCard.classList.toggle('under-pict')
    let text = document.createElement("div")
    text.classList.toggle('text')
    let h2 = document.createElement("h2")
    h2.append("Alligators")
    let p = document.createElement("p");
    p.append("Native to Southeastern U. S.")
    text.append(h2)
    text.append(p)
    let icon = document.createElement("div")
    icon.classList.toggle('icon')
    let ic = document.createElement("div")
    ic.style.width = '49px'
    ic.style.height = '49px'
    ic.style.backgroundImage = 'url(../../assets/svg/meet-fish.svg)'
    ic.style.backgroundRepeat = 'no-repeat'
    ic.style.backgroundPosition = 'center center'
    ic.style.backgroundSize = '49px 49px'
    icon.append(ic)
    card.append(img)
    underCard.append(text)
    underCard.append(icon)
    card.append(underCard)
    newCards.push(card)
    return newCards
}

function createCards(){
    allCards = Array.from(cardsInBlock).concat(cards);
    let cardsInCurrentBlock = petsBlock[currentPetsBlock].querySelectorAll('.photo-animal');
    let replaceCards = generationNumber()
    for(let i = 0; i < 6; i++){
        petsBlock[currentPetsBlock].replaceChild(allCards[replaceCards[i]].cloneNode(true), cardsInCurrentBlock[i])
    }
    allCards = []
}

function generationNumber(){
    const range = 6;
    const count = 6;
    let m = {};
    let a = [];
    for (let i = 0; i < count; ++i) {
      let r = Math.floor(Math.random() * (range - i));
      a.push(((r in m) ? m[r] : r) + 1);
      let l = range - i - 1;
      m[r] = (l in m) ? m[l] : l;
    }
    return a
}

document.querySelector('.left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentPetsBlock);
	}
});

document.querySelector('.right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentPetsBlock);
	}
});
