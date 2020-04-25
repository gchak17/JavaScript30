const video = document.querySelector('.viewer');
const playerButton = document.querySelector('.player__button');
const volumeInput = document.querySelector('input[name="volume"]');
const rateInput = document.querySelector('input[name="playbackRate"]');
const skipButtons = document.querySelectorAll('[data-skip]');

video.addEventListener('click',  function(){
	if(this.paused) this.play();
	else this.pause();
})

playerButton.addEventListener('click', function(){
	if(video.paused) video.play();
	else video.pause(); 
})

volumeInput.addEventListener('change', function(){ video.volume = this.value })
rateInput.addEventListener('change', function(){ video.playbackRate = this.value })

skipButtons[0].addEventListener('click', function(){ video.currentTime += parseInt(this.dataset.skip) })
skipButtons[1].addEventListener('click', function(){ video.currentTime += parseInt(this.dataset.skip) })