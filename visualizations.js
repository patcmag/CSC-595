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

	var url = "Boundaries - Community Areas (current).geojson";

	d3.json(url, function(err, geojson){
		console.log(geojson)
		var features = geojson.features;
		svg.selectAll("path").data(features).enter().append("path")
			.attr("d", path).attr("fill", "steelblue");
	})
})();