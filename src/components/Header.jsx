import { FiPlusSquare } from "react-icons/fi"
import { BsHeart, BsChatBubbles } from "react-icons/bs"

function Header() {
  return (
    <div className="header">
      <span className="header-logo">Instagram</span>
      <div className="header-icons">
        <FiPlusSquare size={24} cursor="pointer" />
        <BsHeart size={24} cursor="pointer" />
        <BsChatBubbles size={22} cursor="pointer" />
      </div>
    </div>
  )
}

export default Header