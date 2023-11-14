import { AppRouter } from "./AppRouter"
import { PokemonProvider } from "./context/PokemonProvider";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <PokemonProvider>
 
    <div className="main-content">
      <AppRouter />
    </div>
    <Footer />
  </PokemonProvider>
  
  )
}

export default App
