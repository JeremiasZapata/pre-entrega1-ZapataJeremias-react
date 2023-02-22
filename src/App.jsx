import Destacado from "./components/Destacado";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import PromoAsus from "./components/PromoAsus";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter> 
    <div>
      <NavBar />  
      <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        </Routes>
      <Destacado />
      {/* <ItemListContainer /> */}
      <PromoAsus />   
      <Footer /> 
    </div>
    </BrowserRouter>
  )

  
}

export default App;
                                  