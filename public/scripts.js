if ( document.getElementById("mytable") ) { // Checkea si se creo la tabla (es decir, si se creo el boton).
	table = document.getElementById("mytable");
	tr = table.getElementsByTagName("tr");
};

// Title filter
// API brings others results rather than just the ones queried. 
// Manual filter in table to solve that. Also useful to filter car version.

function myFunction() {
	let input = document.getElementById("myInput");
	let filter = input.value.toUpperCase();
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByClassName("title")[0];
		if (td) {
  			txtValue = td.textContent || td.innerText;
  			if (txtValue.toUpperCase().indexOf(filter) > -1) {
    			tr[i].style.display = "";
  			} else {
    			tr[i].style.display = "none";
  			}
		}
	}
};

// Kilometers filter
const $firstKmIntervalButton = document.querySelector("#firstkm")
const $secondKmIntervalButton = document.querySelector("#secondkm")
const $thirdKmIntervalButton = document.querySelector("#thirdkm")
const $fourthKmIntervalButton = document.querySelector("#fourthkm")
const $allKmButton = document.querySelector("#allkm")

if ( $firstKmIntervalButton ) { // Checkea si se creo el boton, por lo tanto la tabla
	$firstKmIntervalButton.onclick = () => {
		const bottom = 0;
		const top = 25000;
		filterTableByKm(bottom, top);
	};
	$secondKmIntervalButton.onclick = () => {
		const bottom = 25001;
		const top = 50000;
		filterTableByKm(bottom, top);
	};
	$thirdKmIntervalButton.onclick = () => {
		const bottom = 50001;
		const top = 100000;
		filterTableByKm(bottom, top);
	};
	$fourthKmIntervalButton.onclick = () => {
		const bottom = 100001;
		const top = 99999999;
		filterTableByKm(bottom, top);
	};	
	$allKmButton.onclick = () => {
		const bottom = 0;
		const top = 99999999;
		filterTableByKm(bottom, top);
	};
};

function filterTableByKm(bottom, top) {
	for (i = 0; i < tr.length; i++) {
    		td = tr[i].getElementsByClassName("kilometers")[0];
    		if (td) {
      			txtValue = td.textContent || td.innerText;
      			txtValue = txtValue.replace(" km", "");
      			txtValue = parseFloat(txtValue);
     			if ( (bottom <= txtValue) && (txtValue <= top) )  {
        			tr[i].style.display = "";
      			} else {
        			tr[i].style.display = "none";
      			}
    		}
  		}
};

// Years filter
const $firstYearIntervalButton = document.querySelector("#firstyear");
const $secondYearIntervalButton = document.querySelector("#secondyear");
const $thirdYearIntervalButton = document.querySelector("#thirdyear");
const $fourthYearIntervalButton = document.querySelector("#fourthyear");
const $allYearButton = document.querySelector("#allyear");

if ( $firstKmIntervalButton ) {
	$firstYearIntervalButton.onclick = () => {
		const bottom = 2020;
		const top = 2022;
		filterTableByYear(bottom, top);
	};
	$secondYearIntervalButton.onclick = () => {
		const bottom = 2018;
		const top = 2020;
		filterTableByYear(bottom, top);
	};
	$thirdYearIntervalButton.onclick = () => {
		const bottom = 2016;
		const top = 2018;
		filterTableByYear(bottom, top);
	};
	$fourthYearIntervalButton.onclick = () => {
		const bottom = 999;
		const top = 2016;
		filterTableByYear(bottom, top);
	};
	$allYearButton.onclick = () => {
		const bottom = 999;
		const top = 9999;
		filterTableByYear(bottom, top);
	};			
};

function filterTableByYear(bottom, top) {
	for (i = 0; i < tr.length; i++) {
    		td = tr[i].getElementsByClassName("year")[0];
    		if (td) {
      			txtValue = td.textContent || td.innerText;
      			//txtValue = txtValue.replace(" km", "");
      			txtValue = parseFloat(txtValue);
     			if ( (bottom <= txtValue) && (txtValue <= top) )  {
        			tr[i].style.display = "";
      			} else {
        			tr[i].style.display = "none";
      			}
    		}
  		}
};

// Transmission filter
const $automaticButton = document.querySelector("#automatic");
const $manualButton = document.querySelector("#manual");
const $allTransmissionButton = document.querySelector("#alltransmission");

if ( $firstKmIntervalButton ) {
	$automaticButton.onclick = () => {
		const filter = "Automática";
		filterTableByTransmission(filter);
	};

	$manualButton.onclick = () => {
		const filter = "Manual";
		filterTableByTransmission(filter);
	};

	$allTransmissionButton.onclick = () => {
	for (i = 0; i < tr.length; i++) {
    		td = tr[i].getElementsByClassName("transmission")[0];
    		if (td) {
        		tr[i].style.display = "";
    		}
  		}
	};
};

function filterTableByTransmission(filter) {
	for (i = 0; i < tr.length; i++) {
    		td = tr[i].getElementsByClassName("transmission")[0];
    		if (td) {
      			txtValue = td.textContent || td.innerText;
     			if ( txtValue == filter )  {
        			tr[i].style.display = "";
      			} else {
        			tr[i].style.display = "none";
      			}
    		}
  		}
};

// Fuel filter
const $naftaButton = document.querySelector("#nafta");
const $naftaGncButton = document.querySelector("#naftagnc");
const $dieselButton = document.querySelector("#diesel");
const $allFuelButton = document.querySelector("#allfuel");

if ( $firstKmIntervalButton ) {
	$naftaButton.onclick = () => {
		const filter = "Nafta";
		filterTableByFuel(filter);
	};

	$naftaGncButton.onclick = () => {
		const filter = "Nafta/GNC";
		filterTableByFuel(filter);
	};

	$dieselButton.onclick = () => {
		const filter = "Diésel";
		filterTableByFuel(filter);
	};


	$allFuelButton.onclick = () => {
	for (i = 0; i < tr.length; i++) {
    		td = tr[i].getElementsByClassName("fuel")[0];
    		if (td) {
        		tr[i].style.display = "";
    		}
  		}
	};
};

function filterTableByFuel(filter) {
	for (i = 0; i < tr.length; i++) {
    		td = tr[i].getElementsByClassName("fuel")[0];
    		if (td) {
      			txtValue = td.textContent || td.innerText;
     			if ( txtValue == filter )  {
        			tr[i].style.display = "";
      			} else {
        			tr[i].style.display = "none";
      			}
    		}
  		}
};
