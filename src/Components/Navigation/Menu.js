import React from "react";

export function Menu({ closeMenu }) {
    return (
      <nav className="Menu">
          <a className="Menu-Link" onClick={closeMenu} href="#Homepage">Úvod</a>
          <a className="Menu-Link" onClick={closeMenu} href="#Photopage">Židům 3, 4</a>
          <a className="Menu-Link" onClick={closeMenu} href="#Info">Kdy a kde?</a>
          <a className="Menu-Link" onClick={closeMenu} href="#Program">Program</a>
          <a className="Menu-Link" onClick={closeMenu} href="#Gifts">Dary</a>
          <a className="Menu-Link" onClick={closeMenu} href="#Dresscode">Dresscode</a>
          <a className="Menu-Link" onClick={closeMenu} href="#Participation">Potvrzení účasti</a>
      </nav>
    );
  }