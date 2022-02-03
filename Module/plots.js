function init() {
    var selector = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {
        console.log(data);
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        });
        var metadata = data.metadata;
        defaultSelection(metadata);
    })
}

function defaultSelection(sample) {
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    PANEL.append("h6").text("ID: " + sample[0].id);
    PANEL.append("h6").text("ETHNICITY: " + sample[0].ethnicity);
    PANEL.append("h6").text("GENDER: " + sample[0].gender);
    PANEL.append("h6").text("AGE: " + sample[0].age);
    PANEL.append("h6").text("LOCATION: " + sample[0].location);
    PANEL.append("h6").text("BBTYPE: " + sample[0].bbtype);
    PANEL.append("h6").text("WFREQ: " + sample[0].wfreq);
}

function optionChanged(newSample) {
    buildMetadata(newSample);
    // buildCharts(newSample);
}

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");

        PANEL.html("");
        PANEL.append("h6").text("ID: " + result.id);
        PANEL.append("h6").text("ETHNICITY: " + result.ethnicity);
        PANEL.append("h6").text("GENDER: " + result.gender);
        PANEL.append("h6").text("AGE: " + result.age);
        PANEL.append("h6").text("LOCATION: " + result.location);
        PANEL.append("h6").text("BBTYPE: " + result.bbtype);
        PANEL.append("h6").text("WFREQ: " + result.wfreq);
    });
}

init();