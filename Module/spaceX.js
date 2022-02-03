// const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json(url).then(spaceXResults => 
//     spaceXResults.map(parameter =>
//         console.log(parameter.location.latitude + ", " + parameter.location.longitude)
//     )
// );

d3.json("samples.json").then(function(data){
    console.log(data);
});