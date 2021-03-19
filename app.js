$("li").click(function(){
    $(this).toggleClass("apply");
});
$("span").click(function (e) { 
    e.stopPropagation();
    $(this).parent("li").fadeOut(500,()=> {
        $(this).remove();
    });
});
$("input[type='text']").keypress(function (e) { 
    if (e.which === 13) {
        
    } else {
        
    }
});