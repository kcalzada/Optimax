$(document).on('click','table tbody tr',function(){
  $("#schedule-modal").modal("show");

  // modal-title change
  var text = $(this).text().split("\n");
  var name = text[1] + text[2];
  $(".modal-title").html(name);

  // modal body change
  var schedMWF = '';
  var schedTTH = '';
  if(text[5].includes('Cebu City')){
    schedMWF = '9:30 AM - 10:30 AM : MWF';
    schedTTH = '10:30 AM - 11:30 AM : TTH';
  }else if(text[5].includes('Mandaue City')){
    schedMWF = '10:30 AM - 11:30 AM : MWF';
    schedTTH = '11:30 AM - 12:30 AM : TTH';
  }else if(text[5].includes('Consolacion')){
    schedMWF = '11:30 AM - 12:30 PM : MWF';
    schedTTH = '12:30 AM - 1:30 PM : TTH';
  }else if(text[5].includes('Lilo-an')){
    schedMWF = '12:30 PM - 1:30 PM : MWF';
    schedTTH = '1:30 AM - 2:30 PM : TTH';
  }else if(text[5].includes('Compostela')){
    schedMWF = '1:30 PM - 2:30 PM : MWF';
    schedTTH = '2:30 AM - 3:30 PM : TTH';
  }else if(text[5].includes('Danao City')){
    schedMWF = '2:30 PM - 3:30 PM : MWF';
    schedTTH = '3:30 AM - 3:30 PM : TTH';
  }
  $(".modal-time-mwf").html(schedMWF);
  $(".modal-time-tth").html(schedTTH);
})
