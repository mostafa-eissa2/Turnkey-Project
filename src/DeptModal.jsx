import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Users,
  Briefcase,
  Activity,
  ShieldCheck,
} from "lucide-react";

// مكون العقدة
const TreeNode = ({ node }) => {
  if (!node) return null;
  const isVerticalLayout = node.isVertical;

  return (
    <li className={`tree-li ${isVerticalLayout ? "parent-of-vertical" : ""}`}>
      <div
        className={`relative inline-block z-10 bg-white border border-gray-200 rounded-xl text-center shadow-sm hover:shadow-lg hover:border-[#C8102E] transition-all 
        ${
          node.image
            ? // 🟢 تصغير عرض الكروت لضم الشجرة
              "p-2 min-w-[100px] md:p-3 md:min-w-[140px]"
            : "px-2 py-2 min-w-[90px] md:px-3 md:min-w-[130px]"
        }`}
      >
        {node.image && (
          <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full border-2 border-[#C8102E] overflow-hidden mb-2">
            <img
              src={node.image}
              alt={node.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <h5
          className={`${node.image ? "text-xs md:text-sm" : "text-[10px] md:text-xs"} font-bold text-gray-900 leading-tight`}
        >
          {node.name}
        </h5>

        {node.title && (
          <p className="text-[9px] md:text-[10px] text-[#C8102E] font-bold uppercase tracking-wide mt-1">
            {node.title}
          </p>
        )}

        {node.stats && (
          <div className="mt-1 md:mt-2 pt-1 md:pt-2 border-t border-gray-100">
            <span className="text-[8px] md:text-[9px] font-semibold text-gray-500 bg-gray-50 px-1 py-0.5 md:px-2 md:py-1 rounded-full border border-gray-200 block">
              {node.stats}
            </span>
          </div>
        )}

        {node.supervisors && (
          <div className="mt-1 md:mt-2">
            <span className="text-[8px] md:text-[9px] font-bold text-white bg-[#C8102E] px-2 py-0.5 rounded-md shadow-sm block">
              {node.supervisors}
            </span>
          </div>
        )}
      </div>

      {node.children && node.children.length > 0 && (
        <ul className={`tree-ul ${isVerticalLayout ? "vertical-list" : ""}`}>
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default function DeptModal({ dept, isOpen, onClose, lang, t }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (isOpen && scrollContainerRef.current) {
      setTimeout(() => {
        const container = scrollContainerRef.current;
        if (container) {
          const scrollLeft =
            (container.scrollWidth - container.clientWidth) / 2;
          container.scrollTo({ left: scrollLeft, behavior: "smooth" });
        }
      }, 100);
    }
  }, [isOpen]);

  if (!isOpen || !dept) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-none md:rounded-2xl w-full h-full md:max-w-[98vw] md:h-[90vh] overflow-hidden shadow-2xl relative flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#C8102E] p-4 flex justify-between items-center text-white shadow-md z-20 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white/20 rounded-lg">{dept.icon}</div>
              <h2 className="text-lg md:text-xl font-bold">
                {lang === "ar" ? dept.nameAr : dept.nameEn}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              {dept.systemLink && (
                <a
                  href={dept.systemLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center gap-2 bg-white text-[#C8102E] text-xs font-bold px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
                >
                  <span>{t.modal_system_btn}</span>
                  <ExternalLink size={14} />
                </a>
              )}
              <button
                onClick={onClose}
                className="hover:bg-white/20 p-2 rounded-full"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div
            ref={scrollContainerRef}
            className="p-4 md:p-8 overflow-auto bg-gray-50/50 flex-1 org-scroll relative"
          >
            {/* Desktop Stats */}
            {dept.summary && (
              <div className="hidden md:block absolute top-8 left-8 z-30 bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-gray-100 w-64">
                <h4 className="text-[#C8102E] font-bold uppercase tracking-widest text-xs mb-4 border-b pb-2">
                  Department Summary
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-50 rounded-lg text-[#C8102E]">
                      <Users size={18} />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-800">
                        {dept.summary.totalStaff}
                      </p>
                      <p className="text-xs text-gray-500">Total Staff</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-50 rounded-lg text-[#C8102E]">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-800">
                        {dept.summary.projects}
                      </p>
                      <p className="text-xs text-gray-500">Active Projects</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-50 rounded-lg text-[#C8102E]">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-800">
                        {dept.summary.supervisors}
                      </p>
                      <p className="text-xs text-gray-500">Field Supervisors</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile System Button */}
            {dept.systemLink && (
              <div className="md:hidden mb-4 mt-2 sticky left-0 z-30 flex justify-center w-full">
                <div className="w-[90vw] flex justify-center">
                  <a
                    href={dept.systemLink}
                    target="_blank"
                    className="flex items-center gap-2 bg-white border-2 border-[#C8102E] text-[#C8102E] text-sm font-bold px-8 py-3 rounded-full shadow-lg hover:bg-[#C8102E] hover:text-white transition-all"
                  >
                    <span>{t.modal_system_btn}</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            )}

            {dept.orgStructure ? (
              <div className="flex flex-col min-w-max pb-10 pt-0">
                <div className="flex flex-col items-center w-full mobile-tree-scale">
                  <h3 className="text-gray-400 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-4 border-b border-gray-200 pb-2 text-center w-full">
                    {t.modal_team}
                  </h3>
                  <div className="tree-container">
                    <ul className="tree-ul p-0 m-0">
                      <TreeNode node={dept.orgStructure} />
                    </ul>
                  </div>
                </div>

                {/* Mobile Stats Card */}
                {dept.summary && (
                  <div className="md:hidden mt-0 mx-auto w-[90vw] bg-white p-4 rounded-xl shadow-md border-t-4 border-[#C8102E] sticky left-0 right-0 bottom-4 z-20">
                    <h4 className="text-gray-500 font-bold uppercase text-xs mb-3 text-center">
                      Department Overview
                    </h4>
                    <div className="grid grid-cols-3 gap-2 text-center divide-x divide-x-reverse divide-gray-100">
                      <div>
                        <p className="text-lg font-bold text-[#C8102E]">
                          {dept.summary.totalStaff}
                        </p>
                        <p className="text-[9px] text-gray-400">Members</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-[#C8102E]">
                          {dept.summary.projects}
                        </p>
                        <p className="text-[9px] text-gray-400">Projects</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-[#C8102E]">
                          {dept.summary.supervisors}
                        </p>
                        <p className="text-[9px] text-gray-400">Supervisors</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-20 opacity-60">
                <div className="bg-gray-100 p-6 rounded-full mb-4">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">Coming Soon</h3>
                <p className="text-gray-500">
                  Structure details will be updated soon.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
