updateTime();
updateDate();
setInterval(updateTime, 1000);

function updateTime() {
	let now = new Date();
	let m = now.getMinutes().toString();
	let h = now.getHours().toString();
	
	
	var dd = "am";
	var hh = h;
	

	if (m.length === 1) m = "0"+m;
	if (h.length === 1) h = "0"+h;
	
	
	if (h >= 12) {
		h = hh - 12;
		dd = "pm";
	}
	if (h == 0) {
		h = 12;
	}
	

	let output = hh + ":" + m + dd;

	document.getElementById("current-time").innerHTML = output;
}

function updateDate() {
	
	let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "november", "december"];

	let now = new Date();
	let d = now.getDate();
	let m = now.getMonth()+1;
	let y = now.getFullYear();
	let w = now.getMonth();

	if (d.length === 1) d = "0"+d;
	if (m.length === 1) m = "0"+m;
	if (y.length === 1) y = "0"+y;
	
	let output = d + " " + months[w] + " " + y;

	document.getElementById("date").innerHTML = output;
}