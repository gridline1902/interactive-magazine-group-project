import Pdf from './(components)/client/Pdf';
import Head from 'next/head'



export default function App() {


  return (

    <main className="h-screen bg-white">
      <Head>
        <link rel="icon" href="/book-closed.svg" />
      </Head>
      <Pdf />
    </main>

  );
}
