(function(){
	var margin = {top: 50, left: 50, right: 50, bottom: 50},
		height = 400 - margin.top - margin.bottom,
		width = 800 - margin.left - margin.right;

	var width = 690;
	var height = 500;

	var svg = d3.select("body")
		.append("svg");
		
	var projection = d3.geoMercator()
		.scale((width/2/Math.PI)*1800)
		.translate([(width/2)*878.3, (height/2)*639]);
	var path = d3.geoPath().projection(projection);

	var url = "chicity.geojson";

	d3.json(url, function(err, geojson){
		console.log(geojson);
		var features = geojson.features;
		svg.selectAll("path").data(features).enter().append("path")
			.attr("d", path).attr("fill", "steelblue")
			.call(function(d) {console.log(projection(d))});

		aa = [41.892654, -87.610168];
		bb = [41.878876, -87.635918];

		var points = svg.append("g");
		points.selectAll("path")
			.data([aa,bb]).enter()
			.append("circle")
			.attr("cx", function(d) {console.log(projection(d)); return projection(d)[0]/1800;})
			.attr("cy", function(d) {return projection(d)[1]/1800;})
			.attr("r", "3px")
			.attr("fill", "red");
	})
})();