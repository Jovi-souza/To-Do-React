import { Header } from './components/Header'
import { Main } from './components/Main'
import { CheckContextProvider } from './context/checkedContext'
import '../src/styles/index.css'
export default function App() {
  return (
    <CheckContextProvider>
      <div className="flex flex-col justify-center items-center">
        <Header />
        <Main />
      </div>
    </CheckContextProvider>
  )
}
