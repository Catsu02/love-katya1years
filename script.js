// ======================================
// Love Site Script v2
// Часть 1
// ======================================

// Дата начала отношений
const startDate = new Date("2025-08-13T00:00:00");

// -------------------------
// Таймер
// -------------------------

function updateTimer() {

    const timer = document.getElementById("timer");

    if(!timer) return;

    let diff = Date.now() - startDate.getTime();

    const days = Math.floor(diff / 86400000);

    diff %= 86400000;

    const hours = Math.floor(diff / 3600000);

    diff %= 3600000;

    const minutes = Math.floor(diff / 60000);

    diff %= 60000;

    const seconds = Math.floor(diff / 1000);

    timer.innerHTML = `
        ❤️ Мы вместе уже <br><br>

        <b>${days}</b> дней

        <b>${hours}</b> часов

        <b>${minutes}</b> минут

        <b>${seconds}</b> секунд
    `;

}

updateTimer();

setInterval(updateTimer,1000);

// -------------------------
// Письмо
// -------------------------

const letterBtn = document.getElementById("letterBtn");

const letter = document.getElementById("letter");

if(letterBtn && letter){

    letterBtn.addEventListener("click",()=>{

        letter.classList.toggle("hidden");

        if(!letter.classList.contains("hidden")){

            letter.scrollIntoView({

                behavior:"smooth"

            });

            explodeHearts();

        }

    });

}

// -------------------------
// Сердечки
// -------------------------

function createHeart(x=null,y=null){

    const heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    if(x===null){

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="-40px";

    }else{

        heart.style.left=x+"px";

        heart.style.top=y+"px";

    }

    heart.style.fontSize=(18+Math.random()*24)+"px";

    heart.style.animationDuration=(4+Math.random()*3)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

}

setInterval(()=>{

    createHeart();

},250);

function explodeHearts(){

    for(let i=0;i<80;i++){

        setTimeout(()=>{

            createHeart();

        },i*25);

    }

}// ======================================
// Love Site Script v2
// Часть 2
// ======================================

// -------------------------
// Галерея
// -------------------------

const photos = document.querySelectorAll(".photos img");

photos.forEach(photo=>{

    photo.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.className="photo-overlay";

        const img=document.createElement("img");

        img.src=photo.src;

        overlay.appendChild(img);

        document.body.appendChild(overlay);

        overlay.addEventListener("click",()=>{

            overlay.remove();

        });

    });

});

// -------------------------
// Плавное появление блоков
// -------------------------

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});

document.querySelectorAll(".gallery,.love,#letter,#finalMessage").forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(70px)";

    el.style.transition="1s";

    observer.observe(el);

});

// -------------------------
// Кнопка наверх
// -------------------------

const topButton=document.createElement("button");

topButton.id="topButton";

topButton.innerHTML="❤️";

document.body.appendChild(topButton);

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.style.opacity="1";

        topButton.style.pointerEvents="auto";

    }else{

        topButton.style.opacity="0";

        topButton.style.pointerEvents="none";

    }

});// ======================================
// Love Site Script v2
// Часть 3
// ======================================

// -------------------------
// Плавное появление страницы
// -------------------------

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="opacity 1.2s";

        document.body.style.opacity="1";

    },100);

});

// -------------------------
// Эффект движения заголовка
// -------------------------

const title=document.querySelector(".hero h1");

if(title){

    document.addEventListener("mousemove",(e)=>{

        const x=(window.innerWidth/2-e.clientX)/40;

        const y=(window.innerHeight/2-e.clientY)/40;

        title.style.transform=`translate(${x}px,${y}px)`;

    });

}

// -------------------------
// Подсветка карточек
// -------------------------

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,120,180,.35),
        rgba(255,255,255,.08))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.08)";

    });

});

// -------------------------
// Финальная кнопка
// -------------------------

const finalBtn=document.getElementById("loveExplosion");

if(finalBtn){

    finalBtn.addEventListener("click",()=>{

        explodeHearts();

        finalBtn.innerHTML="❤️ Я люблю тебя бесконечно ❤️";

        finalBtn.disabled=true;

    });

}// ======================================
// Love Site Script v2
// Часть 4
// ======================================

// -------------------------
// Звёзды
// -------------------------

function createStar(){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*4+"s";

    document.body.appendChild(star);

}

for(let i=0;i<120;i++){

    createStar();

}

// -------------------------
// Сердечки возле курсора
// -------------------------

document.addEventListener("mousemove",(e)=>{

    if(Math.random()>0.97){

        createHeart(e.clientX,e.clientY);

    }

});

// -------------------------
// Лёгкая пульсация заголовка
// -------------------------

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

},3000);

}

// -------------------------
// Автоматическая проверка изображений
// -------------------------

photos.forEach(photo=>{

photo.onerror=()=>{

photo.src="https://placehold.co/400x600?text=❤️";

};

});

// -------------------------
// Сообщение в консоли
// -------------------------

console.log("%c❤️ Для Кати ❤️",
"font-size:26px;color:#ff4f92;font-weight:bold;");

console.log("Сайт успешно загружен ❤️");

// ======================================
// Конец файла
// ======================================
