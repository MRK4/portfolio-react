import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'

function HeroBanner() {
  return (
    <section className="py-8 md:py-14">
      <h1 className='leading-relaxed'>
        Hey, I am <span className='inline-block px-3 rounded-lg text-violet-400 bg-neutral-800'>Clément Poudrée.</span>
      </h1>
      <p className='max-w-3xl my-4'>I am passionate about creating attractive and intuitive user interfaces that provide an exceptional user experience. Always looking for new challenges, I work hard to produce quality products that perfectly meet the needs of users and customers.</p>
      <p className='max-w-3xl my-4'>I am currently listening to professional opportunities!</p>
      {/* <a className='inline-flex items-center underline transition w-fit gap-x-2 underline-offset-8 hover:text-violet-400' href="./Clement_Poudree_Resume.pdf" download>Download resume <AiOutlineDownload /></a> */}
    </section>
  )
}

export default HeroBanner