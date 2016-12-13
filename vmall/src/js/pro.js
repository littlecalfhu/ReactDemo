/**
 * Created by Administrator on 2016/12/5.
 */
$(function () {
    checkClick();
   // allSelect();
    // shopClick();
    contrlAmount();
    totalPrice();
    deleteFromlist();
});
/**
 * 点击添加类
 */
function checkClick() {

    $('.cart-checkbox label').click(function () {
        if($(this).is('.select-all .cart-checkbox label')){
            if($(this).parent('.cart-checkbox').hasClass('cart-checkbox-checked'))
            {
                $(this).parent('.cart-checkbox').toggleClass('cart-checkbox-checked');
                $('.cart-checkbox').removeClass('cart-checkbox-checked');
                $('.order-content').css("border-color","#ccc");
                console.log("remove");
            }else{
                $(this).parent('.cart-checkbox').toggleClass('cart-checkbox-checked');
                $('.cart-checkbox').addClass('cart-checkbox-checked');
                $('.order-content').css("border-color","red");
                console.log("add");
            }
        }
        if($(this).is('.shop-info .cart-checkbox label')){
            {
                $(this).parent('.cart-checkbox').toggleClass('cart-checkbox-checked');
                if($(this).parent('.cart-checkbox').hasClass('cart-checkbox-checked'))
                {
                    $(this).closest('.productwrap1').find('.cart-checkbox').addClass('cart-checkbox-checked');
                    $(this).closest('.productwrap1').find('.order-content').css("border-color","red");
                }else{
                    $(this).closest('.productwrap1').find('.cart-checkbox').removeClass('cart-checkbox-checked');
                    $(this).closest('.productwrap1').find('.order-content').css("border-color","#ccc");
                }
                console.log($(this).closest('.productwrap1').find('.cart-checkbox'));
            }
        }
        if($(this).is('.order-content .cart-checkbox label'))
        {
            console.log("222");
            $(this).parent('.cart-checkbox').toggleClass('cart-checkbox-checked');
            if($(this).parent('.cart-checkbox').hasClass('cart-checkbox-checked'))
            {
                $(this).closest('.order-content').css("border-color","red");

            }else{
                $(this).closest('.order-content').css("border-color","#ccc");

            }
            if($('.productlist .cart-checkbox').length == $('.productlist .cart-checkbox-checked').length){
                $('.select-all .cart-checkbox').addClass('cart-checkbox-checked');
            }else{
                $('.select-all .cart-checkbox').removeClass('cart-checkbox-checked');
            }
        }
        totalPrice();
    })
}
/**
 * 添加商品减去商品
 */
function contrlAmount() {
    $('.plus').click(
        function () {
            $(this).prev('.text-amount').val(parseInt($(this).prev('.text-amount').val())+1);
           var number = $(this).closest('.item-content').find('.td-price .price-now').html().split('￥')[1];
            $(this).closest('.item-content').find('.td-sum .number').html("￥"+parseFloat(number)*parseFloat($(this).prev('.text-amount').val()));
            totalPrice();
        }

    );
    $('.no-minus').click(
        function () {
            if(parseInt($(this).next('.text-amount').val()) > 1)
            {
                $(this).next('.text-amount').val(parseInt($(this).next('.text-amount').val())-1);
                var number = $(this).closest('.item-content').find('.td-price .price-now').html().split('￥')[1];
                $(this).closest('.item-content').find('.td-sum .number').html("￥"+parseFloat(number)*parseFloat($(this).next('.text-amount').val()));
                totalPrice();
            }
        }

    );
}
/**
 * 求总价
 */
function totalPrice() {
    var itemNums = [];
    var itemPrices = [];
    $('.productlist .order-content .cart-checkbox-checked').each(
        function () {
            var itemNum = parseInt($(this).closest('.productwrap1').find('.text-amount').val());
            var itemPrice = parseFloat($(this).closest('.productwrap1').find('.price-now').html().split("￥")[1]);
            itemPrices.push(itemPrice);
            itemNums.push(itemNum);
        }
    );
    $('strong.price em').html(sumNumber(itemNums,itemPrices));
    $('.float-bar-right .amount-sum em').html(arrSum(itemNums));
    if(sumNumber(itemNums,itemPrices) > 0)
    {
        $('.float-bar-right .btn-area a').css({
            "background-color":"#f40",
            "cursor":"pointer",
        })
        $('.float-bar-right .btn-area a span').css("cursor","pointer");
    }else{
        $('.float-bar-right .btn-area a').css({
            "background-color":"#9c9c9c",
            "cursor":"not-allowed",
        })
        $('.float-bar-right .btn-area a span').css("cursor","not-allowed");
    }
}
/**
 * 两个数组每项相乘返回相加的和
 * @param arr1
 * @param arr2
 * @returns {Number}
 */
function sumNumber(arr1,arr2) {
    var sum = 0;
    if(arr1.length == arr2.length)
    {
        for(var i =0 ;i < arr1.length ;i++)
        {
            sum += arr1[i]*arr2[i];
        }
    }
    return parseFloat(sum);
}
/**
 * 数组中所有元素的和
 * @param arr
 * @returns {Number}
 */
function arrSum(arr) {
    var sum = 0;
    for(var i = 0;i < arr.length;i++)
    {
        sum +=arr[i];
    }
    return parseInt(sum);
}
/**
 * 删除
 */
function deleteFromlist() {
    $('.td-op a').click(
        function () {
            $(this).closest('.productwrap1').remove();
        }
    )
}