$(function(){
    modal_init();
});
function modal_init(){
    setTimeout(function(){
        $('.item-button button').on('click',function(){
            console.log(UIkit.modal($('#product')))
            var pop2 = new $.UIkit.modal("#product");
            pop2.show.uk.modal();
        })
    },100)

}

