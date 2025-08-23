
import Image from "next/image"
import Link from "next/link"
export default function notFound(){
return(
<div className="flex flex-col justify-center items-center p-50">
    <Image src="/assets/broken.svg" alt="broken" color="red" width={100} height={100} />
    <h1 className="text-6xl text-center text-gray-600 font-bold p-5">  <span className="text-gray-400">Error 404</span> : Page Not Found.</h1>
    <p className="text-2xl text-center text-gray-500  p-5">The page you are looking for could not be found.</p>
    <p><Link className="text-[#41DE7C] text-shadow-emerald-300" href="/">Home</Link> </p>
</div>
)

}