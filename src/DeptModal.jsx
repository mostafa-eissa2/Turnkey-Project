import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Users } from "lucide-react";

export default function DeptModal({ dept, isOpen, onClose, lang, t }) {
  if (!isOpen || !dept) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#C8102E] p-4 md:p-5 flex justify-between items-center text-white shadow-md relative z-20 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
                {dept.icon}
              </div>
              <h2 className="text-lg md:text-2xl font-bold tracking-tight">
                {lang === "ar" ? dept.nameAr : dept.nameEn}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              {dept.systemLink && (
                <a
                  href={dept.systemLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center gap-2 bg-white text-[#C8102E] text-xs font-bold px-4 py-2 rounded-full transition-all shadow-md hover:bg-gray-100"
                >
                  <span>{t.modal_system_btn}</span>
                  <ExternalLink size={14} />
                </a>
              )}
              <button
                onClick={onClose}
                className="hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 md:p-8 overflow-y-auto bg-gray-50/50 flex-1">
            {/* Mobile System Button */}
            {dept.systemLink && (
              <div className="md:hidden mb-6 flex justify-center">
                <a
                  href={dept.systemLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white border border-[#C8102E] text-[#C8102E] text-sm font-bold px-6 py-2 rounded-full shadow-sm"
                >
                  <span>{t.modal_system_btn}</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            )}

            {/* Org Chart Area */}
            {dept.org ? (
              <div className="flex flex-col items-center w-full">
                <h3 className="text-gray-400 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-6 border-b border-gray-200 pb-2 w-full text-center">
                  {t.modal_team}
                </h3>

                {/* 1. Manager (ثابت) */}
                <div className="flex flex-col items-center mb-12 relative z-10">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-[4px] border-[#C8102E] p-1 bg-white shadow-xl mb-3 flex items-center justify-center">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      {dept.org.managerImg ? (
                        <img
                          src={dept.org.managerImg}
                          alt="Manager"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Users size={30} className="text-gray-300" />
                      )}
                    </div>
                  </div>
                  <h4 className="text-lg md:text-2xl font-bold text-gray-900 text-center px-2">
                    {dept.org.managerName}
                  </h4>

                  {/* 🟢 التعديل هنا: استخدام المسمى الخاص بالمدير */}
                  <p className="text-xs md:text-sm text-[#C8102E] font-bold uppercase tracking-wide mt-1">
                    {dept.org.managerTitle || t.modal_manager}
                  </p>

                  {/* خط الاتصال النازل من المدير */}
                  {dept.org.units && dept.org.units.length > 0 && (
                    <div className="w-[2px] h-12 bg-gray-300 absolute -bottom-12 flex flex-col items-center justify-end">
                      <div className="w-3 h-3 bg-gray-300 rounded-full translate-y-[50%]"></div>
                    </div>
                  )}
                </div>

                {/* 2. Team Tree (أفقي مع سكرول) */}
                {dept.org.units && dept.org.units.length > 0 && (
                  <div className="w-full org-scroll pb-4">
                    <div className="relative flex justify-center min-w-max mx-auto px-4 md:px-10 pt-8">
                      {/* الخط الأفقي الطويل */}
                      <div className="absolute top-0 left-10 right-10 md:left-20 md:right-20 h-[2px] bg-gray-300"></div>

                      {/* صف الموظفين */}
                      <div className="flex gap-6 md:gap-10">
                        {dept.org.units.map((unit, i) => (
                          <div
                            key={i}
                            className="flex flex-col items-center relative min-w-[140px] md:min-w-[180px]"
                          >
                            {/* الخط الرأسي الصاعد */}
                            <div className="absolute -top-8 w-[2px] h-8 bg-gray-300">
                              <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-300 rounded-full"></div>
                            </div>

                            {/* الكارت */}
                            <div className="bg-white border border-gray-100 px-4 py-4 md:px-6 md:py-5 rounded-xl text-center w-full shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden hover:border-[#C8102E]">
                              <div className="absolute top-0 left-0 w-1 h-full bg-gray-100 group-hover:bg-[#C8102E] transition-colors"></div>
                              <h5 className="text-sm md:text-base font-bold text-gray-900 mb-1">
                                {unit.name || unit}
                              </h5>
                              {unit.title && (
                                <p className="text-[10px] md:text-xs text-gray-500 font-semibold uppercase tracking-wider group-hover:text-[#C8102E] transition-colors">
                                  {unit.title}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-400 flex flex-col items-center gap-4">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Users size={32} />
                </div>
                <p>No structure data available yet.</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
