import { Routes, Route } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Html50Days from "../features/FrontendPractice"
import ExpandingCard from "../pages/html50days/expandCard/ExpandingCard"
import CountDownTimer from "../pages/frontendeval/countdownTimer/CountDownTimer"
import Pokemon from "../pages/MachineRound/Pokemon"
import TodoApp from "../pages/MernApps/todoApp/TodoApp"


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Html50Days />} />
        <Route path="/project/:id/expand-card" element={<ExpandingCard />} />
        <Route path="/exercise/:id/countdown-timer" element={<CountDownTimer />} />
        <Route path="/machine-round/:id/pokemon" element={<Pokemon />} />
        <Route path="/mern-app-project/:id/todo-apps" element={<TodoApp />} />
      </Route>

    </Routes>
  )
}

export default AppRoutes
