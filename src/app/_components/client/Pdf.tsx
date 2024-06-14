'use client';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import type { PDFDocumentProxy } from 'pdfjs-dist';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();


// import * as PDFJS from 'pdfjs-dist/build/pdf.mjs';
// const workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.min.js`;
// PDFJS.GlobalWorkerOptions.workerSrc = workerSrc;

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.mjs',
//     import.meta.url,
//   ).toString();

const Pdf = () => {
    const [numPages, setNumPages] = useState<number>(1);

    const onDocumentLoadSuccessInternal = ({ numPages }: PDFDocumentProxy) => {
        setNumPages(numPages);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Document
                file="/travel-magazine.pdf"
                onLoadSuccess={onDocumentLoadSuccessInternal}
                className="flex justify-center items-center"
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