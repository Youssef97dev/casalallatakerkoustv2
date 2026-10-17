"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { MoonLoader } from "react-spinners";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const LazyPage = ({ pageNumber, width, ratio }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "1500px 0px" } // start rendering ~1.5 screens early
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="shadow-2xl bg-white"
      style={{ width, height: Math.round(width * ratio) }}
    >
      {visible && (
        <Page
          pageNumber={pageNumber}
          width={width}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          loading=""
        />
      )}
    </div>
  );
};

export const BrochurePdfViewer = ({ file }) => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-2 gap-10">
      <Document file={file} loading={<MoonLoader color="#36d7b7" />}>
        {Array.from({ length }, (_, i) => (
          <LazyPage
            key={i + 1}
            pageNumber={i + 1}
            width={pageWidth}
            ratio={ratio}
          />
        ))}
      </Document>
    </div>
  );
};
