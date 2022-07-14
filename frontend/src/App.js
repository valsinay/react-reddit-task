import Main from "./components/Main/Main.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import PostBox from "./components/PostBox/PostBox.tsx";
import Feed from "./components/Feed/Feed.tsx";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

function App() {


  
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <div className="h-screen  overflow-auto  bg-slate-200">
          <Navbar />
          <PostBox />
          <div className="flex items-center justify-center pb-4">
            <Feed />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
