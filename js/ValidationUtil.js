/**
* name: ValidationUtil
* author: Ashish Gaikwad
* version: 1.0.0
* created: 28-09-2015 
*/

'use strict';

window.ValidationUtil = undefined;

/* IIFE notation to avoid polluting the global scope */
(function(){

	/*
	1. get input div
	2. iterate to get the input array list
	3. for each type run validation
	4. always assume data-content attribute will be available
	5. return error message based on type/id of each element
	*/

	/**
	* Dictionary object to hold all different types of matching patterns
	*/
	var matchingPatterns = {};

	//min 8 chars and alphanumeric
	matchingPatterns.name = /^[a-z0-9]{8,}/i; 

	// standard email containing atleast one @ and .
	matchingPatterns.email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

	// minimum 10 or max 12 digits including the + symbol
	matchingPatterns.mobile = /^([+0-9]{1,3})?([0-9]{10,11})$/i;

	// must contain http and .com
	matchingPatterns.website = /^[http://]+[www]?.[0-9a-z_.]+.[a-z.]{2,5}$/i;

	/**
	* Private function to perform validation and sanity test 
	*/
	function validateItem(element) {

		if(element) {

			var value = element.value.trim();
			var contentType = element.dataset.content;
			var result = {type: contentType, message : undefined};

			if(!value || value.length == 0) {
				result.message = contentType + " field is required";
			}
			else {
				result.message = matchingPatterns[contentType].test(value) ? "success" : "invalid " + contentType + " format";
			}

			return result;
		}
		else {
			var errMsg = "Please pass a valid element. Currently passed input is " + element;
			throw errMsg;
		}
	}

	/**
	* Constructor function to Validation utility 
	*/
	ValidationUtil = function() {};

	/**
	* Public function declaration for Validation utility 
	*/
	ValidationUtil.prototype.validateInputs = function(formId) {
		var inputElemsArray = document.getElementById(formId).getElementsByTagName('input');
		var resultArray = [];
		for (var i = 0; i < inputElemsArray.length; i++) {
			var input = inputElemsArray[i];
			var resultObj = validateItem(input);
			resultArray.push(resultObj);
		};
		return resultArray;
	};

})();




