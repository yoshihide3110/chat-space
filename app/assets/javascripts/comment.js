$(function(){
  function buildHTML(comment){
    var HTML = `.chat-content_create,
                class =".chat-content_create__input"
                .chat-content_create__text,
                class= ".chat-content_create__text__image"
                class= ".chat-content_create__submit"
  `
    return html
  }
  $('#chat-content_create__submit').on('onSubmit', function(e){
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
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-content_create').append(html)
      $('.testbox').val('')
    .fail(function(){
      alert('error');
    })
  })
});
