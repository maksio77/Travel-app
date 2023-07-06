import { ReactNode } from 'react'
import Footer from '@/components/Footer';
import Header from '@/components/Header';

interface PropsType {
  children: ReactNode
}

const Layout = ({children}: PropsType) => {
  return (
    <>
      <Header/>
        {children}
      <Footer/>
    </>
  );
}

export default Layout;