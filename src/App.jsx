import { ShoppingCartProvider } from "./context"
import AppUI from "./components/AppUI"


function App() {

  return (
    <ShoppingCartProvider>
        <AppUI/>
    </ShoppingCartProvider>
  )
}

export default App
