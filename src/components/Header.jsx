import { FiPlus } from "react-icons/fi"
import { BsHeart } from "react-icons/bs"

function Header() {
  return (
    <div className="header">
      <FiPlus size={26} cursor="pointer" />
      <span className="header-logo">Instagram</span>
      <BsHeart size={24} cursor="pointer" />
    </div>
  )
}

export default Header