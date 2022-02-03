let dropdownMenu = d3.select("#selectOption");
dropdownMenu.on("change", updatePage);

function updatePage() {
  let selectedOption = d3.event.target.value;

  console.log(selectedOption);
};