$(function(){

  const MSG_TEXT_MAX = '20文字以内で入力してください';
  const MSG_EMPTY ='入力必須です';
  const MSG_EMIL_TYPE ='emailの形式ではありません。';
  const MSG_TEXTAREA_MAX = '100文字以内で入力してください。';

//イベント1 name
$(".valid-text").keyup(function(){
  var form_g = $(this).closest('.form-group');
  if ($(this).val().length > 20){
    form_g.removeClass('has-success').addClass('has-error');
    form_g.find('.help-block').text(MSG_TEXT_MAX);
  }else if($(this).val().length === 0){
    form_g.removeClass('has-success').addClass('has-error');
    form_g.find('.help-block').text(MSG_EMPTY);
  }else{
    form_g.removeClass('has-error').addClass('has-success');
    form_g.find('.help-block').text('');
  }
});
//イベント２ email
$(".valid-email").keyup(function(){
  var form_g = $(this).closest('.form-group');
  if($(this).val().length === 0){
    form_g.removeClass('has-success').addClass('has-error');
    form_g.find('.help-block').text(MSG_EMPTY);
  }else if($(this).val().length > 50 || !$(this).val().match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
    form_g.removeClass('has-success').addClass('has-error');
    form_g.find('.help-block').text(MSG_EMIL_TYPE);
  }else{
    form_g.removeClass('has-error').addClass('has-success');
    form_g.find('.help-block').text('');
  }
});
//イベント4
$(".format-number").keyup(function(){
  var form_g = $(this).closest('.form-group');
  if($(this).val().length === 0){
    form_g.removeClass('has-success').addClass('has-error');
    form_g.find('.help-block').text(MSG_EMPTY);
  }
})
//イベント３ message
$(".valid-textarea").keyup(function(){
  var form_g = $(this).closest('.form-group');
  if($(this).val().length === 0){
    form_g.removeClass('has-success').addClass('has-error');
    form_g.find('.help-block').text(MSG_EMPTY);
  }else if($(this).val().length > 100){
    form_g.removeClass('has-success').addClass('has-error');
    form_g.find('.help-block').text(MSG_TEXTAREA_MAX);
  }else{
    form_g.removeClass('has-error').addClass('has-success');
    form_g.find('.help-block').text('');
  }
});
});


//電話番号のチェック
$(function(){
  $(".format-number").change(function(){
    var format_before = $(this).val();
    format_before = format_before.replace('-','');
    var format_after = format_before.replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){ return String.fromCharCode(s.charCodeAt(0)-0xFEE0)  });
  if(format_after.length === 11){
    $(this).val(format_after.substr(0,3)+'-'+format_after.substr(3,4)+'-'+format_after.substr(7,4));
  }else{
    $(this).val(format_after);
  }
});
});


//文字カウント
window.addEventListener('DOMContentLoaded',
  function(){
    var node = document.getElementById('count-text');
    node.addEventListener('keyup',function(){
      var count = this.value.length
      var counterNode = document.querySelector('.show-count-text');
      counterNode.innerText = count;
   },false);
  },false
);

//特定文字カウント
window.addEventListener('DOMContentLoaded',function(){
  var node = document.querySelector('#count-text');
  node.addEventListener('keyup',function(e){
    var v=e.target.value
    var count = v.length;
    var counterNode = document.querySelector('.show-count-text');
    counterNode.textContent = count;
    var targetStr = "プログラミング";
    var count = v.split(targetStr).length -1;
    var counterNode = document.querySelector('.show-count-text2');
    counterNode.textContent = count;
  });
});



//window.addEventListener('DOMContentLoaded',
//  function(){
//    var node = document.getElementById('count-text');
//    node.addEventListener('keyup',function(){
//      var count = this.value.length
//      var ex = /webukatu/g;  // 正規表現
//      var arr = str.match(ex);
//      var counterNode = document.querySelector('.show-count-text2');
//      counterNode.innerText = count;
//    },false);
//  },false
//);
//var str = 'count-text';
