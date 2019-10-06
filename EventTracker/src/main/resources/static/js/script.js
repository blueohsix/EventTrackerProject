window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {
	console.log("init()");
	document.search.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		var siteNumber = document.search.siteNumber.value;
		if (!isNaN(siteNumber) && siteNumber > 0) {
			findBySiteNumber(siteNumber);
			console.log('findBySiteNumber')
		} else {
			showAllSites();
			console.log('show all sites')
		}
	})
}

function showAllSites() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', "api/sites/", true);

	xhr.onreadystatechange = function() {
		if (xhr.status < 400 && xhr.readyState === 4) {
			console.log(xhr.responseText);
			if (xhr.responseText) {
				let sites = JSON.parse(xhr.responseText);
				console.log(sites);
			} else {
				console.log("agh. showAllSites broke.");
			}

		}
	}
	xhr.send(null);

}

function findBySiteNumber(siteNumber){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', "api/sites/" + siteNumber, true);
	console.log(siteNumber);
	xhr.onreadystatechange = function() {
		if (xhr.status < 400 && xhr.readyState === 4) {
			console.log(xhr.responseText);
			if (xhr.responseText) {
				let sites = JSON.parse(xhr.responseText);
				console.log(sites);
			} else {
				console.log("agh. findBySiteNumber broke.");
			}

		}
	}
	
	xhr.send(null);
	
}