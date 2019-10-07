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

function findById(id) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', "api/site/" + id, true);
	xhr.onreadystatechange = function() {
		if (xhr.status < 400 && xhr.readyState === 4) {
			console.log(xhr.responseText);
			if (xhr.responseText) {
				let site = JSON.parse(xhr.responseText);
				return site;
			} else {
				console.log("agh. findById broke.");
			}
		}
	}
	xhr.send(null);
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

function addSite(e) {
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
					showAllSites();
					console.log('site added');
				} else {
					console.log("POST request failed.");
					console.error(xhr.status + ': ' + xhr.responseText);
				}
			}
		};
		let site = {
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
};

function updateSite(event) {
	event.preventDefault();
	console.log("updateSite()")
	let siteId = siteForm.siteId.value;
	console.log(siteId);
	let siteName = siteForm.siteName.value;
	let siteNumber = siteForm.siteNumber.value;
	let siteOwner = siteForm.siteOwner.value;
	let towerType = siteForm.towerType.value;
	let towerHeight = siteForm.towerHeight.value;
	let longitude = siteForm.longitude.value;
	let latitude = siteForm.latitude.value;
	var removeForm = document.getElementById('siteForm');
	
	var xhr = new XMLHttpRequest();
	xhr.open("PUT", "api/site/" + siteId, true);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.onload = function() {
		if (xhr.readyState === 4 && xhr.status > 199 && xhr.status < 300) {
			console.log('success');
			removeForm.parentElement.removeChild(removeForm);
			showAllSites();
		} else {
			console.error("update Site failed");
		}
	}
	let site = {
			id: siteId,
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

};

function deleteSite(event) {
	event.preventDefault();
		var xhr = new XMLHttpRequest();
		xhr.open("DELETE", "api/site/" + this.site.id, true);
		xhr.onload = function() {
			if (xhr.readyState === 4 && xhr.status > 199 && xhr.status < 300) {
				console.log("success");
				showAllSites();
				} else {
				console.error("delete failed");
			}
		}
		xhr.send(null);
};

function displayCreateForm(site) {
	if(site){console.log(this.site.id);}
	var formDiv = document.getElementById('createForm');
	formDiv.textContent = '';
	let siteForm = document.createElement('form');
	siteForm.name = "siteForm";
	siteForm.id = "siteForm"
	formDiv.appendChild(siteForm);
	if (site){
	let siteId = document.createElement('input');
	siteId.type = "hidden";
	siteId.name = "siteId";
	siteId.value = this.site.id;
	siteForm.appendChild(siteId);
	}
	let siteName = document.createElement('input');
	siteName.name = 'siteName';
	siteName.id = 'siteName';
	siteName.type = "text";
	siteName.placeholder = "Site Name";
	if(site){siteName.value = this.site.siteName;}
	siteForm.appendChild(siteName);
	let siteNumber = document.createElement('input');
	siteNumber.name = 'siteNumber';
	siteNumber.type = "text";
	siteNumber.placeholder = "Site Number";
	if(site){siteNumber.value = this.site.siteNumber;}
	siteForm.appendChild(siteNumber);
	let siteOwner = document.createElement('input');
	siteOwner.name = 'siteOwner';
	siteOwner.type = "text";
	siteOwner.placeholder = "Site Owner";
	if(site){siteOwner.value = this.site.siteOwner;}
	siteForm.appendChild(siteOwner);
	let towerType = document.createElement('input');
	towerType.name = 'towerType';
	towerType.type = "text";
	towerType.placeholder = "Tower Type";
	if(site){towerType.value = this.site.towerType;}
	siteForm.appendChild(towerType);
	let towerHeight = document.createElement('input');
	towerHeight.name = 'towerHeight';
	towerHeight.type = "number";
	towerHeight.placeholder = "Tower Height";
	if(site){towerHeight.value = this.site.towerHeight;}
	siteForm.appendChild(towerHeight);
	let longitude = document.createElement('input');
	longitude.name = 'longitude';
	longitude.type = "number";
	longitude.placeholder = "Longitude";
	if(site){longitude.value = this.site.longitude;}
	siteForm.appendChild(longitude);
	let latitude = document.createElement('input');
	latitude.name = 'latitude';
	latitude.type = "number";
	latitude.placeholder = "Latitude";
	if(site){latitude.value = this.site.latitude;}
	siteForm.appendChild(latitude);
	let breakPoint = document.createElement('br');
	siteForm.appendChild(breakPoint);
	let submitButton = document.createElement('input');
	submitButton.type = 'button';
	submitButton.value = 'Submit';
	submitButton.id = 'submitSite';
	submitButton.name = 'submitSite';
	if(site){
		submitButton.addEventListener('click', updateSite);
		console.log("pointing to Update")
	}
	else{
		submitButton.addEventListener('click', addSite);
		console.log("pointing to Add")
	}
	siteForm.appendChild(submitButton);
};

function displaySite(sites) {
	if (document.getElementById('table')) {
		let removedata = document.getElementById('table');
		removedata.parentElement.removeChild(removedata);
	}
	let dataDiv = document.getElementById('displaySites');
	let table = document.createElement('table');
	table.id = "table";
	let tableRow = document.createElement('tr');
	dataDiv.appendChild(table);
	table.appendChild(tableRow);
	for ( let c in sites[0]) {
		let headerCell = document.createElement('th');
		if (c !== 'id') {
			headerCell.textContent = c;
			table.appendChild(headerCell);
		}
	}
	for (var i = 0; i < sites.length; i++) {
		let site = sites[i];
		let tableRow = document.createElement('tr');
		table.appendChild(tableRow);
		let input = document.createElement('input');
		input.type = "hidden";
		input.name = "siteId";
		input.value = site.id;
		console.log(input);
		for ( let c in site) {
			let data = document.createElement('td');
			if (c !== 'id') {
				data.textContent = site[c];
				table.appendChild(data);
			}
		}
		let editButton = document.createElement("input");
		editButton.type = 'button';
		editButton.name = 'editButton';
		editButton.value = 'Edit';
		editButton.site = site;
		editButton.addEventListener('click', displayCreateForm);
		table.appendChild(editButton);
		let deleteButton = document.createElement("input");
		deleteButton.type = 'button';
		deleteButton.name = 'deleteButton';
		deleteButton.value = 'Delete';
		deleteButton.site = site;
		deleteButton.addEventListener('click', deleteSite);
		table.appendChild(deleteButton);

	}
	let tableRowTotal = document.createElement('tr');
	table.appendChild(tableRowTotal);
	let displayTotal = document.createElement('td');
	displayTotal.textContent = i + " sites found";
	table.appendChild(displayTotal);
}