/**
 * Created by liying on 2018/9/10.
 */
let $topFixe = $('.topFixe'),
    $topFixed = $('.topFixed'),
    $moreBox = $('.moreBox'),
    $moreBox1 = $('.moreBox1'),
    $moreBox2 = $('.moreBox2'),
    $initially = $('.initially'),
    $getOne = $('.one'),
    $getTwo = $('.two'),
    $getThree = $('.three'),
    $goodThing = $('.good_thing'),
    $hot = $('.hot'),
    $top_search = $('.top_search'),
    $upOne = $('.upOne'),
    $upTwo = $('.upTwo'),
    $upThree = $('.upThree'),
    $btn = $('.fly-bottom .btn'),
    $fly = $('.fly'),
    $ulBox = $('.ulBox'),
    $copyOne = $('.copy_1'),
    $copyTwo = $('.copy_2'),
    $tarLis = $('.tar .tar_box ul li'),
    $banner = $('.banner'),
    $navLis = $('.nav .center ul li'),
    $hm = $('.side_hm'),
    $hw = $('.side_hw'),
    $rs = $('.side_rs'),
    $flyLis = ('.fly-center ul li');


  /*  $upThree = $('.upThree');*/
//固定在顶层
window.onscroll = function () {
  let tar = $topFixe.offset().top,
      scroT = document.documentElement.scrollTop || document.body.scrollTop,
      halfT = (document.documentElement.clientHeight || document.body.clientHeight)/2;
    if (scroT >= tar){
        $topFixed.show();
    }else{
        $topFixed.hide();
    }
    let ulT = $ulBox.offset().top;
    if (scroT >= ulT){
        $fly.show();
    }else{
        $fly.hide();
    }
    /*侧栏*/
  let clieH = document.documentElement.clientHeight || document.body.clientHeight,
      $goodOff = $goodThing.offset().top + $goodThing.clientHeight/2;
    if ((scroT+clieH)>=$goodOff){
        $hw.css(className,'current');
    }
};
//加载更多1
$getOne.on('click',function () {
    $(this).wt = $(this).offset().top;
    $moreBox.show();
    $hot.css('height',1370);
    $getOne.hide();
});
$upOne.on('click',function () {
    $moreBox.hide();
    $hot.css('height',730);
    $getOne.show();
    document.documentElement.scrollTop = $getOne.offset().top - (document.documentElement.clientHeight || document.body.clientHeight) + 30;
});
//加载更多2
$getTwo.on('click',function () {
    $(this).wt = $(this).offset().top;
    $moreBox1.show();
    $goodThing.css('height',1500);
    $getTwo.hide();
});
$upTwo.on('click',function () {
    $moreBox1.hide();
    $goodThing.css('height',950);
    $getTwo.show();
    document.documentElement.scrollTop = $getTwo.offset().top - (document.documentElement.clientHeight || document.body.clientHeight) + 30;
});
//加载更多3
$getThree.on('click',function () {
    $(this).wt = $(this).offset().top;
    $moreBox2.show();
    $top_search.css('height',1100);
    $getThree.hide();
});
$upThree.on('click',function () {
    $moreBox2.hide();
    $top_search.css('height',630);
    $getThree.show();
    document.documentElement.scrollTop = $getThree.offset().top - (document.documentElement.clientHeight || document.body.clientHeight) + 30;
});
//返回顶部
$btn.on('click',function () {
    let duration = 600,
        changeL = document.documentElement.scrollTop || document.body.scrollTop,
        speed = changeL/duration,
        time = 0,
        timer = null;
    timer = setInterval(function () {
        time += 30;
        let moveL = speed*time;
        if (moveL >= changeL){
            clearInterval(timer);
            moveL = changeL;
        }
        document.documentElement.scrollTop = changeL - moveL;
    },30);

});
//选项卡
$tarLis.on('click',function () {
    console.log(this);
    $(this).addClass('current').siblings().removeClass('current');
    $banner.eq($(this).index()).show().siblings('.banner').hide();
});
//背景特效
$navLis.on('click',function () {
    $(this).addClass('current').siblings().removeClass('current');
    $(this).addClass('currentPo').siblings().removeClass('currentPo');
});





