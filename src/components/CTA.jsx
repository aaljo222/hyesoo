import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
      <section className='cta'>
          <p className='cta-text'>Contact<br className='sm:block hidden' />
             버튼을 누르시면 저에게 메일을 보내실수 있어요!
          </p>
          <Link to="/contact" className='btn'>Contact</Link>
      </section>
  )
}

export default CTA