var utils = (function () {
    var flag=window.getComputedStyle ? false:true;
    function getCss(ele,attr) {
        var str = navigator.userAgent;
        var res = null;
        if(/MSIE *[6-8]/.test(str)){
            //IE 6-8
            res = ele.currentStyle[attr]
        }else {
            res = getComputedStyle(ele)[attr];
        }
        /*
        * 先用parseFloat  处理这个字符串 若是 NaN ；则直接返回之前的字符串
        * */
        // if(!isNaN(parseFloat(res))){
        //     res = parseFloat(res);
        // }
        /*
        *
        * 用正则处理 --->
        * /[+-]?(\d|[1-9]\d+)(\.\d+)?(px|rem|em|pt)?/
        * */
        var reg = /^[+-]?(\d|[1-9]\d+)(\.\d+)?(px|rem|em|pt)?$/;
        res = reg.test(res) ? parseFloat(res) : res;
        return res;
    }
    function setCss(ele,attr,value) {
        //常用的需要加单位的属性
        var reg = /width|height|padding|margin|left|top|bottom|right|fontsize/i;
        if(reg.test(attr)){
            value = parseFloat(value) + 'px';
        }
        ele.style[attr]=value;
    }
    function setGroup(ele,obj){
        if(Object.prototype.toString.call(obj) == '[object Object]'){
            for(var k in obj){
                if(obj.hasOwnProperty(k)){
                    setCss(ele,k,obj[k])
                }
            }
        }
    }
    function css(...arg) {
        if(arg.length == 2){
            if(typeof arg[1] == 'string'){
                return getCss(arg[0],arg[1])
            }
            setGroup(arg[0],arg[1])
        }else {
            setCss(arg[0],arg[1],arg[2]);
        }
    }
    function offset(ele) {
        var l = ele.offsetLeft;
        var t = ele.offsetTop;
        var temp = ele.offsetParent;
        while (temp && temp.nodeName.toLowerCase() != 'body'){
            l += temp.offsetLeft + temp.clientLeft;
            t += temp.offsetTop + temp.clientTop;
            temp = temp.offsetParent;
        }
        return {// l:l,t:t
            l,t
        }
    }
    function toArray (a) {
        var ary = [];
        try {
            ary = [].slice.call(a)
        }catch (e) {
            for(let i = 0; i < a.length; i++){
                ary.push(a[i])
            }
        }
        return ary
    }
    function toJson (str) {
        var obj = {};
        try{
            obj = JSON.parse(str);
        }catch (e) {
            obj = eval(`${str}`);
        }
        return obj;
    }
    function scrollT() {
        return document.documentElement.scrollTop || document.body.scrollTop;
    }
    function clientH() {
        return document.documentElement.clientHeight || document.body.clientHeight;
    }
    function clientW() {
        return document.documentElement.clientWidth || document.body.clientWidth;
    }
    function win(str) {
        return document.documentElement[str] || document.body[str]
    }
    function children(ele) {


        var childs= ele.children
        var ary=[]
        for (var i = 0; i < childs.length; i++) {
            if(childs[i].nodeType==1){
                ary.push(childs[i]);
            }
        }
        return ary
    }
    function getByclass(str,context) {
        var eles=context.getElementsByTagName('*')
        var ary=[];
        var reg=new  RegExp('(^| +)'+str+'( +|$)')
        for (var i = 0; i < eles.length; i++) {
            if(reg.test(eles[i].className)){
                ary.push(eles[i])
            }
        }
        return ary
    }
    function hasClass(ele,str) {
        str=str.replace(/^ +| +$/g,'')
        var reg=new RegExp('(^| *)'+str+'( +|$)')
        return reg.test(ele.className)
    }
    function hasClass2(ele,str) {
        str=str.replace(/^ +| +$/g,'')
        var  ary =str.replace(/ +/g)
        for (var i = 0; i < ary.length; i++) {
            var reg=new RegExp('(^| *)'+str+'( +|$)')
            if(!ele.className){
                return false
            }
        }
        return true
    }
    function addClass(ele,str) {
        str=str.replace(/^ +| +$/g,'');
        if(hasClass2(ele,str))return;
        var ary=str.split(/ +/);
        for (var i = 0; i < ary.length; i++) {
            if(!hasClass2(ele,ary[i])){
                ele.className +=(' '+ ary[i])
            }

        }

    }
    return{
        // getCss:getCss
        getCss,setCss,setGroup,css,toArray,toJson,offset,scrollT,clientH,children,getByclass,hasClass,hasClass2,addClass,clientW
    }
})();