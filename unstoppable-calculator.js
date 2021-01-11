// UNSTOPPABLE GIVING CALCULATOR 
// COMPASS CHRISTIAN CHURCH

// Execute calculate function on entry to these fields
$(function(){ 
	$('#normal-giving').on('keyup',function(){
  	calculate();
  });
  $('#expanded-giving').on('keyup',function(){
  	calculate();
  });
  $('#stored-resources').on('keyup',function(){
  	calculate();
  });

});

// Calculate Function

function calculate(){
    // Assign HTML fields to variables
    var fieldnormal= $('#normal-giving').val();
    var fieldexpanded= $('#expanded-giving').val();
    var fieldstored = $('#stored-resources').val();
  
    // Store HTML field variables as string
    var normal = parseFloat( fieldnormal );
    var expanded = parseFloat( fieldexpanded );
    var stored = parseFloat( fieldstored );
    
    // Subtotal Calculation as variable
    var subtotal = normal+expanded;
    // Two Year Calculation as variable
    var twoyears = subtotal*2;
    
    // Determine if stored resources field exists and if so, add it to the total commitment number.
    if(!isNaN(stored)) {
  	var commitment = twoyears+stored;
  }
  else {
  	var commitment = twoyears;
  }
  
  // Fill HTML form field values if there are numbers on normal and expanding giving fields
  if(!isNaN(normal) && !isNaN(expanded)) {
  $('input[id="2yrs"]').val(subtotal);
  $('input[id="2yrs-total"]').val(twoyears);
  $('#unstoppable-commitment').html('$' + commitment);
  $('input[id="ctl00_main_ctl23_ctl02_ctl06_tbTotalAmount"]').val(commitment);
  $('input[id="ctl00_main_ctl09_ctl02_ctl00_tbTotalAmount"]').val(commitment);
  }
  else {
  	$('input[id="2yrs"]').val("");
  	$('input[id="2yrs-total"]').val("");
  	$('#unstoppable-commitment').html("");
  	$('input[id="ctl00_main_ctl23_ctl02_ctl06_tbTotalAmount"]').val("");
  	$('input[id="ctl00_main_ctl09_ctl02_ctl00_tbTotalAmount"]').val("");
  }
}
