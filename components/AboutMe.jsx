import React from 'react'
import Fade from 'react-reveal/Fade'

function AboutMe() {
  return (
    <section id="bio" className="py-8 md:py-14">
      <h2>
        <span className="font-light">About</span> Me.
      </h2>

      <Fade cascade>
        <p className="max-w-3xl my-4">
        I&apos;m 22 years old and I live in <strong>France</strong>, <i>in Rennes</i>. I develop a lot of stuff on the web since I was 13.
        <br />I am mainly a <strong>Front-End</strong> developer.
        </p>
        <p className="max-w-3xl my-4">
        At the moment, I work a lot with <strong>React</strong> and <strong>TailwindCSS</strong>.
        </p>
        <p className="max-w-3xl my-4">
        I like to throw myself into projects often in order to always <strong>improve myself</strong> and <strong>stay on trend</strong>.
        </p>
        <p className="max-w-3xl my-4">
        Other than computers, I also enjoy <strong>drawing</strong> and I&apos;m a big fan of <strong>urban music</strong>!
        </p>
      </Fade>
    </section>
  )
}

export default AboutMe