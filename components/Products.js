
import Image from 'next/image'
export default function Products() {
  return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image className="w-full" src="/camera.jpg" width={50}  height={50}alt="Sunset in the mountains"/>
            <div className="px-6 py-1">
                <div className="grid grid-cols-2 justify justify-items-start">
                    <p className="text-red-700 text-base line-through text-sm"> $25.00 </p>
                    <p className="text-gray-100 text-base text-sm"> $15.00 </p>
                </div>
                <div className="font-bold text-xl mb-2">FujiFilm X32</div>
            </div>
            <div className="grid grid-cols-1 px-1 pt-0 pb-2 justify justify-items-end">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Amazon</button>
            </div>
        </div>
  )
}
