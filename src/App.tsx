import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { CheckContextProvider } from "./context/checkedContext";
import { GlobalCss } from "./styles/GlobalStyles";

export default function App() {
  return (
    <CheckContextProvider>
      <Header />
      <Main />
      {GlobalCss()}
    </CheckContextProvider>
  )
}
