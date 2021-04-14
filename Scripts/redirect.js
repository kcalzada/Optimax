$(document).on('click','table tbody tr',function(){
  $("#schedule-modal").modal("show");
  var text = $(this).text().split("\n");

  var name = text[1] + text[2];
  console.log(name);
  $(".modal-title").html(name);
})
