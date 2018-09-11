var oImg = document.getElementById('img1'),
    oSpan = document.getElementById('sp1');
var disorder = document.getElementsByClassName('disorder')[0],
    ols = disorder.getElementsByTagName('li');
var n = utils.getCss(ols[0],'width');
var m = 1;
var leftArrow = document.getElementsByClassName('leftArrow')[0],
    rightArrow= document.getElementsByClassName('rightArrow')[0];
var oUl = document.getElementsByClassName('pagination')[0],
    oLis = oUl.getElementsByTagName('li');
var index = 0,
    oImg = document.getElementById('img1'),
    tar = new Date('2018/9/10 19:23:00').getTime(),
    hour = document.getElementsByClassName('hour')[0],
    minute = document.getElementsByClassName('minute')[0],
    second = document.getElementsByClassName('second')[0];



oLis[index].style.background = 'orange'
oSpan.onclick = function () {
    oSpan.style.display = 'none';
    oImg.style.display = 'none';
};


disorder.style.width = (ols.length*n)+'px';

var timer = setInterval(play,3000);
function play() {
    oLis[index].style.background = '';
    index++;
    if(index==6){
        index = 0;
    }
    oLis[index].style.background = 'orange'
    if(m==-1){
        utils.css(disorder,{left:-n*(ols.length-1)});
        m = ols.length-2;
    }
    if(m==ols.length){
        utils.css(disorder,{left:0});
        m=1;
    }
    myAnimate(disorder,1500,{left:-m*n});
    m++;
}
rightArrow.onclick = function () {
    if(parseFloat(Math.abs((disorder.style.left).replace('px','')))%n!=0)return;
    clearInterval(timer);
    play();
    timer = setInterval(play,3000);
};
leftArrow.onclick = function () {
    if(parseFloat(Math.abs((disorder.style.left).replace('px','')))%n!=0)return;
    clearInterval(timer);
    m-=2;
    console.log(m);
    play();
    timer = setInterval(play,3000);
};
oImg.onmousedown = function (e) {
    e.preventDefault()
};

function timeCount() {
    var now = new Date().getTime();
    var time = tar - now;
    if(time<=0){
        clearInterval(timer2);
        time = 0;
    }
    var h = Math.floor(time/3600000);
    time -= h*3600000;
    var m = Math.floor(time/60000);
    time -= m*60000;
    var s = Math.floor(time/1000);
    hour.innerHTML = h>=10?h+':':'0'+h+':';
    minute.innerHTML = m>=10?m+':':'0'+m+':';
    second.innerHTML = s>=10?s:'0'+s;
}
var timer2 = setInterval(timeCount,1000);