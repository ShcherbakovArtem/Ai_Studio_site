/* NEURA — Script */
(function(){
'use strict';

/* i18n */
const T={
en:{
'nav.services':'Services','nav.about':'About','nav.portfolio':'Portfolio','nav.order':'Order',
'hero.line1':'We Create','hero.line2':'Impossible','hero.line3':'Content',
'hero.desc':'Send us your brief — get back stunning AI-generated content. Video, images, text, music, 3D and more. We handle the AI. You get the result.',
'hero.cta':'Order Now',
'marquee.images':'Image Generation','marquee.video':'Video Production','marquee.copy':'Copywriting',
'marquee.audio':'Voice & Music','marquee.3d':'3D & Animation','marquee.code':'Code & Web','marquee.brand':'Brand Design',
'about.label':'[ About Us ]',
'about.heading':'NEURA&nbsp;&reg; &mdash; a creative studio working at the intersection of <em>AI</em> and <em>human expertise.</em> We generate content that moves businesses forward.',
'about.text1':'You send us a brief — we return production-ready content crafted with the most advanced AI models. No subscriptions, no learning curves, no prompt engineering on your end.',
'about.text2':'Our team of AI artists, engineers, and creative directors hand-curate every output. We treat AI as a creative partner, not a shortcut.',
'about.f1title':'Fully Custom','about.f1text':'Every piece generated specifically for your brand',
'about.f2title':'Lightning Fast','about.f2text':'Most orders delivered within 24-48 hours',
'about.f3title':'Commercial Rights','about.f3text':'Full license — use the content anywhere, forever',
'stats.projects':'Projects Completed','stats.content':'Content Pieces','stats.satisfaction':'Satisfaction','stats.hours':'h','stats.delivery':'Avg. Delivery',
'services.label':'[ Services ]','services.heading':'What we<br><em>create for you</em>',
'srv.1.title':'Images & Visual Art','srv.1.desc':'Photorealistic renders, concept art, product shots, illustrations',
'srv.2.title':'Video & Motion','srv.2.desc':'Commercials, explainers, reels, cinematic clips, product videos',
'srv.3.title':'Text & Copywriting','srv.3.desc':'Articles, ad copy, product descriptions, scripts, SEO content',
'srv.4.title':'Audio & Music','srv.4.desc':'Voice overs, jingles, full tracks, sound design, voice cloning',
'srv.5.title':'3D & Animation','srv.5.desc':'Product visualization, character design, architectural renders',
'srv.6.title':'Code & Websites','srv.6.desc':'Landing pages, web apps, bots, scripts, AI integrations',
'process.label':'[ How It Works ]','process.heading':'Three steps to<br><em>perfect content</em>',
'process.s1title':'Send Your Brief','process.s1text':'Describe what you need — share references, mood boards, or just a rough idea. We\'ll figure out the rest.',
'process.s2title':'We Generate & Refine','process.s2text':'Our team runs your brief through custom AI pipelines and polishes everything to production quality.',
'process.s3title':'Receive & Use','process.s3text':'Get finished content in any format. Commercial rights included. Unlimited revisions on us.',
'works.label':'[ Portfolio ]','works.t1':'Latest','works.t2':'projects',
'work.1.title':'Neural Fashion Campaign','work.2.title':'Crypto Exchange Promo','work.3.title':'AI Product Visualizer',
'work.4.title':'Synthwave Album','work.5.title':'E-commerce Content Engine','work.6.title':'Virtual Brand Ambassador',
'cta.label':'[ Order ]','cta.heading':'Tell us what you need —<br>we <em>create it</em>.',
'cta.text':'Fill out the form, describe what you want to generate, and we\'ll get back to you with a result.',
'cta.trust':'500+ orders completed',
'form.name':'Name','form.name_ph':'Your name','form.contact':'Email / Telegram','form.contact_ph':'How to reach you',
'form.type':'What to generate?','form.type_ph':'Select type',
'form.opt.video':'Video','form.opt.images':'Images / Art','form.opt.text':'Text / Copy','form.opt.audio':'Music / Audio',
'form.opt.3d':'3D / Animation','form.opt.code':'Code / Website','form.opt.other':'Other',
'form.brief':'Describe your request','form.brief_ph':'What should we create?',
'form.submit':'Send Order','form.sent':'Sent!',
'footer.company':'Company','footer.blog':'Blog','footer.contact':'Contact','footer.social':'Social','footer.privacy':'Privacy Policy',
},
ru:{
'nav.services':'Услуги','nav.about':'О нас','nav.portfolio':'Портфолио','nav.order':'Заказать',
'hero.line1':'Мы Создаём','hero.line2':'Невозможный','hero.line3':'Контент',
'hero.desc':'Отправьте бриф — получите готовый AI-контент. Видео, изображения, тексты, музыка, 3D и не только. Мы работаем с ИИ. Вы получаете результат.',
'hero.cta':'Заказать',
'marquee.images':'Генерация изображений','marquee.video':'Видеопродакшн','marquee.copy':'Копирайтинг',
'marquee.audio':'Озвучка и музыка','marquee.3d':'3D и анимация','marquee.code':'Код и веб','marquee.brand':'Брендинг',
'about.label':'[ О нас ]',
'about.heading':'NEURA&nbsp;&reg; &mdash; креативная студия на стыке <em>ИИ</em> и <em>человеческой экспертизы.</em> Мы генерируем контент, который двигает бизнес вперёд.',
'about.text1':'Вы отправляете бриф — мы возвращаем готовый контент, созданный на самых передовых AI-моделях. Никаких подписок, кривых обучения и промпт-инжиниринга.',
'about.text2':'Наша команда AI-художников, инженеров и креативных директоров курирует каждый результат. ИИ — наш партнёр, не ярлык.',
'stats.projects':'Проектов','stats.content':'Единиц контента','stats.satisfaction':'Довольны','stats.hours':'ч','stats.delivery':'Среднее время',
'services.label':'[ Услуги ]','services.heading':'Что мы<br><em>создаём для вас</em>',
'srv.1.title':'Изображения и арт','srv.1.desc':'Фотореалистичные рендеры, концепт-арт, фото продуктов, иллюстрации',
'srv.2.title':'Видео и моушн','srv.2.desc':'Рекламные ролики, эксплейнеры, рилсы, продуктовые видео',
'srv.3.title':'Тексты и копирайтинг','srv.3.desc':'Статьи, рекламные тексты, описания товаров, сценарии, SEO',
'srv.4.title':'Аудио и музыка','srv.4.desc':'Озвучка, джинглы, треки, саунд-дизайн, клонирование голоса',
'srv.5.title':'3D и анимация','srv.5.desc':'Визуализация продуктов, персонажи, архитектурные рендеры',
'srv.6.title':'Код и сайты','srv.6.desc':'Лендинги, веб-приложения, боты, скрипты, AI-интеграции',
'process.label':'[ Как это работает ]','process.heading':'Три шага до<br><em>идеального контента</em>',
'process.s1title':'Отправьте бриф','process.s1text':'Опишите, что нужно — поделитесь референсами, мудбордами или просто идеей.',
'process.s2title':'Мы генерируем','process.s2text':'Команда прогоняет бриф через AI-пайплайны и доводит до продакшн-качества.',
'process.s3title':'Получите и используйте','process.s3text':'Готовый контент в любом формате. Коммерческие права включены. Правки бесплатно.',
'works.label':'[ Портфолио ]','works.t1':'Последние','works.t2':'проекты',
'work.1.title':'Нейро-фешн кампания','work.2.title':'Промо криптобиржи','work.3.title':'AI-визуализатор продуктов',
'work.4.title':'Synthwave альбом','work.5.title':'Контент для e-com','work.6.title':'Виртуальный амбассадор',
'cta.label':'[ Заказать ]','cta.heading':'Расскажите, что вам нужно —<br>мы <em>создадим</em>.',
'cta.text':'Заполните форму и опишите запрос. Мы свяжемся с вами и вернёмся с результатом.',
'cta.trust':'500+ выполненных заказов',
'form.name':'Имя','form.name_ph':'Ваше имя','form.contact':'Email / Telegram','form.contact_ph':'Как с вами связаться',
'form.type':'Что сгенерировать?','form.type_ph':'Выберите тип',
'form.opt.video':'Видео','form.opt.images':'Изображения / Арт','form.opt.text':'Текст / Копирайтинг','form.opt.audio':'Музыка / Аудио',
'form.opt.3d':'3D / Анимация','form.opt.code':'Код / Сайт','form.opt.other':'Другое',
'form.brief':'Опишите запрос','form.brief_ph':'Что нужно создать?',
'form.submit':'Отправить заявку','form.sent':'Отправлено!',
'footer.company':'Компания','footer.blog':'Блог','footer.contact':'Контакты','footer.social':'Соцсети','footer.privacy':'Политика конфиденциальности',
}};

let lang=localStorage.getItem('neura-lang')||'en';
function setLang(l){
  lang=l;localStorage.setItem('neura-lang',l);document.documentElement.lang=l;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.textContent=T[l][k]});
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{const k=el.getAttribute('data-i18n-html');if(T[l][k]!==undefined)el.innerHTML=T[l][k]});
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{const k=el.getAttribute('data-i18n-placeholder');if(T[l][k]!==undefined)el.placeholder=T[l][k]});
  document.querySelectorAll('.lang-switch').forEach(b=>{b.querySelector('.lang-switch-active').textContent=l.toUpperCase();b.querySelector('.lang-switch-inactive').textContent=l==='en'?'RU':'EN'});
}

