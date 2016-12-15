
/**
* This file would contain all the script code to be used in the index file.
* We can enhance this code further to update the individual form elements with css and errors etc.
*/

function validateForm() {

	var vu = new ValidationUtil();
	var res = vu.validateInputs('demoForm');
	var resultString = "";
	for (var i = 0; i < res.length; i++) {
		resultString += "<tr><td> " + res[i].type + " </td><td> " + res[i].message + "</td></tr>";
	};
	document.getElementById('result-table').innerHTML = resultString;
	return false;
}