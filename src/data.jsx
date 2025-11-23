import React from "react";
import {
  HardHat,
  Scale,
  Activity,
  Map,
  FileText,
  Users,
  Zap,
  Hammer,
} from "lucide-react";

export const content = {
  en: {
    hero_slogan: "We Build It Right... For Lasting Security",
    hero_title: "Projects & Engineering Sector",
    cta_btn: "Explore Projects",
    leaders_title: "Our Leadership",
    dept_title: "Departments",
    projects_title: "Our Projects",
    footer_links: "Quick Links",
    footer_contact: "Contact Us",
    footer_address: "New Cairo, Egypt",
    footer_rights: "All Rights Reserved.",
  },
  ar: {
    hero_slogan: "بنأسس صح... عشان يدوم الأمن",
    hero_title: "قطاع المشروعات والتطوير الهندسي",
    cta_btn: "استكشف المشروعات",
    leaders_title: "قيادة الشركة",
    dept_title: "أقسام الشركة",
    projects_title: "مشروعاتنا",
    footer_links: "روابط سريعة",
    footer_contact: "تواصل معنا",
    footer_address: "القاهرة الجديدة، مصر",
    footer_rights: "جميع الحقوق محفوظة.",
  },
};

// 🟢 تم إضافة الأقسام الجديدة هنا (تنفيذ الكهرباء + تنفيذ المدني)
export const departments = [
  {
    id: 1,
    nameEn: "HSE",
    nameAr: "السلامة والصحة المهنية",
    icon: <HardHat size={24} />,
    link: "https://turnkey-hse-dashboard.vercel.app/", // 🟢 أضفنا اللينك هنا
  },
  {
    id: 2,
    nameEn: "Quality Control",
    nameAr: "الجودة (QC)",
    icon: <Activity size={24} />,
  },
  {
    id: 3,
    nameEn: "Technical Office",
    nameAr: "المكتب الفني",
    icon: <FileText size={24} />,
  },
  {
    id: 4,
    nameEn: "Civil Execution",
    nameAr: "تنفيذ المدني",
    icon: <Hammer size={24} />,
  }, // جديد
  {
    id: 5,
    nameEn: "Electrical Execution",
    nameAr: "تنفيذ الكهرباء",
    icon: <Zap size={24} />,
  }, // جديد
  {
    id: 6,
    nameEn: "Surveying & GIS",
    nameAr: "المساحة و GIS",
    icon: <Map size={24} />,
  },
  {
    id: 7,
    nameEn: "Legal Affairs",
    nameAr: "الشؤون القانونية",
    icon: <Scale size={24} />,
  },
  { id: 8, nameEn: "Finance", nameAr: "الماليات", icon: <Users size={24} /> },
];

// 🟢 تم تعديل ترتيب ونوع المشروعات
export const projects = [
  {
    titleEn: "High Voltage Projects",
    titleAr: "مشروعات الجهد العالي",
    img: "/high 1.jpeg",
  },
  {
    titleEn: "Medium Voltage Projects",
    titleAr: "مشروعات الجهد المتوسط",
    img: "/Medium 2.jpeg",
  },
  {
    titleEn: "Hayah Karima Projects",
    titleAr: "مشروعات حياة كريمة",
    img: "/Haya Karama 1.jpeg",
  },
];

export const leaders = [
  {
    roleEn: "President & CEO Elsewedy Electric",
    roleAr: "الرئيس التنفيذي لشركة السويدي للكهرباء",
    name: "Eng. Ahmed Elsewedy",
    img: "/Ahmed-Elsewedy-editing.jpg",
  },
  {
    roleEn: "Turnkey Project General Manager",
    roleAr: "المدير العام لقطاع المشروعات",
    name: "Eng. Diaa Nasr",
    img: "/Diaa Nasr.jpeg",
  },
];

// ... (داخل src/data.jsx)
