import Destacado from "./components/Destacado";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import PromoAsus from "./components/PromoAsus";

function App() {
  return (
    <div>
      <NavBar />  
      <Destacado />
      <ItemListContainer greeting={"Redefine the way to create"} />
      <PromoAsus />   
      <Footer /> 
    </div>
  )

  
}

export default App;
                                  