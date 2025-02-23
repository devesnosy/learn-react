import React from "react";

interface ProgressBarProps {
  bg: string;
  fg: string;
  width: string;
  height: string;
  progress: bigint;
}

export default function ProgressBar({
  bg,
  fg,
  width,
  height,
  progress,
}: ProgressBarProps) {
  return (
    <div style={{ backgroundColor: bg, width: width, height: height }}>
      <div
        style={{
          backgroundColor: fg,
          width: progress + "%",
          height: height,
          transition: "width 500ms ease-out",
        }}
      ></div>
    </div>
  );
}
