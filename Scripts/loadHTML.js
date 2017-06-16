$(function(){
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
      var file = 'Views/' + $(this).data('include') + '.html';
      $(this).load(file);
    });
  });