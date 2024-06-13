"use client";

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Button from "./(components)/client/Button";
import Pdf from "./(components)/client/Pdf";
import { useState } from "react";

export default function Home() {

  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = (numPages: number) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const onPrevClick = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const onNextClick = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };


  return (
    <main className="w-full flex justify-center bg-white">
      <Button className="bg-black px-4" onButtonClick={onPrevClick} hidden={pageNumber <= 1}>
        <MdNavigateBefore className='text-slate-50' />
      </Button>
      <Pdf pageNumber={pageNumber} onDocumentLoadSuccess={onDocumentLoadSuccess} />
      <Button onButtonClick={onNextClick} hidden={pageNumber >= numPages}>
        <MdNavigateNext className='text-slate-950' />
      </Button>
    </main>
  );
}
