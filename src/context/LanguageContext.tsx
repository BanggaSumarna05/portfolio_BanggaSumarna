"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "id";

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        // Navbar
        navAbout: "About",
        navProjects: "Portfolio",
        navServices: "Expertise",
        navTestimonials: "Testimonials",
        navContact: "Contact",
        downloadCV: "Download CV",

        // Preloader
        webDeveloper: "Web Developer",

        // SequenceScroll
        heroLine1Part1: "Building websites that",
        heroLine1Part2: "look good and work flawlessly.",
        heroLine2Part1: "No fluff.",
        heroLine2Part2: "Just solid code and great design.",
        heroLine3: "Let's build something great.",
        getInTouch: "Get In Touch",

        // About
        theVision: "About Me",
        transforming: "Turning",
        ideas: "Ideas",
        intoReality: "Into Reality",
        aboutDesc: "I'm a web developer focused on building fast, reliable, and visually appealing websites. My tech stack revolves around HTML, CSS, PHP, Laravel, and MySQL.",

        // Projects
        selectedWorks: "Selected Works",
        seeAll: "See All",

        // Services
        expertise: "What I Do",
        service1Title: "Frontend Development",
        service1Desc: "Creating clean, responsive, and interactive user interfaces from scratch using HTML and CSS.",
        service2Title: "Creative Interactions",
        service2Desc: "Adding dynamic animations and smooth scroll effects to make websites feel alive and engaging.",
        service3Title: "Backend & Fullstack",
        service3Desc: "Developing secure and scalable systems from the server side down to the database using PHP, Laravel, and MySQL.",

        // Testimonials
        whatTheySay: "What They Say",
        test1Quote: "Bangga elevated our digital presence to a completely new standard. His attention to micro-interactions and smooth scrolling is unparalleled.",
        test1Role: "Leader, BEM FIKES UMTAS",
        test2Quote: "A true master of frontend and backend engineering. The way he bridges the gap between design and technical execution made our project a massive success.",
        test2Role: "Founder, CJA RENTCAR",
        test3Quote: "Working with Bangga was a seamless aesthetic journey. Highly professional and always pushing the boundaries of what the web can do.",
        test3Role: "Founder, PBM Pangandaran Food Stall",

        // Contact
        lets: "Let's",
        talk: "Talk",
        contactDesc: "Got a project in mind? Let's connect and see how we can work together.",
        sayHello: "Send a Message",

        // Footer
        basedIn: "Based in Pangandaran, West Java",
        availableFor: "Available for freelance projects worldwide.",
        allRightsReserved: "All Rights Reserved.",
        craftedWith: "Crafted with passion.",

        // Projects Page
        allProjectsTitle: "All Projects",
        backToHome: "Back to Home",
        projectGalleryDesc: "A collection of my work, experiments, and digital solutions.",
    },
    id: {
        // Navbar
        navAbout: "Tentang",
        navProjects: "Portofolio",
        navServices: "Keahlian",
        navTestimonials: "Testimoni",
        navContact: "Kontak",
        downloadCV: "Unduh CV",

        // Preloader
        webDeveloper: "Web Developer",

        // SequenceScroll
        heroLine1Part1: "Membangun website yang",
        heroLine1Part2: "menarik dan berfungsi optimal.",
        heroLine2Part1: "Tanpa basa-basi.",
        heroLine2Part2: "Hanya kode yang solid dan desain yang pas.",
        heroLine3: "Mari buat sesuatu yang keren.",
        getInTouch: "Hubungi Saya",

        // About
        theVision: "Tentang Saya",
        transforming: "Mewujudkan",
        ideas: "Ide",
        intoReality: "Menjadi Nyata",
        aboutDesc: "Saya seorang web developer yang fokus membangun website yang cepat, andal, dan enak dilihat. Teknologi andalan saya adalah HTML, CSS, PHP, Laravel, dan MySQL.",

        // Projects
        selectedWorks: "Karya Pilihan",
        seeAll: "Lihat Semua",

        // Services
        expertise: "Keahlian Saya",
        service1Title: "Frontend Development",
        service1Desc: "Membuat tampilan website yang rapi, responsif, dan interaktif dari nol menggunakan HTML dan CSS.",
        service2Title: "Creative Interactions",
        service2Desc: "Memberikan nyawa pada website lewat animasi dan interaksi yang mulus agar lebih hidup dan tidak membosankan.",
        service3Title: "Backend & Fullstack",
        service3Desc: "Membangun sistem yang aman dan bisa diandalkan, dari sisi server hingga database menggunakan PHP, Laravel, dan MySQL.",

        // Testimonials
        whatTheySay: "Kata Mereka",
        test1Quote: "Bangga meningkatkan standar kehadiran digital kami sepenuhnya. Perhatiannya pada interaksi mikro dan fitur scrolling sangat luar biasa.",
        test1Role: "Ketua, BEM FIKES UMTAS",
        test2Quote: "Seorang ahli dalam rekayasa frontend dan backend. Caranya menghubungkan desain dengan eksekusi teknis membuat proyek kami sukses besar.",
        test2Role: "Founder, CJA RENTCAR",
        test3Quote: "Bekerja bersama Bangga adalah perjalanan estetika yang mulus. Sangat profesional dan selalu melampaui batas kemampuan web.",
        test3Role: "Founder, PBM Pangandaran Food Stall",

        // Contact
        lets: "Mari",
        talk: "Ngobrol",
        contactDesc: "Punya ide proyek? Yuk, kita diskusikan dan lihat bagaimana kita bisa bekerja sama.",
        sayHello: "Kirim Pesan",

        // Footer
        basedIn: "Berbasis di Pangandaran, Jawa Barat",
        availableFor: "Menerima tawaran proyek freelance.",
        allRightsReserved: "Hak Cipta Dilindungi.",
        craftedWith: "Dibuat dengan sepenuh hati.",

        // Projects Page
        allProjectsTitle: "Semua Proyek",
        backToHome: "Kembali ke Beranda",
        projectGalleryDesc: "Kumpulan karya, eksperimen, dan solusi digital saya.",
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    // Load language from localStorage on mount
    useEffect(() => {
        const savedLang = localStorage.getItem("portfolio-lang") as Language;
        if (savedLang && (savedLang === "en" || savedLang === "id")) {
            setLanguage(savedLang);
        }
    }, []);

    const toggleLanguage = () => {
        setLanguage((prev) => {
            const newLang = prev === "en" ? "id" : "en";
            localStorage.setItem("portfolio-lang", newLang);
            return newLang;
        });
    };

    const t = (key: string): string => {
        // @ts-expect-error key indexing
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
