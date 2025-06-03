import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TechStack from "./TechStack";

const HomePage = () => {
  return (
    <div className="container mx-auto px-1 py-8 bg-background text-foreground">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="relative p-0">
          <img
            src="/images/banner.webp"
            alt="Banner"
            className="rounded-t-lg w-full object-cover h-48 sm:h-64 md:h-80"
          />
          <Avatar className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 border-4 border-background shadow-md">
            <AvatarImage src="/images/profile.jpeg" alt="Shahbaz Khan" />
            <AvatarFallback>SK</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent className="space-y-6 mt-12 sm:mt-16 text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight tracking-tight">
            I craft <span className="text-green-600">Front-End</span> products
            that people <span className="text-pink-500">love</span>.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
  I’m Shahbaz Khan — a developer by profession and a storyteller at heart. Beyond designing intuitive digital experiences, I find joy in reading thought-provoking books and writing poetry that captures everyday moments. I believe great work comes from empathy, curiosity, and a love for continuous growth — values I bring to every project I’m part of. Whether it’s crafting interfaces or verses, I aim to create things that leave a lasting impression.
</p>


          <div className="text-left max-w-2xl mx-auto space-y-4 pt-4">
            <div>
              <h2 className="text-xl font-semibold text-foreground">💼 Experience</h2>

              <div className="pt-2">
                <p className="font-medium text-primary">Cooasis</p>
                <p className="text-sm text-muted-foreground">Frontend Developer Intern · Apr 2023 – Sep 2023</p>
                <p className="text-base mt-1">
                  Developed responsive and user-friendly interfaces using Next.js and Tailwind CSS.
                  Focused on delivering high-quality designs and improving project efficiency
                  through collaboration with the design and development teams.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-medium text-primary">Nipralo Technologies</p>
                <p className="text-sm text-muted-foreground">Full Stack Developer · March 2025 – May 2025</p>
                <p className="text-base mt-1">
                  Developed and maintained web applications using React.js, Node.js, Strapi, and MongoDB.
                  Collaborated with cross-functional teams to build scalable APIs and responsive user interfaces,
                  optimizing application performance and integrating third-party services.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4 pt-6">
            <Button variant="outline" size="icon" className="w-12 h-12 sm:w-14 sm:h-14" asChild>
              <a
                href="https://github.com/Shahbaz-28?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="w-12 h-12 sm:w-14 sm:h-14" asChild>
              <a
                href="https://x.com/shahbaz_khan28"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
              >
                <Twitter className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="w-12 h-12 sm:w-14 sm:h-14" asChild>
              <a
                href="https://www.linkedin.com/in/shahbaz-khan28/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="max-w-4xl mx-auto mt-8">
        <CardContent className="px-4 sm:px-6 md:px-8">
          <TechStack />
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
