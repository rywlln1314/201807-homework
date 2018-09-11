var nav=document.querySelector('.nav-top');
nav.style.display='inline-block';

/*搜索栏下的推荐小轮播图*/
var  unplay =document.getElementsByClassName('unplay')[0];
 var unlis=unplay.getElementsByTagName('li');


var n=0;
    function transY() {

        if(n<=-36){n=18}
        n-=18;
        unplay.style.transform = `translateY(${n}px)`;
    }
   var tiemr1= setInterval(function () {
       transY()
   },2000);
    /*主轮播图*/
    let $lunbo =$('.lunbo-one'),
        $lunlis = $lunbo.children('li'),
        $leftBtn=$('.leftBtn'),
        $rightBtn=$('.rightBtn'),
        $tips=$('.utips'),
        $tipsliss=$tips.children('li')
var index=0;

function opaAll() {
    index++;
    let n=$lunlis.length;
  if(index > 3) {index = 0};

    if(index<=-1){
        index=3
    }
  $lunlis.eq(index).fadeIn().siblings().fadeOut();
  $tipsliss.eq(index).addClass('current').siblings().removeClass('current')



}

var timer2=null;
function aotuplay() {
timer2 =setInterval(function () {
  opaAll();
},3000);
}
aotuplay();
$leftBtn.on('click',function () {
  clearInterval(timer2)
    index-=2;
    opaAll();
  aotuplay();
});
$rightBtn.on('click',function () {
   clearInterval(timer2)
    opaAll();
    aotuplay();
});
var h=0;
$tipsliss.on('click',function () {
    clearInterval(timer2);
    index=$(this).index();
    // aotuplay();
   $lunlis.eq(index).fadeIn().siblings().fadeOut();
    $tipsliss.eq(index).addClass('current').siblings().removeClass('current')
});



/*导航*/
$menuul=$('.menu-ul');
$menuli=$menuul.children('li');
$conts=$('.cont');
console.log($menuli);


 $menuli.on('mouseenter',function () {
    index=$(this).index();
     $menuli.eq(index).addClass('atvie').siblings().removeClass('atvie');
      $conts.css({
          display:'block'
      })
 });
  $menuli.on('mouseleave',function () {
      $conts.css({display:'none'})
  });
  /*登陆下方选项卡*/
  var tabl=document.getElementsByClassName('tabL')[0];
  var tabr=document.getElementsByClassName('tabr')[0];
  var lonnbtn=document.getElementsByClassName('lonnbtn')[0];
  var tabltext =document.getElementsByClassName('tabLtext')[0];
  var tabrtext =document.getElementsByClassName('tabrtext')[0];


tabr.onmouseenter=function () {
      lonnbtn.style.transform='translateX(56px)';
      tabltext.style.display='none';
      tabrtext.style.display='block';
  };
  tabl.onmouseenter=function () {
      lonnbtn.style.transform='translateX(0px)';
      tabltext.style.display='block';
      tabrtext.style.display='none';
  }

  /*缴费充值*/
  var servireul =document.getElementsByClassName('servireul')[0];
   var offbtn =document.getElementsByClassName('offbtn')[0];
  var serlisb=servireul.getElementsByTagName('li');
var d=document.getElementsByClassName('d');

// servireul.style.display='none';

let huafei=document.getElementsByClassName('huafei')[0];
console.log(huafei);
let serllis=document.getElementsByClassName('serl-lis');
let oIs=document.getElementsByClassName('ois');


offbtn.onclick=function () {
    transdown()
    serup()
    timerhuafeidown()
}

function timerhuafei() {
    huafei.style.transform='translateY(10px)';

}
function timerhuafeidown() {
    huafei.style.transform='translateY(165px)'

}

function transup() {
    for (let i = 0; i < serllis.length; i++) {
        serllis[i].style.transform='translateY(-35px)';
        serllis[i].style.color='black';

    }

}
function transdown() {
    for (let i = 0; i < serllis.length; i++) {
        serllis[i].style.transform='translateY(0px)';

    }
}

