var eye = document.getElementById('eyestd');
var mm = document.getElementById('paw');
var flag = 0;
var as = document.getElementsByTagName('a');
var wc1 = document.getElementById('wc');
var third = Math.floor(Math.random()*10);
document.title = third + '是你的幸运数字';
eye.onclick = function(){
    if(flag == 0){
        eye.src = 'picture/bottom/eye.svg';
        mm.type = 'text';
        flag = 1;
    }else{
        eye.src = 'picture/bottom/eye-off.svg';
        mm.type = 'password';
        flag = 0;
    }
}
var bt1 = document.getElementById('button1');
var bt2 = document.getElementById('button2');
bt1.onclick = function(){
    if(mm.length<5)
    {
        alert('彩蛋码需要5位');
    }else{
        if(mm.value == localStorage.getItem('age')&&localStorage.getItem('age').length>=5){
            location.href = '../html/our.html';
        }else{
            wc1.style.display = 'inline';
    }
    }
    
}
if(localStorage.getItem('time')==2){
    localStorage.setItem('age',localStorage.getItem('age')+third)
    localStorage.setItem('time','3');
}
bt2.onclick = function(){
    localStorage.clear();
    location.href='index.html';
}
for(var i =1;i<as.length-1;i++){
     as[i].style.display= 'none';
}
for(var i =1;i<as.length-1;i++){
    if(localStorage.getItem('time')>=i)
    {
        as[i].style.display= 'inline';
    }
}
