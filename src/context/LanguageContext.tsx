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
        webDeveloper: "Programmer | Web Developer",

        // SequenceScroll
        heroLine1Part1: "Building high-performance",
        heroLine1Part2: "web solutions with precision.",
        heroLine2Part1: "Impactful results.",
        heroLine2Part2: "Clean code and strategic design.",
        heroLine3: "Available for new opportunities.",
        getInTouch: "Get In Touch",

        // About
        theVision: "About Me",
        transforming: "Turning",
        ideas: "Concepts",
        intoReality: "Into Scalable Solutions",
        aboutDesc: "I am an Information Technology Education graduate from Muhammadiyah University of Tasikmalaya with a focus on Software Engineering. With experience as a Junior Programmer at PT Prilude Studio and active leadership roles, I specialize in building web applications using Laravel and MySQL while maintaining clean code and structured workflows.",

        // Projects
        selectedWorks: "Selected Works",
        seeAll: "See All",

        // Services
        expertise: "Core Expertise",
        service1Title: "Frontend Engineering",
        service1Desc: "Architecting responsive and high-performance user interfaces using modern standards and best practices.",
        service2Title: "Interactive Experience",
        service2Desc: "Crafting seamless user experiences through meaningful animations and smooth, intuitive navigation.",
        service3Title: "Backend Architecture",
        service3Desc: "Designing and implementing secure, scalable server-side systems and efficient database structures.",

        // Testimonials
        whatTheySay: "Testimonials",
        test1Quote: "Bangga delivered a high-quality information system that significantly improved our organization's digital workflow. Highly recommended.",
        test1Role: "Director, BEM FIKES UMTAS",
        test2Quote: "A remarkable engineer who balances technical depth with business needs. The car rental portal exceeded all our expectations.",
        test2Role: "Managing Director, CJA RENTCAR",
        test3Quote: "Professional, efficient, and technically proficient. He transformed our concept into a high-converting digital platform.",
        test3Role: "Owner, PBM Pangandaran",

        // Contact
        lets: "Let's",
        talk: "Connect",
        contactDesc: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you.",
        sayHello: "Email Me",
        phone: "Phone",
        email: "Email",
        linkedIn: "LinkedIn",

        // Footer
        basedIn: "Based in Pangandaran, Indonesia",
        availableFor: "Open to full-time roles and freelance projects.",
        allRightsReserved: "All Rights Reserved.",
        craftedWith: "Crafted with excellence.",

        // Projects Page
        allProjectsTitle: "Full Portfolio",
        backToHome: "Back to Home",
        projectGalleryDesc: "A comprehensive showcase of my technical projects and professional work.",

        // Personal Info & Education
        personalTitle: "Personal Profile",
        educationTitle: "Academic Background",
        fullName: "Full Name",
        birthDate: "Date of Birth",
        nationality: "Nationality",
        languages: "Languages",
        location: "Location",
        edu1Degree: "B.Ed. in Information Technology",
        edu1Univ: "Muhammadiyah University of Tasikmalaya",
        edu1Year: "2020 - 2025",
        edu2Degree: "Software Engineering",
        edu2Univ: "SMKN 1 Pangandaran",
        edu2Year: "2018 - 2021",

        // Experience
        expTitle: "Work Experience",
        exp1Role: "Junior Programmer (Intern)",
        exp1Company: "PT Prilude Studio",
        exp1Date: "Oct – Dec 2024",
        exp1Desc: "Developed Laravel-based information systems, collaborated with developer teams, and implemented clean code practices.",
        exp2Role: "Web Developer (Internship)",
        exp2Company: "SMKN 1 Pangandaran",
        exp2Date: "2020",
        exp2Desc: "Built a restaurant marketing website independently, handling full-stack development and database design.",

        // Skills
        skillsTitle: "Skills & Proficiency",
        techStack: "Tech Stack",
        designTools: "Design & Creative",
        softSkills: "Soft Skills",

        // Certifications
        certTitle: "Certifications",
        viewCertificate: "View Certificate",
        downloadCert: "Download Certification",
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
        webDeveloper: "Programmer | Web Developer",

        // SequenceScroll
        heroLine1Part1: "Membangun solusi web",
        heroLine1Part2: "berperforma tinggi dan presisi.",
        heroLine2Part1: "Hasil yang berdampak.",
        heroLine2Part2: "Kode bersih dan desain strategis.",
        heroLine3: "Terbuka untuk peluang kerja baru.",
        getInTouch: "Hubungi Saya",

        // About
        theVision: "Tentang Saya",
        transforming: "Mengubah",
        ideas: "Konsep",
        intoReality: "Menjadi Solusi Skalabel",
        aboutDesc: "Saya adalah lulusan Program Studi Pendidikan Teknologi Informasi Universitas Muhammadiyah Tasikmalaya dengan konsentrasi Software Engineering. Memiliki pengalaman sebagai Junior Programmer di PT Prilude Studio dan aktif dalam organisasi kepemimpinan, saya mahir dalam membangun aplikasi web berbasis Laravel dan MySQL dengan kode yang bersih dan alur kerja terstruktur.",

        // Projects
        selectedWorks: "Karya Pilihan",
        seeAll: "Lihat Semua",

        // Services
        expertise: "Keahlian Utama",
        service1Title: "Frontend Engineering",
        service1Desc: "Membangun antarmuka pengguna yang responsif dan berperformam tinggi menggunakan standar dan praktik terbaik modern.",
        service2Title: "Interactive Experience",
        service2Desc: "Menciptakan pengalaman pengguna yang mulus melalui animasi yang bermakna dan navigasi yang intuitif.",
        service3Title: "Backend Architecture",
        service3Desc: "Merancang dan mengimplementasikan sistem sisi server yang aman dan skalabel serta struktur database yang efisien.",

        // Testimonials
        whatTheySay: "Testimoni",
        test1Quote: "Bangga menghadirkan sistem informasi berkualitas tinggi yang secara signifikan meningkatkan alur kerja digital organisasi kami. Sangat direkomendasikan.",
        test1Role: "Direktur, BEM FIKES UMTAS",
        test2Quote: "Seorang engineer luar biasa yang menyeimbangkan kedalaman teknis dengan kebutuhan bisnis. Portal rental mobil melampaui semua ekspektasi kami.",
        test2Role: "Managing Director, CJA RENTCAR",
        test3Quote: "Profesional, efisien, dan mahir secara teknis. Dia mengubah konsep kami menjadi platform digital dengan konversi tinggi.",
        test3Role: "Owner, PBM Pangandaran",

        // Contact
        lets: "Mari",
        talk: "Terhubung",
        contactDesc: "Saya sedang mencari peluang kerja baru. Jika Anda memiliki pertanyaan atau hanya ingin menyapa, saya akan berusaha sebaik mungkin untuk membalas Anda.",
        sayHello: "Kirim Email",
        phone: "Telepon",
        email: "Email",
        linkedIn: "LinkedIn",

        // Footer
        basedIn: "Berbasis di Pangandaran, Indonesia",
        availableFor: "Terbuka untuk peran full-time dan proyek freelance.",
        allRightsReserved: "Hak Cipta Dilindungi.",
        craftedWith: "Dibuat dengan keunggulan.",

        // Projects Page
        allProjectsTitle: "Portofolio Lengkap",
        backToHome: "Kembali ke Beranda",
        projectGalleryDesc: "Showcase komprehensif dari proyek teknis dan pekerjaan profesional saya.",

        // Personal Info & Education
        personalTitle: "Profil Pribadi",
        educationTitle: "Latar Belakang Akademik",
        fullName: "Nama Lengkap",
        birthDate: "Tanggal Lahir",
        nationality: "Kewarganegaraan",
        languages: "Bahasa",
        location: "Lokasi",
        edu1Degree: "S.Pd. Pendidikan Teknologi Informasi",
        edu1Univ: "Universitas Muhammadiyah Tasikmalaya",
        edu1Year: "2020 - 2025",
        edu2Degree: "Rekayasa Perangkat Lunak (RPL)",
        edu2Univ: "SMKN 1 Pangandaran",
        edu2Year: "2018 - 2021",

        // Experience
        expTitle: "Pengalaman Kerja",
        exp1Role: "Junior Programmer (Magang)",
        exp1Company: "PT Prilude Studio",
        exp1Date: "Okt – Des 2024",
        exp1Desc: "Mengembangkan sistem informasi berbasis Laravel, berkolaborasi dalam tim developer, dan menerapkan praktik kode bersih.",
        exp2Role: "Web Developer (PKL)",
        exp2Company: "SMKN 1 Pangandaran",
        exp2Date: "2020",
        exp2Desc: "Membangun website pemasaran restoran secara mandiri, menangani pengembangan full-stack dan desain database.",

        // Skills
        skillsTitle: "Keterampilan & Kemampuan",
        techStack: "Teknologi",
        designTools: "Desain & Kreatif",
        softSkills: "Soft Skills",

        // Certifications
        certTitle: "Sertifikasi",
        viewCertificate: "Lihat Sertifikat",
        downloadCert: "Unduh Sertifikasi",
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
