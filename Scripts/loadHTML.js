$(function(){
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
      var file = '../Views/Containers/' + $(this).data('include') + '.html';
      $(this).load(file);
    });
  });