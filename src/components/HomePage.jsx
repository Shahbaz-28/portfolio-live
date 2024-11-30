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
            alt=""
            className="rounded-t-lg w-full object-cover h-48 sm:h-64 md:h-80"
          />
          <Avatar className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 border-4 border-background">
            <AvatarImage src="/images/profile.jpeg" alt="Shahbaz Khan" />
            <AvatarFallback>SK</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent className="space-y-6 mt-12 sm:mt-16 text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
            I make <span className="text-green-600">Front-End</span> products
            that people <span className="text-pink-400">love.</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl max-w-2xl mx-auto">
            &quot;I&apos;m Shahbaz Khan, a freelance front-end developer
            passionate about crafting beautiful and efficient user interfaces.
            Skilled in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS,
            I bring 6 months of startup experience, a solid understanding of
            backend development, and expertise in delivering outstanding
            projects as a freelancer. Let&apos;s create something amazing
            together!&quot;
          </p>
          <div className="flex justify-center space-x-4">
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
