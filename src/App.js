import { ContactUS } from "./components/Page/ContactUS/ContactUS";
import { ApiRick } from "./components/Page/ApiRick/ApiRick";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./components/Page/NotFound/NotFound";
import { Home } from "./components/Page/Home/Home";
import { FooterHome } from "./components/Layouts/FooterHome/FooterHome";
import { Principal } from "./components/Page/Principal/Principal";
import { Contador } from "./components/Page/Contador/Contador";
import { ApiTenor } from "./components/Page/ApiTenor/ApiTenor";


function App() {
  return (
    <>
      <div className='container'>
        <Home />
        <Routes>
          <Route path="/" element={<Principal />}></Route>
          <Route path="/ApiRick" element={<ApiRick/>}></Route>
          <Route path="/apiTenor" element={<ApiTenor/>}></Route>
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
