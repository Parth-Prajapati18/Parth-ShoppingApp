import Link from "next/link"
import Image from "next/image"
import Trending from "./components/Trending/page"
import axios from "axios"

async function Home() {
  return (
    <div>
    <div className="flex flex-col-reverse md:flex-row items-center justify-center h-auto overflow-hidden" style={{ backgroundColor: '#e2e9e9' }}>
      <div className="md:w-3/5 p-4 md:pl-48 text-center md:text-left">
        <h2 className="text-sm md:text-2xl font-bold text-slate-500 capitalize my-1 md:my-3">
          The #1 Name In Diamonds & Jwellery - Since 2002 
        </h2>
        <h2 className="text-lg md:text-2xl uppercase font-light my-2 md:my-4">
          Create Your own
        </h2>
        <h1 className="text-3xl md:text-5xl font-medium uppercase my-3 md:my-5 font-mono">Engagement Rings</h1>
        <h3 className="text-sm md:text-xl font-normal my-2 md:my-3 font-sans">Tired Of Virtual Inventories?<Link className="font-bold mx-1 underline uppercase" href='/'>Visit Store</Link></h3>

        <ul className=" md:list-disc text-sm md:text-lg md:list-inside my-4 font-sans">
          <li>Largest IN STOCK Selection of Earth & Lab Loose Diamonds</li>
          <li>1000s of IN STOCK Ring Styles</li>
        </ul>

        <p className="text-sm md:text-base text-justify font-sans md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque euismod elit, vel efficitur nisi tempor in. Nulla eget
          nisi tortor. Sed in convallis nisi. Integer ut sem sed purus vehicula
          dapibus. Nullam euismod est a nisi elementum laoreet. Fusce euismod
          erat vitae tellus dictum, in euismod elit dapibus. Sed id blandit
          velit. Integer hendrerit libero quis turpis dapibus malesuada. Sed
          varius suscipit ligula, nec euismod felis. Curabitur fermentum nunc
          eu aliquam fermentum. Vivamus tincidunt feugiat purus vitae
          consectetur.
        </p>
      </div>
      <div className="md:w-2/5 p-4">
        <video width="100%"  autoPlay loop muted controls={false}>
          <source src="/assets/baner-video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>



    {/* New Arrivals Products - Start */}
    <h2 className='pt-16 pb-4 text-3xl md:text-4xl font-medium uppercase text-center font-mono overflow-hidden'>
        Trending Now
    </h2>
    <Trending />
    {/* New Arrivals Products - End */}

    <div className="grid grid-cols-1 md:grid-cols-2 md:pt-10 p-4 md:p-8 gap-4 md:gap-6" style={{ backgroundColor: '#e2e9e9' }}>

      <div className="flex flex-col justify-center px-4 md:px-36 py-4 md:py-0">
        <h2 className="text-2xl md:text-4xl font-medium uppercase my-3 md:my-5 font-mono">GUARANTEED AUTHENTICITY</h2>
        <p className="text-base md:text-lg">
          We guarantee 100% authenticity of our collections as every item undergoes a rigorous authentication process by our experts who ensure that only 100% authentic items are put on sale
        </p>
        <button className="bg-black p-2 text-white mt-6 md:my-8">
          Our Promises
        </button>
      </div>

      <div className="flex justify-center items-center">
        <Image src="/assets/jewellery.jpeg" alt="authenticity Image" width={700} height={450} className="shadow-lg" />
      </div>

    </div>


    </div>
  )
}

export default Home