$(document).ready(function(){
    $('.btnAdd').on('click', function (e) {
        e.preventDefault();
        var tr_test = $( this ).parent().parent().next("tr.test");
        var zxc = $( this ).parent().parent().next("tr.test").find('.zxc');
        var btn_del_hide = $( this );
        var tr = $( this ).parent().parent();
        
        // if (tr_test.is( ":hidden" ) ) {
            tr_test.slideDown( 300 );
            tr_test.css('display','block');
            btn_del_hide.fadeOut(200);
            tr.toggleClass('freeze_hover_tr');
            // zxc.stop().animate({'top':'0px'},300);


        
        // } else {
        // //     // tr_test.slideUp();
        // }

    });

    $('.no').on('click', function (e) {

        var tr_test = $( this ).parent().parent().parent();
        var tr_help = $( this ).parent().parent().parent().prev('tr.help');
        var btn_del_hide = $( this ).parent().parent().parent().prev('tr.help').find('.btnAdd');
        
        tr_test.slideUp( 300 );
        tr_help.removeClass('freeze_hover_tr');
        btn_del_hide.fadeIn( 200 );


    });

        $(document).mouseup(function(e) {

                var tr_test = $('tr.test');
                var tr_help = $('tr.help');
                var del_btn = $('.btnAdd');

                if (!tr_test.is(e.target)&&tr_test.has(e.target).length==0) {
                    tr_test.hide();
                    tr_help.removeClass('freeze_hover_tr');
                    del_btn.fadeIn( 600 );

                }


    });

    $('.yes').on('click', function (e) {

        alert('no delete option in demo');

    });

});