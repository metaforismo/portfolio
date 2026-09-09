import { ImageResponse } from "next/og";
export const alt = "Francesco Giannicola — Software Engineer & Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", padding: 80, background: "#111110", color: "#eeeae2" }}><div style={{ fontSize: 28, color: "#d4bd7b" }}>Software Engineer & Builder</div><div style={{ fontSize: 76, marginTop: 24 }}>Francesco Giannicola</div><div style={{ fontSize: 28, marginTop: 36 }}>AI systems · Developer tools · Native apps · Research</div><div style={{ fontSize: 24, marginTop: 60 }}>francescogiannicola.com</div></div>, size);
}
