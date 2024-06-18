'use client';

import dynamic from 'next/dynamic';

const PDFviewer = dynamic(() => import("./components/client/Pdf"), {
  ssr: false
})


export default function App() {
  return (
    <main className="h-screen bg-white">
      <PDFviewer />
    </main>
  );
}

