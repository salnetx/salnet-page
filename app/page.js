import Image from "next/image";
import Footer from "./components/Footer";
import getAllLinks from "@/app/lib/getAllLinks";


export default async function Home() {
  const links = await getAllLinks()
  return (
    <main>
 <div imgUrl={'https://www.salnet.xyz/sal.png'} title={'salnetx'} description = {'I am a fullstack developer, 9 - 9 remote worker, community builder, and a solo traveller. I love to build apps that solve real life problems.'} xuser={'@salnetx'} weburl={'salnet.xyz'} summary={'Hi there. This is Sal.'}>
      
      <section>
                <div className="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
                  <div className="justify-center w-full sm:text-center text-left lg:p-10 max-auto">
                    <div className="justify-center w-full mx-auto">

                    <div className="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto lg:flex-row">
                    <img
                        className='w-28 h-28 sm:w-28 sm:h-28 rounded-full'
                        src='/salnetx.png'
                    />
                    </div>


                    <p className="mt-4 px-32 text-3xl font-semibold tracking-tighter">
                      salnetx
                      </p>


          <div className="flex mt-1 sm:mx-96 mx-12 mt-6 justify-between justify-around">

          <a target="_blank" href="https://instagram.com/salnetx">
              <Image
                src={'/instagram.png'}
                width={25}
                height={25}
              />
          </a>



          <a target="_blank" href="https://twitter.com/salnetx">
              <Image
                src={'/twitter.png'}
                width={23}
                height={23}
              />
          </a>



          <a target="_blank" href="https://youtube.com/@salnetx">
              <Image
                src={'/youtube.png'}
                width={25}
                height={25}
              />
          </a>



          <a target="_blank" href="https://www.producthunt.com/@salnetx">
              <Image
                src={'/producthunt.png'}
                width={26}
                height={26}
              />
          </a>


          

          </div>



                    </div>
                  </div>
              
                </div>
           


 {/* <div className="text-center m-8 sm:m-0 space-x-4 pb-12 sm:pb-16">
  <button onClick={()=>{location.assign('https://twitter.com/salnetx')}} className="border border-[#7e7e7e] bg-neutral-800 translate-y-1 text-neutral-100 text-sm font-bold py-3.5 px-6 rounded-2xl inline-flex items-center">
   <svg width={20} fill="white" height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
    &nbsp; &nbsp;<span className="text-sm">Follow on X</span>
  </button>
</div> */}

</section>



<div
     className="max-w-lg px-4 mx-auto text-left md:max-w-none md:text-center "
>
<ul>
{links.map(link=><li key={link.key}>{link.name}</li>)}

</ul>
   
   
 

<Footer homepage={'homepage'} />



    </div>
    
    </div>
    </main>
  );
}
