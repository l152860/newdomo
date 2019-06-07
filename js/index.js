window.onload = function(){
    // 获取标签
    var allLis = $('tab_top').getElementsByTagName("li");
    var allDom = $('tab_bottom').getElementsByClassName("domo");
    for(var i = 0; i < allLis.length;i++){
        var li = allLis[i];
        li.index = i;
        li.onmouseover = function(){
            for(var j = 0; j < allLis.length;j++){
                allLis[j].className = ' ';
               allDom[j].style.display = 'none';
            }
            this.className = 'nav-re';
            allDom[this.index].style.display = 'block';
        }
    }
}
function $(id){
    return typeof id === "string" ? document.getElementById(id) : null;
}