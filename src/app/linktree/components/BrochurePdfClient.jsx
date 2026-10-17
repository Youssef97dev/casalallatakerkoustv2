"use client";

import dynamic from "next/dynamic";

const BrochurePdfViewer = dynamic(
  () => import("./BrochurePdfViewer").then((mod) => mod.PdfViewer),
  {
    ssr: false,
  }
);

export default function BrochurePdfClient({ file }) {
  return <BrochurePdfViewer file={file} />;
}
