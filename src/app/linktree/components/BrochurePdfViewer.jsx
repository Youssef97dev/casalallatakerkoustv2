"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { MoonLoader } from "react-spinners";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const LazyPage = ({ pageNumber, width }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(pageNumber <= 2);

  useEffect(() => {
    if (visible) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "1000px 0px" } // Preload when within ~1000px
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div
      ref={ref}
      className="shadow-2xl bg-white overflow-hidden flex items-center justify-center rounded-sm"
      style={{
        width: `${width}px`,
        minHeight: visible ? undefined : `${Math.round(width * 0.7)}px`,
      }}
    >
      {visible ? (
        <Page
          pageNumber={pageNumber}
          width={width}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          loading={
            <div
              className="flex items-center justify-center bg-gray-50"
              style={{
                width: `${width}px`,
                height: `${Math.round(width * 0.7)}px`,
              }}
            >
              <MoonLoader size={30} color="#36d7b7" />
            </div>
          }
        />
      ) : null}
    </div>
  );
};

export const BrochurePdfViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const pageWidth = Math.min(Math.max(width - 24, 280), 1000);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-6 px-3 gap-8">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <MoonLoader color="#36d7b7" size={40} />
            <p className="text-gray-500 text-sm">Chargement du document...</p>
          </div>
        }
        error={
          <div className="text-center py-20 text-red-500">
            Impossible de charger le document PDF.
          </div>
        }
      >
        {numPages &&
          Array.from({ length: numPages }, (_, i) => (
            <LazyPage
              key={i + 1}
              pageNumber={i + 1}
              width={pageWidth}
            />
          ))}
      </Document>
    </div>
  );
};

export const PdfViewer = BrochurePdfViewer;
export default BrochurePdfViewer;
