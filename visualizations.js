function MapVis() {

	var newMV = {

		drawMapVis: function (svg, mapdata) {

			var projection = d3.geoMercator()
				.scale(50000)
				.translate([76860, 40500]);

			var path = d3.geoPath().projection(projection);

			d3.json(mapdata, function (err, topology) {
				console.log("topojson", topology)
				var geojson = topojson.feature(topology, topology.objects.city);
				console.log("geojson", geojson)
				console.log("community", geojson.features)


				svg.selectAll("path").data(geojson.features).enter().append("path")
					.attr("d", path).attr("fill", "steelblue")
					.attr("d", path).attr("stroke", "black").attr("stroke-width", "0.2px")

					.on("mouseover", function () {
						d3.select(this).style("fill", "yellow")
							.call(function (d) {
								console.log(d);
							})
					})
					.on("mouseout", function () {
						d3.select(this).style("fill", "steelblue");
					});

			})
		}
	};
	return newMV;
}
