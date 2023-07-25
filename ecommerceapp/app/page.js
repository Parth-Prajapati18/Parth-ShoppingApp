import Link from "next/link"
import Trending from "./components/Trending/page"

function Home() {
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
        <h1 className="text-3xl md:text-5xl font-medium uppercase my-3 md:my-5 font-Victor+Mono">Engagement Rings</h1>
        <h3 className="text-sm md:text-xl font-normal my-2 md:my-3">Tired Of Virtual Inventories?<Link className="font-bold mx-1 underline uppercase" href='/'>Visit Store</Link></h3>

        <ul className=" md:list-disc text-sm md:text-lg md:list-inside my-4">
          <li>Largest IN STOCK Selection of Earth & Lab Loose Diamonds</li>
          <li>1000's of IN STOCK Ring Styles</li>
        </ul>

        <p className="text-sm">
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



    {/* New Arrivals Products */}
    <h2 className='py-4 text-3xl md:text-4xl text-center' style={{ backgroundColor: '#e2e9e9' }}>
        Trending Now
    </h2>
    <Trending />
    </div>
  )
}

export default Home