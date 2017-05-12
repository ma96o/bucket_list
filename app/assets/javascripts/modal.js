$(function() {
  $('#edit_list').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); //モーダルを呼び出すときに使われたボタンを取得
  var recipientTitle = button.data('title'); //data-whatever の値を取得
  var recipientId = button.data('id');
  //Ajaxの処理はここに

  var modal = $(this);  //モーダルを取得
  //modal.find('.modal-title').text(recipientTitle) //モーダルのタイトルに値を表示
  modal.find('.modal-body input#list_title').val(recipientTitle);
  modal.find('.modal-body input#hidden').val(recipientId); //inputタグにも表示
  });

  $('#trash_item').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); //モーダルを呼び出すときに使われたボタンを取得
  var recipientTitle = button.data('title'); //data-whatever の値を取得
  var recipientId = button.data('id');

  //Ajaxの処理はここに

  var modal = $(this);  //モーダルを取得
  modal.find('.modal-title').text(recipientTitle); //モーダルのタイトルに値を表示
  modal.find('.modal-body input#hidden').val(recipientId); //inputタグにも表示
  });

  $('#success_item').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); //モーダルを呼び出すときに使われたボタンを取得
  var recipientTitle = button.data('title'); //data-whatever の値を取得
  var recipientId = button.data('id');
  //Ajaxの処理はここに

  var modal = $(this);  //モーダルを取得
  modal.find('.modal-title').text(recipientTitle); //モーダルのタイトルに値を表示
  modal.find('.modal-body input#hidden').val(recipientId); //inputタグにも表示
  });

  $('#edit_item').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); //モーダルを呼び出すときに使われたボタンを取得
  var recipientTitle = button.data('title'); //data-whatever の値を取得
  var recipientId = button.data('id');
  var recipientComment = button.data('comment');
  var recipientDeadline = button.data('deadline');
  //Ajaxの処理はここに
  var recipientPriority = button.data('priority');

  var modal = $(this);  //モーダルを取得
  //modal.find('.modal-title').text(recipientTitle) //モーダルのタイトルに値を表示
  modal.find('.modal-title').text(recipientTitle);
  modal.find('.modal-body input#hidden').val(recipientId); //inputタグにも表示
  modal.find('.modal-body input#comment').val(recipientComment);
  modal.find('.modal-body input#deadline').val(recipientDeadline);
  modal.find('.modal-body div.starRating input').val(recipientPriority);
  });

  $('#show_item').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); //モーダルを呼び出すときに使われたボタンを取得
  var recipientTitle = button.data('title'); //data-whatever の値を取得
  var recipientId = button.data('id');
  var recipientComment = button.data('comment');
  var recipientDeadline = button.data('deadline');
  var recipientStatus = button.data('status');
  var recipientPriority = button.data('priority');
  console.log('hgoe');

  //Ajaxの処理はここに

  var modal = $(this);  //モーダルを取得
  //modal.find('.modal-title').text(recipientTitle) //モーダルのタイトルに値を表示
  modal.find('.modal-title').text(recipientTitle);
  modal.find('.modal-body h4#item_name').text(recipientTitle);
  // modal.find('.modal-body input#hidden').val(recipientId) //inputタグにも表示
  modal.find('.modal-body p#item_comment').text(recipientComment);
  modal.find('.modal-body span#item_deadline').text(recipientDeadline);
  modal.find('.modal-body span#status').text(recipientStatus);
  modal.find('.modal-body img#wkwk').attr("src", "#");
  });

  $('#item_success').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); //モーダルを呼び出すときに使われたボタンを取得
  var recipientTitle = button.data('title'); //data-whatever の値を取得
  var recipientId = button.data('id');
  var recipientComment = button.data('comment');
  var recipientCreated = button.data('created');
  //Ajaxの処理はここに
  var recipientPriority = button.data('priority');

  var modal = $(this);  //モーダルを取得
  //modal.find('.modal-title').text(recipientTitle) //モーダルのタイトルに値を表示
  modal.find('.modal-title').text(recipientTitle);
  modal.find('.modal-body h4#item_name').text(recipientTitle);
  // modal.find('.modal-body input#hidden').val(recipientId) //inputタグにも表示
  modal.find('.modal-body p#item_comment').text(recipientComment);
  modal.find('.modal-body span#item_created').text(recipientCreated);
  modal.find('.modal-body img#wkwk').attr("src", "#");
  });

  $('#item_trash').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); //モーダルを呼び出すときに使われたボタンを取得
  var recipientTitle = button.data('title'); //data-whatever の値を取得
  var recipientId = button.data('id');
  var recipientComment = button.data('comment');
  var recipientCreated = button.data('created');
  //Ajaxの処理はここに
  var recipientPriority = button.data('priority');

  var modal = $(this);  //モーダルを取得
  //modal.find('.modal-title').text(recipientTitle) //モーダルのタイトルに値を表示
  modal.find('.modal-title').text(recipientTitle);
  modal.find('.modal-body h4#item_name').text(recipientTitle);
  // modal.find('.modal-body input#hidden').val(recipientId) //inputタグにも表示
  modal.find('.modal-body p#item_comment').text(recipientComment);
  modal.find('.modal-body span#item_created').text(recipientCreated);
  modal.find('.modal-body img#wkwk').attr("src", "#");
  });

  $('#edit_trash').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); //モーダルを呼び出すときに使われたボタンを取得
  var recipientTitle = button.data('title'); //data-whatever の値を取得
  var recipientComment = button.data('comment');
  var recipientId = button.data('id');
  //Ajaxの処理はここに

  var modal = $(this);  //モーダルを取得
  //modal.find('.modal-title').text(recipientTitle) //モーダルのタイトルに値を表示
  modal.find('.modal-title').text(recipientTitle);
  modal.find('.modal-body input#comment').val(recipientComment);
  modal.find('.modal-body input#hidden').val(recipientId); //inputタグにも表示
  });

  $('#edit_success').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); //モーダルを呼び出すときに使われたボタンを取得
  var recipientTitle = button.data('title'); //data-whatever の値を取得
  var recipientComment = button.data('comment');
  var recipientId = button.data('id');
  //Ajaxの処理はここに

  var modal = $(this);  //モーダルを取得
  //modal.find('.modal-title').text(recipientTitle) //モーダルのタイトルに値を表示
  modal.find('.modal-title').text(recipientTitle);
  modal.find('.modal-body input#comment').val(recipientComment);
  modal.find('.modal-body input#hidden').val(recipientId); //inputタグにも表示
  });


  // trendページモーダル

  $('#add_new').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); //モーダルを呼び出すときに使われたボタンを取得
  var recipientTitle = button.data('title'); //data-whatever の値を取得
  var recipientId = button.data('id');
  //Ajaxの処理はここに

  var modal = $(this);  //モーダルを取得
  modal.find('.modal-title').text(recipientTitle); //モーダルのタイトルに値を表示
  // modal.find('.comment').text(recipientComment)
  modal.find('.modal-body input#title').val(recipientTitle);
  modal.find('.modal-body input#hidden').val(recipientId); //inputタグにも表示
  });

  $('#item_detail').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); //モーダルを呼び出すときに使われたボタンを取得
  var recipientTitle = button.data('title'); //data-whatever の値を取得
  var recipientComment = button.data('comment');
  var recipientDoing = button.data('doing');
  var recipientDone = button.data('done');
  var recipientId = button.data('id');
  //Ajaxの処理はここに

  var modal = $(this);  //モーダルを取得
  //modal.find('.modal-title').text(recipientTitle) //モーダルのタイトルに値を表示
  modal.find('.modal-title').text(recipientTitle);
  // modal.find('.modal-body input#hidden').val(recipientId) //inputタグにも表示
  modal.find('.modal-body span#doing').text(recipientDoing);
  modal.find('.modal-body span#done').text(recipientDone);
  modal.find('.modal-body p#item_comment').text(recipientComment);
  modal.find('.modal-body a#doing').attr("href", "#");
  modal.find('.modal-body a#done').attr("href", "#");
  });
});
