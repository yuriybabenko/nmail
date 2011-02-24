(function ($) {
  $(document).ready(function() {
		if('#nmail-action-form') {
			$('#edit-preview').click(function(e){
				e.preventDefault();
				
        var preview = window.open('', 'PreviewWindow', 'width=970,height=700,scrollbars=yes');

        preview.document.open();
        preview.location.replace(Drupal.settings.basePath + 'node/' + $('#edit-nid').val() + '/nmail/preview');
        preview.document.close();
        
        return false;
      });		
		}
  });
})(jQuery);
