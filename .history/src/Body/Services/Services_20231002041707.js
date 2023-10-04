import React from 'react'
import ServicesItem from './ServicesItem.js'
import './Services.css'
function Services() {
  return (
    <div className='px-3 py-5 services'>
        <h5 className='py-2'>خدمات</h5>
        <h2 className='text-2xl font-bold'>خدمات مارا بررسی کنید</h2>

        <div className="py-8 services-box grid mx-auto text-center sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServicesItem/>
            <ServicesItem/>
            <ServicesItem/>
            <ServicesItem/>
            <ServicesItem/>
            <ServicesItem/>
        </div>
    </div>
  )
}

export default Services