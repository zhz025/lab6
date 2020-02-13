'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	$.get("/project/"+idNumber, function(result){
	console.log(result.id);
	var title = "<p>"+result.title+"</p >"+"<br>"+result.date+"<br>";
	var photo = "< img src="+"'"+result.image+"'"+"class=detailsImage><br>";
	var summary = result.summary; 
	$('.project#project'+result.id+" .details").html(title+photo+summary);
});
	console.log("User clicked on project " + idNumber);
}

function callback(result){
	
}
