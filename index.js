const calculateTemp = () =>{
    const numberTemp = document.querySelector("form#tempCalc  input#temp").value;
    //const selectedTemp = documentquerySelector("form#tempCalc select#temp_diff")[documentquerySelector("form#tempCalc select#temp_diff").selectedIndex];
    console.log(numberTemp);
    //console.log(selectedTemp);

    const tempSelected = document.getElementById("temp_diff");
    const selected = tempSelected.options[tempSelected.selectedIndex].value;
    console.log(selected);

    if(selected == "cel"){
        const result = Math.round((numberTemp-32) * 0.555);
        document.querySelector("#resultContainer").innerHTML = `= ${result} C`;
    }else{
        const result = Math.round((numberTemp)*1.8 + 32);
        document.querySelector("#resultContainer").innerHTML = `= ${result} F`;
    }
}