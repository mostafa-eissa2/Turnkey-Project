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
  ClipboardList,
  CircleDollarSign,
  Landmark,
  Forklift, // أيقونة المعدات (الونش/اللودر)
  Building2,
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
    modal_team: "Organizational Chart",
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
      "السويدي للكابلات - قطاع المشروعات هي كيان رائد في تقديم حلول البنية التحتية المتكاملة. نحن لا نبني مجرد مشروعات، بل نبني مستقبلاً مستداماً يخدم المجتمع ويدعم التنمية.",
    about_points: [
      "الالتزام بالريادة في السوق العالمي",
      "الالتزام بمعايير الأمن والسلامة",
      "الالتزام بالجودة والدقة في التنفيذ",
    ],
    experience_years: "+85",
    experience_text: "عاماً من الخبرة",
    modal_manager: "مدير الإدارة",
    modal_system_btn: "تسجيل الدخول",
    modal_team: "الهيكل التنظيمي",
  },
};

export const departments = [
  // 1. HSE
  {
    id: 1,
    nameEn: "Occupational safety, health and environment",
    nameAr: "السلامة والصحة المهنية والبيئة",
    icon: <HardHat size={24} />,
    systemLink: "https://turnkey-hse-dashboard.vercel.app/",
    summary: {
      totalStaff: 29,
      supervisors: 22,
      projects: 17,
      safeHours: "4M+",
    },
    orgStructure: {
      name: "Bahaa Rashed",
      title: "Turnkey Projects HSE Manager",
      image: "/Eng Bahaa.jpeg",
      children: [
        {
          name: "Mostafa Eissa",
          title: "HSE Coordinator",
        },
        {
          name: "Ahmed Attia",
          title: "HSE Lead Engineer",
          stats: "1 Team Leader | 8 Projects",
          supervisors: "Total: 8 Supervisors",
          children: [
            {
              name: "Mohamed Samy",
              title: "HSE Team Leader",
              stats: "Direct Projects + Team Leader",
              supervisors: "6 Supervisors",
              children: [
                {
                  name: "Direct Projects",
                  title: "Site Operations",
                  isVertical: true,
                  children: [
                    {
                      name: "New Alamin",
                      title: "Site Team",
                      supervisors: "1 Supervisor",
                    },
                    {
                      name: "Dashour",
                      title: "Site Team",
                      supervisors: "2 Supervisors",
                    },
                    {
                      name: "CRCC",
                      title: "Site Team",
                      supervisors: "1 Supervisor",
                    },
                    {
                      name: "Alex port",
                      title: "Site Team",
                      supervisors: "1 Supervisor",
                    },
                    {
                      name: "Abo Qer",
                      title: "Site Team",
                      supervisors: "1 Supervisor",
                    },
                    {
                      name: "10th of Ramadan",
                      title: "Site Team",
                      supervisors: "0 Supervisors",
                    },
                    {
                      name: "El Firdous",
                      title: "Site Team",
                      supervisors: "0 Supervisors",
                    },
                  ],
                },
                {
                  name: "Tamer Fathy",
                  title: "HSE Team Leader",
                  stats: "1 Project",
                  supervisors: "1 Supervisor",
                  isVertical: true,
                  children: [
                    {
                      name: "Sohag",
                      title: "Site Team",
                      supervisors: "1 Supervisor",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Eslam Alaa",
          title: "HSE Team Leader",
          stats: "6 Projects",
          supervisors: "9 Supervisors",
          isVertical: true,
          children: [
            {
              name: "Diplomatic District",
              title: "Site Team",
              supervisors: "1 Supervisor",
            },
            {
              name: "Octagon",
              title: "Site Team",
              supervisors: "1 Supervisor",
            },
            {
              name: "H K Mutubas",
              title: "Site Team",
              supervisors: "1 Supervisor",
            },
            {
              name: "Concrete Factory",
              title: "Site Team",
              supervisors: "1 Supervisor",
            },
            {
              name: "Saint Catherine",
              title: "Site Team",
              supervisors: "2 Supervisors",
            },
            {
              name: "Al Obour",
              title: "Site Team",
              supervisors: "2 Supervisors",
            },
          ],
        },
        {
          name: "Mahmoud Kasper",
          title: "HSE Team Leader",
          stats: "3 Projects",
          supervisors: "5 Supervisors",
          isVertical: true,
          children: [
            {
              name: "HK Youssef El-Seddik",
              title: "Site Team",
              supervisors: "3 Supervisors",
            },
            {
              name: "HK Nasr al Nobah",
              title: "Site Team",
              supervisors: "1 Supervisor",
            },
            {
              name: "HK Maghagha",
              title: "Site Team",
              supervisors: "1 Supervisor",
            },
          ],
        },
      ],
    },
  },

  {
    id: 2,
    nameEn: "Quality Control",
    nameAr: "مراقبة الجودة",
    icon: <Activity size={24} />,
  },
  {
    id: 3,
    nameEn: "Technical Office",
    nameAr: "المكتب الفني",
    icon: <FileText size={24} />,
  },

  // قسم الإنشاءات
  {
    id: 4,
    nameEn: "Construction",
    nameAr: "الإنشاءات",
    icon: <Building2 size={24} />,
    orgStructure: {
      name: "Construction Manager",
      title: "Head of Construction Sector",
      children: [
        {
          name: "Civil Execution",
          title: "Department",
          children: [
            { name: "Site Engineers", title: "Civil Team" },
            { name: "Surveyors", title: "Civil Team" },
          ],
        },
        {
          name: "Electrical Execution",
          title: "Department",
          children: [
            { name: "MV Team", title: "Electrical Team" },
            { name: "Cabling Team", title: "Electrical Team" },
          ],
        },
      ],
    },
  },

  // المعدات
  {
    id: 11,
    nameEn: "Equipments",
    nameAr: "المعدات",
    icon: <Forklift size={24} />,
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
    id: 8,
    nameEn: "PMO",
    nameAr: "إدارة المشروعات",
    icon: <ClipboardList size={24} />,
  },
  {
    id: 12,
    nameEn: "Government Relations",
    nameAr: "العلاقات الحكومية",
    icon: <Landmark size={24} />,
  },
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
    roleAr: "الرئيس التنفيذي لشركة السويدي اليكتريك",
    name: "Eng. Ahmed Elsewedy",
    img: "/Ahmed-Elsewedy-editing.jpg",
  },
  // 🟢 العضو الجديد في المنتصف
  {
    roleEn: "VP Commercial Egypt - Elsewedy Cables",
    roleAr: "نائب الرئيس للقطاع التجاري (مصر) - السويدي للكابلات",
    name: "Eng. Ahmed Nasser",
    img: "/Ahmed Nasser.png",
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
    id: 5,
    value: "10B+",
    labelEn: "Work Volume",
    labelAr: "حجم الأعمال (ج.م)",
    icon: <CircleDollarSign size={32} />,
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
