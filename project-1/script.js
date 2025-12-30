setInterval(() => {
    let hours = document.getElementById('hours');
    let minuites = document.getElementById('minuites');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');
    let dotH = document.querySelector('h_dot');
    let dotM = document.querySelector('m_dot');
    let dotS = document.querySelector('s_dot');
    
    let h = newDate().getHours();
    let m = newDate().getMinuites();
    let s = newDate().getSeconds();
    let ap = h>=12 ? 'PM' : 'AM';

    if(h>12){
        h = h -12
    }
}, 1000);