import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
         <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea odio recusandae nesciunt sequi ipsum, numquam debitis facilis corrupti sint quaerat commodi earum quibusdam corporis. Ipsam distinctio quod delectus nihil.</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quos tempore! Sequi eveniet quo quod deleniti quaerat ab facere dolore perferendis minus, accusamus repudiandae est, obcaecati ea possimus repellendus fuga!</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat quibusdam, voluptates minima voluptatibus in facilis, dolorem velit placeat consequatur, blanditiis ea temporibus alias illum soluta odit autem! Aliquid, deleniti.</p>
         </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium optio error illo qui, quasi sit adipisci quibusdam maxime nobis. Commodi qui minima doloremque earum maiores a, dolores maxime reiciendis facilis.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium optio error illo qui, quasi sit adipisci quibusdam maxime nobis. Commodi qui minima doloremque earum maiores a, dolores maxime reiciendis facilis.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium optio error illo qui, quasi sit adipisci quibusdam maxime nobis. Commodi qui minima doloremque earum maiores a, dolores maxime reiciendis facilis.</p>
         </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
