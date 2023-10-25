import delet from '../assets/delet.svg'
import edit from '../assets/edit.svg'
function Card() {
    return (
        <div className='flex border-2 border-blue-400 bg-slate-500'>
            <button className='border-2 m-3 border-blue-400'><div className='aspect-square w-5'>✓</div></button>
            <div className="bg-blue-00 w-100 h-12 p-4 flex items-center grow line-through">
                Tugas Sekolah
            </div>
            <button className=' bg-green-600 flex w-12 h-12 p-2'><img className='flex w-100 h-auto object-cover' src={edit} alt="" /></button>
            <button className=' bg-red-600 flex w-12 h-12 p-2'><img className='flex w-100 h-auto object-cover' src={delet} alt="" /></button>
        </div>
    )
}

export default Card