console.log(serllis[0]);
/*执行*/
for (let i = 0; i < oIs.length; i++) {
    serllis[i].onmouseenter=function () {
        transup();
        timerhuafei();
        serdown()
    };
}
for (let i = 0; i < oIs.length; i++) {
    oIs[i].onmouseenter=function () {
        d[i].style.backgroundColor='red';
    }

}


for (let i = 0; i < serllis.length; i++) {
    oIs[i].onmouseleave=function () {
        d[i].style.backgroundColor='#fff';
    }

}

var serdownli=document.getElementsByClassName('i');
function  serdown() {
    for (let i = 0; i < serdownli.length; i++) {
        serdownli[i].style.display='none';

    }
}
function serup() {
    for (let i = 0; i < serdownli.length; i++) {
        serdownli[i].style.display='block'
    }
}


/*倒计时*/
//目标时间距离 1970年的毫秒数


function timeCount(tarT) {
    var tar=new Date(' 2018-9-12  11:13:00');
    var  tarT=tar.getTime();
    var now = new Date();
    var nowT = now.getTime();    //当前时间距离1970年的毫秒数
    //获取小时数

    var time = tarT - nowT;
    var h = Math.floor(time / 3600000);//整数个小时
    time = time - h * 3600000;//抛去小时 剩余的毫秒数  也就是分钟和秒占的毫秒数
    var m = Math.floor(time / 60000);//剩余毫秒数有多少个整分
    time = time - m * 60000;//刨去分钟剩余的毫秒数
    var s = Math.floor(time / 1000);//剩余毫秒数中的整秒

    var cosstr = `${h < 10 ? '0' + h : h}${m < 10 ? '0' + m : m}${s < 10 ? '0' + s : s}`;
    var hourstr = `${h < 10 ? '0' + h : h}`;
    var minstr = `${m < 10 ? '0' + m : m}`;
    var secstr = `${s < 10 ? '0' + s : s}`;

    var times =document.getElementsByClassName('times')[0]
    var hour =document.getElementsByClassName('hour')[0];
    var minute =document.getElementsByClassName('minute')[0];
    var second =document.getElementsByClassName('second')[0];
    times.style.color='white';
    times.style.fontSize='20px';
    hour.innerHTML=hourstr;
    minute.innerHTML=minstr;
    second.innerHTML=secstr;

}
var timer5=window.setInterval(function () {
    timeCount()

},1000);


//倒计时旁边 手动轮播
$tableft=$('.tabLeft');
$tabright=$('.tabRight');
$maintab=$('.maintab');
var tabright=document.getElementsByClassName('tabRight')[0];
var tableft=document.getElementsByClassName('tabLeft')[0];
var maintab=document.getElementsByClassName('maintab')[0];
// function tabxxx() {
//
//     $tableft.on('click',function () {
//
//         $maintab.animate({
//             left:`0`,
//             speed:1000
//         })
//     });
//     $tabright.onclick=function () {
//
//         // $maintab.animate({
//         //     left:'-740px',
//         //     speed:1000
//         // })
//         $maintab.style.left+=700+'px'
//     }
//
// }
// tabxxx()

function a() {

    tabright.onclick=function () {
        var l =utils.css(maintab,'left');
      var n=740;
        if(l< -2220){
            l = 0

     }
        console.log(l);

        // console.log(maintab.style.left = l - 740 + 'px');
           myAnimat(maintab,1000,{left:l-740})

    };
    tableft.onclick=function () {
        let l =utils.css(maintab,'left');
        if(l==0){l= -2960;}
        myAnimat(maintab,1000,{left:l+740})

    }
}
a();


var mini =document.getElementById('mini');
var minili=mini.getElementsByTagName('li');
var index1=0
var minibox= document.getElementsByClassName('minibox')[0];
var spans = minibox.getElementsByTagName('span');
function minilunbo() {
   index1++;
    let l = utils.css(mini, 'left');
    if(l<=-360){
        mini.style.left =0+'px';

    }
   else {myAnimat(mini,1000,{left:l-180})}

   // [...spans].forEach((item)=>{
   //     utils.removeClass(item,'can')
   // });
   //  if(l===0){
   //      utils.addClass(spans[0],'can')
   //  }else {utils.addClass(tips[1],'can')}


};

var minitimer = window.setInterval(function () {
 ;
    minilunbo()
},2000)