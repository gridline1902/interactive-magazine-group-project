'use client';
import { useState } from "react";


import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import HTMLFlipBook from "react-pageflip";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


import type { PDFDocumentProxy } from 'pdfjs-dist';

type PDFFile = string | File | null;

const Pdf = () => {
    const [pdfFilePath] = useState<PDFFile>('/magazine.pdf');
    const [numPages, setNumPages] = useState<number>(0);
    function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
        setNumPages(nextNumPages);
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <Document
                file={pdfFilePath}
                className="flex justify-center items-center"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <HTMLFlipBook
                    width={300}
                    height={500}
                    className="shadow-lg"
                    style={{}}
                    startPage={0}
                    size="fixed"
                    minWidth={0}
                    maxWidth={0}
                    minHeight={0}
                    maxHeight={0}
                    drawShadow={true}
                    flippingTime={1}
                    usePortrait={false}
                    startZIndex={0}
                    autoSize={false}
                    maxShadowOpacity={1}
                    showCover={false}
                    mobileScrollSupport={false}
                    clickEventForward={false}
                    useMouseEvents={true}
                    swipeDistance={0}
                    showPageCorners={true}
                    disableFlipByClick={false}
                >
                    {numPages >= 0 &&
                        Array.from(new Array(numPages), (el, index) => (
                            <div key={`page_${index + 1}`}>
                                <Page
                                    pageNumber={index + 1}
                                    width={300}
                                />
                            </div>
                        ))}
                </HTMLFlipBook>
            </Document>
        </div>
    );
}

export default Pdf;