
import Image from "next/image"

{/** TODO : - ADD Mobile RESPONSIVE DESIGN TO THE NAV
            - Make navbar transparent
            - fill the hrefs
            - Drop down menus
*/}

export default function NavBar(){

  const ChevronDownIcon = ()=>(
      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-2 `} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
  )

  const SeparatorBar = ()=>(
      <div className="w-[1px] h-4 bg-gray-300"></div>
    )
  


    return(

<div className="flex items-center justify-between p-6 ">


  {/* LOGO */}
<div className="flex items-center">
  <Image
    src="/ResumeClear.svg"
    alt="ResumeClear"
    width={180}
    height={200}
    className="cursor-pointer"
  />
</div>

   {/* NAV  */}

    <ul className="flex items-center">

      {/* DROP DOWN */}
      <li ><a className="flex items-center  text-center px-4 text-gray-500" href="">Resume Templates <ChevronDownIcon/></a></li> 
      <li  ><a className="flex items-center text-center px-4  text-gray-500" href="">Cover Letter<ChevronDownIcon/></a></li>
      

      {/* INFO */}
      <li><a className="px-4  " href="">Pricing</a></li>
      <li><a className="flex px-4 text-center" href="">About us</a></li>
      <li><a className="px-4" href="">FAQ</a></li>
      
     <li> <SeparatorBar/> </li>

      {/* CTA */}
      <ul className="flex items-center px-3">
        <li> <a  className="flex px-6 text-center text-[#41DE7C]" href="" > Sign in </a></li>
       <li> <a className="flex px-4 text-center bg-[#41DE7C]  rounded-sm  text-[var(--brand)] p-2 font-extrabold" href="" > Create my Resume </a> </li> 
      </ul>
    </ul> 
    



</div>



    )
}