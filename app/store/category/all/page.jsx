'use client'
import { InstagramLogoIcon, TwitterLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: "Berserk Shirt",
    price: "$20",
    image: "https://i.pinimg.com/736x/2d/1b/b8/2d1bb894daf7383b4f41f95704298001.jpg",
    href: "/"
  },
  {
    id: 2,
    name: "Full Metal Shirt",
    price: "$35",
    image: "https://i.pinimg.com/1200x/8e/05/46/8e054647d5dbac53af8ba9a04c526f20.jpg",
    href: "/"
  },
  {
    id: 3,
    name: "Evangelian TShirt",
    price: "$15",
    image: "https://i.pinimg.com/736x/5c/ec/6b/5cec6bfc29ed4e8b4e58f7f4ec05c524.jpg",
    href: "/"
  },
  {
    id: 4,
    name: "Nana Top",
    price: "$50",
    image: "https://i.pinimg.com/736x/5b/d9/04/5bd90443a06b64458e4a48cbe15b2f20.jpg",
    href: "/"
  },
  {
    id: 5,
    name: "Nana Hoodie",
    price: "$50",
    image: "https://i.pinimg.com/1200x/0d/3c/e9/0d3ce939865cdc0e9fbbfec7f2732c56.jpg",
    href: "/"
  },
  {
    id: 6,
    name: "Lain TShirt",
    price: "$50",
    image: "https://i.pinimg.com/1200x/a3/82/1f/a3821fa7281e0de327b0b2c752e66f6b.jpg",
    href: "/"
  },
]

const Page = () => {
  return (
    <div className="bg-neutral-200 w-screen min-h-screen mx-auto overflow-hidden rounded-lg shadow-lg">
      
      {/* Product Grid */}
      <div className='flex justify-center text-black tracking-tight pt-32 pb-60'>
        <div className='grid grid-cols-3 gap-x-4 gap-y-10'>
          {products.map((product) => (
            <Link key={product.id} href={product.href} className='cursor-pointer'>
              <div className='h-[50vh] w-[22vw] bg-white rounded-lg overflow-hidden'>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className='w-full h-full object-cover hover:scale-105 transition-all duration-300' 
                />
              </div>
              <div className='mt-3 font-medium tracking-tight flex justify-between items-end'>
                <div>{product.name}</div>
                <div className='font-semibold'>{product.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Sticky Footer */}
      <motion.div 
        className='relative h-[450px]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
      >
        <div className='fixed bottom-0 h-[450px] w-full'>
          <div className='bg-black py-8 px-12 h-full w-full flex flex-col justify-between'>

            {/* Top Section */}
            <div className='flex flex-r justify-between items-start'>
              <div className='flex space-x-40 pt-5'>
                {[1,2,3].map((col) => (
                  <div key={col}>
                    <div className='text-sm text-white/70 font-semibold tracking-tighter'>STORE</div>
                    <div className='flex flex-col space-y-0.5 text-white font-medium mt-2'>
                      <div>Cosplay</div>
                      <div>Accessories</div>
                      <div>Decor</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className='text-white flex items-center gap-4'>
                <InstagramLogoIcon className='text-2xl' />
                <YoutubeLogoIcon className='text-2xl' />
                <TwitterLogoIcon className='text-2xl' />
              </div>
            </div>

            {/* Bottom Section */}
            <Section2 />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Page

const Section2 = () => {
  return (
    <div className='flex justify-between items-end'>
      <h1 className='text-[10vw] leading-[0.8] mt-10 text-white'>Otaku Haul</h1>
      <div className='flex flex-col text-white'>
        <p>Developed by Sumona</p>
        <p>©2025 Otaku Haul</p>
      </div>
    </div>
  )
}
