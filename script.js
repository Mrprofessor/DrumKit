function playSound(e) {
		// console.log(e.keyCode);
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
		if(!audio)return;
		audio.currentTime = 0;
		audio.play();
		// console.log(key);

		key.classList.add('playing');	
	}
	function removeTransition(e) {
		if(e.propertyName !== 'transform')
			return; //skip it if its not a transform
  		this.classList.remove('playing');
	}
	   
    
	const keys = Array.from(document.querySelectorAll('.key'));
	keys.forEach(key => key.addEventListener('transitionend',removeTransition));

	window.addEventListener('keydown',playSound);