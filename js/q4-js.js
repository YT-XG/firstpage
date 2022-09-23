var m4 = Math.floor(Math.random()*5);
var div1 = document.getElementById('poi');
var a = 50
while(a){
    if(m4%2!=0){
        m4 = Math.floor(Math.random()*5);
    }else if(m4 ==0){
        div1.innerHTML = '<img src="../picture/0.png" alt="">';
        break;
    }else if(m4 ==2){
        div1.innerHTML = '<img src="../picture/2.png" alt="">';
        break;
    }else if(m4 ==4){
        div1.innerHTML = '<img src="../picture/4.png" alt="">';
        break;
    }
}

localStorage.setItem('age',localStorage.getItem('age')+m4);
localStorage.setItem('time','4');