
const s=new Date('2025-08-13T00:00:00');
function t(){const e=document.getElementById('timer');let d=Date.now()-s;const days=Math.floor(d/86400000);d%=86400000;const h=Math.floor(d/3600000);d%=3600000;const m=Math.floor(d/60000);const sec=Math.floor(d%60000/1000);e.innerHTML=`❤️ Мы вместе уже <b>${days}</b> дней ${h} часов ${m} минут ${sec} секунд`;}
setInterval(t,1000);t();
const b=document.getElementById('letterBtn'),l=document.getElementById('letter');
b.onclick=()=>{l.classList.toggle('hidden');if(!l.classList.contains('hidden'))l.scrollIntoView({behavior:'smooth'});}
function heart(){const h=document.createElement('div');h.className='heart';h.textContent='❤';h.style.left=Math.random()*100+'vw';h.style.fontSize=(18+Math.random()*24)+'px';h.style.animationDuration=(4+Math.random()*3)+'s';document.body.appendChild(h);setTimeout(()=>h.remove(),7000);}
setInterval(heart,250);
