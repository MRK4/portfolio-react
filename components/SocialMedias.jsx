import React from 'react'
import { AiOutlineTwitter, AiFillLinkedin, AiOutlineGithub, AiOutlineCodepen } from 'react-icons/ai'

function SocialMedias() {
  return (
    <section className='flex items-center justify-center py-14'>
        <ol className='flex items-center justify-around w-full max-w-sm text-3xl'>
            <li className='hover:text-violet-400'>
                <a target="_blank" href="https://www.linkedin.com/in/clementpdr/"><AiFillLinkedin /></a>
            </li>
            <li className='hover:text-violet-400'>
                <a target="_blank" href="https://github.com/MRK4"><AiOutlineGithub /></a>
            </li>
            <li className='hover:text-violet-400'>
                <a target="_blank" href="https://twitter.com/clementpdr"><AiOutlineTwitter /></a>
            </li>
            <li className='hover:text-violet-400'>
                <a target="_blank" href="https://codepen.io/clement_pdr"><AiOutlineCodepen /></a>
            </li>
        </ol>
    </section>
  )
}

export default SocialMedias