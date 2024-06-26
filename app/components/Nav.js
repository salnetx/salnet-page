import Link from "next/link";
const Nav = ()=>{
   return(
    <>
    <div className="flex backdrop-blur-3xl bg-white/5  sm:px-60 px-5 border-b border-neutral-300 sm:pt-4 pt-4 pb-4 sticky top-0 z-30">
    <div className="flex-1 mt-2">
    <p className="text-2xl font-bold">🐙 SALNET</p>
    </div>

    <div className="flex-none">
    <Link href="https://codecanyon.net/user/salnetx" className="text-xs font-bold px-4 py-3.5 rounded-full hover:opacity-100 hover:shadow-sm bg-[#D911B1] text-white flex gap-1">
    <span className="flex items-center space-x-2 rounded-md group hover:rounded-full transition hover:text-neutral-50/75">
    <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M14.601 21.5c0 1.38-1.116 2.5-2.499 2.5-1.378 0-2.499-1.12-2.499-2.5s1.121-2.5 2.499-2.5c1.383 0 2.499 1.119 2.499 2.5zm-2.42-21.5c-4.029 0-7.06 2.693-7.06 8h3.955c0-2.304.906-4.189 3.024-4.189 1.247 0 2.57.828 2.684 2.411.123 1.666-.767 2.511-1.892 3.582-2.924 2.78-2.816 4.049-2.816 7.196h3.943c0-1.452-.157-2.508 1.838-4.659 1.331-1.436 2.986-3.222 3.021-5.943.047-3.963-2.751-6.398-6.697-6.398z"/>
    </svg>
        
    <span className="text-xs">CONTACT</span>
    </span>
    </Link>
    
    </div>
  </div>
  </>
   )
}

export default Nav;