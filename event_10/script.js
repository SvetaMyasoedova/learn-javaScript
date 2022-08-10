let counterButton = document.getElementById('counter')

counterButton.addEventListener('click', function(e) {
	++counterButton.value
})