function Formtodo(){
    return(
        <div className="mb-10">
            <form className="flex gap-10">
                <input className="bg-transparent border-b-4 border-blue-400 outline-none text-white grow" 
                placeholder="Masukan Kegiatan"  
                type="text"/>
                <button className="bg-blue-400 rounded p-2 font-bold text-white">Tambah +</button>
            </form>
        </div>
    )
}
export default Formtodo