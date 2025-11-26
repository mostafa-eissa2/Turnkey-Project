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
  Package,
  UserCog,
  Briefcase,
  Clock,
  Wrench,
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
    about_label: "WHO WE ARE",
    about_title: "Pioneering Infrastructure Solutions",
    about_desc:
      "Elsewedy Cables - Projects Sector is a leading force in delivering integrated infrastructure solutions.",
    about_points: [
      "Commitment to Market Leadership",
      "Commitment to Safety & Security (HSE)",
      "Commitment to Quality & Precision",
    ],
    experience_years: "85+",
    experience_text: "Years of Experience",
    modal_manager: "Department Manager",
    modal_system_btn: "Go to Dashboard",
    modal_team: "Team Structure",
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
    about_label: "من نحن",
    about_title: "رواد حلول البنية التحتية",
    about_desc:
      "السويدي للكابلات - قطاع المشروعات هي كيان رائد في تقديم حلول البنية التحتية المتكاملة.",
    about_points: [
      "الالتزام بالريادة في السوق العالمي",
      "الالتزام بمعايير الأمن والسلامة",
      "الالتزام بالجودة والدقة في التنفيذ",
    ],
    experience_years: "+85",
    experience_text: "عاماً من الخبرة",
    modal_manager: "مدير الإدارة",
    modal_system_btn: "الدخول إلى السيستم",
    modal_team: "هيكل الفريق",
  },
};

export const departments = [
  {
    id: 1,
    nameEn: "HSE",
    nameAr: "السلامة والصحة المهنية",
    icon: <HardHat size={24} />,
    systemLink: "https://turnkey-hse-dashboard.vercel.app/",
    org: {
      managerName: "Eng. Bahaa Rashed",
      // 🟢 التعديل هنا: وضعنا المسمى الوظيفي الخاص بهذا المدير
      managerTitle: "Turnkey Projects HSE Manager",
      managerImg: "/Eng Bahaa.jpeg",
      units: [
        { name: "Eng. Mostafa Eissa", title: "HSE Coordinator" },
        { name: "Eng. Ahmed Attia", title: "HSE Lead Engineer" },
        { name: "Eng. Eslam Alaa", title: "HSE Team leader" },
        { name: "Eng. Mahmoud Kasper", title: "HSE Team leader" },
        { name: "Eng. Mohamed Samy", title: "HSE Team leader" },
      ],
    },
  },
  {
    id: 2,
    nameEn: "Quality Control",
    nameAr: "الجودة (QC)",
    icon: <Activity size={24} />,
    org: {
      managerName: "Eng. QC Manager",
      managerTitle: "Quality Control Head", // 🟢 مسمى مختلف هنا
      units: [
        { name: "Eng. Aly", title: "QC Senior" },
        { name: "Eng. Omar", title: "QC Inspector" },
      ],
    },
  },
  // ... يمكنك إضافة managerTitle لباقي الأقسام بنفس الطريقة
  {
    id: 3,
    nameEn: "Technical Office",
    nameAr: "المكتب الفني",
    icon: <FileText size={24} />,
    org: {
      managerName: "Eng. TO Manager",
      managerTitle: "Technical Office Manager",
      units: [],
    },
  },
  {
    id: 4,
    nameEn: "Civil Execution",
    nameAr: "تنفيذ المدني",
    icon: <Hammer size={24} />,
    org: {
      managerName: "Eng. Civil Mgr",
      managerTitle: "Civil Projects Manager",
      units: [],
    },
  },
  {
    id: 5,
    nameEn: "Electrical Execution",
    nameAr: "تنفيذ الكهرباء",
    icon: <Zap size={24} />,
    org: {
      managerName: "Eng. Elec Mgr",
      managerTitle: "Electrical Projects Manager",
      units: [],
    },
  },
  {
    id: 11,
    nameEn: "Maintenance",
    nameAr: "الصيانة",
    icon: <Wrench size={24} />,
    org: {
      managerName: "Eng. Maint Mgr",
      managerTitle: "Maintenance Head",
      units: [],
    },
  },
  {
    id: 6,
    nameEn: "Surveying & GIS",
    nameAr: "المساحة و GIS",
    icon: <Map size={24} />,
  },
  {
    id: 9,
    nameEn: "Stores & Warehouse",
    nameAr: "المخازن",
    icon: <Package size={24} />,
  },
  {
    id: 10,
    nameEn: "Human Resources (HR)",
    nameAr: "الموارد البشرية",
    icon: <UserCog size={24} />,
  },
  {
    id: 7,
    nameEn: "Legal Affairs",
    nameAr: "الشؤون القانونية",
    icon: <Scale size={24} />,
  },
  { id: 8, nameEn: "Finance", nameAr: "الماليات", icon: <Users size={24} /> },
];

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
    roleEn: "Turnkey Projects General Manager",
    roleAr: "المدير العام لقطاع المشروعات",
    name: "Eng. Diaa Nasr",
    img: "/Diaa Nasr.jpeg",
  },
];

export const stats = [
  {
    id: 1,
    value: "405+",
    labelEn: "Employees",
    labelAr: "موظف وعامل",
    icon: <Users size={32} />,
  },
  {
    id: 4,
    value: "18+",
    labelEn: "Active Projects",
    labelAr: "مشروع جاري",
    icon: <Zap size={32} />,
  },
  {
    id: 2,
    value: "30+",
    labelEn: "Completed Projects",
    labelAr: "مشروع مكتمل",
    icon: <Briefcase size={32} />,
  },
  {
    id: 3,
    value: "4M+",
    labelEn: "Safe Man-Hours",
    labelAr: "ساعات عمل آمنة",
    icon: <Clock size={32} />,
  },
];
