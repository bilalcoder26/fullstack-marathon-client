import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import expandingImg from "../assets/expandingImg.jpeg";
import progressBar from "../assets/progressBar.png";
import Layout from "../layout/Layout";

const MernApp = () => {
  const navigate = useNavigate();

  
  const cards2 = [
    {
      id: "1",
      title: "Todo App In MERN STACK",
      imageUrl: expandingImg,
      path: "countdown-timer",
    },
    {
      id: "2",
      title: "Progress Bar",
      imageUrl: progressBar,
      path: "progress-bar",
    },

    { id: "3", title: "Image Gallery" },
    { id: "4", title: "Animated Buttons" },
  ];

  return (
    <Layout>
     
      {/* Mern apps Section */}
      <div className="bg-gray-900 py-12 rounded-2xl mt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold m-6 text-center text-yellow-400">
          MERN  App small feature
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-300 mb-12">
          Using React,Node, Mongodb & TypeScript 
        </p>

        <div
          className="
      grid
      gap-6 sm:gap-8
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      px-6
    "
        >
          {cards2.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description="Click to expand"
              imageUrl={card.imageUrl}
              category="HTML"
              onClick={() => navigate(`/mern-app-project/${card.id}/todo-apps`)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MernApp;
