import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';






export default function cover()
{



  const [items , setItems ] = useState([]);
  const [loading , setLoading] = useState(true);

  const fetchData  = async() =>{
      const res = await fetch("http://localhost:3002/events");
      const data = await res.json();
      setItems(data)
      setLoading(false)
  }

 useEffect ( ()=>{
  fetchData();
 },[])

  if(loading)
  return <>Loading...</>


    return (
        <>
        <div className="relative">
            <div className="absolute left-20 top-20 text-white z-20">
              <h1 className="text-8xl font-extrabold tracking-wider" style={{fontFamily:"Adamina"}}>C&R INFRACON</h1>
              <p className="text-3xl leading-loose p-2">Perfection with Precision</p>
            </div>
            <div className="bg-black" style={{backgroundColor:"black"}} > 
              {/* <img className="w-full opacity-50" style={{height:"700px"}}
                src="https://images.unsplash.com/photo-1485185148890-c944fab3e87c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> */}
                <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
            <SwiperSlide><div className='w-full bg-black custom_height' style={{height:"700px"}}>
        <img className='opacity-40 rounded-lg bg-cover' src={items[0].image} />
                    {/* <div className='absolute bottom-0 w-full h-full text-white '>
                        <div className='relative top-1/3 left-1/3 w-2/5'>
                            <p className='text-xl'>{items[0].project_title}</p><br/>
                            <p className='text-md font-light'>{items[0].project_desc}</p>
                            </div>
                    </div> */}
                    </div>
        </SwiperSlide>

        <SwiperSlide><div className='w-full bg-black custom_height' style={{height:"700px"}}>
        <img className='opacity-40 rounded-lg bg-cover' src={items[1].image} />
                    {/* <div className='absolute bottom-0 w-full h-full text-white '>
                        <div className='relative top-1/3 left-1/3 w-2/5'>
                            <p className='text-xl'>{items[1].project_title}</p><br/>
                            <p className='text-md font-light'>{items[1].project_desc}</p>
                            </div>
                    </div> */}
                    </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-full bg-black custom_height' style={{height:"700px"}}>
        <img className='opacity-40 rounded-lg bg-cover' src={items[2].image} />
                    {/* <div className='absolute bottom-0 w-full h-full text-white '>
                        <div className='relative top-1/3 left-1/3 w-2/5'>
                            <p className='text-xl'>{items[2].project_title}</p><br/>
                            <p className='text-md font-light'>{items[2].project_desc}</p>
                            </div>
                    </div> */}
                    </div>
        </SwiperSlide>
      </Swiper>
           </div>
        </div>
        </>
)};