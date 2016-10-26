$(function() {

    if($('.container-fluid').innerWidth()>992)
    {
        $( ".resizable" ).resizable({ maxWidth: $('.container-fluid').innerWidth()-200 });
    }

    $( window ).resize(function() {
        if($('.container-fluid').innerWidth()<=992){
            $('.col-xs-12').css('width','100%');
            $( "#resizable" ).resizable({ disabled: true });
        }
        else {
            if($(".resizable").innerWidth()===$('.container-fluid').innerWidth())
            {
                $('.col-xs-12').css('width','');
            }
            $( ".resizable" ).resizable({ disabled: false, maxWidth: $('.container-fluid').innerWidth()-200 });
            $('.resizable-mirror').css('width', Math.floor($('.container-fluid').innerWidth() -  $( "#resizable" ).innerWidth()));
        }
    });

});