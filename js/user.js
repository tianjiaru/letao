$(function () {


  var id;
  var isDelete;
  var page=1;
  var pageSize=5;
  render();
  $('tbody').on('click','button',function () {
    $('#userModal').modal('show');
    // console.log(1);

    id=$(this).parent().data('id');
    isDelete=$(this).hasClass('btn-success')?0:1;
    
  })
  $('.confirm').on('click',function () {
    $.ajax({
      type:'post',
      url:'/user/updateUser',
      data:{
        id:id,
        isDelete:isDelete
      },
      success:function () {
        $('#userModal').modal('hide');
        render();
      }
    })
  })

  
  function render() {
    
    $.ajax({
      type:'get',
      url:'/user/queryUser',
      data:{
        page:page,
        pageSize:pageSize
      },
      success:function (info) {
        console.log(info);
        $('tbody').html(template('tpl',info));
        

        $("#paginator").bootstrapPaginator({
          bootstrapMajorVersion:3,//默认是2，如果是bootstrap3版本，这个参数必填
          currentPage:page,//当前页
          totalPages:Math.ceil(info.total/info.size),//总页数
          size:"small",//设置控件的大小，mini, small, normal,large
          onPageClicked:function(a, b, c,p){
            //为按钮绑定点击事件 page:当前点击的按钮值

            page = p;
            render();
          }
        });
      }


    })
  }
})