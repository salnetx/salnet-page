import Image from "next/image";
import Footer from "./components/Footer";
import profileImage from "@/public/salnetx.png"
import getAllLinks from "./lib/getAllLinks";

export default async function Home() {
  const links = await getAllLinks()
  return (
    <main>
      
                <div className="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
                  <div className="justify-center w-full sm:text-center text-left lg:p-10 max-auto">
                    <div className="justify-center w-full mx-auto">

                    <div className="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto lg:flex-row">
                    <div className="w-[120px]">
                    <Image
                        className='rounded-full'
                        src={profileImage}
                        alt="salnet"
                        placeholder="blur"
                        quality={70}
                    />
                    </div>


                    </div>


                    <p className="mt-4 text-center text-3xl font-semibold tracking-tighter">
                      salnetx
                      </p>


   

          <div className="flex mt-1 sm:mx-96 mx-12 mt-6 justify-between justify-around">

          <a target="_blank" href="https://instagram.com/salnetx">
              <Image
                src={'/instagram.png'}
                width={25}
                height={25}
                alt="instagram"
              />
          </a>



          <a target="_blank" href="https://twitter.com/salnetx">
              <Image
                src={'/twitter.png'}
                width={23}
                height={23}
                alt="twitter"
              />
          </a>



          <a target="_blank" href="https://youtube.com/@salnetx">
              <Image
                src={'/youtube.png'}
                width={25}
                height={25}
                alt="youtube"
              />
          </a>



          <a target="_blank" href="https://www.producthunt.com/@salnetx">
              <Image
                src={'/producthunt.png'}
                width={26}
                height={26}
                alt="producthunt"
              />
          </a>


          

          </div>



          <div className="mb-32">
  {links.map((link, index) => (
    <div className="py-16 mb-6 sm:mx-60 rounded-3xl bg-neutral-100 my-8" key={index}>
      <h3 className="text-center">{link.name}</h3>
    </div>
  ))}
</div>




          



                    </div>
                  </div>
              
                </div>




<div
     className="max-w-lg px-4 mx-auto text-left md:max-w-none md:text-center "
>



 

<Footer homepage={'homepage'} />



    </div>
    
    </main>
  );
}
