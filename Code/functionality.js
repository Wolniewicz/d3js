var jsonCircles = [
  {
   "x_axis": 30,
   "y_axis": 30,
   "radius": 20,
   "color" : "green"
  }, {
   "x_axis": 70,
   "y_axis": 70,
   "radius": 20,
   "color" : "purple"
  }, {
   "x_axis": 110,
   "y_axis": 100,
   "radius": 20,
"color" : "red"
  }];

var svgContainer = d3.select("body").append("svg")
                                   .attr("width", 200)
                                    .attr("height", 200);
var circles = svgContainer.selectAll("circle")
                          .data(jsonCircles)
                          .enter()
                         .append("circle");