import React from 'react'
import AboutImg from "../../assets/about-image.jpg"
const AboutSection = () => {
  return (
    <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10'>
        <div className='text-start sm:w-1/2'>
            <h2 className='text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed'> Vegan foodie who loves to experiment with recipes</h2>
            <p className='text-sl mt-4 text-[#5c5c5c]'> lorem ipsum sit amet consectetur.
                Preasent mattis nibh vestibulm euismod morbi ullamcorpor ruturm.Oreci earass in aphese ultricies.Sit clita no sanctus sanctus eirmod justo diam amet, duo sit ipsum justo et sadipscing sadipscing sit invidunt, est dolor.
                <br/> <br/>
                Erat dolor at sit stet justo sanctus, takimata est eos rebum amet dolore gubergren, ut voluptua clita amet diam et.Et dolor ipsum kasd lorem takimata. Gubergren sed sed sit.
            </p>
            <div className='lg:mt-0 lg:flex-shrink-0'>
                <div className='mt-12 inline-flex'>
                    <button className='py-4 px-8 bg-btnColor text-white hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg'>View Recipe</button>
                </div>
            </div>
        </div>
        <div>
            <img src={AboutImg} alt="Featured Image"/>
        </div>
    </div>
  )
}

export default AboutSection