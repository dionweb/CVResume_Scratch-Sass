function openNav() {
   document.getElementById('mySidenav').style.width = '250px';
   document.getElementById('openbutton').style.display = 'none';
   document.getElementById('closebutton').style.display = 'block';
}
function closeNav() {
   document.getElementById('mySidenav').style.width = '0';
   document.getElementById('openbutton').style.display = 'block';
   document.getElementById('closebutton').style.display = 'none';
}

$(document).on('click', 'a[href^="#"]', function (e) {
   var id = $(this).attr('href');
   var $id = $(id);
   if ($id.length === 0) {
      return;
   }
   e.preventDefault();
   var pos = $id.offset().top;
   $('body, html').animate({ scrollTop: pos });
});
