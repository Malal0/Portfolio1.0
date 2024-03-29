import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './assets/sections/Hero'
import Projects from './assets/sections/Projects'
import Skills from './assets/sections/Skills'
import AboutMe from './assets/sections/AboutMe'
import Contact from './assets/sections/Contact'
import TopOfPageBtn from './assets/components/TopOfPageBtn'
import './assets/styles/css/cursor.css'
import './index.css'
import ScreenSize from './assets/components/ScreenSize'

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

  //code for screen size

  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimension])

  //code for screen size

  return (
    <div className='App'>
      <Hero
        handleMouseEnter={linkEnter}
        handleMouseLeave={linkLeave}
        width={windowDimension.winWidth}
      />
      <Projects
        handleMouseEnter={linkEnter}
        handleMouseLeave={linkLeave}
        handleWidth={windowDimension.winWidth}
      />
      <Skills />
      <AboutMe />
      <Contact />
      <TopOfPageBtn
        handleMouseEnter={toTopEnter}
        handleMouseLeave={toTopLeave}
        icon={topBtnHover}
      />
      {windowDimension.winWidth > 1020 ?
        <>
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
        </> :
        ""
      }
    </div>
  )
}

export default App
