/* ==========================
   ДЛЯ КАТИ ❤️
   script.js | Part 1
========================== */

// Дата начала отношений
const startDate = new Date("2025-08-13T00:00:00");

// Таймер
function updateTimer() {

    const now = new Date();

    let diff = now - startDate;

    const days = Math.floor(diff / 1000 / 60 / 60 / 24);

    diff %= 1000 * 60 * 60 * 24;

    const hours = Math.floor(diff / 1000 / 60 / 60);

    diff %= 1000 * 60 * 60;

    const minutes = Math.floor(diff / 1000 / 60);

    diff %= 1000 * 60;

    const seconds = Math.floor(diff / 1000);

    document.getElementById("timer").innerHTML =
        `❤️ Мы вместе уже <br><br>
        <b>${days}</b> дней
        <b>${hours}</b> часов
        <b>${minutes}</b> минут
        <b>${seconds}</b> секунд`;
}

updateTimer();

setInterval(updateTimer,1000);

/* ==========================
   Открытие письма
========================== */

const button = document.getElementById("letterBtn");

const letter = document.getElementById("letter");

button.onclick = ()=>{

    if(letter.classList.contains("hidden")){

        letter.classList.remove("hidden");

        letter.scrollIntoView({

            behavior:"smooth"

        });

    }else{

        letter.classList.add("hidden");

    }

}

/* ==========================
   Сердечки
========================== */

function createHeart(){

    const heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*30)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,220);

/* ==========================
   Плавное появление блоков
========================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});

document.querySelectorAll(".gallery,.love,#letter").forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(80px)";

    el.style.transition="1s";

    observer.observe(el);

});/* ==========================
   script.js | Part 2
========================== */

/* Увеличение фотографий */

const photos = document.querySelectorAll(".photos img");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.className = "photo-overlay";

        const img = document.createElement("img");

        img.src = photo.src;

        overlay.appendChild(img);

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {

            overlay.remove();

        });

    });

});


/* Параллакс */

document.addEventListener("mousemove", e => {

    const x = (window.innerWidth / 2 - e.clientX) / 60;

    const y = (window.innerHeight / 2 - e.clientY) / 60;

    document.body.style.backgroundPosition = `${x}px ${y}px`;

});


/* Подсветка кнопки */

const loveButton = document.getElementById("letterBtn");

loveButton.addEventListener("mouseenter", () => {

    loveButton.style.boxShadow =
        "0 0 40px rgba(255,80,180,.8)";

});

loveButton.addEventListener("mouseleave", () => {

    loveButton.style.boxShadow = "";

});


/* Дождь из сердечек */

function heartExplosion() {

    for(let i = 0; i < 50; i++) {

        setTimeout(createHeart, i * 70);

    }

}

loveButton.addEventListener("click", heartExplosion);


/* Красивое появление карточек */

const cards = document.querySelectorAll(".card");

cards.forEach((card,index)=>{

    card.style.opacity="0";

    card.style.transform="translateY(50px)";

    card.style.transition=".7s";

    setTimeout(()=>{

        card.style.opacity="1";

        card.style.transform="translateY(0)";

    },700+index*150);

});/* ==========================
   script.js | Part 3
========================== */

/* Звёзды */

function createStar(){

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random()*100 + "vw";

    star.style.top = Math.random()*100 + "vh";

    star.style.animationDelay = Math.random()*5 + "s";

    document.body.appendChild(star);

}

for(let i=0;i<120;i++){

    createStar();

}


/* Печатающийся текст */

const subtitle = document.querySelector(".subtitle");

const originalText = subtitle.innerText;

subtitle.innerText="";

let index = 0;

function typeWriter(){

    if(index < originalText.length){

        subtitle.innerHTML += originalText.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

setTimeout(typeWriter,600);


/* Плавное масштабирование фотографий */

photos.forEach(photo=>{

    photo.addEventListener("mouseenter",()=>{

        photo.style.transform="scale(1.05) rotate(1deg)";

    });

    photo.addEventListener("mouseleave",()=>{

        photo.style.transform="scale(1)";

    });

});


/* Музыка */

const music = new Audio("music.mp3");

music.loop = true;

let musicStarted = false;

document.body.addEventListener("click",()=>{

    if(!musicStarted){

        music.play().catch(()=>{});

        musicStarted = true;

    }

},{once:true});


/* Плавное появление страницы */

document.body.style.opacity = "0";

window.addEventListener("load",()=>{

    document.body.style.transition = "1.5s";

    document.body.style.opacity = "1";

});/* ==========================
   Звёзды
========================== */

.star{

position:fixed;

width:2px;

height:2px;

background:white;

border-radius:50%;

opacity:.8;

animation:twinkle 3s infinite;

pointer-events:none;

z-index:0;

}

@keyframes twinkle{

0%{

opacity:.2;

transform:scale(1);

}

50%{

opacity:1;

transform:scale(2);

}

100%{

opacity:.2;

transform:scale(1);

}

}/* ==========================
   script.js | Part 4
========================== */

/* Кнопка "Наверх" */

const topButton = document.createElement("button");

topButton.innerHTML = "❤️";

topButton.id = "topButton";

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

});


/* Подсветка карточек */

const reasons=document.querySelectorAll(".card");

reasons.forEach(card=>{

    card.addEventListener("mousemove",e=>{

        const x=e.offsetX;

        const y=e.offsetY;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,120,180,.25),
        rgba(255,255,255,.08))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.08)";

    });

});


/* Пульсация заголовка */

const title=document.querySelector(".hero h1");

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

},2600);


/* Случайные сердечки при движении мыши */

document.addEventListener("mousemove",e=>{

    if(Math.random()>0.95){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤";

        heart.style.left=e.clientX+"px";

        heart.style.top=e.clientY+"px";

        heart.style.fontSize="16px";

        heart.style.animationDuration="3s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },3000);

    }

});
