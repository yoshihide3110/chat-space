$(function(){
  function buildHTML(message){
    var html = `<div class="upper-message">
                    <div class="top-message__user-name">
                     ${message.user_name}
                     </div>
                    <div class="top-message__date">
                    ${message.creted_at}
                    </div>
                    <div class="bottom-message">
                    ${message.body}
                    ${message.image}
                  </div>
                </div>`
    return html
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    console.log(this)
    var formData = new FormData(this);
    var url= $(this).attr('action')
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
      $('.new_message').append(html);
      $('form__message').val('');
      $('form__submit').prop('disabled', false);
      })
    .fail(function(){
      alert('error');
    })
  })
})

