import { Routes, Route } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Html50Days from "../features/Html50Days"
// import ExpandCard from "../features/ExpandCard"


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Html50Days />} />
        {/* <Route path="/expand-card/:id" element={<ExpandCard />} /> */}
      </Route>
    </Routes>
  )
}

export default AppRoutes
