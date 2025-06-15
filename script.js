document.addEventListener('DOMContentLoaded', () => {
    // --- НОВАЯ ЛОГИКА: ПАРАЛЛАКС И ЗВЕЗДНОЕ НЕБО ---
    
    const starsLayer1 = document.getElementById('stars1');
    const starsLayer2 = document.getElementById('stars2');
    const starsLayer3 = document.getElementById('stars3');

    // Функция для создания звезд
    function createStars(container, count, minSize, maxSize, colorArray, colorProbabilities) {
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            const size = Math.random() * (maxSize - minSize) + minSize;
            star.className = 'star';
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 4}s`;
            // Выбор цвета по вероятности
            if (colorArray && colorProbabilities) {
                let r = Math.random();
                let acc = 0;
                for (let j = 0; j < colorArray.length; j++) {
                    acc += colorProbabilities[j];
                    if (r < acc) {
                        star.style.backgroundColor = colorArray[j];
                        break;
                    }
                }
            } else if (colorArray) {
                star.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
            }
            container.appendChild(star);
        }
    }

    // Цвета и вероятности: белый, синий, жёлтый, оранжевый, красный
    const starColors = ['#fff', '#a3d8ff', '#ffe066', '#ffb347', '#ff6961'];
    // Пример: белый — 40%, синий — 20%, жёлтый — 20%, оранжевый — 10%, красный — 10%
    const starColorProbabilities = [0.4, 0.2, 0.2, 0.1, 0.1];

    // Генерируем звезды на разных слоях (на 30% больше)
    createStars(starsLayer1, Math.round(150 * 1.3), 0.5, 1.5, starColors, starColorProbabilities);
    createStars(starsLayer2, Math.round(70 * 1.3), 1, 2.5, starColors, starColorProbabilities);
    createStars(starsLayer3, Math.round(25 * 1.3), 1.5, 3.5, starColors, starColorProbabilities);

    // Обработчик параллакс-эффекта при скролле
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;

        // Двигаем слои с разной скоростью
        starsLayer1.style.transform = `translateY(${scrollTop * 0.1}px)`;
        starsLayer2.style.transform = `translateY(${scrollTop * 0.3}px)`;
        starsLayer3.style.transform = `translateY(${scrollTop * 0.5}px)`;
    });

    
    // --- СЛОВАРЬ С ПЕРЕВОДАМИ ---
    const translations = {
        ru: {
            navAbout: 'Обо мне',
            navProjects: 'Проекты',
            navPricing: 'Цены',
            navContact: 'Контакты',
            aboutTitle: 'Немного о себе',
            aboutText: `Привет! Я [Ваше Имя], диджей с 5-летним опытом, специализируюсь на deep house, techno и progressive. Моя миссия — создавать незабываемую атмосферу на танцполе и делиться энергией через музыку.`,
            projectsTitle: 'Мои Проекты',
            project1Title: 'Summer Vibes Mix 2024',
            project1Desc: 'Солнечный и энергичный микс в стиле deep house.',
            projectBtn: 'Слушать',
            project2Title: 'Midnight Techno Session',
            project2Desc: 'Глубокое погружение в мир гипнотического техно.',
            project3Title: 'Live from "The Void" Club',
            project3Desc: 'Запись моего живого выступления в культовом клубе.',
            projectBtnWatch: 'Смотреть',
            pricingTitle: 'Цены на услуги',
            price1Title: 'Частное мероприятие',
            price1Feat1: 'День рождения, юбилей',
            price1Feat2: 'До 4 часов работы',
            price1Feat3: 'Базовый комплект оборудования',
            priceBtn: 'Заказать',
            price2Title: 'Клубное выступление',
            price2Feat1: 'Сет на 2-3 часа',
            price2Feat2: 'Работа на клубном оборудовании',
            price2Feat3: 'Промо в моих соцсетях',
            priceBtnBook: 'Забронировать',
            price3Title: 'Корпоратив / Свадьба',
            price3Feat1: 'Полное музыкальное сопровождение',
            price3Feat2: 'До 6 часов работы',
            price3Feat3: 'Расширенный комплект света и звука',
            contactTitle: 'Связаться со мной',
            contactSubTitle: 'Готовы зажечь? Свяжитесь со мной для бронирования даты!',
            footerText: `© 2025 German Istomin. All rights reserved.`
        },
        en: {
            navAbout: 'About',
            navProjects: 'Projects',
            navPricing: 'Pricing',
            navContact: 'Contact',
            aboutTitle: 'A little about me',
            aboutText: `Hi! I'm [Your Name], a DJ with 5 years of experience specializing in deep house, techno, and progressive. My mission is to create an unforgettable atmosphere on the dance floor and share energy through music.`,
            projectsTitle: 'My Projects',
            project1Title: 'Summer Vibes Mix 2024',
            project1Desc: 'A sunny and energetic mix in a deep house style.',
            projectBtn: 'Listen',
            project2Title: 'Midnight Techno Session',
            project2Desc: 'A deep dive into the world of hypnotic techno.',
            project3Title: 'Live from "The Void" Club',
            project3Desc: 'A recording of my live performance at the iconic club.',
            projectBtnWatch: 'Watch',
            pricingTitle: 'Service Prices',
            price1Title: 'Private Event',
            price1Feat1: 'Birthday, anniversary',
            price1Feat2: 'Up to 4 hours of work',
            price1Feat3: 'Basic equipment set',
            priceBtn: 'Order',
            price2Title: 'Club Performance',
            price2Feat1: '2-3 hour set',
            price2Feat2: 'Work on club equipment',
            price2Feat3: 'Promo on my social media',
            priceBtnBook: 'Book',
            price3Title: 'Corporate / Wedding',
            price3Feat1: 'Full musical accompaniment',
            price3Feat2: 'Up to 6 hours of work',
            price3Feat3: 'Extended light and sound set',
            contactTitle: 'Get in Touch',
            contactSubTitle: 'Ready to rock? Contact me to book a date!',
            footerText: `© 2024 DJ [Your Name]. All rights reserved.`
        },
        lt: {
            navAbout: 'Apie mane',
            navProjects: 'Projektai',
            navPricing: 'Kainos',
            navContact: 'Kontaktai',
            aboutTitle: 'Truputis apie mane',
            aboutText: `Sveiki! Aš [Jūsų Vardas], DJ su 5 metų patirtimi, specializuojuosi deep house, techno ir progressive stiliuose. Mano misija – sukurti nepamirštamą atmosferą šokių aikštelėje ir dalintis energija per muziką.`,
            projectsTitle: 'Mano Projektai',
            project1Title: 'Summer Vibes Mix 2024',
            project1Desc: 'Saulėtas ir energingas deep house stiliaus miksas.',
            projectBtn: 'Klausytis',
            project2Title: 'Midnight Techno Session',
            project2Desc: 'Gilus pasinėrimas į hipnotizuojančio techno pasaulį.',
            project3Title: 'Live from "The Void" Club',
            project3Desc: 'Mano gyvo pasirodymo įrašas kultiniame klube.',
            projectBtnWatch: 'Žiūrėti',
            pricingTitle: 'Paslaugų kainos',
            price1Title: 'Privatus renginys',
            price1Feat1: 'Gimtadienis, jubiliejus',
            price1Feat2: 'Iki 4 valandų darbo',
            price1Feat3: 'Bazinis įrangos komplektas',
            priceBtn: 'Užsakyti',
            price2Title: 'Pasirodymas klube',
            price2Feat1: '2-3 valandų setas',
            price2Feat2: 'Darbas su klubo įranga',
            price2Feat3: 'Reklama mano socialiniuose tinkluose',
            priceBtnBook: 'Rezervuoti',
            price3Title: 'Įmonės vakarėlis / Vestuvės',
            price3Feat1: 'Pilnas muzikinis aptarnavimas',
            price3Feat2: 'Iki 6 valandų darbo',
            price3Feat3: 'Išplėstinis šviesos ir garso komplektas',
            contactTitle: 'Susisiekite su manimi',
            contactSubTitle: 'Pasiruošę užkurti vakarėlį? Susisiekite su manimi ir rezervuokite datą!',
            footerText: `© 2024 DJ [Jūsų Vardas]. Visos teisės saugomos.`
        }
    };
    
    // --- ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ЯЗЫКОВ ---
    const langButtons = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-lang-key]');
    
    const changeLanguage = (lang) => {
        // Устанавливаем язык для всей страницы
        document.documentElement.lang = lang;
        
        // Перебираем все элементы, которые нужно перевести
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        
        // Обновляем активную кнопку
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });

        // Сохраняем выбор пользователя
        localStorage.setItem('preferredLanguage', lang);
    };

    // Добавляем обработчики кликов на кнопки
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // При загрузке страницы проверяем, есть ли сохраненный язык
    const savedLang = localStorage.getItem('preferredLanguage') || 'ru'; // По умолчанию русский
    changeLanguage(savedLang);


    // --- ПЛАВНОЕ ПОЯВЛЕНИЕ БЛОКОВ ПРИ СКРОЛЛЕ ---
    const fadeElems = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    fadeElems.forEach(elem => { observer.observe(elem); });

    // --- ПЛАВНЫЙ СКРОЛЛ К ЯКОРЯМ ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });
});