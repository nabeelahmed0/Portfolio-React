import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Blog", "#blog"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#" className="logo">
          Nabeel<span>.</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={open ? "nav-links active" : "nav-links"}>
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
