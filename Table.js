

function Table (jsonData) {
	this.jsonData = jsonData;
	this.option = {
		showColumn: false,
		showLine: false,
		showNumber: false,
		mergeSameColumn: false,
		align: false,
	};
	// this.option{
	// 	showCol
	// }
}

Table.prototype.getTable = function(option) {
	if (option) {
		// for(var key in option){
// 				if()
		// } 
		// jquery extend()
		// debugger;
		// 옵션 원하는 것만 주기
		this.option = option;
	};

	var table = document.createElement("table");
	var columns = Object.keys(jsonData[0])
	
	if (option.showLine) {
		// table.classList.add("showLine");
		table.setAttribute("border", "1");
		// table border, css로! 직접 코딩하기
	};
	
	if(option.showColumn){
		this.inputColumn(table, columns);
	};

	jsonData.map(function(obj) {
		var tr = document.createElement("tr");
		columns.map(function (key) {
			var td = document.createElement("td");
			if(option.align){
				td.setAttribute("align", option.align);
				// css에게 맡기기
			}
			td.innerText = obj[key];
			tr.appendChild(td);
		});
		table.appendChild(tr);
	});
	return table;
};

Table.prototype.inputColumn = function(table, columns) {
	// thead tfoot tbody 웹표준 테이블 코딩 하는 방법
	var tr = document.createElement("tr");
	columns.map(function(obj) {
		var th = document.createElement("th");
		th.innerText = obj;
		tr.appendChild(th);
	});
	table.appendChild(tr);
};

// Table.prototype.getUl = function(option) {
// 	this.option = option;

// 	var ul = document.createElement("ul");
// 	var columns = Object.keys(jsonData[0]);
// 	// jsonData.
	
// };

// Table.prototype.getCanvas = function(option) {
// 	this.option = option;	
	
// };
