$(function(){
  $('messages#create').on('on submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
  })
})
