$(function () {
  
  $(document).ajaxStart(function () {
    
    NProgress.start();
  })

  $(document).ajaxStop(function () {

    NProgress.done();
  })


  $('.category>a').on('click',function () {
    $(this).next().slideToggle();
  })

  $('.icon_menu').on('click',function () {
    $('body').toggleClass('active');
    $('.lt_aside').toggleClass('active');
  })

  $('.icon_logout').on('click',function () {
    
    $('#myModal').modal('show');
  })

  $('.btnlogout').on('click',function () {
    $.ajax({
      type:'get',
      url:'/employee/employeeLogout',
      success:function (info) {
        if(info.success){
          location.href='login.html';
        }
        
      }

    })
  })

})