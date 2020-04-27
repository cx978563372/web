var tabs = document.getElementById("tabs").getElementsByTagName("li");
var sgoods = document.getElementById("sgoods").getElementsByTagName("ul");
console.log(sgoods);
console.log(tabs);
for(var i=0;i<tabs.length;i++){
    tabs[i].onclick = navchange;
}
function navchange(){
    for(var i=0;i<tabs.length;i++){
        if(tabs[i] === this){
            tabs[i].className = "active";
            sgoods[i].className = "clearfix active"
        }else{
            tabs[i].className = " ";
            sgoods[i].className = "clearfix"
        }

    }
}



var snav = document.getElementById("snav");
window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    console.log(scroll);
    if( scroll >= 262 ){
        snav.className = "seckill-navfix seckill-nav";
    }else{
        snav.className = "seckill-nav";
    }
}

var wx = document.getElementById("wx");
var ewm = document.getElementById("ewm");
wx.onmousemove = function(){
    ewm.style = "display: block;";
}
wx.onmouseleave = function(){
    ewm.style = "display: none;";
}

var tc = document.getElementById("topbar-car");
var cm = document.getElementById("cart-menu");
tc.onmousemove = function(){
    cm.style += "display: block;";
}
c.onmouseout = function(){
    cm.style += "display: none;";
}