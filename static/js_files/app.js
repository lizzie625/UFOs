// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Function of populate data into html table
function buildTable(data) {
    // init table data
    tbody.html('');

    // first array loop for <tr>
    data.forEach((dataRow) => {
        let row = tbody.append('tr'); //html
        //second loop for <td>
        Object.values(dataRow).forEach((val) =>{
            let cell = row.append('td'); //html
            // d3 funtion 
            cell.text(val);
        });
    });

};


// 1. Create a variable to keep track of all the filters as an object.
var filters = {
};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let changedElementValue = changedElement.property("value");

    // 4c. Save the id of the filter that was changed as a variable.
    let inputID = changedElement.attr("id");
  
     // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
	if (element_changed_value) {
        filters[id_filter]=element_changed_value;
      }
      else {
        delete filters[id_filter];
      } 
  
      // 6. Call function to apply all filters and rebuild the table
      filterTable();
    
    }
    
    // 7. Use this function to filter the table when data is entered.
    function filterTable() {
    
      // 8. Set the filtered data to the tableData.
      let filteredData = tableData;
    
      // 9. Loop through all of the filters and keep any data that
      // matches the filter values
       Object.entries(filters).forEach(([key,value])=> {
        filteredData =  filteredData.filter(row => row[key]=== value);
      }); 
    
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
};
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change",updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);