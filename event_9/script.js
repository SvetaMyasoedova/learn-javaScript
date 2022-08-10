let partyImg = document.getElementById("party")

partyImg.addEventListener('mouseover', function(e) {
	partyImg.src="night-party.png"
})
partyImg.addEventListener('mouseout', function(e) {
	partyImg.src="party.png"
})