/* Preloader */
const pre=document.getElementById('preloader'),fill=document.querySelector('.preloader-fill');
let p=0;const pt=setInterval(()=>{p+=Math.random()*18+8;if(p>100)p=100;fill.style.width=p+'%';if(p>=100){clearInterval(pt);setTimeout(()=>{pre.classList.add('done');setTimeout(()=>{pre.style.display='none';init()},700)},250)}},65);
document.body.style.overflow='hidden';

function init(){
  document.body.style.overflow='';
  // Nav
  const nav=document.getElementById('nav'),burger=document.getElementById('burger'),mob=document.getElementById('mob-menu');
  window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>50),{passive:true});
  burger.addEventListener('click',()=>{burger.classList.toggle('active');mob.classList.toggle('active');document.body.style.overflow=mob.classList.contains('active')?'hidden':''});
  document.querySelectorAll('.mob-link').forEach(a=>a.addEventListener('click',()=>{burger.classList.remove('active');mob.classList.remove('active');document.body.style.overflow=''}));

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',function(e){const t=document.querySelector(this.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}}));

  // Reveal
  const obs=new IntersectionObserver(ent=>{ent.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

  // Counters
  const cobs=new IntersectionObserver(ent=>{ent.forEach(e=>{if(e.isIntersecting){anim(e.target);cobs.unobserve(e.target)}})},{threshold:.5});
  document.querySelectorAll('[data-count]').forEach(el=>cobs.observe(el));
  function anim(el){const tgt=+el.dataset.count,dur=1800,st=performance.now();(function tick(now){const pr=Math.min((now-st)/dur,1);el.textContent=Math.floor((1-Math.pow(1-pr,4))*tgt);if(pr<1)requestAnimationFrame(tick);else el.textContent=tgt})(st)}

  // Lang
  document.querySelectorAll('.lang-switch').forEach(b=>b.addEventListener('click',()=>setLang(lang==='en'?'ru':'en')));
  setLang(lang);

  // Theme
  const saved=localStorage.getItem('neura-theme')||'dark';
  if(saved==='light')document.documentElement.setAttribute('data-theme','light');
  document.querySelectorAll('.theme-toggle').forEach(b=>b.addEventListener('click',()=>{
    const next=document.documentElement.getAttribute('data-theme')==='light'?'dark':'light';
    if(next==='light')document.documentElement.setAttribute('data-theme','light');else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('neura-theme',next);
  }));

  // Form
  const form=document.getElementById('contact-form');
  if(form)form.addEventListener('submit',e=>{
    e.preventDefault();const btn=form.querySelector('.btn-main'),orig=btn.innerHTML;
    btn.innerHTML='<span>'+T[lang]['form.sent']+'</span> &#10003;';btn.style.opacity='.7';
    setTimeout(()=>{btn.innerHTML='<span>'+T[lang]['form.submit']+'</span> &nearr;';btn.style.opacity='';form.reset()},2500);
  });
}
})();
