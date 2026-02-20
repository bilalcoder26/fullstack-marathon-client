import { Routes, Route } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Html50Days from "../features/Html50Days"
import ExpandingCard from "../pages/ExpandingCard"


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Html50Days />} />
        <Route path="/project/:id/expand-card" element={<ExpandingCard />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
