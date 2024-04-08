// import DarkModeToggle from "./DarkModeToggle";
import Image from "next/image";
import Link from "next/link";

const Footer = ({homepage, productspage, blogspage})=>{
    return(
        <>
          <div className="flex flex-col sm:rounded-3xl ">
          <div className="backdrop-blur-3xl text-sm sm:border sm:border-2 border-neutral-200 sm:bg-black/5 sm:rounded-3xl text-neutral-500 p-2 fixed sm:bottom-4 bottom-0 left-1/2 transform -translate-x-1/2 w-96">

          <div className="flex sm:justify-between justify-around items-center">





          <Link href={'/'}>
          <div className={`p-3 ${homepage ? 'bg-gradient-to-b from-neutral-900 to-neutral-600' : 'bg-neutral-300'} rounded-2xl`}  target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"/></svg>           
          </div>
          </Link>

          <Link href={'/products'}>
          <div className={`p-3 ${productspage ? 'bg-gradient-to-b from-neutral-900 to-neutral-600' : 'bg-neutral-300'} rounded-2xl`}  target="_blank">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="white" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.499 12.03v11.971l-10.5-5.603v-11.835l10.5 5.467zm11.501 6.368l-10.501 5.602v-11.968l10.501-5.404v11.77zm-16.889-15.186l10.609 5.524-4.719 2.428-10.473-5.453 4.583-2.499zm16.362 2.563l-4.664 2.4-10.641-5.54 4.831-2.635 10.474 5.775z"/></svg>
          </div>
          </Link>



          <Link href={'/blogs'}>
          <div className={`p-3 ${blogspage ? 'bg-gradient-to-b from-neutral-900 to-neutral-600' : 'bg-neutral-300'} rounded-2xl`}  target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z"/></svg>
          </div>
          </Link>

          <Link href={'https://twitter.com/salnetx'}>
          <div className="p-3 bg-neutral-300 rounded-2xl" target="_blank">
            <Image
                src={'/x.png'}
                width={25}
                height={25}
            />
          </div>
          </Link>


          

          </div>

          
          </div>
      </div>


        </>
    )
}
export default Footer;