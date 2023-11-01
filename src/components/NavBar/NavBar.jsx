import s from "./NavBar.module.css";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <nav
      className={s.nav_bar}
      style={{
        backgroundColor: isScrolled ? "#141414" : "transparent",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <div className={s.nav_left}>
        <div>
          <img
            className={s.nav_logo}
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="logo"
          />
        </div>
        <div className={s.nav_links}>
          <a href="/">Home</a>
          <a href="/">TV Shows</a>
          <a href="/">TV Movies</a>
          <a href="/">New & Popular</a>
          <a href="/">My List</a>
          <a href="/">Browse by Language</a>
        </div>
      </div>

      <div className={s.nav_right}>Logout</div>
    </nav>
  );
};

export default NavBar;
