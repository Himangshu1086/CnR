import React from 'react'
import Carousel from '../components/corousel'
export default function about() {

  const items = {
    "image":"https://images.unsplash.com/photo-1693790610517-0d0110babbfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
    "project_title":"LE21MAC4-SCB Medical Expansion Project. PILING JOB 900 mm dia and 600 mm dia",
    "project_desc" :"Under Larsen & Turbo Ltd. Building & Factory.(Via S-Gen Consortium Infra Pvt Ltd)"
  }

  return (
    <div><Carousel items={items}/></div>
  )
}



