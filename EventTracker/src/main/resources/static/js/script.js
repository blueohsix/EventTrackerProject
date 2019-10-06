window.addEventListener('load', function(e) {
	console.log('document loaded');
	searchSites();
	showForm();
});

function searchSites() {
	document.search.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		var siteNumber = document.search.siteNumber.value;
		if (siteNumber) {
			findBySiteNumber(siteNumber);
			console.log('findBySiteNumber')
		} else {
			showAllSites();
			console.log('showAllSites')
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
				displaySite(sites);
			} else {
				console.log("agh. showAllSites broke.");
			}
		}
	}
	xhr.send(null);
}

function findBySiteNumber(siteNumber) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', "api/sites/" + siteNumber, true);
	console.log(siteNumber);
	xhr.onreadystatechange = function() {
		if (xhr.status < 400 && xhr.readyState === 4) {
			console.log(xhr.responseText);
			if (xhr.responseText) {
				let sites = JSON.parse(xhr.responseText);
				console.log(sites);
				displaySite(sites);
			} else {
				console.log("agh. findBySiteNumber broke.");
			}
		}
	}
	xhr.send(null);
}

function showForm() {
	document.create.create.addEventListener('click', function(event) {
		event.preventDefault();
		displayCreateForm();
	})
};

function displayCreateForm() {
	var formDiv = document.getElementById('createForm');
	formDiv.textContent = '';
	let siteForm = document.createElement('form');
	siteForm.name = "siteForm";
	siteForm.id = "siteForm"
	formDiv.appendChild(siteForm);
	let siteName = document.createElement('input');
	siteName.name = 'siteName';
	siteName.id = 'siteName';
	siteName.type = "text";
	siteName.placeholder = "Site Name";
	siteForm.appendChild(siteName);
	let siteNumber = document.createElement('input');
	siteNumber.name = 'siteNumber';
	siteNumber.type = "text";
	siteNumber.placeholder = "Site Number";
	siteForm.appendChild(siteNumber);
	let siteOwner = document.createElement('input');
	siteOwner.name = 'siteOwner';
	siteOwner.type = "text";
	siteOwner.placeholder = "Site Owner";
	siteForm.appendChild(siteOwner);
	let towerType = document.createElement('input');
	towerType.name = 'towerType';
	towerType.type = "text";
	towerType.placeholder = "Tower Type";
	siteForm.appendChild(towerType);
	let towerHeight = document.createElement('input');
	towerHeight.name = 'towerHeight';
	towerHeight.type = "number";
	towerHeight.placeholder = "Tower Height";
	siteForm.appendChild(towerHeight);
	let longitude = document.createElement('input');
	longitude.name = 'longitude';
	longitude.type = "number";
	longitude.placeholder = "Longitude";
	siteForm.appendChild(longitude);
	let latitude = document.createElement('input');
	latitude.name = 'latitude';
	latitude.type = "number";
	latitude.placeholder = "Latitude";
	siteForm.appendChild(latitude);
	let breakPoint = document.createElement('br');
	siteForm.appendChild(breakPoint);
	let submitSite = document.createElement('button');
	submitSite.id = 'submitSite';
	submitSite.name = 'submitSite';
	submitSite.textContent = "Submit";
	siteForm.appendChild(submitSite);
	addSite();
};

function addSite() {
	submitSite.addEventListener('click', function(e) {
		e.preventDefault();
		console.log('addSite()');
		let siteName = siteForm.siteName.value;
		let siteNumber = siteForm.siteNumber.value;
		let siteOwner = siteForm.siteOwner.value;
		let towerType = siteForm.towerType.value;
		let towerHeight = siteForm.towerHeight.value;
		let longitude = siteForm.longitude.value;
		let latitude = siteForm.latitude.value;
		var removeForm = document.getElementById('siteForm');

		let xhr = new XMLHttpRequest();
		xhr.open("POST", 'api/site', true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status == 200 || xhr.status == 201) {
					let site = JSON.parse(xhr.responseText);
					console.log(site);
					removeForm.parentElement.removeChild(removeForm);
					displaySite(site);
				} else {
					console.log("POST request failed.");
					console.error(xhr.status + ': ' + xhr.responseText);
				}
			}
		};
		var site = {
			siteName : siteName,
			siteNumber : siteNumber,
			siteOwner : siteOwner,
			towerType : towerType,
			towerHeight : towerHeight,
			longitude : longitude,
			latitude : latitude
		};
		let siteJSON = JSON.stringify(site);
		console.log(siteJSON);
		xhr.send(siteJSON);
	})
};

function displaySite(sites) {
	var dataDiv = document.getElementById('displaySites');
	dataDiv.textContent = '';
	
	for (var i = 0; i < sites.length; i++) {
		let h4 = document.createElement('h4');
		h4.textContent = sites[i].siteName;
		dataDiv.appendChild(h4);
		let text = document.createElement('h6');
		text.textContent= " - " + sites[i].siteNumber + " - " + sites[i].siteOwner;
		dataDiv.appendChild(text);
	}
}
