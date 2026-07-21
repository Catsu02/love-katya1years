// ==========================================
// LOVE SITE V3
// Для Кати ❤️
// Часть 1
// ==========================================

// ----------------------
// Дата отношений
// ----------------------

const loveDate = new Date("2025-08-13T00:00:00");

// ----------------------
// Таймер
// ----------------------

const timer = document.getElementById("timer");

function updateTimer(){

    if(!timer) return;

    const now = new Date();

    let diff = now - loveDate;

    const days = Math.floor(diff / 86400000);

    diff %= 86400000;

    const hours = Math.floor(diff / 3600000);

    diff %= 3600000;

    const minutes = Math.floor(diff / 60000);

    diff %= 60000;

    const seconds = Math.floor(diff / 1000);

    timer.innerHTML = `
        ❤️ Мы вместе уже

        <br><br>

        <span>${days}</span> дней

        <span>${hours}</span> часов

        <span>${minutes}</span> минут

        <span>${seconds}</span> секунд
    `;

}

updateTimer();

setInterval(updateTimer,1000);

// ----------------------
// Кнопка письма
// ----------------------

const startButton = document.getElementById("startButton");

const letter = document.getElementById("letter");

startButton.addEventListener("click",()=>{

    letter.classList.remove("hidden");

    letter.scrollIntoView({

        behavior:"smooth"

    });

    heartExplosion();

});

// ----------------------
// Сердечки
// ----------------------

function createHeart(){

    const heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,180);

// ----------------------
// Взрыв сердечек
// ----------------------

function heartExplosion(){

    for(let i=0;i<120;i++){

        setTimeout(()=>{

            createHeart();

        },i*18);

    }

}
// ==========================================
// Часть 2
// ==========================================

// ----------------------
// Звезды
// ----------------------

const stars=document.getElementById("stars");

function createStar(){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*4+"s";

    stars.appendChild(star);

}

for(let i=0;i<180;i++){

    createStar();

}

// ----------------------
// Плавное появление секций
// ----------------------

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("fade");

    observer.observe(section);

});

// ----------------------
// Галерея
// ----------------------

const viewer=document.getElementById("photoViewer");

const viewerImage=document.getElementById("viewerImage");

document.querySelectorAll(".photo img").forEach(img=>{

    img.addEventListener("click",()=>{

        viewer.classList.add("active");

        viewerImage.src=img.src;

    });

});

viewer.addEventListener("click",()=>{

    viewer.classList.remove("active");

});

// ----------------------
// Подсветка карточек
// ----------------------

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,110,190,.35),
        rgba(255,255,255,.08))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.08)";

    });

});
// ==========================================
// LOVE SITE V3
// Часть 3
// ==========================================

// ----------------------
// Финальная кнопка
// ----------------------

const loveButton = document.getElementById("loveButton");

if(loveButton){

    loveButton.addEventListener("click",()=>{

        heartExplosion();

        loveButton.innerHTML="❤️ Я люблю тебя бесконечно ❤️";

        loveButton.disabled=true;

        document.body.animate([

            {

                transform:"scale(1)"

            },

            {

                transform:"scale(1.01)"

            },

            {

                transform:"scale(1)"

            }

        ],{

            duration:1200

        });

    });

}

// ----------------------
// Сердечки за курсором
// ----------------------

document.addEventListener("mousemove",(e)=>{

    if(Math.random()>0.96){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤";

        heart.style.left=e.clientX+"px";

        heart.style.top=e.clientY+"px";

        heart.style.fontSize="18px";

        heart.style.animationDuration="3s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },3000);

    }

});

// ----------------------
// Параллакс
// ----------------------

document.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.clientX)/70;

    const y=(window.innerHeight/2-e.clientY)/70;

    document.body.style.backgroundPosition=`${x}px ${y}px`;

});

// ----------------------
// Автозамена отсутствующих фото
// ----------------------

document.querySelectorAll(".photo img").forEach(img=>{

    img.onerror=()=>{

        img.src="https://placehold.co/600x800/222/ffffff?text=❤️";

    };

});

// ----------------------
// Красивое приветствие
// ----------------------

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="opacity 1.2s";

        document.body.style.opacity="1";

    },100);

});

// ----------------------
// Подсветка заголовка
// ----------------------

const title=document.querySelector(".hero h1");

if(title){

setInterval(()=>{

title.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.03)"

},

{

transform:"scale(1)"

}

],{

duration:2500

});

},2800);

}

// ----------------------
// Конец файла
// ----------------------

console.log("❤️ Love Site успешно загружен ❤️");
