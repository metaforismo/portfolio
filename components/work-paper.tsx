import Image from "next/image";
import type { SelectedWorkItem } from "@/lib/data";

export function WorkPaper({
  item,
  index,
}: {
  item: SelectedWorkItem;
  index: number;
}) {
  const src =
    item.previews && item.previews.length > 0
      ? item.previews[index % item.previews.length]
      : undefined;
  const fit = item.previewFit ?? "cover";

  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-[8px] bg-[#f4efe6]"
      style={{
        boxShadow:
          "0 16px 28px -14px rgba(0,0,0,0.62), inset 0 0 0 1px rgba(30,20,12,0.1)",
      }}
    >
      {src ? (
        <Image
          src={src}
          alt=""
          fill
          sizes={item.paperShape === "landscape" ? "168px" : "110px"}
          className={
            fit === "contain"
              ? "h-full w-full bg-white object-contain object-top"
              : "h-full w-full object-cover object-top"
          }
        />
      ) : (
        <div className="flex h-full items-center justify-center px-2 text-center font-mono text-[8px] text-black/40">
          {item.title}
        </div>
      )}
    </div>
  );
}
