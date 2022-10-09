let petsBlock = document.querySelectorAll('.animals');
let currentPetsBlock = 0;
let isEnabled = true;

function changeCurrentPetsBlock(n) {
	currentPetsBlock = (n + petsBlock.length) % petsBlock.length;
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
