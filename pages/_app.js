import Head from 'next/head';
import '@/styles/globals.css';
import GalaxyBackground from '../components/Galaxy';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zoey Chen</title>
      </Head>
      <Navbar />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '20%', zIndex: -1 }}>
        <GalaxyBackground />
      </div>
      <div style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(transparent, white)',
        zIndex: 1
      }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
