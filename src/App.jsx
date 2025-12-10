import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, animate, AnimatePresence } from "framer-motion";
import {
  Globe,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Menu,
  X,
  Plus,
  LogIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./App.css";
import DeptModal from "./DeptModal";
import ProjectModal from "./ProjectModal"; // 🟢 1. استيراد المودال الجديد
import { content, departments, projects, leaders, stats } from "./data";

export default function App() {
  const [lang, setLang] = useState("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // States for Department Modal
  const [selectedDept, setSelectedDept] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🟢 2. States for Project Modal (المتغيرات الجديدة)
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  // Slider State
  const [activeIndex, setActiveIndex] = useState(0);

  const t = content[lang];
  const isRTL = lang === "ar";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Open Dept Modal
  const openDeptModal = (dept) => {
    setSelectedDept(dept);
    setIsModalOpen(true);
  };

  // 🟢 3. Function to open Project Modal
  const openProjectModal = (category) => {
    setSelectedCategory(category);
    setIsProjectModalOpen(true);
  };

  // Slider Navigation
  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Determine Card Position
  const getCardStyle = (index) => {
    if (index === activeIndex) return "center";
    const len = projects.length;
    if (index === (activeIndex - 1 + len) % len) return "left";
    if (index === (activeIndex + 1) % len) return "right";
    return "hidden";
  };

  const navLinks = [
    { nameEn: "Home", nameAr: "الرئيسية", id: "home" },
    { nameEn: "About Us", nameAr: "من نحن", id: "about" },
    { nameEn: "Departments", nameAr: "الأقسام", id: "departments" },
    { nameEn: "Projects", nameAr: "المشروعات", id: "projects" },
    { nameEn: "Contact", nameAr: "تواصل معنا", id: "contact" },
  ];

  return (
    <div className="min-h-screen selection:bg-[#C8102E] selection:text-white relative">
      {/* 🟢 Render Modals */}
      <DeptModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        dept={selectedDept}
        lang={lang}
        t={t}
      />

      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        category={selectedCategory}
        lang={lang}
      />

      {/* NAVBAR */}
      <nav
        dir="ltr"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a
            href="#home"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src="/logo.png"
              alt="Elsewedy Logo"
              className={`object-contain transition-all duration-300 ${
                isScrolled ? "h-10" : "h-12 brightness-0 invert"
              }`}
              style={{
                filter: isScrolled ? "none" : "brightness(0) invert(1)",
              }}
            />
            <div
              className={`hidden md:flex flex-col leading-none border-l-2 pl-3 ml-1 transition-colors ${isScrolled ? "border-gray-200" : "border-white/30"}`}
            ></div>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={`#${link.id}`}
                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-[#C8102E] ${
                  isScrolled ? "text-gray-600" : "text-white"
                }`}
              >
                {lang === "en" ? link.nameEn : link.nameAr}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className={`text-sm font-bold transition-colors flex items-center gap-2 border px-3 py-1 rounded-full ${
                isScrolled
                  ? "border-gray-200 text-gray-500 hover:border-[#C8102E]"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              <Globe size={16} />
              <span>{lang === "en" ? "عربي" : "En"}</span>
            </button>
            <button
              className="md:hidden text-[#C8102E]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} color={isScrolled ? "#111" : "#fff"} />
              )}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 md:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-gray-700 hover:text-[#C8102E] border-b border-gray-50 pb-2"
              >
                {lang === "en" ? link.nameEn : link.nameAr}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      <main dir={isRTL ? "rtl" : "ltr"}>
        {/* HERO */}
        <header id="home" className="relative h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/cover.png"
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
                    Building The <span className="text-[#C8102E]">Future</span>
                  </>
                ) : (
                  <>
                    نبني <span className="text-[#C8102E]">المستقبل</span>
                  </>
                )}
              </h1>
              <button
                onClick={() =>
                  document.getElementById("projects").scrollIntoView()
                }
                className="group bg-[#C8102E] text-white px-6 py-2.5 rounded-full font-bold text-base hover:bg-red-700 transition-all flex items-center gap-3"
              >
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

        {/* ABOUT US */}
        <section id="about" className="py-24 px-6 bg-white overflow-hidden">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div
                initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/cover sewedy2.png"
                    alt="About Us"
                    className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div
                  className={`absolute -bottom-6 ${isRTL ? "-right-6" : "-left-6"} bg-[#C8102E] text-white p-6 rounded-xl shadow-xl`}
                >
                  <p className="text-4xl font-black mb-1">
                    {t.experience_years}
                  </p>
                  <p className="text-sm font-medium opacity-90">
                    {t.experience_text}
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <span className="text-[#C8102E] font-bold tracking-widest uppercase text-sm mb-2 block flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-[#C8102E]"></span>
                  {t.about_label}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {t.about_title}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  {t.about_desc}
                </p>
                <ul className="space-y-4">
                  {t.about_points &&
                    t.about_points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700 font-medium"
                      >
                        <CheckCircle2 className="text-[#C8102E]" size={20} />
                        {point}
                      </li>
                    ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* DEPARTMENTS SECTION */}
        <section id="departments" className="py-20 px-6 bg-gray-50">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept) => (
                <motion.div
                  key={dept.id}
                  onClick={() => openDeptModal(dept)}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-red-100 cursor-pointer hover:ring-2 hover:ring-[#C8102E]"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 mb-4 group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                    {dept.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1 flex items-center justify-between">
                    <span>{isRTL ? dept.nameAr : dept.nameEn}</span>
                    {dept.systemLink && (
                      <div className="flex items-center gap-1 text-[#C8102E] bg-red-50 px-2 py-1 rounded-full text-xs animate-pulse group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                        <LogIn size={14} />
                        <span
                          className="uppercase tracking-wider font-bold"
                          style={{ fontSize: "10px" }}
                        >
                          Login
                        </span>
                      </div>
                    )}
                  </h3>
                  <div className="w-6 h-0.5 bg-gray-300 group-hover:w-12 group-hover:bg-[#C8102E] transition-all duration-500 rounded mt-2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                {t.leaders_title}
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {(lang === "en" ? [...leaders].reverse() : leaders).map(
                (leader, idx) => (
                  <div key={idx} className="text-center group cursor-pointer">
                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-[#C8102E] transition-all duration-300 mb-4 relative">
                      <img
                        src={leader.img}
                        alt={leader.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-[#C8102E]/0 group-hover:bg-[#C8102E]/10 transition-colors"></div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {leader.name}
                    </h3>
                    <p className="text-gray-500 text-xs mt-1 uppercase tracking-wide font-semibold text-[#C8102E]">
                      {isRTL ? leader.roleAr : leader.roleEn}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="relative py-24 bg-[#C8102E] overflow-hidden">
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <img
              src="/logo.png"
              alt="Watermark"
              className="w-[800px] opacity-10 grayscale rotate-12 scale-150 mix-blend-multiply"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-12 md:gap-16 text-center text-white">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col items-center justify-center group min-w-[150px]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-4 p-4 bg-white/10 rounded-2xl text-white backdrop-blur-md shadow-xl group-hover:bg-white group-hover:text-[#C8102E] transition-all duration-500"
                  >
                    {stat.icon}
                  </motion.div>
                  <h3 className="text-4xl md:text-6xl font-black mb-2 tracking-tighter flex items-baseline justify-center gap-1">
                    <AnimatedCounter value={stat.value} />
                  </h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-sm md:text-lg font-bold text-red-100/80 uppercase tracking-widest"
                  >
                    {isRTL ? stat.labelAr : stat.labelEn}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🟢 PROJECTS SECTION (EXPANDABLE LUXURY GALLERY - TRANSLATED) 🟢 */}
        <section
          id="projects"
          className="py-24 bg-[#050505] text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Header - (تم تعريب العناوين هنا) */}
            <div className="text-center mb-16">
              <span className="text-[#C8102E] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
                {lang === "en"
                  ? "Excellence in Execution"
                  : "التميز في التنفيذ"}
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                {lang === "en" ? "Our " : "سجل "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  {lang === "en" ? "Portfolio" : "أعمالنا"}
                </span>
              </h2>
            </div>

            {/* The Expandable Cards Container */}
            <div className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[550px] w-full">
              {projects.map((proj, i) => (
                <div
                  key={i}
                  onClick={() => openProjectModal(proj)}
                  className="relative flex-1 hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-3xl overflow-hidden cursor-pointer group border border-white/5 hover:border-[#C8102E]/50"
                >
                  <img
                    src={proj.img}
                    alt={proj.titleEn}
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end h-full">
                    <div className="mb-auto self-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                      <div className="w-12 h-12 rounded-full bg-[#C8102E] flex items-center justify-center shadow-lg text-white">
                        {isRTL ? (
                          <ArrowLeft size={24} />
                        ) : (
                          <ArrowRight size={24} />
                        )}
                      </div>
                    </div>

                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-4xl font-black text-white/10 group-hover:text-white/20 absolute -top-12 left-0 transition-colors duration-500">
                        0{i + 1}
                      </span>

                      <span className="text-[#C8102E] text-[10px] font-bold uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {lang === "en" ? "Sector Category" : "تصنيف القطاع"}
                      </span>

                      <h3
                        className={`font-bold text-white leading-tight mb-2 transition-all duration-500 whitespace-nowrap md:whitespace-normal
                                ${i === 0 ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}
                             `}
                      >
                        {isRTL ? proj.titleAr : proj.titleEn}
                      </h3>

                      <p className="text-gray-300 text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden transition-all duration-500 delay-100">
                        {lang === "en"
                          ? "Click to view project details & statistics"
                          : "اضغط لعرض تفاصيل وإحصائيات المشاريع"}
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none md:group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="hidden md:block text-2xl font-bold text-white/50 tracking-widest uppercase rotate-[-90deg] whitespace-nowrap">
                      {(isRTL ? proj.titleAr : proj.titleEn)
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-[#1a1a1a] text-gray-400 pt-16 pb-8 border-t-4 border-[#C8102E]"
      >
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <img
                src="/logo2.png"
                alt="Logo"
                className="h-10 grayscale brightness-200 mb-6"
              />
              <p className="text-sm leading-relaxed text-gray-500">
                {t.hero_slogan}.
              </p>
            </div>
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
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm border-l-2 border-[#C8102E] pl-2 h-5 flex items-center">
                {t.footer_links}
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                  <a href="#home">Home</a>
                </li>
                <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                  <a href="#about">About Us</a>
                </li>
                <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                  <a href="#projects">Projects</a>
                </li>
              </ul>
            </div>
            <div className="bg-[#222] p-6 rounded-lg border border-gray-800">
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm text-[#C8102E]">
                {t.footer_contact}
              </h3>
              <div className="space-y-3 text-xs">
                <p className="flex items-start gap-3 text-gray-300">
                  <span>📍</span>
                  <span>10th of Ramadan City, Industrial Zone</span>
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
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>{t.footer_rights}</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#C8102E] transition-colors">
                Privacy
              </a>
              <span className="text-gray-800">|</span>
              <a href="#" className="hover:text-[#C8102E] transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AnimatedCounter({ value }) {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [numericValue, isInView, suffix]);
  return <span ref={nodeRef} />;
}
