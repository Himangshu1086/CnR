import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {

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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
            <SwiperSlide><div className='w-full bg-black custom_height'>
        <img className='opacity-40 rounded-lg bg-cover' src={items[0].image} />
                    <div className='absolute bottom-0 w-full h-full text-white '>
                        <div className='relative top-32 left-1/3 w-2/5'>
                            <p className='text-3xl'>{items[0].project_title}</p><br/>
                            <p className='text-md font-light'>{items[0].project_desc}</p>
                            </div>
                    </div>
                    </div>
        </SwiperSlide>

        <SwiperSlide><div className='w-full bg-black custom_height'>
        <img className='opacity-40 rounded-lg bg-cover' src={items[1].image} />
                    <div className='absolute bottom-0 w-full h-full text-white '>
                        <div className='relative top-32 left-1/3 w-2/5'>
                            <p className='text-3xl'>{items[1].project_title}</p><br/>
                            <p className='text-md font-light'>{items[1].project_desc}</p>
                            </div>
                    </div>
                    </div>
        </SwiperSlide>

        <SwiperSlide><div className='w-full bg-black custom_height'>
        <img className='opacity-40 rounded-lg bg-cover' src={items[2].image} />
                    <div className='absolute bottom-0 w-full h-full text-white '>
                        <div className='relative top-32 left-1/3 w-2/5'>
                            <p className='text-3xl'>{items[2].project_title}</p><br/>
                            <p className='text-md font-light'>{items[2].project_desc}</p>
                            </div>
                    </div>
                    </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
