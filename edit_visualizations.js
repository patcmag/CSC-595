
function MapVis() {

	var newMV = {

		drawMapVis: function (svg, mapdata) {

			var central = [8, 32, 33]
			var farNorthSide = [1, 2, 3, 4, 9, 10, 11, 12, 13, 14, 76, 77]
			var farSouthEastSide = [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]
			var farSouthWestSide = [70, 71, 72, 73, 74, 75]
			var northSide = [5, 6, 7, 21, 22]
			var northWestSide = [15, 16, 17, 18, 19, 20]
			var southSide = [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 60, 69]
			var southWestSide = [56, 57, 58, 59, 61, 62, 63, 64, 65, 66, 67, 68]
			var westSide = [23, 24, 25, 26, 27, 28, 29, 30, 31]

			// var regions = [
			// 	[8, 32, 33],
			// 	[1, 2, 3, 4, 9, 10, 11, 12, 13, 14, 76, 77],
			// 	[44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55],
			// 	[70, 71, 72, 73, 74, 75],
			// 	[5, 6, 7, 21, 22],
			// 	[15, 16, 17, 18, 19, 20],
			// 	[34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 60, 69],
			// 	[56, 57, 58, 59, 61, 62, 63, 64, 65, 66, 67, 68],
			// 	[23, 24, 25, 26, 27, 28, 29, 30, 31],
			// ];
			// var colorscale = d3.scaleOrdinal().domain(regions)
			// .range(["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]);

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
					// .attr("fill", "lightblue")
					.attr("fill", function (d) {  
						var ca = d.properties.area_num_1;
						if (central.includes(parseInt(ca))) { return "#fbb4ae"; }
						if (farNorthSide.includes(parseInt(ca))) { return "#b3cde3"; }
						if (farSouthEastSide.includes(parseInt(ca))) { return "#ccebc5"; }
						if (farSouthWestSide.includes(parseInt(ca))) { return "#decbe4"; }
						if (northSide.includes(parseInt(ca))) { return "#fed9a6"; }
						if (northWestSide.includes(parseInt(ca))) { return "#ffffcc"; }
						if (southSide.includes(parseInt(ca))) { return "#e5d8bd"; }
						if (southWestSide.includes(parseInt(ca))) { return "#fddaec"; }
						if (westSide.includes(parseInt(ca))) { return "#f2f2f2"; }
						else return "black";

					})
                    .attr("stroke", "black")
                    .attr("stroke-width", "0.5px")

					.on("mouseover", function (d) {
						var comm_id = d.properties.area_num_1;
						//"area_num_1" is the property in the json that corresponds to 
						//community area number. 	

                        var comm_name = d.properties.community;
                        // console.log(comm_name);
						d3.select(this)
							.attr("stroke-width", "2.5px")
							.style("fill", "yellow");
						return document.getElementById('community_name').innerHTML=comm_name;
			
					})
					.on("mouseout", function () {
						// d3.select(this).style("fill", "lightblue");
						d3.select(this)
							.attr("stroke-width", "0.5px")
							.style("fill", function (d) {
							var ca = d.properties.area_num_1;
							if (central.includes(parseInt(ca))) { return "#fbb4ae"; }
							if (farNorthSide.includes(parseInt(ca))) { return "#b3cde3"; }
							if (farSouthEastSide.includes(parseInt(ca))) { return "#ccebc5"; }
							if (farSouthWestSide.includes(parseInt(ca))) { return "#decbe4"; }
							if (northSide.includes(parseInt(ca))) { return "#fed9a6"; }
							if (northWestSide.includes(parseInt(ca))) { return "#ffffcc"; }
							if (southSide.includes(parseInt(ca))) { return "#e5d8bd"; }
							if (southWestSide.includes(parseInt(ca))) { return "#fddaec"; }
							if (westSide.includes(parseInt(ca))) { return "#f2f2f2"; }
							else return "black";
						})
                        return document.getElementById('community_name').innerHTML = null;
					});

			})
		}
	};
	return newMV;
}