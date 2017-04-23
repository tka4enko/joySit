$(function(){
    modal_init();
    lightGallery_init();
    owl_init();
    product_item_init();
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
function lightGallery_init(){
    $('.item-top').lightGallery({
        thumbnail:true
    });
}
function owl_init(){
    $('.owl-photo').owlCarousel({
        items:1,
        loop:true,
        dots:true
    });
}
function product_item_init(){
    $('.btn-product').on('click',function(){
        var $this = $(this),
            $nameProduct = $this.parents('.item-footer').find('.item-name').text();
            $priceProduct = $this.parents('.item-footer').find('.item-price').text();
            if($priceProduct == false){
                $priceProduct = $this.parents('.item-footer').find('.item-old-price').text();
            }

        $('body').find('#product input[name="name_product"]').val($nameProduct);
        $('body').find('#product input[name="name_price"]').val($priceProduct);
    })
}

