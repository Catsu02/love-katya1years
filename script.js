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

if(startButton && letter){

    startButton.addEventListener("click",()=>{

        letter.classList.remove("hidden");

        letter.scrollIntoView({

            behavior:"smooth"

        });

        heartExplosion();

    });

}

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

if(viewer && viewerImage){

    document.querySelectorAll(".photo img").forEach(img=>{

        img.addEventListener("click",()=>{

            viewer.classList.add("active");

            viewerImage.src=img.src;

        });

    });

    viewer.addEventListener("click",()=>{

        viewer.classList.remove("active");

    });

}
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

        loveButton.innerHTML="❤️ Я люблю тебя очень сильно ❤️";

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
// ================================
// 100 причин
// ================================

const reasons = [
"❤️ Потому что рядом с тобой я счастлив.",
"🌹 Потому что твоя улыбка делает мой день лучше.",
"🥰 Потому что ты самая красивая для меня.",
"💖 Потому что рядом с тобой спокойно.",
"✨ Потому что ты понимаешь меня без слов.",
"🤍 Потому что ты заботишься обо мне.",
"🌙 Потому что ты всегда в моих мыслях.",
"☀️ Потому что ты делаешь мои дни ярче.",
"💌 Потому что каждый разговор с тобой особенный.",
"🌸 Потому что ты даришь мне улыбку.",
"❤️ Потому что мне нравится смотреть тебе в глаза.",
"🌹 Потому что мне нравится твой смех.",
"🥹 Потому что ты умеешь поддержать.",
"💖 Потому что ты очень добрая.",
"✨ Потому что рядом с тобой уютно.",
"🤍 Потому что ты делаешь меня лучше.",
"🌙 Потому что я скучаю по тебе.",
"☀️ Потому что ты всегда рядом.",
"💌 Потому что ты вдохновляешь меня.",
"🌸 Потому что ты самая любимая.",
"❤️ Потому что мне нравится проводить время с тобой.",
"🌹 Потому что твои объятия самые лучшие.",
"🥰 Потому что ты всегда красивая.",
"💖 Потому что ты искренняя.",
"✨ Потому что ты заставляешь меня улыбаться.",
"🤍 Потому что ты умеешь слушать.",
"🌙 Потому что ты понимаешь мои чувства.",
"☀️ Потому что ты делаешь мир лучше.",
"💌 Потому что мне нравится твой голос.",
"🌸 Потому что ты делаешь меня счастливым.",
"❤️ Потому что ты — моя поддержка.",
"🌹 Потому что мне спокойно рядом с тобой.",
"🥰 Потому что ты всегда остаёшься собой.",
"💖 Потому что ты очень нежная.",
"✨ Потому что я доверяю тебе.",
"🤍 Потому что ты моя радость.",
"🌙 Потому что ты умеешь удивлять.",
"☀️ Потому что ты мой лучший человек.",
"💌 Потому что ты мой уют.",
"🌸 Потому что ты моё вдохновение.",
"❤️ Потому что ты невероятная.",
"🌹 Потому что ты даришь тепло.",
"🥰 Потому что рядом с тобой время летит быстро.",
"💖 Потому что ты самая милая.",
"✨ Потому что мне нравится всё в тебе.",
"🤍 Потому что ты стала частью моей жизни.",
"🌙 Потому что я люблю гулять с тобой.",
"☀️ Потому что ты делаешь каждый день особенным.",
"💌 Потому что ты делаешь меня сильнее.",
"🌸 Потому что ты всегда остаёшься в моём сердце.",
"❤️ Потому что ты моя мечта.",
"🌹 Потому что ты умеешь радоваться мелочам.",
"🥰 Потому что ты очень красивая.",
"💖 Потому что ты всегда рядом, когда нужна.",
"✨ Потому что мне нравится заботиться о тебе.",
"🤍 Потому что мне нравится смешить тебя.",
"🌙 Потому что мне нравится твой характер.",
"☀️ Потому что ты добрая ко всем.",
"💌 Потому что мне нравится держать тебя за руку.",
"🌸 Потому что ты делаешь меня счастливым человеком.",
"❤️ Потому что ты умеешь поднять настроение.",
"🌹 Потому что мне нравится твоя улыбка утром.",
"🥰 Потому что ты умеешь мечтать.",
"💖 Потому что ты моя любовь.",
"✨ Потому что ты всегда прекрасна.",
"🤍 Потому что ты делаешь меня увереннее.",
"🌙 Потому что ты моё счастье.",
"☀️ Потому что мне нравится быть рядом.",
"💌 Потому что ты самая лучшая девушка.",
"🌸 Потому что ты всегда поддержишь.",
"❤️ Потому что ты умеешь любить.",
"🌹 Потому что ты очень ласковая.",
"🥰 Потому что ты делаешь мои вечера лучше.",
"💖 Потому что мне нравится твоя доброта.",
"✨ Потому что мне нравится твоё внимание.",
"🤍 Потому что ты делаешь меня спокойнее.",
"🌙 Потому что ты мой человек.",
"☀️ Потому что мне нравится твоя забота.",
"💌 Потому что ты делаешь меня счастливым каждый день.",
"🌸 Потому что ты даришь надежду.",
"❤️ Потому что мне нравится всё, что связано с тобой.",
"🌹 Потому что ты самая дорогая.",
"🥰 Потому что ты заставляешь моё сердце биться чаще.",
"💖 Потому что ты мой лучший подарок.",
"✨ Потому что рядом с тобой всё кажется легче.",
"🤍 Потому что ты особенная.",
"🌙 Потому что ты невероятно красивая.",
"☀️ Потому что ты умеешь сделать день лучше.",
"💌 Потому что ты всегда останешься в моём сердце.",
"🌸 Потому что ты лучшая.",
"❤️ Потому что я счастлив, что встретил тебя.",
"🌹 Потому что я хочу быть рядом всегда.",
"🥰 Потому что мне нравится твоё присутствие.",
"💖 Потому что рядом с тобой я настоящий.",
"✨ Потому что ты моя любовь.",
"🤍 Потому что ты мой смысл.",
"🌙 Потому что ты делаешь жизнь прекраснее.",
"☀️ Потому что ты заслуживаешь счастья.",
"💌 Потому что я люблю тебя всё сильнее.",
"❤️ Потому что даже 100 причин недостаточно, чтобы описать, как сильно я тебя люблю."
];

const reasonsContainer = document.getElementById("reasons");

if(reasonsContainer){

reasons.forEach((reason,index)=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML = `
    <h3 style="margin-bottom:15px;color:#ff8cc6;">
        Причина №${index + 1}
    </h3>
    <p>${reason}</p>
`;

reasonsContainer.appendChild(card);

});

}

// ----------------------
// Конец файла
// ----------------------

console.log("❤️ Love Site успешно загружен ❤️");
