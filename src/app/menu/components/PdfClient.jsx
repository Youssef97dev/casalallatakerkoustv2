"use client";

import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("./Menu").then((mod) => mod.PdfViewer), {
  ssr: false,
});

export default function PdfViewerClient({ file }) {
  return <PdfViewer file={file} />;
}
