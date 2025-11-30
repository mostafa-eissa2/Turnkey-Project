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
  {
    id: 1,
    nameEn: "Occupational safety and health",
    nameAr: "السلامة والصحة المهنية",
    icon: <HardHat size={24} />,
    systemLink: "https://turnkey-hse-dashboard.vercel.app/",
    summary: {
      totalStaff: 29, // إجمالي القوة البشرية
      supervisors: 22, // عدد المشرفين
      projects: 17, // عدد المشاريع
      safeHours: "4M+", // ساعات العمل الآمنة
    },
    orgStructure: {
      name: "Eng. Bahaa Rashed",
      title: "Turnkey Projects HSE Manager",
      image: "/Eng Bahaa.jpeg",
      children: [
        {
          name: "Eng. Mostafa Eissa",
          title: "HSE Coordinator",
          children: [
            // 1. م. أحمد عطية
            {
              name: "Eng. Ahmed Attia",
              title: "HSE Lead Engineer",
              stats: "2 Team Leaders | 8 Projects",
              supervisors: "Total: 8 Supervisors", // 🟢 تمت الإضافة
              children: [
                {
                  name: "Eng. Mohamed Samy",
                  title: "HSE Team Leader",
                  stats: "6 Projects",
                  supervisors: "5 Supervisors", // 🟢 تمت الإضافة
                  isVertical: true,
                  children: [
                    {
                      name: "Dashour",
                      title: "Site Team",
                      supervisors: "2 Supervisors",
                    },
                    {
                      name: "CRCC",
                      title: "Site Team",
                      supervisors: "1 Supervisors",
                    },
                    {
                      name: "Alex port",
                      title: "Site Team",
                      supervisors: "1 Supervisors",
                    },
                    {
                      name: "Abo Qer",
                      title: "Site Team",
                      supervisors: "1 Supervisors",
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
                  name: "Eng. Tamer Fathy",
                  title: "HSE Team Leader",
                  stats: "2 Project",
                  supervisors: "3 Supervisors", // 🟢 تمت الإضافة
                  isVertical: true,
                  children: [
                    {
                      name: "New Alamin ",
                      title: "Site Team",
                      supervisors: "1 Supervisors",
                    },
                    {
                      name: "Sohag ",
                      title: "Site Team",
                      supervisors: "1 Supervisors",
                    },
                  ],
                },
              ],
            },

            // 2. م. إسلام علاء
            {
              name: "Eng. Eslam Alaa",
              title: "HSE Team Leader",
              stats: "6 Projects",
              supervisors: "9 Supervisors",
              isVertical: true,
              children: [
                {
                  name: "Diplomatic District ",
                  title: "Site Team",
                  supervisors: "1 Supervisors",
                },
                {
                  name: "Octagon",
                  title: "Site Team",
                  supervisors: "1 Supervisors",
                },
                {
                  name: "H K Mutubas ",
                  title: "Site Team",
                  supervisors: "1 Supervisors",
                },
                {
                  name: "Concrete Factory ",
                  title: "Site Team",
                  supervisors: "1 Supervisors",
                },
                {
                  name: "Saint Catherine ",
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

            // 3. م. محمود كسبر
            {
              name: "Eng. Mahmoud Kasper",
              title: "HSE Team Leader",
              stats: "3 Projects",
              supervisors: "5 Supervisors",
              isVertical: true,
              children: [
                {
                  name: "HK Youssef El-Seddik ",
                  title: "Site Team",
                  supervisors: "3 Supervisors",
                },
                {
                  name: "HK Nasr al Nobah",
                  title: "Site Team",
                  supervisors: "1 Supervisors",
                },
                {
                  name: "HK Maghagha",
                  title: "Site Team",
                  supervisors: "1 Supervisors",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  // ... (باقي الأقسام كما هي)
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
  {
    id: 4,
    nameEn: "Civil construction",
    nameAr: "الإنشاءات المدنية",
    icon: <Hammer size={24} />,
  },
  {
    id: 5,
    nameEn: "Electrical Execution",
    nameAr: "تنفيذ الكهرباء",
    icon: <Zap size={24} />,
  },
  {
    id: 11,
    nameEn: "Maintenance",
    nameAr: "الصيانة",
    icon: <Wrench size={24} />,
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
