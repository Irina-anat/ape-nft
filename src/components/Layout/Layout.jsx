import { Header } from 'components/Header/Header';
import css from './Layout.module.css'
import { Hero } from 'components/Hero/Hero';
import { AboutSection } from 'components/AboutSection/AboutSection';
import { Mind } from 'components/Mind/Mind';
// import { Faq } from 'components/FAQ/Faq';

export const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <Header/>
      <main>
        <Hero />
        <AboutSection />
        <Mind />
        {/* <Faq/> */}
        {children}
      </main>      
    </div>
  );
};
