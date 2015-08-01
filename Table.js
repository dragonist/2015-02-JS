(function () {
	var Util = {
		classAdd : function (element, classname) {
			var classes = element.classname;
			classes += " "+ classname;
			element.classname = classes;
		},
		extend : function (oldOne, newOne) {
			for(var key in newOne){
				oldOne[key] = newOne[key];
			}
		}
	};

	function Table (jsonData) {
		this.jsonData = jsonData;
		this.option = {
			showColumn: false,
			showLine: false,
			showNumber: false,
			mergeSameColumn: false,
			align: false,
		};
	}

	Table.prototype.getTable = function(option) {
		if (option) {
			Util.extend(this.option, option);
			// this.option = option;
		};
		debugger;

		var table = document.createElement("table");
		var columns = Object.keys(jsonData[0]);
		
		if (this.option.showLine) {
			table.classList.add("showLine");
		};
		
		if (this.option.align){
			table.classList.add("align:"+option.align);
		};

		if (this.option.showColumn){
			this.inputColumn(table, columns);
		};

		var tbody = document.createElement("tbody");
		jsonData.map(function(obj) {
			var tr = document.createElement("tr");
			columns.map(function (key) {
				var td = document.createElement("td");
				
				td.innerText = obj[key];
				tr.appendChild(td);
			});
			tbody.appendChild(tr);
		});
		table.appendChild(tbody);
		return table;
	};

	Table.prototype.inputColumn = function(table, columns) {
		var tr = document.createElement("tr");
		columns.map(function(obj) {
			var th = document.createElement("th");
			th.innerText = obj;
			tr.appendChild(th);
		});
		var thead = document.createElement("thead");
		thead.appendChild(tr);
		table.appendChild(thead);
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
	window.TableDragonist = Table;
})();
