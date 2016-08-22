var head = document.getElementById('sHead');
var cont = document.getElementById('container');
var body = document.getElementsByTagName('body')[0];

head.style.top = (cont.offsetHeight - 12) / 2 + 'px';
head.style.left = (cont.offsetWidth - 12) / 2 + 'px';

var goal = document.createElement('div');
goal.setAttribute('class', 'goal');
setGoal(goal);
cont.appendChild(goal);

function setGoal(goal) {
	goal.style.top = Math.round((Math.floor(Math.random() * (cont.offsetHeight - 12)) / 10)) * 10 + 'px';
	goal.style.left = Math.round((Math.floor(Math.random() * (cont.offsetWidth - 12)) / 10)) * 10 + 'px';
	console.log(goal.style.top);
}

body.addEventListener('keydown', function (e) {
	if(head.offsetLeft > 0 && e.keyCode == 37) {
		moveLeft(head, -10);
		eat(head, goal);
		// setGoal(goal);
	} else if(head.offsetTop > 0 && e.keyCode == 38) {
		moveTop(head, -10);
		eat(head, goal);

	} else if((head.offsetLeft + (head.offsetHeight * 2)) < head.parentNode.offsetWidth && e.keyCode == 39) {
		moveLeft(head, 10);
		eat(head, goal);

	} else if((head.offsetTop + (head.offsetHeight * 2)) < head.parentNode.offsetHeight && e.keyCode == 40) {
		moveTop(head, 10);
		eat(head, goal);
	}
})

function moveTop(head, step) {
	head.style.top = parseInt(head.style.top) + step + 'px';
}

function moveLeft(head, step) {
	head.style.left = parseInt(head.style.left) + step + 'px';
}

function eat(head, goal) {
	if(head.offsetTop == goal.offsetTop && head.offsetLeft == goal.offsetLeft) {
		goal.parentNode.removeChild(goal);
	}

	setGoal(goal);
}




