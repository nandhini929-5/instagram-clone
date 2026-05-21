import { GoHome, GoSearch } from "react-icons/go"
import { MdOutlineAddBox } from "react-icons/md"
import { BsCameraVideo } from "react-icons/bs"
import { FaRegUserCircle } from "react-icons/fa"

function BottomNav() {
  return (
    <div className="bottom-nav">
      <GoHome size={26} cursor="pointer" />
      <GoSearch size={24} cursor="pointer" />
      <MdOutlineAddBox size={26} cursor="pointer" />
      <BsCameraVideo size={25} cursor="pointer" />
      <FaRegUserCircle size={24} cursor="pointer" />
    </div>
  )
}

export default BottomNav