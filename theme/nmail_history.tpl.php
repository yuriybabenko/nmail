<div id="nmail-history">
  <h3>Queue History</h3>
  
  <p>
    This <?php echo $type; ?> was queued for sending on the following dates:
  </p>
  
  <?php echo theme('item_list', $history); ?>
</div>
