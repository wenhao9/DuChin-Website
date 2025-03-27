// Language Toggle (Same as before)
const translations = {
    en: {
        "hero-title": "Bulk Purchasing Power for Chinese Entrepreneurs",
        "hero-subtitle": "Join 300+ snackbar owners to get the best prices in the Netherlands.",
        "services-title": "How We Help You",
        "service1-title": "Bulk Purchasing Power",
        "service1-desc": "Buy in with 300+ Chinese entrepreneurs in snackbars and secure wholesale prices.",
        "service2-title": "Free Expert Consultation",
        "service2-desc": "10+ years of experience helping Chinese businesses thrive in the Netherlands.",
        "testimonials-title": "Trusted by Entrepreneurs",
        "cta-title": "Get Your Free Consultation",
        "cta-subtitle": "Contact us today to join our network.",
        "footer-text": "© 2024 DuChin. All rights reserved."
    },
    nl: {
        "hero-title": "Grootinkoop voor Chinese Ondernemers",
        "hero-subtitle": "Sluit je aan bij 300+ snackbar-eigenaren voor de beste prijzen in Nederland.",
        "services-title": "Hoe Wij Helpen",
        "service1-title": "Grootinkoop",
        "service1-desc": "Koop in met 300+ Chinese ondernemers in snackbars en krijg wholesale prijzen.",
        "service2-title": "Gratis Deskundig Advies",
        "service2-desc": "10+ jaar ervaring met Chinese bedrijven in Nederland.",
        "testimonials-title": "Aanbevolen door Ondernemers",
        "cta-title": "Vraag Gratis Advies Aan",
        "cta-subtitle": "Neem vandaag nog contact op.",
        "footer-text": "© 2024 DuChin. Alle rechten voorbehouden."
    },
    zh: {
        "hero-title": "华人企业家批量采购联盟",
        "hero-subtitle": "加入300多家小吃店业主，获取荷兰最优价格。",
        "services-title": "我们的服务",
        "service1-title": "批量采购优势",
        "service1-desc": "与300多家小吃店联合采购，享受批发价。",
        "service2-title": "免费专家咨询",
        "service2-desc": "10年以上帮助华商在荷兰发展的经验。",
        "testimonials-title": "企业家的选择",
        "cta-title": "获取免费咨询",
        "cta-subtitle": "立即联系我们加入联盟。",
        "footer-text": "© 2024 杜中。保留所有权利。"
    }
};

function changeLanguage(lang) {
    document.querySelectorAll("[id]").forEach(element => {
        const key = element.id;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID'); // Replace with your GA ID