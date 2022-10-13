function cambiarIcono(){
    let bars = document.getElementById('bars');
    if(bars.classList.contains('fa-bars')){
        bars.classList.replace('fa-bars','fa-rectangle-xmark');
        bars.classList.add('rotar');
        setTimeout(function(){
            bars.classList.remove('rotar');
        },500)
    }else{
        bars.classList.replace('fa-rectangle-xmark','fa-bars');
        bars.classList.add('rotar');
        setTimeout(function(){
            bars.classList.remove('rotar');
        },500)
    }
}