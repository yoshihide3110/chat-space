$(function(){
  function buildHTML(message){
    var content = message.content? `<p class="bottom-message__content">
                    ${message.content}
                  </p>` : "";

    var image = message.image? `<img src="${message.image}" class="bottom-message__image">` : "";

    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="top-message">
                    <div class="top-message__user-name">
                     ${message.user_name}
                    </div>
                      <div class="top-message__date">
                      ${message.date}
                      </div>
                  </div>
                  <div class="bottom-message">
                    <p class="bottom-message__content">
                     ${content}
                    </p>
                     ${image}
                  </div>
                </div>`
    return html
    }

function scrollMessage(){
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight }, 500, 'swing');
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
      $('.messages').append(html);
      $('#new_message').val('');
      scrollMessage();
      })
      .fail(function(){
      alert('error');
    })
      .always(function(){
        $('.form__submit').prop('disabled', false);
      })
  });
    var interval = setInterval(update,2000);
   function update(){
    if(window.location.href.match(/\/groups\/\d+\/messages/)){
      var message_id = $('.message:last').data('messageId');
      $.ajax({
        url: location.href.json,
        type: "GET",
        data: {id: message_id },
        dataType: 'json'
      })
      .done(function(data) {
        var insertHTML ='';
        data.forEach(function(message){
          if( message.id > message_id ){
            insertHTML += buildHTML(message);
            $('.message').append(insertHTML);
            scrollMessage();
          }
        });
      })
      .fail(function(json) {
        alert('自動更新失敗');
      });
   } else {
    clearInterval(interval);
    }
   }
});
