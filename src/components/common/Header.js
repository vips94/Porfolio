import React, { useEffect, useState} from "react";
import classes from "./Header.module.scss";
import { Link } from "react-scroll";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import SocialMedia from "./SocialMedia";

const Header = ()=>{

  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  useEffect(() => {
    const handleResize = () => {
      setSize({
        widht: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) setMenuOpen(false);
  }, [size.width, menuOpen]);

  return (
    <header className={classes.header}>
      <div className={classes.header__content} >
        <h2 className={classes.header__content__logo}>Portfolio</h2>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : " "
          }`} onClick = {(event) => event.stopPropagation()}
        >
          <ul>
            <li>
              {/* <a href="#aboutMe" >About Me</a> */}
              <Link
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}>
                About Me
              </Link>
            </li>
            <li>
              {/* <a href="#skills">Skills</a> */}
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}>
                Skills
              </Link>
            </li>
            <li>
              {/* <a href="#projects">Projects</a> */}
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}>
                Projects
              </Link>
            </li>
            <li>
              {/* <a href="#contact">Contact</a> */}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}>
                Contact Me
              </Link>
            </li>
            <li>
              {/* <button href="#home">Home</button> */}
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}>
                Home
              </Link>
            </li>
          </ul>
          <SocialMedia />
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <>
              <AiOutlineClose onClick={menuToggleHandler} />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
