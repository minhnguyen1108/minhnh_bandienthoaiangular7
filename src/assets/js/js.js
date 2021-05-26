/* chuyển màu khi nhấn nút cho bg*/

     

/* chuyen mau */


$(document).ready(function () {

  /* fade to top */
  $('#noibat').click(function() {
    $("html, body").animate({ scrollTop: 1600 }, 100);
    return false;

});
  /* end fade to top */



  /* chuyển col */
  var chk = 0;
  $('#changecol').click(function (e) { 
    if (chk == 0) {
      $('.change').removeClass('col-lg-4');
      $('.change').addClass('col-lg-6');
      chk = 1;
      
    }
    else if (chk ==1 ) {
      chk = 0;
      $('.change').removeClass('col-lg-6');
      $('.change').addClass('col-lg-4');
    }
    
});
/* /chuyển col */

  /* chuyển màu background */
  var checkcolor= true;
  $('#checkbox').click(function (e) { 
    if(checkcolor==true){
      $('#menuchange').removeClass('menu-bg');
      $('#menuchange').addClass('menu-dark');

      $('#text30').removeClass('big-text');
      $('#text30').addClass('big-text-dark');

      $('#changebg').removeClass('bg-text');
      $('#changebg').addClass('bg-text-dark');

      $('.changetitle').removeClass('section-title');
      $('.changetitle').addClass('section-title-dark h2');

      checkcolor=false;
    }
    else if(checkcolor==false){
      $('#menuchange').removeClass('menu-dark');
      $('#menuchange').addClass('menu-bg');

      $('#text30').removeClass('big-text-dark');
      $('#text30').addClass('big-text');

      $('#changebg').removeClass('bg-text-dark');
      $('#changebg').addClass('bg-text');

      $('.changetitle').removeClass('section-title-dark h2');
      $('.changetitle').addClass('section-title');

      checkcolor=true;
    }
    
  });

});
