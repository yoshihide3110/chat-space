$(function(){
  setInterval(function){
    $.ajax({
      url:location.href.json,
    })
    .done(function(json){
    var insertHTML = '';
    json.message.forEach(function(message){
      interHTML += buildHTML(message);
    });
    $('.chat-wrapper').html(insertHTML);
    })
    .fail(function(data){
      alert('自動更新に失敗しました')
    });
  } else {
    clearInterval(interval);
  }, 5000);
});
  function buildHTML(message){
    var insertImage = '';
    if(message.image.url){
      insertImage = '<imag src="${message.image.url}">';
    }
    var html = `<div class="upper-message">
                    <div class="top-message__user-name">
                     ${message.user_name}
                     </div>
                    <div class="top-message__date">
                    ${message.creted_at}
                    </div>
                    <div class="bottom-message">
                    ${message.body}
                    ${insertImage}
                  </div>
                </div>`
    return html
  }


  $('#new_message').on('submit', function(e){
    e.preventDefault();
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

