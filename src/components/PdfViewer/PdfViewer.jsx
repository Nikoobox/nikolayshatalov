import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "./Nikolay_Shatalov_july_2023.pdf";
import "./pdf-viewer.scss";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { ClipLoader } from "react-spinners";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const WrappedLoader = () => (
  <div
    style={{
      height: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <ClipLoader />
  </div>
);

const PdfViewer = () => {
  return (
    <Document
      file={resume}
      onLoadError={(err) => console.log("Document load err", err)}
      className="pdf-viewer-wrapper"
      loading={<WrappedLoader />}
    >
      <Page
        pageNumber={1}
        renderAnnotationLayer={false}
        renderTextLayer={false}
      />
    </Document>
  );
};

export default PdfViewer;
