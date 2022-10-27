import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import MyArtwork from './components/MyArtwork'
import Contact from './components/Contact'
import TopOfPageBtn from './components/TopOfPageBtn'
import './components/cursor.css'
import './App.css'

function App() {
  //cursor code here
  const [cursorOuterVariant, setCursorOuterVariant] = useState("defaultOuter");
  const [cursorInnerVariant, setCursorInnerVariant] = useState("defaultInner");
  const [cursorCords, setCursorCords] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = e => {
      setCursorCords({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  //  variants for cursor below
  const variants = {
    defaultInner: {
      x: cursorCords.x - 6,
      y: cursorCords.y - 6,
      height: '12px',
      filter: 'drop-shadow( 0 0 20px white)'
    },
    linkInner: {
      x: cursorCords.x - 50,
      y: cursorCords.y - 50,
      height: '100px',
      filter: 'none',
      backgroundColor: 'hsla(0, 0%, 0%, .2)'
    },
    defaultOuter: {
      x: cursorCords.x - 24,
      y: cursorCords.y - 24,
      height: '48px'
    },
    linkOuter: {
      x: cursorCords.x - 40,
      y: cursorCords.y - 40,
      height: '80px',
      backgroundColor: 'hsla(0, 0%, 0%, .2)',
      mixBlendMode: 'difference',
      backdropFilter: 'blur(2px)',
      zIndex: '0'
    }
  }
  //  variants for cursor above


  const linkEnter = () => {
    setCursorOuterVariant("linkOuter");
    setCursorInnerVariant("linkInner");
  };
  const linkLeave = () => {
    setCursorOuterVariant("defaultOuter");
    setCursorInnerVariant("defaultInner");
  };

  const [topBtnHover, SetTopBtnHover] = useState(false);

  const toTopEnter = () => {
    linkEnter();
    SetTopBtnHover(true);
  }

  const toTopLeave = () => {
    linkLeave();
    SetTopBtnHover(false);
  }

  return (
    <div className='App'>
      <Hero
        handleMouseEnter={linkEnter}
        handleMouseLeave={linkLeave}
      />
      <Projects
        handleMouseEnter={linkEnter}
        handleMouseLeave={linkLeave}
      />
      <Skills />
      <AboutMe />
      <MyArtwork />
      <Contact />
      <TopOfPageBtn
        handleMouseEnter={toTopEnter}
        handleMouseLeave={toTopLeave}
        icon={topBtnHover}
      />
      <motion.div
        className='Cursor-outer'
        variants={variants}
        animate={cursorOuterVariant}
      />
      <motion.div
        className='Cursor-inner'
        variants={variants}
        animate={cursorInnerVariant}
      />
      {/* <div className='nav-highlight-container'>
        <img src={TopCorner} alt='topcorner' />
        <img src={BottomCorner} alt='bottomcorner' />
      </div> */}
    </div>
  )
}

export default App
