import { useEffect, useState } from 'react';
import "./style/home.scss";
import { motion } from 'motion/react';
import { Accordion, Dialog, Field } from '@base-ui-components/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPlus, faSubscript } from '@fortawesome/free-solid-svg-icons';
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
          <motion.div className="bg"></motion.div>
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
          <motion.div className="bg"></motion.div>
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
          <motion.div className="bg"></motion.div>
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
        <motion.div className='service' id="p3dservice">
          <motion.div className="bg"></motion.div>
          <motion.h1>3D Printing</motion.h1>
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
      </motion.div>
    </motion.div>
    <motion.div id="sect3" className='section'>
      <motion.div id="vignette" className="noSelect occupyFull"></motion.div>
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
      <motion.h1>Frequently Asked Questions</motion.h1>
      <Accordion.Root className="accordion">
        <Accordion.Item className="item">
          <Accordion.Header className="header">
            <Accordion.Trigger className="trigger" onClick={(e)=>{
              e.target.scrollIntoView({ 
                behavior:"smooth", 
                block:"center", 
                inline:"nearest" });
            }}>
              How will I receive my print job?
              <FontAwesomeIcon className="icon" icon={faPlus} />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="panel">
            <div className="contents">
              We accept cash, and can deliver to places around the Fairfield/North Caldwell 
              area in New Jersey. We want to be able to ship elsewhere, but it's unavailable 
              for us at the moment 
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className="item">
          <Accordion.Header className="header">
            <Accordion.Trigger className="trigger" onClick={(e)=>{
              e.target.scrollIntoView({ 
                behavior:"smooth", 
                block:"center", 
                inline:"nearest" });
            }}>
              How can I place an order?
              <FontAwesomeIcon className="icon" icon={faPlus} />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="panel">
            <div className="contents">
              You can purchase our printing service online. We will request physical payment 
              as a restriction of our current scale, but if you email us we will take your 
              request and fulfill it.
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className="item">
          <Accordion.Header className="header">
            <Accordion.Trigger className="trigger" onClick={(e)=>{
              e.target.scrollIntoView({ 
                behavior:"smooth", 
                block:"center", 
                inline:"nearest" });
            }}>
              Can I make special requests?
              <FontAwesomeIcon className="icon" icon={faPlus} />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="panel">
            <div className="contents">
              Of course! Special requests can be made through email, and will allow you to request 
              almost anything you want. Want a custom paper size/shape? We can totally print to that 
              with a slight charge if we have to purchase it. 
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    </motion.div>
    <motion.div id="sect4" className='section'>
      <motion.div id="fadeRight" className="noSelect occupyFull"></motion.div>
      <motion.div id="vignette" className="noSelect occupyFull"></motion.div>
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
      <motion.div id="textbox" className="occupyLeft">
        <motion.h1>Order Today</motion.h1>
        <FontAwesomeIcon className='accentIcon' icon={faPaperPlane} />
      </motion.div>
      <motion.div id="textbox" className="occupyRight">
        <motion.div id="fieldWrapper">
          <motion.h2>Submit an Order Form</motion.h2>
          <Field.Root className="field">
            <Field.Label className="fieldLabel">Name</Field.Label>
            <Field.Control 
              id="name" 
              required 
              placeholder="Required" 
              onKeyDown={(e)=>{if(e.key==="Enter"){
                document.getElementById("email").focus();}}}
              className="fieldInput" />
            <Field.Error className="fieldError" match="valueMissing">
              Please enter your name
            </Field.Error>
          </Field.Root>
          <Field.Root className="field">
            <Field.Label className="fieldLabel">Email</Field.Label>
            <Field.Control 
              id="email" 
              required 
              placeholder="Required" 
              className="fieldInput" />
            <Field.Error className="fieldError" match="valueMissing">
              Please enter your email
            </Field.Error>
          </Field.Root>
          <motion.button id="submit" className='button'>
            Submit
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  </>);
}
export default App;