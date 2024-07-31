import '@/styles/global.css';
import Container from '@/components/Container';
import Header from '@/components/Header';
import { ThemeProvider } from '@/lib/ThemeContext';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
;

  return(
    <>    
    <Head>
    <title>Head test</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <ThemeProvider>
    <Header />
    <Container>
    <Component {...pageProps} />
    </Container>
    </ThemeProvider>
    </>

  ) 
  

}
