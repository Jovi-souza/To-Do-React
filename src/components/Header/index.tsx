import Logo from "../../images/Logo.svg"
import { HeaderContainer, Img } from "./styles"

export function Header() {
  return(
    <HeaderContainer>
      <Img src={Logo} alt="Logo" />
    </HeaderContainer>
  )
}
