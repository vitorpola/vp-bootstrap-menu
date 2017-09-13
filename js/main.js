var last_scroll = 0;
var current_scroll = last_scroll;
window.onscroll = function (e) {
	current_scroll = e.path[1].scrollY;
	if (current_scroll > last_scroll && current_scroll > 40) document.querySelector('.vp-nav').classList.add('collapsed');
	else document.querySelector('.vp-nav').classList.remove('collapsed');
	last_scroll = current_scroll;
}
document.querySelector('.navbar-toggle').addEventListener('click', function(){
	document.querySelector('.vp-nav').classList.toggle('opened');
});
document.querySelector('.overlay-menu').addEventListener('click', function(){
	document.querySelector('.vp-nav').classList.toggle('opened');
});
document.querySelector('nav').addEventListener('mouseover' , function(){
	document.querySelector('.vp-nav').classList.remove('collapsed');
});

document.querySelectorAll('.vp-item.with-subitem').forEach(function(element) {
	element.addEventListener('click', function(e){
		if(document.querySelector('.vp-nav').classList.contains('opened')) e.preventDefault();
	});
});
