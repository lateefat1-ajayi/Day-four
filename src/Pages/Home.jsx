import { Link } from "react-router"


const Home = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-blue-500 text-center font-serif   text-white'>
      <div className="flex flex-col border rounded-lg border-white p-2 items-center bg-blue-400">
        <h2 className="text-3xl text-white font-serif font-bold mb-2">SkyCast🌦️</h2>
        <h2 className="font-semibold text-xl mb-1">Planning your day just got easier.</h2>
        <h3 className="w-100">With SkyCast, get accurate weather updates for any city—no more getting caught in Lagos rain unprepared</h3>
        <button className="bg-amber-500 w-fit p-2 rounded-md hover:bg-amber-400 transition-colors duration-75 m-2 hover:-translate-y-0.5">
          <Link to="/weather">Check Weather</Link>
        </button>
      </div>
    </div>
  )
}

export default Home
