var config = {
	type: 'line',
	data: {
		datasets: [{
			data: [10, 30, 200, 900, 3000],
			borderColor: [
				"#F7464A",
			],
			label: "Number of Visitors",
		}],
		labels: [
			"January",
			"Febrary",
			"March",
			"April",
			"May"
		]
	},
	options: {
		responsive: true
	}
};

var ctx = document.getElementById("visitors").getContext("2d");
window.myLine = new Chart(ctx, config);
/* Pie Chart */
var config = {
	type: 'pie',
	data: {
		datasets: [{
			data: [300, 50, 100, 80],
			backgroundColor: [
				"#F7464A",
				"#46BFBD",
				"#FDB45C",
				"#949FB1",
				"#4D5360",
			],
		}],
		labels: [
			"Chat",
			"Blog",
			"Events",
			"Setting",
		]
	},
	options: {
		responsive: true
	}
};

var ctx = document.getElementById("mostUsed").getContext("2d");
window.myPie = new Chart(ctx, config);