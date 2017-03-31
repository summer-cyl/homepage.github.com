var tdList = document.querySelectorAll("td");

function change_color(e) {
	var item = e.target;
	item.style.backgroundColor = "red";
};

function changeToDate(e) {
	var today = new Date();
	var y = today.getFullYear();
	var m = today.getMonth() + 1;
	var d = today.getDate();
	var item = e.target;
	item.innerHTML = y + "-" + m + "-" + d;

};

function addRow() {
	// var tbody = document.querySelector("tbody");
	// var tr = document.createElement("tr");
	// var td = document.createElement("td");
	// var td1 = document.createElement("td");
	// var tb = document.querySelector("#tb1");
	// tr.appendChild(td);
	// tr.appendChild(td1);
	// tbody.appendChild(tr);
	// tb.appendChild(tbody);

	var c = document.getElementById("tb1");
	var r = c.insertRow(3);
	var c1 = r.insertCell(0) ;
	var c2 = r.insertCell(1);
};

function deleteRow() {
	var trList = document.querySelectorAll("tr");
	trList[1].parentNode.removeChild(trList[1]);
};

function showLocate(e) {
	x = e.clientX;
	y = e.clientY;
	var item = e.target;
	item.innerHTML = "X: " + x + ", Y: " + y;
};

function openWeb() {
	window.open("http://www.taobao.com");
};


for (i = 0; i < tdList.length; i++) {
	tdList[0].addEventListener("click", change_color);	
	tdList[1].addEventListener("click", changeToDate);
	tdList[2].addEventListener("click", addRow);
	tdList[3].addEventListener("click", deleteRow);
	tdList[4].addEventListener("click", showLocate);
	tdList[5].addEventListener("click", openWeb);

}




