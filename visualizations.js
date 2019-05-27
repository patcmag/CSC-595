function MapVis() {

	var newMV = {

		drawMapVis: function (svg, mapdata) {

			var projection = d3.geoMercator()
				.scale(50000)
				.translate([76860, 40500]);

			var path = d3.geoPath().projection(projection);

			d3.json(mapdata, function (err, topology) {

		svg.selectAll("comm_areas")
                    .data(topojson.feature(topology, topology.objects.city).features)
                    .enter()
                    .append("path")
                    .attr("d", path)
                    .attr("fill", "lightblue")
                    .attr("stroke", "black")
                    .attr("stroke-width", "0.5px")

		.on("mouseover", function (d) {
                        var comm_name = d.properties.community;
                        // console.log(comm_name);
                        d3.select(this).style("fill", "yellow");
                        return document.getElementById('community_name').innerHTML=comm_name;

		})
		.on("mouseout", function () {
                        d3.select(this).style("fill", "lightblue");
                        return document.getElementById('community_name').innerHTML = null;
		});

		})
		}
	};
	return newMV;
}
