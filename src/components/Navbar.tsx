import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-black text-white p-4 flex gap-6">
      <Link to="/">Home</Link>
    </div>
  )
}

export default Navbar
