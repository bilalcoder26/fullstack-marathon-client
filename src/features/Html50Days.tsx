import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import expandingImg from "../assets/expandingImg.jpeg";
import progressBar from "../assets/progressBar.png";
import Layout from "../layout/Layout";

const Html50Days = () => {
  const navigate = useNavigate();

  const cards = [
    { id: "1", title: "Expanding Card", imageUrl: expandingImg ,path: "expanding-card" },
    { id: "2", title: "Progress Bar", imageUrl: progressBar,path: "progress-bar"  },
    
    { id: "3", title: "Image Gallery" },
    { id: "4", title: "Animated Buttons" },
  ];

  return (
    <Layout>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
        50 Mini Web Projects
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-400 mb-12">
        Using Vanilla HTML, CSS, React & TypeScript
      </p>

      <div className="
        grid
        gap-6 sm:gap-8
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
      ">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description="Click to expand"
            imageUrl={card.imageUrl}
            category="HTML"
            onClick={() => navigate(`/project/${card.id}/expand-card`)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Html50Days;
