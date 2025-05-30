import React from 'react'
import LongFeatureCard from '../LongFeatureCard/LongFeatureCard'

export default function Features2() {
  return (
    <div className=' bg-black text-white'>
        <div className="pt-30 text-center h-full">
            <div className="flex flex-col items-center">
                            <h1 className='font-hahmlet text-3xl w-150'>Long heading is what you see here in this feature section</h1>

            </div>
            <div className="grid grid-cols-3 p-20">
                <LongFeatureCard/>
                <LongFeatureCard/>
                <LongFeatureCard/>

            </div>
        </div>
        </div>
  )
}
