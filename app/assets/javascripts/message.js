$(function(){
  function buildHTML(message){
<<<<<<< HEAD:app/assets/javascripts/channels/message.js
    var content = message.body? `<p class="bottom-message__content">
                    ${message.body}
                  </p>` : "";

    var image = message.image? `<img src="${message.image}" class="bottom-message__image">` : "";

    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="top-message">
=======
    var html = `<div class="upper-message">
>>>>>>> master:app/assets/javascripts/message.js
                    <div class="top-message__user-name">
                     ${message.user_name}
                    </div>
<<<<<<< HEAD:app/assets/javascripts/channels/message.js
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
=======
                    <div class="bottom-message">
                    ${message.body}
                    ${message.image}
                  </div>
                </div>`
    return html
  }

  $('#new_message').on('submit', function(e){
>>>>>>> master:app/assets/javascripts/message.js
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
        $('.form__submit').removeAttr('disabled');
      })
  });
    var interval = setInterval(update,5000);
   function update(){
    if(window.location.href.match(/\/groups\/\d+\/messages/)){
      var message_id = $('.message:last').data('messageId');
      console.log(message_id)
      $.ajax({
        url: location.href.json,
        type: "GET",
        data: {message: {id: message_id}},
        dataType: 'json'
      })
      .done(function(data) {
        var insertHTML ='';
        data.forEach(function(message){
          if( message.id > message_id ){
            insertHTML += buildHTML(message);
            $('.messages').append(insertHTML);
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
