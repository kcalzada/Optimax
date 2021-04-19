$(document).on('click','table tbody tr',function(){
  $("#schedule-modal").modal("show");

  // modal-title change
  var text = $(this).text().split("\n");
  var name = text[1] + text[2];
  $(".modal-title").html(name);

  // modal body change
  var sched = '';
  if(text[5].includes('Cebu City')){
    sched = '9:30 AM - 10:30 AM';
  }else if(text[5].includes('Mandaue City')){
    sched = '10:30 AM - 11:30 AM';
  }else if(text[5].includes('Consolacion')){
    sched = '11:30 AM - 12:30 PM';
  }else if(text[5].includes('Lilo-an')){
    sched = '12:30 PM - 1:30 PM';
  }else if(text[5].includes('Compostela')){
    sched = '1:30 PM - 2:30 PM';
  }else if(text[5].includes('Danao City')){
    sched = '2:30 PM - 3:30 PM';
  }
  $(".modal-body").html(sched);
})
