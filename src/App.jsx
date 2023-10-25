import { Link, Navigate, Route, Routes } from "react-router-dom";
import NavigasiLink from "./components/navigasi-link";
import Formtodo from "./components/todo-form";
import TodolistAll from "./components/todo-list-all";
import TodolistDone from "./components/todo-list-done";
import TodolistRun from "./components/todo-list-run";
function App() {

  return (
    <div className="w-screen h-screen flex justify-center bg-slate-900 text-white">
      <div className="flex flex-col border-4 py-10 border-blue-400 rounded p-4 w-full max-w-[600px]">
        <h1 className="text-2xl font-bold mb-10 text-blue-400 text-center sm:text-3xl">Mau Lakukan Apa Hari ini???</h1>
        <Formtodo />
        <NavigasiLink/>
        <Routes>
          <Route path="/" element={<TodolistAll />}></Route>
          <Route path="/done" element={<TodolistDone />}></Route>
          <Route path="/run" element={<TodolistRun />}></Route>
        </Routes>
      </div>

    </div>
  )
}

export default App
