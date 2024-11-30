import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProjectCard = ({ title, description, imageUrl, buttonLabel, onClick }) => (
  <Card className="group overflow-hidden transition-all hover:shadow-lg">
    <div className="aspect-[16/9] overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <CardContent className="p-6">
      <CardTitle className="text-2xl mb-3">{title}</CardTitle>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
    <CardFooter className="p-6 pt-0">
      <Button onClick={onClick} variant="outline" className="w-full">
        {buttonLabel}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </CardFooter>
  </Card>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Collaborate",
      description: "Together we unleash the design revolution around the globe",
      imageUrl: "/images/collab.jpg",
      buttonLabel: "View Project",
      link: "https://collaborate-gamma.vercel.app/",
    },
    {
      id: 2,
      title: "Meme Generator",
      description: "Create and customize your own memes effortlessly.",
      imageUrl: "/images/meme.png",
      buttonLabel: "View Project",
      link: "https://meme-generator-iota-ochre.vercel.app/",
    },
    {
      id: 3,
      title: "WiseVisa",
      description:
        "Simplifying visa applications with reliable, efficient solutions.",
      imageUrl: "/images/visa.jpg",
      buttonLabel: "View Project",
      link: "https://www.wisevisa.in/",
    },
    {
      id: 4,
      title: "My Portfolio",
      description: "Showcasing my projects and skills as a developer.",
      imageUrl: "/images/portfolio.jpg",
      buttonLabel: "View Project",
      link: "https://shahbazportfolio.vercel.app/",
    },
    {
      id: 5,
      title: "Anime Verse",
      description: "A platform to explore and interact with anime content.",
      imageUrl: "/images/anim.jpg",
      buttonLabel: "View Project",
      link: "https://anime-verse-two.vercel.app/",
    },
    {
      id: 6,
      title: "Coasis Waitlist",
      description: "Join the waitlist for our exclusive platform.",
      imageUrl: "/images/coasis.png",
      buttonLabel: "View Project",
      link: "https://waitlist.coasis.in/",
    },
  ];

  const openLink = (url) => window.open(url, "_blank");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        Some Cool Stuff I&apos;ve Built
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map(({ id, title, description, imageUrl, buttonLabel, link }) => (
          <ProjectCard
            key={id}
            title={title}
            description={description}
            imageUrl={imageUrl}
            buttonLabel={buttonLabel}
            onClick={() => openLink(link)}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
