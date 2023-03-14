import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import PromoAsus from "./components/PromoAsus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";

function App() {
  return (
    <BrowserRouter> 
    <div>
      <NavBar />  
      <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={< Error404 />} />
        </Routes>
      <PromoAsus />   
      <Footer /> 
    </div>
    </BrowserRouter>
  )

  
}

export default App;
                                  