import React from 'react';
import styles from './style';
import { NavBar,  ProductCard,  Characteristics,  Hero,  Footer,  Features,  ClickToAction,  Button, Catalogue } from './components/index';

const App = () => {
  return (
    <div className='bg-transparent w-full overflow-hidden flex flex-col h-screen'>
      {/* navbar */}
      <div className={`border-b-2 border-black bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      {/* hero */}
      <div className='flex-1 overflow-y-auto'>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero/>
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Characteristics />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            {/* catalogue */}
            <Catalogue />
          </div>
        </div>
        <div className={` ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            
            {/* features */}
            <Features/>
            {/* CTA */}
            {/* <ClickToAction /> */}
            {/* footer */}
           
          </div>
        </div>
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            {/* footer */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App