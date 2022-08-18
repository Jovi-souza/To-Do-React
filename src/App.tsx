import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { GlobalCss } from "./styles/GlobalStyles";

export default function App() {
  return (
    <div>
      <Header />
      <Main />
      {GlobalCss()}
    </div>
  )
}
