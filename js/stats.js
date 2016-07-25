/* Line Graph */

var config = {
	type: 'line',
	data: {
		datasets: [{
			data: [10, 1000, 20000, 90000, 300000],
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
		responsive: true,
		animation: {
			duration: 3000
		}
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
		responsive: true,
		animation: {
			duration: 3000
		}
	}
};

var ctx = document.getElementById("mostUsed").getContext("2d");
window.myPie = new Chart(ctx, config);

/* Bar Chart */
var config = {
	type: 'bar',
	data: {
		labels: ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"],
		datasets: [{
			label: "Testing Bar Graph",
			data: [300, 50, 200, 80, 100, 400],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
			borderWidth: 1,
		}]
	},
	options: {
		responsive: true ,
		scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
		animation: {
			duration: 3000
		}
	}
};

var ctx = document.getElementById("idk").getContext("2d");
window.myBarChart = new Chart(ctx, config);