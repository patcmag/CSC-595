(function(){
	var margin = {top: 50, left: 50, right: 50, bottom: 50},
		height = 400 - margin.top - margin.bottom,
		width = 800 - margin.left - margin.right;

	var width = 690, height = 500, centered;

	var svg = d3.select("#map")
		.append("svg")
		.attr("height", height)
		.attr("width", width);

	var projection = d3.geoMercator()
		.scale(50000)
		.translate([76860, 40500]);

	var path = d3.geoPath().projection(projection);

	var url = "city.topojson";


	d3.json(url, function(err, topology){
		console.log("topojson", topology)
		var geojson = topojson.feature(topology, topology.objects.city);
		console.log("geojson", geojson)
		console.log("community", geojson.features)


		svg.selectAll("path").data(geojson.features).enter().append("path")
			.attr("d", path).attr("fill", "steelblue")
			.attr("d", path).attr("stroke", "black").attr("stroke-width", "0.2px")

			.on("mouseover", function(){
				d3.select(this).style("fill", "yellow")
				.call(function (d){
					console.log(d);
				})
			})
			.on("mouseout", function(){
				d3.select(this).style("fill", "steelblue");
			})

	})
})();