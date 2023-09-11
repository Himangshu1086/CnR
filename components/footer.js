// import Link from 'next/link'
import React from 'react'
import Link from "next/link.js";

export default function Footer() {
  return (
    <>
      <div className='w-full bg-black h-auto flex justify-center'>
          
          <div className='w-full mt-5 mb-5 text-white pt-5 pb-5 pl-5'>
            <h1 className='text-3xl font-bold text-blue-400 mb-4' >C&R Infracon</h1>
            <h2 className='text-2xl mb-2' >Business Approach</h2>
            <p className='text-md font-extralight text-justify'>
            Our decades of experience, innovation and exceptional people differentiate our approach to delivering integrated solutions in a diverse and changing market. 
            Since its establishment integral to the company's business strategy have always been their commitments to "Structured Innovation". 
            The word "structured" expresses the company's ability to deliver products and services according to a tested method "Innovation" 
            reflects the important attribute of meeting challenges with effective engineered solutions. 
            </p>
          </div>
          <div className='w-full mt-5 mb-5 text-white pt-5 pb-5 pl-5'>
            <h1 className='text-3xl font-bold text-blue-400 mb-4' >Site Staff Strength</h1>
            <h2 className='text-2xl mb-2' >Staff Count</h2>
            <table className='w-full'>
            <tbody>
                <tr>
                  <th>Staff</th>
                  <th>Nos.</th>
                </tr>
                <tr>
                  <td>MANAGEMENT STAFF</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>B.TECH ENGINEERS</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>DIPLOMA ENGINEERS</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>SUPERVISORS</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>ACCOUNT & ADMINISTRATION</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>CASUAL STAFF</td>
                  <td>10</td>
                </tr>
                </tbody>
              </table>
          </div>

          <div className='w-2/3 mt-5 mb-5 text-white pt-5 pb-5 pl-5'>
            <h1 className='text-3xl font-bold text-blue-400 mb-4 text-center'>Quick Links</h1>
            <h2 className='text-2xl mb-2' ><br/></h2>
            <div className='text-center'>
            <p className='text-md font-extralight hover_link'>Home</p>
            <p className='text-md font-extralight hover_link '>Project</p>
            <p className='text-md font-extralight hover_link'>About</p>
            <p className='text-md font-extralight hover_link'>Career</p>
            <p className='text-md font-extralight hover_link '>Services</p>
            </div>
          </div>

          <div className='w-full mt-5 mb-5 text-white pt-5 pb-5 pl-5 pr-5'>
            <h1 className='text-3xl font-bold text-blue-400 mb-4' >Plant & Machinery</h1>
            <h2 className='text-2xl mb-2' ><br/></h2>
            <table className='w-full'>
            <tbody>
                <tr>
                  <th>Hydraulic RIG</th>
                  <th>Nos.</th>
                </tr>
                <tr>
                  <td>CONCRETE MIXER MACHINE</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>EXCAVATOR PC 200/120</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>BACKHOE LOADER</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>SELF LOADING CONCRETE MACHINE</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>EXCAVATOR 135/140</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>CRAWLER CRANE 25/35 TON</td>
                  <td>2</td>
                </tr>
                </tbody>
              </table>

              <table className='w-full mt-5'>
            <tbody>
                <tr>
                  <th>Pile Tools</th>
                  <th>Nos.</th>
                </tr>
                <tr>
                  <td>600 mm dia set</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>750 mm dia set</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>1000 mm dia set</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>1200 mm dia set</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>1500 mm dia set</td>
                  <td>1</td>
                </tr>
                </tbody>
              </table>
          </div>

      </div>
      <div className='w-full bg-gray-900 flex justify-center items-center'>
        <div className='p-2'>
          <span className='text-white font-extralight'>Design and Develop with 💜 <Link href="https://www.instagram.com/_25zodiac_/"><u className='hover:text-red-400 font-normal'>@Himangshu1086</u></Link></span> 
          <span className='text-white font-extralight'> | Photo Source: <Link className='text-red-300' href='https://www.unsplash.com'>Unsplash</Link></span>
        </div>
      </div>
    </>
  )
}
