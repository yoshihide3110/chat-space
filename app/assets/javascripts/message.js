$(function(){
  function buildHTML(message){
    var html = `<div class="top-message">
                  <div class="top-message__user-name">
                     ${message.user.name}
                   </div>
                  <div class="top-message__date">
                    ${message.creted_at}
                  </div>
                  <div class="bottom-meesage">
                    ${body}
                    ${image}
                  </div>
                </div>`
    return html
  }
function downFunc() {
  $("#message_body").animate({top: "200px"}, 1000, "swing");
}
  $('#message_body').on('Submit', function(e){
    e.preventDefault();
    console.log(this)
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax ({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.form_submit').val('');
  })
    .fail(function(){
      alert('error');
  })
  })
});
