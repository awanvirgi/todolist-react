import { NavLink } from "react-router-dom"

function NavigasiLink() {
    return (
        <ul className="flex divide-x border-x border-blue-400 border-t w-min">
            <li className="font-bold border-blue-400 flex">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-400 p-2" : "p-2  opacity-40"}>
                    Semua
                </NavLink>
            </li>
            <li className="font-bold border-blue-400 flex">
                <NavLink to="/done" className={({ isActive }) => isActive ? "text-blue-400 p-2" : "p-2  opacity-40"}>
                    Berjalan
                </NavLink>
            </li>
            <li className="font-bold border-blue-400 flex">
                <NavLink to="/run" className={({ isActive }) => isActive ? "text-blue-400 p-2" : "p-2  opacity-40"}>
                    Selesai
                </NavLink>
            </li>
        </ul>
    )
}
export default NavigasiLink