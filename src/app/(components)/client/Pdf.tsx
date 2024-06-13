'use client';

import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
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

export default function Pdf() {
    const [numPages, setNumPages] = useState<number>(null);

    const onDocumentLoadSuccessInternal = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Document
                file="./travel-magazine.pdf"
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
                    {numPages &&
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
