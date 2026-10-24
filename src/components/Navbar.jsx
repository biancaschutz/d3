import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [{ to: "/", label: "Home" }];

const projects = [{ to: "/project1", label: "Project 1" }];

function ProjectsMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const { pathname } = useLocation();

  const onProjectPage = projects.some((p) => p.to === pathname);

  useEffect(() => {
    if (!open) return;

    function handleClick(event) {
      if (!menuRef.current.contains(event.target)) setOpen(false);
    }
    function handleKey(event) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div className="dropdown" ref={menuRef}>
      <button
        type="button"
        className={`nav-link dropdown-toggle${onProjectPage ? " active" : ""}`}
        aria-expanded={open}
        aria-controls="projects-menu"
        onClick={() => setOpen((o) => !o)}
      >
        Projects <span aria-hidden="true">▾</span>
      </button>

      {open && (
        <ul id="projects-menu" className="dropdown-menu">
          {projects.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className="nav-link dropdown-item"
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Navbar() {
  return (
    <header>
      <nav>
        {links.map(({ to, label }) => (
          <NavLink key={to} to={to} end className="nav-link">
            {label}
          </NavLink>
        ))}
        <ProjectsMenu />
      </nav>
    </header>
  );
}
