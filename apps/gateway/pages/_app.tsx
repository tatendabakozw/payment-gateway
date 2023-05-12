import { AppProps } from 'next/app';
// import {utls} from ''
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return(

    <>
  <Component {...pageProps} />
  </>
    ) 
}

export default CustomApp;
