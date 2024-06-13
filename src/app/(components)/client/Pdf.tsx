'use client';

import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

interface PdfDocumentOptions {
    pageNumber?: number;
    onDocumentLoadSuccess: (numPages: number) => void;
}


export default function Pdf({ pageNumber = 1, onDocumentLoadSuccess }: Readonly<PdfDocumentOptions>) {
    return (
        <Document file="./travel-magazine.pdf" onLoadSuccess={({ numPages }) => onDocumentLoadSuccess(numPages)}>
            <Page pageNumber={pageNumber} />
        </Document>
    );
}
