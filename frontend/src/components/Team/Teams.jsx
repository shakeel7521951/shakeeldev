import React from 'react'
import img from '../../../public/team/b1.jpg'
import { FaLinkedin } from 'react-icons/fa'
export default function Teams() {
  const aray=[
    {
      img:img,title:"Muhammad Waseem",designation:"Founder & CEO",linkedin:<FaLinkedin/>,link:'/'
    },
    {
      img:img,title:"Muhammad Waseem",designation:"Founder & CEO",linkedin:<FaLinkedin/>,link:'/'
    },
    {
      img:img,title:"Muhammad Waseem",designation:"Founder & CEO",linkedin:<FaLinkedin/>,link:'/'
    },
  ]
  return (
    <div className='p-3 sm:p-10'>
        <h1 className=' text-2xl sm:text-4xl font-bold mb-10 text-[#0F00AA]'>Global Leadership</h1>
        <div className=' grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3'>
          {
            aray.map((item,ind)=>(
              <div key={ind} className=' '>
                  <div className=''>
                    <img src={item.img} alt={item.title} />
                    <div className=' py-4'>
                      <h1 className=' text-md sm:text-xl font-extrabold mb-2'>{item.title}</h1>
                      <a  href={item.link}>{item.linkedin}</a>
                    </div>
                  </div>
              </div>
            ))
          }
        </div>

    </div>
  )
}
