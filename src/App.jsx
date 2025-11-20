import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, ArrowRight, ArrowLeft } from "lucide-react";
import "./App.css";
import { content, departments, projects, leaders } from "./data";

export default function App() {
    const [lang, setLang] = useState("en");
    const t = content[lang];
    const isRTL = lang === "ar";

    return (
        <div className="min-h-screen selection:bg-[#C8102E] selection:text-white">
            {/* NAVBAR */}
            <nav
                dir="ltr"
                className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-3 bg-white/95 backdrop-blur-md shadow-sm transition-all"
            >
                <div className="flex items-center gap-3 cursor-pointer">
                    <img
                        src="/logo.png"
                        alt="Elsewedy Logo"
                        className="h-10 object-contain"
                    />
                    <div className="hidden md:flex flex-col leading-none border-l-2 border-gray-200 pl-3 ml-1">
                        <span className="text-xs font-bold text-gray-400 tracking-widest">
                            PROJECTS
                        </span>
                        <span className="text-xs font-bold text-[#C8102E] tracking-widest">
                            SECTOR
                        </span>
                    </div>
                </div>
                <button
                    onClick={() => setLang(lang === "en" ? "ar" : "en")}
                    className="text-sm font-bold text-gray-500 hover:text-[#C8102E] transition-colors flex items-center gap-2"
                >
                    <Globe size={16} />
                    <span>{lang === "en" ? "عربي" : "English"}</span>
                </button>
            </nav>

            <main dir={isRTL ? "rtl" : "ltr"}>
                {/* HERO SECTION */}
                <header className="relative h-[90vh] flex items-center">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/energycablesn.jpg"
                            alt="Engineering"
                            className="w-full h-full object-cover brightness-[0.4]"
                        />
                    </div>
                    <div
                        className={`relative z-10 container mx-auto px-8 ${isRTL ? "text-right" : "text-left"}`}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <p className="text-gray-300 text-lg mb-2 font-light tracking-wide">
                                {t.hero_slogan}
                            </p>
                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                                {lang === "en" ? (
                                    <>
                                        Building The{" "}
                                        <span className="text-[#C8102E]">
                                            Future
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        نبني{" "}
                                        <span className="text-[#C8102E]">
                                            المستقبل
                                        </span>
                                    </>
                                )}
                            </h1>
                            <button className="group bg-[#C8102E] text-white px-6 py-2.5 rounded-full font-bold text-base hover:bg-red-700 transition-all flex items-center gap-3">
                                {t.cta_btn}
                                {isRTL ? (
                                    <ArrowLeft
                                        size={18}
                                        className="group-hover:-translate-x-1 transition-transform"
                                    />
                                ) : (
                                    <ArrowRight
                                        size={18}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                )}
                            </button>
                        </motion.div>
                    </div>
                </header>

                {/* DEPARTMENTS SECTION (Grid Update) */}
                <section className="py-20 px-6 bg-gray-50">
                    <div className="container mx-auto">
                        <div
                            className={`flex flex-col mb-12 ${isRTL ? "items-start" : "items-start"}`}
                        >
                            <span className="text-[#C8102E] font-bold tracking-wider uppercase text-xs mb-2">
                                Our Structure
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900">
                                {t.dept_title}
                            </h2>
                        </div>
                        {/* Grid adjusts automatically to fit new items */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {departments.map((dept) => (
                                <motion.div
                                    key={dept.id}
                                    // 🟢 هذا السطر هو المسؤول عن فتح اللينك
                                    onClick={() =>
                                        dept.link
                                            ? window.open(dept.link, "_blank")
                                            : null
                                    }
                                    whileHover={{ y: -5 }}
                                    // 🟢 إضافة شرط لتغيير شكل الماوس لو فيه لينك
                                    className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-red-100 ${dept.link ? "cursor-pointer hover:ring-2 hover:ring-[#C8102E]" : "cursor-default"}`}
                                >
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 mb-4 group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                                        {dept.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-1 flex items-center gap-2">
                                        {isRTL ? dept.nameAr : dept.nameEn}
                                        {/* 🟢 أيقونة صغيرة تظهر لو فيه لينك ليعرف المستخدم */}
                                        {dept.link && (
                                            <span className="text-xs text-[#C8102E] bg-red-50 px-2 py-0.5 rounded-full">
                                                Login ↗
                                            </span>
                                        )}
                                    </h3>
                                    <div className="w-6 h-0.5 bg-gray-300 group-hover:w-12 group-hover:bg-[#C8102E] transition-all duration-500 rounded"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LEADERSHIP SECTION */}
                <section className="py-20 px-6 bg-white">
                    <div className="container mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900">
                                {t.leaders_title}
                            </h2>
                        </div>

                        <div className="flex flex-wrap justify-center gap-10">
                            {/* 🟢 الخدعة البرمجية هنا:
                           إذا كانت اللغة إنجليزي، نعكس الترتيب ليصبح صاحب الشركة (رقم 1) في اليمين
                           إذا كانت عربي، نتركه كما هو لأنه يظهر يميناً تلقائياً
                        */}
                            {(lang === "en"
                                ? [...leaders].reverse()
                                : leaders
                            ).map((leader, idx) => (
                                <div
                                    key={idx}
                                    className="text-center group cursor-pointer"
                                >
                                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-[#C8102E] transition-all duration-300 mb-4 relative">
                                        <img
                                            src={leader.img}
                                            alt={leader.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                        {/* تأثير لمعان خفيف */}
                                        <div className="absolute inset-0 bg-[#C8102E]/0 group-hover:bg-[#C8102E]/10 transition-colors"></div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">
                                        {leader.name}
                                    </h3>
                                    <p className="text-gray-500 text-xs mt-1 uppercase tracking-wide font-semibold text-[#C8102E]">
                                        {isRTL ? leader.roleAr : leader.roleEn}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROJECTS - SMALLER & SLEEKER */}
                <section className="py-16 bg-[#111] text-white overflow-hidden">
                    <div className="container mx-auto px-6 mb-8 flex items-end justify-between">
                        <h2 className="text-2xl font-bold">
                            {t.projects_title}
                        </h2>
                        <div className="hidden md:flex gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                        </div>
                    </div>

                    {/* Slider Container */}
                    <div className="flex gap-5 overflow-x-auto px-6 pb-6 hide-scrollbar snap-x">
                        {projects.map((proj, i) => (
                            // 🟢 تم تصغير الارتفاع هنا إلى h-[280px]
                            <div
                                key={i}
                                className="min-w-[300px] md:min-w-[400px] h-[280px] relative rounded-xl overflow-hidden snap-center group cursor-pointer border border-gray-800 hover:border-[#C8102E] transition-colors"
                            >
                                <img
                                    src={proj.img}
                                    alt={proj.titleEn}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/60 to-transparent">
                                    <h3 className="text-xl font-bold mb-1">
                                        {isRTL ? proj.titleAr : proj.titleEn}
                                    </h3>
                                    <p className="text-xs text-gray-400 group-hover:text-[#C8102E] transition-colors">
                                        {lang === "en"
                                            ? "View Case Study"
                                            : "عرض التفاصيل"}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            {/* 🟢 CLASSIC GRID FOOTER (STRUCTURED & VERTICAL) 🟢 */}
            <footer className="bg-[#1a1a1a] text-gray-400 pt-16 pb-8 border-t-4 border-[#C8102E]">
                <div className="container mx-auto px-8">
                    {/* Grid: 4 Columns (محدد ومنظم) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                        {/* Column 1: Brand Identity */}
                        <div>
                            <img
                                src="/logo2.png"
                                alt="Logo"
                                className="h-10 grayscale brightness-200 mb-6"
                            />
                            <p className="text-sm leading-relaxed text-gray-500">
                                {t.hero_slogan}.
                            </p>
                            <p className="text-xs mt-4 text-gray-600 font-bold">
                                CR: 123456 | Tax: 789-000
                            </p>
                        </div>

                        {/* Column 2: Departments (Vertical List) */}
                        <div>
                            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm border-l-2 border-[#C8102E] pl-2 h-5 flex items-center">
                                {t.dept_title}
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                                    HSE & Safety
                                </li>
                                <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                                    Technical Office
                                </li>
                                <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                                    Quality Control
                                </li>
                                <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                                    Civil Execution
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Quick Links (Vertical List) */}
                        <div>
                            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm border-l-2 border-[#C8102E] pl-2 h-5 flex items-center">
                                {t.footer_links}
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                                    Home
                                </li>
                                <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                                    About Us
                                </li>
                                <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                                    Projects Gallery
                                </li>
                                <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                                    Careers
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Contact (Boxed Style) */}
                        <div className="bg-[#222] p-6 rounded-lg border border-gray-800">
                            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm text-[#C8102E]">
                                {t.footer_contact}
                            </h3>
                            <div className="space-y-3 text-xs">
                                <p className="flex items-start gap-3 text-gray-300">
                                    <span>📍</span>
                                    <span>
                                        Plot 15, 5th Settlement, New Cairo,
                                        Egypt
                                    </span>
                                </p>
                                <p className="flex items-center gap-3 text-gray-300">
                                    <span>📞</span>
                                    <span className="font-mono font-bold text-white">
                                        +20 100 000 0000
                                    </span>
                                </p>
                                <p className="flex items-center gap-3 text-gray-300">
                                    <span>✉️</span>
                                    <span>projects@elsewedy.com</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar: Copyright */}
                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                        <p>{t.footer_rights}</p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="hover:text-[#C8102E] transition-colors"
                            >
                                Privacy
                            </a>
                            <span className="text-gray-800">|</span>
                            <a
                                href="#"
                                className="hover:text-[#C8102E] transition-colors"
                            >
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
