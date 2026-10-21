/* ============================================
   NEURA Studio — Animations + i18n
   ============================================ */

(function () {
    'use strict';

    // ==========================================
    // i18n TRANSLATIONS
    // ==========================================
    const LANG = {
        en: {
            'nav.services': 'Services',
            'nav.about': 'About',
            'nav.portfolio': 'Portfolio',
            'nav.order': 'Order Now',
            'hero.eyebrow': 'AI Creative Studio',
            'hero.line1': 'We Create',
            'hero.line2': 'Impossible',
            'hero.line3': 'Content',
            'hero.desc': '<span class="reveal-line revealed">Send us your brief — get back stunning AI-generated</span><span class="reveal-line revealed">content. Video, images, text, music, 3D and more.</span><span class="reveal-line revealed">We handle the AI. You get the result.</span>',
            'hero.cta': 'Place an Order',
            'hero.cta2': 'See Our Work',
            'marquee.images': 'Image Generation',
            'marquee.video': 'Video Production',
            'marquee.copy': 'Copywriting',
            'marquee.audio': 'Voice & Music',
            'marquee.3d': '3D & Animation',
            'marquee.code': 'Code & Web',
            'marquee.brand': 'Brand Design',
            'about.label': '[ About Us ]',
            'about.heading': 'We don\'t sell tools. We deliver results. Your idea comes in — polished AI content goes out.',
            'about.text1': 'NEURA is a creative studio where AI meets human expertise. You send us a brief — we return production-ready content crafted with the most advanced AI models on the planet. No subscriptions, no learning curves, no prompt engineering on your end.',
            'about.text2': 'Our team of AI artists, engineers, and creative directors hand-curate every output. We treat AI as a creative partner, not a shortcut — and the results speak for themselves.',
            'about.f1title': 'Fully Custom',
            'about.f1text': 'Every piece of content is generated specifically for your brand and vision',
            'about.f2title': 'Lightning Fast',
            'about.f2text': 'Most orders delivered within 24-48 hours with unlimited revisions',
            'about.f3title': 'Commercial Rights',
            'about.f3text': 'Full commercial license included — use the content anywhere, forever',
            'stats.projects': 'Projects Completed',
            'stats.content': 'Content Pieces Delivered',
            'stats.satisfaction': 'Client Satisfaction',
            'stats.hours': 'h',
            'stats.delivery': 'Average Delivery Time',
            'services.label': '[ What We Create For You ]',
            'services.heading': 'You describe it.<br><em>We generate it.</em>',
            'srv.1.title': 'Images & Visual Art',
            'srv.1.desc': 'Photorealistic renders, concept art, product shots, illustrations, social media visuals',
            'srv.2.title': 'Video & Motion',
            'srv.2.desc': 'Commercials, explainers, reels, cinematic clips, product videos, animated logos',
            'srv.3.title': 'Text & Copywriting',
            'srv.3.desc': 'Articles, ad copy, product descriptions, scripts, newsletters, SEO content in 50+ languages',
            'srv.4.title': 'Audio & Music',
            'srv.4.desc': 'Voice overs, jingles, podcast intros, full tracks, sound design, voice cloning',
            'srv.5.title': '3D & Animation',
            'srv.5.desc': 'Product visualization, character design, architectural renders, AR/VR assets',
            'srv.6.title': 'Code & Websites',
            'srv.6.desc': 'Landing pages, web apps, bots, automation scripts, app prototypes, AI integrations',
            'process.label': '[ How It Works ]',
            'process.heading': 'Three steps to<br><em>perfect content</em>',
            'process.s1title': 'Send Your Brief',
            'process.s1text': 'Tell us what you need — describe the content, share references, mood boards, or just a rough idea. We\'ll figure out the rest.',
            'process.s2title': 'We Generate & Refine',
            'process.s2text': 'Our team runs your brief through custom AI pipelines, curates the best outputs, and polishes everything to production quality.',
            'process.s3title': 'Receive & Use',
            'process.s3text': 'Get your finished content in any format you need. Full commercial rights included. Need changes? Unlimited revisions are on us.',
            'works.label': '[ Our Work ]',
            'works.heading': 'Selected<br><em>projects</em>',
            'works.sub': 'Every piece here was crafted by our team using AI, from brief to final delivery.',
            'works.drag': 'Drag to explore',
            'work.1.title': 'Neural Fashion Campaign',
            'work.1.desc': 'Full lookbook with 200+ AI-generated fashion shots for a luxury brand launch',
            'work.2.title': 'Crypto Exchange Promo',
            'work.2.desc': '60-second cinematic commercial generated entirely with AI video models',
            'work.3.title': 'AI Product Visualizer',
            'work.3.desc': 'Interactive 3D product renders for an electronics brand\'s entire catalog',
            'work.4.title': 'Synthwave Album',
            'work.4.desc': '12-track original album composed and produced by AI for a streaming platform',
            'work.5.title': 'E-commerce Content Engine',
            'work.5.desc': '10,000+ unique product descriptions for a marketplace with SEO optimization',
            'work.6.title': 'Virtual Brand Ambassador',
            'work.6.desc': 'AI-generated digital human with cloned voice for a fintech company',
            'big.1': 'YOUR VISION',
            'big.2': 'OUR AI',
            'big.3': 'PERFECT RESULT',
            'cta.label': '[ Place an Order ]',
            'cta.heading': 'Tell us what<br>you need — we<br><em>create it</em>.',
            'cta.text': 'Fill out the form, describe what you want to generate, and we\'ll get back to you with a result. Video, images, music, text — anything AI can create.',
            'cta.trust': '500+ orders completed',
            'form.name': 'Name',
            'form.name_ph': 'Your name',
            'form.contact': 'Email / Telegram',
            'form.contact_ph': 'How to reach you',
            'form.type': 'What to generate?',
            'form.type_ph': 'Select type',
            'form.opt.video': 'Video',
            'form.opt.images': 'Images / Art',
            'form.opt.text': 'Text / Copy',
            'form.opt.audio': 'Music / Audio',
            'form.opt.3d': '3D / Animation',
            'form.opt.code': 'Code / Website',
            'form.opt.other': 'Other',
            'form.brief': 'Describe your request',
            'form.brief_ph': 'What should we create? Add any details, references, or links...',
            'form.submit': 'Send Order',
            'form.sent': 'Sent!',
            'footer.company': 'Company',
            'footer.careers': 'Careers',
            'footer.blog': 'Blog',
            'footer.contact': 'Contact',
            'footer.social': 'Social',
            'footer.legal': 'Legal',
            'footer.privacy': 'Privacy Policy',
            'footer.terms': 'Terms of Service',
        },
        ru: {
            'nav.services': 'Услуги',
            'nav.about': 'О нас',
            'nav.portfolio': 'Портфолио',
            'nav.order': 'Заказать',
            'hero.eyebrow': 'AI Креативная Студия',
            'hero.line1': 'Мы Создаём',
            'hero.line2': 'Невозможный',
            'hero.line3': 'Контент',
            'hero.desc': '<span class="reveal-line revealed">Отправьте нам бриф — получите готовый AI-контент.</span><span class="reveal-line revealed">Видео, изображения, тексты, музыка, 3D и не только.</span><span class="reveal-line revealed">Мы работаем с ИИ. Вы получаете результат.</span>',
            'hero.cta': 'Оставить заявку',
            'hero.cta2': 'Наши работы',
            'marquee.images': 'Генерация изображений',
            'marquee.video': 'Видеопродакшн',
            'marquee.copy': 'Копирайтинг',
            'marquee.audio': 'Озвучка и музыка',
            'marquee.3d': '3D и анимация',
            'marquee.code': 'Код и веб',
            'marquee.brand': 'Брендинг',
            'about.label': '[ О нас ]',
            'about.heading': 'Мы не продаём инструменты. Мы делаем за вас. Вы присылаете идею — получаете готовый AI-контент.',
            'about.text1': 'NEURA — креативная студия на стыке ИИ и человеческой экспертизы. Вы отправляете бриф — мы возвращаем готовый контент, созданный на самых передовых AI-моделях. Никаких подписок, кривых обучения и промпт-инжиниринга с вашей стороны.',
            'about.text2': 'Наша команда AI-художников, инженеров и креативных директоров вручную курирует каждый результат. Мы используем ИИ как творческого партнёра, а не как ярлык — и результаты говорят сами за себя.',
            'about.f1title': 'Полностью под вас',
            'about.f1text': 'Каждый материал создаётся индивидуально под ваш бренд и задачу',
            'about.f2title': 'Молниеносно',
            'about.f2text': 'Большинство заказов выполняются за 24-48 часов с безлимитными правками',
            'about.f3title': 'Коммерческие права',
            'about.f3text': 'Полная коммерческая лицензия — используйте контент где угодно и навсегда',
            'stats.projects': 'Проектов выполнено',
            'stats.content': 'Единиц контента',
            'stats.satisfaction': 'Довольных клиентов',
            'stats.hours': 'ч',
            'stats.delivery': 'Среднее время выполнения',
            'services.label': '[ Что мы создаём для вас ]',
            'services.heading': 'Вы описываете.<br><em>Мы генерируем.</em>',
            'srv.1.title': 'Изображения и арт',
            'srv.1.desc': 'Фотореалистичные рендеры, концепт-арт, фото продуктов, иллюстрации, визуалы для соцсетей',
            'srv.2.title': 'Видео и моушн',
            'srv.2.desc': 'Рекламные ролики, эксплейнеры, рилсы, кинематографичные клипы, продуктовые видео',
            'srv.3.title': 'Тексты и копирайтинг',
            'srv.3.desc': 'Статьи, рекламные тексты, описания товаров, сценарии, рассылки, SEO-контент на 50+ языках',
            'srv.4.title': 'Аудио и музыка',
            'srv.4.desc': 'Озвучка, джинглы, подкаст-заставки, треки, саунд-дизайн, клонирование голоса',
            'srv.5.title': '3D и анимация',
            'srv.5.desc': 'Визуализация продуктов, дизайн персонажей, архитектурные рендеры, AR/VR ассеты',
            'srv.6.title': 'Код и сайты',
            'srv.6.desc': 'Лендинги, веб-приложения, боты, скрипты автоматизации, прототипы, AI-интеграции',
            'process.label': '[ Как это работает ]',
            'process.heading': 'Три шага до<br><em>идеального контента</em>',
            'process.s1title': 'Отправьте бриф',
            'process.s1text': 'Расскажите, что вам нужно — опишите контент, поделитесь референсами, мудбордами или просто идеей. Остальное мы возьмём на себя.',
            'process.s2title': 'Мы генерируем',
            'process.s2text': 'Наша команда прогоняет ваш бриф через AI-пайплайны, отбирает лучшие результаты и доводит всё до продакшн-качества.',
            'process.s3title': 'Получите и используйте',
            'process.s3text': 'Получите готовый контент в любом формате. Коммерческие права включены. Нужны правки? Безлимитные ревизии за наш счёт.',
            'works.label': '[ Наши работы ]',
            'works.heading': 'Избранные<br><em>проекты</em>',
            'works.sub': 'Каждая работа здесь создана нашей командой с помощью ИИ — от брифа до финального результата.',
            'works.drag': 'Листайте',
            'work.1.title': 'Нейро-фешн кампания',
            'work.1.desc': 'Лукбук из 200+ AI-сгенерированных фешн-фото для запуска люкс-бренда',
            'work.2.title': 'Промо криптобиржи',
            'work.2.desc': '60-секундный кинематографичный ролик, полностью созданный AI-видеомоделями',
            'work.3.title': 'AI-визуализатор продуктов',
            'work.3.desc': 'Интерактивные 3D-рендеры для полного каталога бренда электроники',
            'work.4.title': 'Synthwave альбом',
            'work.4.desc': '12 оригинальных треков, сочинённых и спродюсированных ИИ для стриминговой платформы',
            'work.5.title': 'Движок контента для e-com',
            'work.5.desc': '10 000+ уникальных описаний товаров для маркетплейса с SEO-оптимизацией',
            'work.6.title': 'Виртуальный амбассадор',
            'work.6.desc': 'AI-сгенерированный цифровой человек с клонированным голосом для финтех-компании',
            'big.1': 'ВАШЕ ВИДЕНИЕ',
            'big.2': 'НАШ ИИ',
            'big.3': 'ИДЕАЛЬНЫЙ РЕЗУЛЬТАТ',
            'cta.label': '[ Оставить заявку ]',
            'cta.heading': 'Расскажите, что<br>вам нужно — мы<br><em>создадим</em>.',
            'cta.text': 'Заполните форму, опишите, что хотите сгенерировать, и мы свяжемся с вами. Видео, изображения, музыка, тексты — всё, что может создать ИИ.',
            'cta.trust': '500+ выполненных заказов',
            'form.name': 'Имя',
            'form.name_ph': 'Ваше имя',
            'form.contact': 'Email / Telegram',
            'form.contact_ph': 'Как с вами связаться',
            'form.type': 'Что сгенерировать?',
            'form.type_ph': 'Выберите тип',
            'form.opt.video': 'Видео',
            'form.opt.images': 'Изображения / Арт',
            'form.opt.text': 'Текст / Копирайтинг',
            'form.opt.audio': 'Музыка / Аудио',
            'form.opt.3d': '3D / Анимация',
            'form.opt.code': 'Код / Сайт',
            'form.opt.other': 'Другое',
            'form.brief': 'Опишите запрос',
            'form.brief_ph': 'Что нужно создать? Добавьте детали, референсы или ссылки...',
            'form.submit': 'Отправить заявку',
            'form.sent': 'Отправлено!',
            'footer.company': 'Компания',
            'footer.careers': 'Вакансии',
            'footer.blog': 'Блог',
            'footer.contact': 'Контакты',
            'footer.social': 'Соцсети',
            'footer.legal': 'Документы',
            'footer.privacy': 'Политика конфиденциальности',
            'footer.terms': 'Условия использования',
        }
    };

    let currentLang = localStorage.getItem('neura-lang') || 'en';

    function setLang(lang) {
        currentLang = lang;
        localStorage.setItem('neura-lang', lang);
        document.documentElement.lang = lang;

        // Update all [data-i18n] text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (LANG[lang][key] !== undefined) {
                // For split-text animated elements, rebuild chars
                if (el.hasAttribute('data-animate') && el.dataset.animate === 'chars') {
                    rebuildChars(el, LANG[lang][key]);
                } else if (el.hasAttribute('data-animate') && el.dataset.animate === 'words') {
                    rebuildWords(el, LANG[lang][key]);
                } else {
                    el.textContent = LANG[lang][key];
                }
            }
        });

        // Update all [data-i18n-html] innerHTML
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (LANG[lang][key] !== undefined) {
                el.innerHTML = LANG[lang][key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (LANG[lang][key] !== undefined) {
                el.placeholder = LANG[lang][key];
            }
        });

        // Update lang switch buttons
        document.querySelectorAll('.lang-switch').forEach(btn => {
            const active = btn.querySelector('.lang-switch-active');
            const inactive = btn.querySelector('.lang-switch-inactive');
            active.textContent = lang.toUpperCase();
            inactive.textContent = lang === 'en' ? 'RU' : 'EN';
        });
    }

    function rebuildChars(el, text) {
        el.textContent = '';
        el.setAttribute('aria-label', text);
        [...text].forEach((char, i) => {
            const span = document.createElement('span');
            span.classList.add('char-animated');
            span.style.animationDelay = (i * 0.04) + 's';
            span.textContent = char === ' ' ? '\u00A0' : char;
            el.appendChild(span);
        });
    }

    function rebuildWords(el, text) {
        el.textContent = '';
        el.setAttribute('aria-label', text);
        text.split(' ').forEach((word, i) => {
            const span = document.createElement('span');
            span.classList.add('word-animated', 'revealed');
            span.style.transitionDelay = (i * 0.05) + 's';
            span.textContent = word;
            el.appendChild(span);
            if (i < text.split(' ').length - 1) {
                el.appendChild(document.createTextNode(' '));
            }
        });
    }

    function initLangSwitch() {
        document.querySelectorAll('.lang-switch').forEach(btn => {
            btn.addEventListener('click', () => {
                const next = currentLang === 'en' ? 'ru' : 'en';
                setLang(next);
            });
        });
        // Apply saved language on load
        setLang(currentLang);
    }

    // ==========================================
    // PRELOADER
    // ==========================================
    const preloader = document.getElementById('preloader');
    const preloaderProgress = document.querySelector('.preloader-progress');
    let loadProg = 0;

    const preloaderTimer = setInterval(() => {
        loadProg += Math.random() * 20 + 8;
        if (loadProg > 100) loadProg = 100;
        preloaderProgress.style.width = loadProg + '%';
        if (loadProg >= 100) {
            clearInterval(preloaderTimer);
            setTimeout(() => {
                preloader.classList.add('done');
                setTimeout(() => {
                    preloader.style.display = 'none';
                    initEverything();
                }, 800);
            }, 300);
        }
    }, 70);

    document.body.style.overflow = 'hidden';

    function initEverything() {
        document.body.style.overflow = '';
        initCursor();
        initNav();
        initSplitText();
        initReveal();
        initCounters();
        initParticles();
        initParallax();
        initServiceRows();
        initHorizontalScroll();
        initForm();
        initMagnetic();
        initSmoothAnchors();
        initLangSwitch();
        initTheme();
    }

    // ==========================================
    // THEME TOGGLE
    // ==========================================
    function initTheme() {
        const saved = localStorage.getItem('neura-theme') || 'dark';
        applyTheme(saved);

        document.querySelectorAll('.theme-toggle').forEach(btn => {
            btn.addEventListener('click', () => {
                const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
                applyTheme(next);
                localStorage.setItem('neura-theme', next);
            });
        });
    }

    function applyTheme(theme) {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }

    // ==========================================
    // CUSTOM CURSOR
    // ==========================================
    function initCursor() {
        if (window.innerWidth <= 768) return;
        const cursor = document.getElementById('cursor');
        const cursorGlow = document.getElementById('cursor-glow');
        const cursorText = document.getElementById('cursor-text');
        let mx = 0, my = 0, gx = 0, gy = 0;

        document.addEventListener('mousemove', e => {
            mx = e.clientX; my = e.clientY;
            cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
        });

        (function tick() {
            gx += (mx - gx) * 0.06; gy += (my - gy) * 0.06;
            cursorGlow.style.left = gx + 'px'; cursorGlow.style.top = gy + 'px';
            requestAnimationFrame(tick);
        })();

        const hovers = document.querySelectorAll('a, button, .service-row, .work-card, .process-step, .about-feature, input, textarea, select');
        hovers.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
            el.addEventListener('mouseleave', () => { cursor.classList.remove('is-hover', 'is-text'); cursorText.textContent = ''; });
        });

        document.querySelectorAll('[data-cursor-text]').forEach(el => {
            el.addEventListener('mouseenter', () => { cursor.classList.remove('is-hover'); cursor.classList.add('is-text'); cursorText.textContent = el.dataset.cursorText; });
            el.addEventListener('mouseleave', () => { cursor.classList.remove('is-text'); cursorText.textContent = ''; });
        });
    }

    // ==========================================
    // NAVIGATION
    // ==========================================
    function initNav() {
        const nav = document.getElementById('nav');
        const burger = document.getElementById('nav-burger');
        const menu = document.getElementById('mobile-menu');

        window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60), { passive: true });

        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            menu.classList.toggle('active');
            document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
        });

        document.querySelectorAll('.mobile-menu-link').forEach(link => {
            link.addEventListener('click', () => { burger.classList.remove('active'); menu.classList.remove('active'); document.body.style.overflow = ''; });
        });

        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link:not(.nav-link--cta)');
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(s => { if (window.scrollY >= s.offsetTop - 250) current = s.id; });
            navLinks.forEach(link => { link.style.color = link.getAttribute('href') === '#' + current ? '#fff' : ''; });
        }, { passive: true });
    }

    // ==========================================
    // SPLIT TEXT
    // ==========================================
    function initSplitText() {
        document.querySelectorAll('[data-animate="chars"]').forEach(el => {
            const text = el.textContent.trim();
            el.textContent = '';
            el.setAttribute('aria-label', text);
            [...text].forEach((char, i) => {
                const span = document.createElement('span');
                span.classList.add('char-animated');
                span.style.animationDelay = (0.6 + i * 0.04) + 's';
                span.textContent = char === ' ' ? '\u00A0' : char;
                el.appendChild(span);
            });
        });

        document.querySelectorAll('[data-animate="words"]').forEach(el => {
            const text = el.textContent.trim();
            el.textContent = '';
            el.setAttribute('aria-label', text);
            text.split(' ').forEach((word, i, arr) => {
                const span = document.createElement('span');
                span.classList.add('word-animated');
                span.style.transitionDelay = (i * 0.05) + 's';
                span.textContent = word;
                el.appendChild(span);
                if (i < arr.length - 1) el.appendChild(document.createTextNode(' '));
            });

            const obs = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        el.querySelectorAll('.word-animated').forEach(w => w.classList.add('revealed'));
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            obs.observe(el);
        });
    }

    // ==========================================
    // SCROLL REVEAL
    // ==========================================
    function initReveal() {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); obs.unobserve(entry.target); } });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.reveal-up, .reveal-line').forEach(el => obs.observe(el));

        document.querySelectorAll('.hero-desc').forEach(group => {
            const lines = group.querySelectorAll('.reveal-line');
            const lineObs = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) { lines.forEach((l, i) => setTimeout(() => l.classList.add('revealed'), i * 100 + 800)); lineObs.unobserve(entry.target); }
                });
            }, { threshold: 0.3 });
            lineObs.observe(group);
        });
    }

    // ==========================================
    // COUNTERS
    // ==========================================
    function initCounters() {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => { if (entry.isIntersecting) { animateCounter(entry.target); obs.unobserve(entry.target); } });
        }, { threshold: 0.5 });
        document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
    }

    function animateCounter(el) {
        const target = parseInt(el.dataset.count), duration = 2200, start = performance.now();
        (function tick(now) {
            const p = Math.min((now - start) / duration, 1);
            el.textContent = Math.floor((1 - Math.pow(1 - p, 4)) * target);
            if (p < 1) requestAnimationFrame(tick); else el.textContent = target;
        })(start);
    }

    // ==========================================
    // PARTICLES
    // ==========================================
    function initParticles() {
        const c = document.getElementById('hero-particles');
        if (!c) return;
        const colors = ['#7c3aed','#ec4899','#06b6d4','#f59e0b','#10b981'];
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.classList.add('particle');
            Object.assign(p.style, { left: Math.random()*100+'%', top: Math.random()*100+'%', width: (Math.random()*3+1)+'px', animationDuration: (Math.random()*6+4)+'s', animationDelay: (Math.random()*6)+'s', background: colors[Math.floor(Math.random()*colors.length)] });
            p.style.height = p.style.width;
            c.appendChild(p);
        }
    }

    // ==========================================
    // PARALLAX
    // ==========================================
    function initParallax() {
        if (window.innerWidth <= 768) return;
        const orbs = document.querySelectorAll('.hero-orb'), cards = document.querySelectorAll('.hero-visual-card');
        window.addEventListener('scroll', () => { const sy = window.scrollY; orbs.forEach((o, i) => o.style.transform = `translateY(${sy*(0.04+i*0.02)}px)`); }, { passive: true });
        const hero = document.getElementById('hero');
        if (hero) hero.addEventListener('mousemove', e => {
            const r = hero.getBoundingClientRect(), x = (e.clientX-r.left)/r.width-0.5, y = (e.clientY-r.top)/r.height-0.5;
            cards.forEach((c, i) => { const d = (i+1)*8; c.style.transform = `translate(${x*d}px, ${y*d-12*Math.sin(Date.now()/1000+i)}px)`; });
        });
    }

    // ==========================================
    // SERVICE ROWS
    // ==========================================
    function initServiceRows() {
        document.querySelectorAll('.service-row').forEach(row => {
            const bg = row.querySelector('.service-row-bg'), color = row.dataset.color;
            row.addEventListener('mouseenter', () => bg.style.background = `linear-gradient(90deg, ${color}10, transparent)`);
        });
    }

    // ==========================================
    // HORIZONTAL SCROLL
    // ==========================================
    function initHorizontalScroll() {
        const s = document.getElementById('works-scroll');
        if (!s) return;
        let isDown = false, startX, scrollLeft;
        s.addEventListener('mousedown', e => { isDown = true; s.style.cursor = 'grabbing'; startX = e.pageX - s.offsetLeft; scrollLeft = s.scrollLeft; });
        s.addEventListener('mouseleave', () => { isDown = false; s.style.cursor = 'grab'; });
        s.addEventListener('mouseup', () => { isDown = false; s.style.cursor = 'grab'; });
        s.addEventListener('mousemove', e => { if (!isDown) return; e.preventDefault(); s.scrollLeft = scrollLeft - (e.pageX - s.offsetLeft - startX) * 2; });
        s.addEventListener('wheel', e => { if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; e.preventDefault(); s.scrollLeft += e.deltaY * 1.5; }, { passive: false });
    }

    // ==========================================
    // FORM
    // ==========================================
    function initForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;
        form.addEventListener('submit', e => {
            e.preventDefault();
            const btn = form.querySelector('.btn-submit'), txt = btn.querySelector('.btn-submit-text'), ico = btn.querySelector('.btn-submit-icon');
            const orig = txt.textContent;
            txt.textContent = LANG[currentLang]['form.sent'];
            ico.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10L9 14L15 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            btn.style.background = 'linear-gradient(135deg,#22c55e,#10b981)';
            setTimeout(() => { txt.textContent = LANG[currentLang]['form.submit']; ico.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 15L15 5M15 5H8M15 5V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'; btn.style.background = ''; form.reset(); }, 3000);
        });
    }

    // ==========================================
    // MAGNETIC
    // ==========================================
    function initMagnetic() {
        if (window.innerWidth <= 768) return;
        document.querySelectorAll('[data-magnetic]').forEach(btn => {
            btn.addEventListener('mousemove', e => {
                const r = btn.getBoundingClientRect(), x = e.clientX-r.left-r.width/2, y = e.clientY-r.top-r.height/2;
                btn.style.transform = `translate(${x*0.2}px,${y*0.2}px)`;
                const inner = btn.querySelector('.btn-magnetic-text');
                if (inner) inner.style.transform = `translate(${x*0.1}px,${y*0.1}px)`;
            });
            btn.addEventListener('mouseleave', () => { btn.style.transform = ''; const inner = btn.querySelector('.btn-magnetic-text'); if (inner) inner.style.transform = ''; });
        });

        document.querySelectorAll('.process-step').forEach(card => {
            card.addEventListener('mousemove', e => {
                const r = card.getBoundingClientRect(), x = (e.clientX-r.left)/r.width-0.5, y = (e.clientY-r.top)/r.height-0.5;
                card.style.transform = `perspective(800px) rotateX(${y*-4}deg) rotateY(${x*4}deg) translateY(-6px)`;
            });
            card.addEventListener('mouseleave', () => card.style.transform = '');
        });
    }

    // ==========================================
    // SMOOTH SCROLL
    // ==========================================
    function initSmoothAnchors() {
        document.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', function (e) {
                const t = document.querySelector(this.getAttribute('href'));
                if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
            });
        });
    }

})();
