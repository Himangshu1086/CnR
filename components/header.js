
import Link from 'next/link';
import style from '../styles/style.module.css'
export default function header() {
  return (
   <header className={style.header}>
      <nav className={style.nav_container}>
        <div className={style.logo_container}><h2><Link href="/" className='hover_link_logo'>CnR</Link></h2></div>
        <div className={style.nav_link_container}>
          <ul className={style.nav_link}>
            <li><Link href="/" className='hover_link'>Home</Link></li>
            <li><Link href='/about' className='hover_link'>About Us</Link></li>
            <li><Link href="/project" className='hover_link'>Projects</Link></li>
            <li><Link href="/services" className='hover_link'>Services</Link></li>
            <li><Link href="/career" className='hover_link'>Career</Link></li>
          </ul>
        </div>
      </nav>
   </header>
  );
};


