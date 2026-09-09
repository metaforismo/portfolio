"use client";

import { useMemo, useState, useRef } from "react";
import { motion, useReducedMotion, useInView } from "motion/react";

import { WorkPaper } from "@/components/work-paper";
import type { SelectedWorkItem } from "@/lib/data";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
const PAPER_COUNT = 5;

function useImagePositions(landscape: boolean) {
  return useMemo(() => {
    const totalSpread = landscape ? 118 : 168;
    const step = totalSpread / (PAPER_COUNT - 1);
    const startX = -totalSpread / 2;
    const tilt = landscape ? 7 : 11;
    return Array.from({ length: PAPER_COUNT }, (_, i) => {
      const x = startX + step * i;
      const normalized = (i / (PAPER_COUNT - 1)) * 2 - 1;
      return { x, rotate: normalized * tilt };
    });
  }, [landscape]);
}

export function WorkFolder({
  item,
  onOpen,
}: {
  item: SelectedWorkItem;
  onOpen: () => void;
}) {
  // Load decorative previews shortly before their folder enters the viewport.
  const folderRef = useRef<HTMLButtonElement>(null);
  const visible = useInView(folderRef, { once: true, margin: "300px" });
  const [hovered, setHovered] = useState(false);
  const landscape = item.paperShape === "landscape";
  const positions = useImagePositions(landscape);
  const reduce = useReducedMotion();
  const active = hovered && !reduce;

  return (
    <motion.button
      ref={folderRef}
      type="button"
      aria-label={`Open ${item.title}`}
      className="group relative w-full cursor-pointer overflow-visible text-left outline-none focus-visible:ring-2 focus-visible:ring-white/25"
      style={{
        perspective: 1200,
        zIndex: active ? 40 : 1,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={onOpen}
      whileTap={reduce ? undefined : { scale: 0.985 }}
      animate={{
        y: active ? -6 : 0,
        filter: active
          ? "drop-shadow(0 28px 40px rgba(0,0,0,0.55))"
          : "drop-shadow(0 14px 22px rgba(0,0,0,0.28))",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.7 }}
    >
      <div className="relative w-full" style={{ perspective: 1200 }}>
        <motion.div
          className="relative z-0 rounded-2xl"
          animate={{
            rotateX: active ? 16 : 0,
            backgroundColor: active ? "#181817" : "#151514",
          }}
          transition={{
            rotateX: { type: "spring", stiffness: 200, damping: 25, mass: 0.8 },
            backgroundColor: { duration: 0.25, ease: EASE_OUT_EXPO },
          }}
          style={{
            height: landscape ? 228 : 236,
            border: "1px solid rgba(255,255,255,0.07)",
            transformStyle: "preserve-3d",
            transformOrigin: "center bottom",
          }}
        >
          <motion.div
            className="absolute inset-0 overflow-visible"
            animate={{ rotateX: active ? -16 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.8 }}
            style={{ transformStyle: "flat", transformOrigin: "center bottom" }}
          >
            {visible && positions.map((pos, imgIndex) => {
              const centerIndex = 2;
              const distance = Math.abs(imgIndex - centerIndex);
              const zIndex = 10 - distance;
              const yOffset = landscape
                ? -10 * (1 - distance / centerIndex) || 0
                : -18 * (1 - distance / centerIndex) || 0;
              const scale = distance === 0 ? 1.05 : distance === 1 ? 0.96 : 0.9;
              const xPos = active ? pos.x * 1.28 : pos.x;
              const yPos = active ? (landscape ? -8 : -18) + yOffset : (landscape ? 14 : 2) + yOffset;
              const rotation = active ? pos.rotate * 1.25 : pos.rotate * 0.85;
              const finalScale = active ? scale * 1.02 : scale;
              const dim = distance === 0 ? 1 : distance === 1 ? 0.88 : 0.7;

              return (
                <motion.div
                  key={imgIndex}
                  className="absolute left-1/2 top-1"
                  initial={false}
                  animate={{
                    x: `calc(-50% + ${xPos}px)`,
                    y: yPos,
                    rotate: rotation,
                    scale: finalScale,
                    opacity: dim,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 16,
                    mass: 0.9,
                    delay: reduce ? 0 : distance * 0.035,
                  }}
                  style={{ zIndex }}
                >
                  <div className={landscape ? "h-[108px] w-[168px]" : "h-[172px] w-[110px]"}>
                    <WorkPaper item={item} index={imgIndex} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden rounded-2xl"
          animate={{
            rotateX: active ? -26 : 0,
            backgroundColor: active ? "rgba(16,16,15,0.92)" : "rgba(14,14,13,0.88)",
          }}
          transition={{
            rotateX: { type: "spring", stiffness: 180, damping: 22, mass: 0.8 },
            backgroundColor: { duration: 0.25, ease: EASE_OUT_EXPO },
          }}
          style={{
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.07)",
            transformStyle: "preserve-3d",
            transformOrigin: "center bottom",
          }}
        >
          <div className="px-4 pb-2.5 pt-3.5">
            <h3 className="line-clamp-2 min-h-[2.4rem] text-[15px] font-semibold leading-snug text-white/80 transition-colors duration-200 group-hover:text-white">
              {item.title}
            </h3>
          </div>
          <div className="flex h-11 items-center justify-between border-t border-white/[0.05] px-4">
            <span className="truncate pr-3 text-[12px] text-white/45">{item.eyebrow}</span>
            <span className="shrink-0 font-mono text-[11px] text-white/30">{item.year}</span>
          </div>
        </motion.div>
      </div>
    </motion.button>
  );
}
