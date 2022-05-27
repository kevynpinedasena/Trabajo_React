import { AboutUS } from "./components/Page/AboutUS/AboutUS";
import { ContactUS } from "./components/Page/ContactUS/ContactUS";
import { HomeDos } from "./components/Page/HomeDos/HomeDos";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./components/Page/NotFound/NotFound";
import { Home } from "./components/Page/Home/Home";
import { FooterHome } from "./components/Layouts/FooterHome/FooterHome";
import { Principal } from "./components/Page/Principal/Principal";
import { Contador } from "./components/Page/Contador/Contador";


function App() {
  return (
    <>
      <div className='container'>
        <Home />
        <Routes>
          <Route path="/" element={<Principal />}></Route>
          <Route path="/home" element={<HomeDos/>}></Route>
          <Route path="/aboutUS" element={<AboutUS />}></Route>
          <Route path="/contactUS" element={<ContactUS />}></Route>
          <Route path="/contador" element={<Contador/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes> 
        <FooterHome/>
      </div>
    </>
  );
}

export default App;
