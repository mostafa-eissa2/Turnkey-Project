import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Layers,
  Activity,
  Briefcase,
  Ruler,
  Zap,
} from "lucide-react";

export default function ProjectModal({ category, isOpen, onClose, lang }) {
  if (!isOpen || !category) return null;

  const isRTL = lang === "ar";
  const projects = category.details || [];

  // 🟢 دالة تحديد حالة المشروع (اللون والنص)
  const getProjectStatus = (proj) => {
    const today = new Date();
    const start = new Date(proj.startDate);
    const isCompleted = proj.progress >= 100;
    const isNotStarted = start > today;

    if (isCompleted) {
      return {
        textEn: "Completed",
        textAr: "مكتمل",
        color: "bg-green-600", // لون أخضر للمكتمل
      };
    } else if (isNotStarted) {
      return {
        textEn: "Not Started",
        textAr: "لم يبدأ بعد",
        color: "bg-gray-500", // لون رمادي للي لسه مبدأش
      };
    } else {
      return {
        textEn: "In Progress",
        textAr: "قيد التنفيذ",
        color: "bg-[#C8102E]", // لون أحمر للجاري تنفيذه
      };
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="bg-gray-50 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#C8102E] p-6 flex justify-between items-center text-white shadow-md z-20 shrink-0">
            <h2 className="text-xl md:text-2xl font-bold">
              {isRTL ? category.titleAr : category.titleEn}
            </h2>
            <button
              onClick={onClose}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X size={28} />
            </button>
          </div>

          {/* Body */}
          <div
            className="p-6 md:p-8 overflow-y-auto flex-1"
            dir={isRTL ? "rtl" : "ltr"}
          >
            {projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((proj, index) => {
                  // 🟢 استدعاء دالة الحالة لكل مشروع
                  const status = getProjectStatus(proj);

                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200 flex flex-col"
                    >
                      {/* Image */}
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={proj.img}
                          alt={isRTL ? proj.nameAr : proj.nameEn}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end text-white">
                          {/* 🟢 عرض الحالة ديناميكياً */}
                          <span
                            className={`${status.color} text-[10px] font-bold px-2 py-1 rounded shadow-sm`}
                          >
                            {isRTL ? status.textAr : status.textEn}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">
                          {isRTL ? proj.nameAr : proj.nameEn}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-1">
                          {isRTL ? proj.descAr : proj.descEn}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="flex items-center gap-1.5 text-[11px] text-gray-600 bg-gray-50 p-1.5 rounded-lg border border-gray-100">
                            <Calendar size={14} className="text-[#C8102E]" />
                            <span>{proj.startDate}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[11px] text-gray-600 bg-gray-50 p-1.5 rounded-lg border border-gray-100">
                            <Layers size={14} className="text-[#C8102E]" />
                            <span>
                              {proj.stages} {isRTL ? "مراحل" : "Stages"}
                            </span>
                          </div>
                          {proj.length && proj.length !== "N/A" && (
                            <div className="flex items-center gap-1.5 text-[11px] text-gray-600 bg-gray-50 p-1.5 rounded-lg border border-gray-100">
                              <Ruler size={14} className="text-[#C8102E]" />
                              <span>{proj.length}</span>
                            </div>
                          )}
                          {proj.voltage && (
                            <div className="flex items-center gap-1.5 text-[11px] text-gray-600 bg-gray-50 p-1.5 rounded-lg border border-gray-100">
                              <Zap size={14} className="text-[#C8102E]" />
                              <span>{proj.voltage}</span>
                            </div>
                          )}
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-auto">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold text-gray-700 flex items-center gap-1">
                              <Activity size={12} />{" "}
                              {isRTL ? "نسبة الإنجاز" : "Progress"}
                            </span>
                            <span
                              className={`text-xs font-bold ${proj.progress >= 100 ? "text-green-600" : "text-[#C8102E]"}`}
                            >
                              {proj.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                            <div
                              className={`h-1.5 rounded-full transition-all duration-1000 ${status.color}`}
                              style={{ width: `${proj.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                <Briefcase size={48} className="mb-4 opacity-20" />
                <p>
                  {isRTL
                    ? "لا توجد مشاريع مضافة حالياً"
                    : "No projects added yet."}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
