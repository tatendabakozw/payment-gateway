import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default CustomApp;
