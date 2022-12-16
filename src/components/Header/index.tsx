import Logo from '../../images/Logo.svg'

export function Header() {
  return (
    <div className="flex justify-center py-16 bg-graySeven w-full">
      <img src={Logo} alt="Logo" />
    </div>
  )
}
