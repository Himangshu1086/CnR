import Head from "next/head";
import Header from "../components/header.js";
import Cover from '../components/cover.js';
import About from "../components/about.js";
import Management from "../components/management.js";
import Project from "../components/project.js";
import Footer from "../components/footer.js";
import Address from "../components/address.js";
import Contact from "../components/contact.js";
import Link from "next/link.js";
export default function Home() {
  return (
    <>
      <Head>
        <title>CnR</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
        <div className="fixed text-green-600 z-30 bottom-0 right-0 text-6xl m-4 pb-3">
        <Link href="https://wa.me/6295473035" className="hover:text-red-500"><i class="fa fa-whatsapp" aria-hidden="true"></i></Link>
        </div>
        <main className='main'>
          <Cover/>
          <About/>
          <Management/>
          <Project/>
          <Contact/>
          <Address/>
        </main>
        <Footer/>
    </>
  );
}
