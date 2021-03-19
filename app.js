$("ul").on("click","li",function(){
    $(this).toggleClass("apply");
});
$("ul").on("click","span",function (e) { 
    e.stopPropagation();
    $(this).parent("li").fadeOut(500,()=> {
        $(this).remove();
    });
});
$("input[type='text']").keypress(function (e) { 
    if (e.which === 13) {
        var todotext = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> "+todotext+"</li>");
    } 
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
    $(".rotate").click(function () {
    $(this).toggleClass("down");
});
});