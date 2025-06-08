import { useEffect, useState } from 'react';
import "./style/home.scss";
import { motion } from 'motion/react';
import { Dialog } from '@base-ui-components/react';
const App=()=>{
  useEffect(()=>{
    document.title="Untitled Print Co.";
  },[]);
  return(<> 
    <motion.header className='section'>
      <motion.div id="blurtint" className="noSelect occupyFull"></motion.div>
      <motion.div id="fade" className="noSelect occupyFull"></motion.div>
      <motion.div id="grid" className="noSelect occupyFull"></motion.div>
      <motion.div id="vignette"></motion.div>
      <motion.div id="grain" className="noSelect occupyFull">
        <motion.svg id="g1" xmlns="http://www.w3.org/2000/svg">
            <filter id="filter">
                <feTurbulence baseFrequency="0.2"/>
                <feColorMatrix values="0 0 0 4.75 -2
                                       0 0 0 4.75 -2
                                       0 0 0 4.75 -2
                                       0 0 0 0 1"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#filter)"/>
        </motion.svg>
      </motion.div>
      <motion.div className='contentWrapper'>
        <motion.div 
          /* initial={{scale:.75,y:15,opacity:0,}} 
          animate={{scale:1,y:0,opacity:1,}}
          transition={{duration:.35,ease:"easeInOut"}} */
          id="logo"></motion.div>
      </motion.div>
    </motion.header>
    <motion.div id="sect1" className='section'>
      <motion.div id="vignette"></motion.div>
      <motion.div id="textbox" className="occupyLeft">
        <motion.h1
          /* initial={{scale:.85,x:-100,opacity:0,}} 
          animate={{scale:1,x:0,opacity:1,}}
          transition={{duration:.35,ease:"easeInOut"}} */>Our Mission</motion.h1>
        <motion.hr/>
        <motion.p
          /* initial={{scale:.85,x:-100,opacity:0,}} 
          animate={{scale:1,x:0,opacity:1,}}
          transition={{duration:.35,ease:"easeInOut",delay:.15,}} */>
          Printing in the 21st century can be a long, expensive task. Often, you can 
          find yourself stuck between expensive printing solutions from companies, or 
          printers that are not budget friendly in the slightest. We want to change that. 
          Our end goal is to build a company with the consumer in mind, offering cheap, 
          high-quality prints locally.
        </motion.p>
      </motion.div>
      <motion.div id="imagebox" className='occupyRight'>
        <motion.div id="mask"></motion.div>
        <motion.div id="image"></motion.div>
      </motion.div>
      <motion.div id="grid" className="noSelect occupyFull"></motion.div>
      <motion.div id="grain" className="noSelect occupyFull">
        <motion.svg id="g1" xmlns="http://www.w3.org/2000/svg">
            <filter id="filter">
                <feTurbulence baseFrequency="0.2"/>
                <feColorMatrix values="0 0 0 4.75 -2
                                       0 0 0 4.75 -2
                                       0 0 0 4.75 -2
                                       0 0 0 0 1"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#filter)"/>
        </motion.svg>
      </motion.div>
      <motion.div id="fadeRight" className='occupyFull'></motion.div>
    </motion.div>
    <motion.div id="sect2" className='section'>
      <motion.div id="grid" className="noSelect occupyFull"></motion.div>
      <motion.div id="grain" className="noSelect occupyFull">
        <motion.svg id="g1" xmlns="http://www.w3.org/2000/svg">
            <filter id="filter">
                <feTurbulence baseFrequency="0.2"/>
                <feColorMatrix values="0 0 0 4.75 -2
                                       0 0 0 4.75 -2
                                       0 0 0 4.75 -2
                                       0 0 0 0 1"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#filter)"/>
        </motion.svg>
      </motion.div>
      <motion.h1>Our Services</motion.h1>
      <motion.div id="vignette"></motion.div>
      <motion.div id="serviceWrapper">
        <motion.div className='service' id="gpservice">
          <motion.div id="bg"></motion.div>
          <motion.h1>General Printing</motion.h1>
          <motion.p>
            We offer a variety of general printing services. Many of our printers as 
            commercial/office grade, leading to a superior product. We strive to make 
            the best quality prints we can, for as cheap as we can
          </motion.p>
          <Dialog.Root>
            <Dialog.Trigger className="button dtrigger">Learn More</Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Backdrop className="dbg" />
              <Dialog.Popup className="dpopup">
                <Dialog.Title className="dtitle">General Printing</Dialog.Title>
                <Dialog.Description className="ddesc">
                  Types will go here (I'm not typing all that js yet)
                </Dialog.Description>
                <div className="dactions">
                  <Dialog.Close className="button dclose">Close</Dialog.Close>
                </div>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
        </motion.div>
        <motion.div className='service' id="vsservice">
          <motion.div id="bg"></motion.div>
          <motion.h1>Vinyl/Sticker Printing</motion.h1>
          <motion.p>
            We also offer vinyl and sticker printing, We can print to whole sheets, or kiss 
            cut stickers. Currently, all of our cuts are made manually, but we plan to invest in vinyl 
            cutters for the purpose of selling stickers. 
          </motion.p>
          <Dialog.Root>
            <Dialog.Trigger className="button dtrigger">Learn More</Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Backdrop className="dbg" />
              <Dialog.Popup className="dpopup">
                <Dialog.Title className="dtitle">General Printing</Dialog.Title>
                <Dialog.Description className="ddesc">
                  Types will go here (I'm not typing all that js yet)
                </Dialog.Description>
                <div className="dactions">
                  <Dialog.Close className="button dclose">Close</Dialog.Close>
                </div>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
        </motion.div>
        <motion.div className='service' id="pvcservice">
          <motion.div id="bg"></motion.div>
          <motion.h1>PVC Printing</motion.h1>
          <motion.p>
            PVC Printing isn't widely available, which why we intend on bring it consumers 
            for quick and cheap. Although we currently only offer printing to cards, we plan 
            to branch out to bigger prints, like sheets.
          </motion.p>
          <Dialog.Root>
            <Dialog.Trigger className="button dtrigger">Learn More</Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Backdrop className="dbg" />
              <Dialog.Popup className="dpopup">
                <Dialog.Title className="dtitle">General Printing</Dialog.Title>
                <Dialog.Description className="ddesc">
                  Types will go here (I'm not typing all that js yet)
                </Dialog.Description>
                <div className="dactions">
                  <Dialog.Close className="button dclose">Close</Dialog.Close>
                </div>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
        </motion.div>
        <motion.div className='service'>
          
        </motion.div>
      </motion.div>
    </motion.div>
  </>);
}
export default App;