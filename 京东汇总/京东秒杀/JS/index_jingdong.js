var navMid = document.getElementsByClassName('nav_mid')[0],
    countdown = document.getElementsByClassName('countdown')[0],
    allBody = document.getElementById('allBody'),
    countDiv = countdown.getElementsByClassName('diamonds'),
    countLis = countdown.getElementsByTagName('li');
console.log(navMid);
var navT = navMid.offsetTop;
var couT = utils.offset(countdown).t;
var navH = utils.css(navMid,'height');
console.log(couT,navH);
window.onscroll = function () {
    var wT = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(wT);
    if (wT >= navT){
        navMid.style.position = 'fixed'
    }else{
        navMid.style.position = 'relative'
    }
    if (wT >= couT - navH - 46){
        countdown.style.position = 'fixed';
        countdown.style.top = 46 + 'px';
        countdown.style.left = 15 + 'px';
        for (let i = 0; i < countLis.length; i++) {
            utils.addClass(countLis[i],'lifixed')
        }
    }else{
        countdown.style.position = 'relative';
        countdown.style.top = 0;
        countdown.style.left = 0;
        for (let i = 0; i < countLis.length; i++) {
            utils.removeClass(countLis[i],'lifixed')
        }
    }

};