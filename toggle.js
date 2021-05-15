
    $('#toggle').on('click', function(e){
        e.preventDefault();
        $('.navig-panel').toggleClass('navig-panel-active');
        $('.content-wrap').toggleClass('content-wrap-active');
    })