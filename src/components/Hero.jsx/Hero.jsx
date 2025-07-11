import React from 'react'
import Navbar from '../Navbar.jsx/Navbar'
import HeroImg from '../../assets/strawberry.png'

const Hero = () => {
  return (
   <main className='bg-primaryDark md:py-6 md:px-12'>
    <section className='relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md'>
      <div className='container'>
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[650px] place-items-center">
          <div className='text-white space-y-4 p-4 md:mt-0 '>
            <h1 className='text-3xl pl-6 md:pl-14'>01________</h1>
            <h1 className='text-5xl font-bold uppercase text-shadow'>A HEALTHY FRUIT</h1>
            <p className='text-sm'>Fresh, juicy, and naturally sweet — our handpicked strawberries are grown with care and delivered straight from farm to table. Taste the difference in every bite!</p>
            <button className=" border border-white px-4 py-2 rounded-lg">Shop Now</button>
          </div>
          <div>
            <img src={HeroImg} alt="Not found"
            className='w-[400px] img-shadow relative z-[1]' />
          </div>
          <div className='md:hidden'>
          </div>

        </div>
        
      </div>
       <h1 className="text-center text-[80px] sm:text-[120px] md:text-[150px] xl:text-[180px]  text-white uppercase font-bold absolute bottom-0 w-full z-0 text-shadow">berries

       </h1>
    </section>
   </main>
  )
}

export default Hero
