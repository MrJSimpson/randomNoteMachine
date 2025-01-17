const notes = ['A','B\u266D/A\u266F','B/C\u266D','C','C\u266F/D\u266D','D','E\u266D/D\u266F','E','F','F\u266F/G\u266D','G','G\u266F/A\u266D']
let usedNoteKeys = []

function selectNote(key) {
	return notes[key]
}

function selectRandomUnusedNote() {
	let randomKey = Math.floor(Math.random() * notes.length)
	if(!usedNoteKeys.includes(randomKey)) {
		usedNoteKeys.push(randomKey)
		return selectNote(randomKey)
	}
	return null
}

function showRandomUnusedNote() {
	let canGetNote = true
	let newNote = ''
	if(12 == usedNoteKeys.length) {
		usedNoteKeys = []
		document.getElementById('randomNote').textContent = ""
	} else {
		document.getElementById('generateNote').textContent = "Next"
		while(canGetNote) {
			let randomNote = selectRandomUnusedNote()
			if(null != randomNote) {
				newNote = randomNote
				canGetNote = false
			}
		}
		document.getElementById('randomNote').textContent = newNote
	}
	if(12 == usedNoteKeys.length) {
		document.getElementById('generateNote').textContent = "Done"
	}
	if(0 == usedNoteKeys.length) {
		document.getElementById('generateNote').textContent = "Start"
	}
	setCount()
}

function setCount() {
	document.getElementById('current').textContent = usedNoteKeys.length
	document.getElementById('total').textContent = notes.length
}

// capture space to start/continue the iteration

document.getElementById('generateNote').onclick = (e) => {
	showRandomUnusedNote()
}

// capture button press to start/continue iteration
document.onkeyup = (e) => {
	if('Space' == e.code) {
		showRandomUnusedNote()
	}
}

document.addEventListener("DOMContentLoaded", (event) => {
	setCount()
});
