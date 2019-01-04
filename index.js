document.querySelectorAll('.star.rating').forEach(function(el) {
	
	el.addEventListener('click', function(e) {
		
		var target = e.target;
		target.parentNode.setAttribute('data-stars', target.getAttribute('data-rating'));
		
	});
	
});