'use client'
import Link from "next/link";
import { useState } from "react";
export default function Header(){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return(
<header className={`nav ${sidebarOpen ? 'open' : ''}`}>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="toggle-btn">
          ☰
        </button>
        <ul className={`nav-menu ${sidebarOpen ? 'active' : ''}`}>
     
          <li onClick={() => setSidebarOpen(false)}><Link href="/">Home</Link></li>
          <li onClick={() => setSidebarOpen(false)}><Link href="/about">About us</Link></li>
          <li onClick={() => setSidebarOpen(false)}><Link href="/contact">Contact</Link></li>
       
        </ul>
        <div className="brand">Glamour⛋</div>
      </header>

    )
}