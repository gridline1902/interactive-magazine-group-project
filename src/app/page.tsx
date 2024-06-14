// import Pdf from './(components)/client/Pdf';
import dynamic from 'next/dynamic';

const Pdf = dynamic(() => import("./_components/client/Pdf"), {
  ssr: false
})


export default function App() {


  return (

    <main className="h-screen bg-white">
      <Pdf />
    </main>

  );
}

