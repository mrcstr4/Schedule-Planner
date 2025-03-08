import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const HomePage = () => {

   const [test, setTest] = useState("");
  const handleSubmit = () => {
    setTest("tessssttttt")
    
  }

  const navigate = useNavigate()

  const handleLogout = () => {
    setTest("");
    localStorage.clear();
    navigate("/login")
  }


  return (
    
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
       Dashboard
      <h1 id="test"></h1>
       <form onSubmit={handleSubmit}>
 <label> {test}</label>
       <input
                type="text"
                id="test"
                placeholder="test"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                
                
              />

<button 
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              test
            </button>
       </form>



       <form onSubmit={handleLogout}>

      <button 
              type="submit"
              className="mt-10 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Logout
            </button>
       </form>

    </div>

    

  );
};



export default HomePage;