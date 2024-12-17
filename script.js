

function inicio(){
    window.scroll({
        top:0,
        left:0,
        behavior:"smooth",
    })
}
function pj(){
    window.scroll({
        top:930,
        behavior:"smooth",
    })
}
function menu(){
    var menu = document.getElementById('s1')
    var menu2 = document.getElementById('s11')
    if(menu.style.height == '40px'){
        menu.style.height = '41px'
        menu.style. border = '3px solid black'
        menu2.style.display = 'flex'
    } else if(menu.style.height == '41px'){
        menu.style.height = '40px'
         menu.style. border = '1px solid black'
        menu2.style.display = 'none'
    }
}