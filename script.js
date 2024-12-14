let slides = document.querySelector('.cyberpunkheadimgslide');
let slideList = document.querySelector('.headbg')
let currentSlide = 0;

setInterval(function(){
		currentSlide++;
		if (currentSlide >= slideList.children.length) {
		currentSlide = 0;
	};
	slideList.style.transform = 'translate(-' + currentSlide*100 +'%)';
}, 6000);

let slidesmob = document.querySelector('.cyberpunkheadimgslidemob');
let slideListMob = document.querySelector('.headbgmob')
let currentSlideMob = 0;

setInterval(function(mob){
		currentSlideMob++;
		if (currentSlideMob >= slideListMob.children.length) {
		currentSlideMob = 0;
	};
	slideListMob.style.transform = 'translate(-' + currentSlideMob*100 +'%)';
}, 6000);