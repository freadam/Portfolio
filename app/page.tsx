import { ArrowRight, Download, ExternalLink, Github, Mail, Phone, Gamepad2, Dice5 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { ResumeButton } from "@/components/resume-button"
import { MainNav } from "@/components/main-nav"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const professionalGames = [
  {
    title: "Mancala Adventures",
    description: "Traditional African Mancala reimagined for mobile with multiple game modes, AI opponents, and online multiplayer.",
    type: "youtube",
    videoId: "-3J6HCTuZH0",
    link: "https://play.google.com/store/apps/details?id=com.qenegames.gebeta&hl=en",
    linkText: "View on Google Play",
    tags: ["Unity", "Mobile", "Multiplayer"],
  },
  {
    title: "Silet",
    description: "A traditional Ethiopian strategy game brought to mobile with polished visuals and challenging AI.",
    type: "video",
    src: "/Videos/Silet.mp4",
    tags: ["Unity", "Mobile", "AI"],
  },
  {
    title: "Tras",
    description: "Classic Ethiopian word game digitized with an intuitive touch interface and multiplayer support.",
    type: "video",
    src: "/Videos/Tras.mp4",
    tags: ["Unity", "Mobile", "Multiplayer"],
  },
  {
    title: "Dama Negest",
    description: "An Ethiopian checkers variant featuring ranked play, tournaments, and vibrant board themes.",
    type: "video",
    src: "/Videos/DamaNegest.mp4",
    link: "https://kinet.store/games",
    linkText: "View Games",
    tags: ["Unity", "Mobile", "Competitive"],
  },
  {
    title: "Weze",
    description: "A strategic Ethiopian board game with deep tactical gameplay and elegant minimalist design.",
    type: "video",
    src: "/Videos/Weze.mp4",
    tags: ["Unity", "Mobile", "Strategy"],
  },
]

const hobbyGames = [
  {
    title: "Busara",
    description: "A puzzle-strategy prototype exploring emergent gameplay through tile-based mechanics.",
    type: "video",
    src: "/Videos/Busara.mp4",
    tags: ["Prototype", "Puzzle"],
  },
  {
    title: "Konker",
    description: "A Rummy-style card game built in Unity with AI opponents and animated card interactions.",
    type: "video",
    src: "/Videos/Konker.mp4",
    tags: ["Unity", "Cards", "AI"],
  },
  {
    title: "Watershed Simulator",
    description: "An interactive environmental simulation visualizing water flow across procedural terrain.",
    type: "video",
    src: "/Videos/WatershedSimulator.mp4",
    tags: ["Simulation", "Procedural"],
  },
  {
    title: "Solar System",
    description: "A 3D orbital mechanics sandbox for exploring planetary motion and gravitational physics.",
    type: "video",
    src: "/Videos/SolarSystem.mp4",
    tags: ["3D", "Physics", "Educational"],
  },
  {
    title: "2D Space Shooter",
    description: "A fast-paced arcade shooter with wave-based enemies, power-ups, and retro aesthetics.",
    type: "video",
    src: "/Videos/2DSpaceShooter.mp4",
    tags: ["Arcade", "2D", "Action"],
  },
]

const boardGames = [
  {
    title: "Board Game 1",
    description: "A strategic tabletop experience currently in development. Details coming soon.",
  },
  {
    title: "Board Game 2",
    description: "An innovative board game concept exploring new mechanics. Details coming soon.",
  },
  {
    title: "Board Game 3",
    description: "A cooperative tabletop game designed for social play. Details coming soon.",
  },
  {
    title: "Board Game 4",
    description: "A competitive strategy board game with deep replayability. Details coming soon.",
  },
]

function GameCard({ game }: { game: typeof professionalGames[0] }) {
  return (
    <Card className="overflow-hidden group">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        {game.type === "youtube" ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${game.videoId}`}
            title={`${game.title} video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            src={`${basePath}${game.src}`}
            muted
            loop
            playsInline
            preload="metadata"
            controls
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gamepad2 className="h-5 w-5 text-primary/70" />
          {game.title}
        </CardTitle>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {game.tags?.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{game.description}</p>
        {game.link && (
          <div className="mt-4">
            <Link
              href={game.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-primary hover:underline"
            >
              <ExternalLink className="mr-1 h-4 w-4" />
              {game.linkText || "View Project"}
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block text-sm font-bold sm:text-base md:text-lg">Freadam Abebe</span>
            </Link>
          </div>
          <MainNav />
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 xl:py-36">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Freadam Abebe
                  </h1>
                  <p className="text-xl text-muted-foreground">Game Developer | Game Designer</p>
                </div>
                <div className="max-w-[600px] text-muted-foreground md:text-xl">
                  <p>
                    Passionate about creating engaging and highly interactive games.
                    Experienced in mobile game development, board game design, and interactive simulations.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button className="w-full">
                      Get in touch
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#projects">
                    <Button variant="outline" className="w-full">
                      View my work
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={`${basePath}/Freadam_Abebe.jpg?height=600&width=600`}
                    width={600}
                    height={600}
                    alt="Freadam Abebe"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Freadam Abebe is the Product Manager at Efuyegla, a fast-growing solution provision startup based in
                Ethiopia. He is driven by a passion for creating engaging and highly interactive solutions tailored to
                the needs of enterprises in Ethiopia. Freadam and his team are working towards transforming the local
                enterprise ecosystem with innovative technology in the coming years. Previously, he developed games at
                Qene Games, where he built interactive experiences that continue to influence his approach to product
                development at Efuyegla.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-muted-foreground" />
                  <span>freadamabebe@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-muted-foreground" />
                  <span>+(251)932209141</span>
                </div>
              </div>
              <p className="text-muted-foreground">Based in Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-3xl font-bold leading-[1.1] text-center sm:text-3xl md:text-5xl">
              Professional Experience
            </h2>
            <div className="mx-auto grid max-w-5xl gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Solutions Product Manager</CardTitle>
                      <CardDescription>Efuyegela</CardDescription>
                    </div>
                    <Badge>May 2024 - Present</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Working on the development of digital and analog products</p>
                  <div className="mt-4">
                    <Link
                      href="https://efuyegela.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Visit Company Website
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Game Developer</CardTitle>
                      <CardDescription>Qene Games</CardDescription>
                    </div>
                    <Badge>Oct 2020 - May 2024</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Designing mobile game systems, coding game systems, testing core game systems, and releasing game
                    builds on Google Play.
                  </p>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Mancala Adventures Board Games</li>
                    <li>Dama Negest, Silet, Tras</li>
                  </ul>
                  <div className="mt-4">
                    <Link
                      href="https://qenetech.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Visit Company Website
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Desktop and Web Application Developer</CardTitle>
                      <CardDescription>Xerox Trading PLC</CardDescription>
                    </div>
                    <Badge>July 2019 - Nov 2020</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Implemented and designed a subscription-based educational website and various web and desktop-based
                    applications for internal use of the company.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Intern Desktop Application Developer</CardTitle>
                      <CardDescription>Sefed Systems</CardDescription>
                    </div>
                    <Badge>March - July 2018</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Worked on Sefed EMR, an Electronic Medical Record software system created to enable medical
                    institutions to make the shift from paper to digital records.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="https://sefedsystems.com/sefed-electronic-medical-record/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Learn More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Professional Games Section */}
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-4 text-3xl font-bold leading-[1.1] text-center sm:text-3xl md:text-5xl">
              Professional Games
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Games developed professionally at Qene Games — published on Google Play and Kinet Store.
            </p>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {professionalGames.map((game) => (
                <GameCard key={game.title} game={game} />
              ))}
            </div>
          </div>
        </section>

        {/* Hobby & Jam Projects Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <h2 className="mb-4 text-3xl font-bold leading-[1.1] text-center sm:text-3xl md:text-5xl">
              Hobby &amp; Jam Projects
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Personal experiments, game jams, and passion projects.
            </p>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {hobbyGames.map((game) => (
                <GameCard key={game.title} game={game} />
              ))}
            </div>
          </div>
        </section>

        {/* Board Game Design Section */}
        <section id="boardgames" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-4 text-3xl font-bold leading-[1.1] text-center sm:text-3xl md:text-5xl">
              Board Game Design
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Analog game designs exploring new mechanics and social play.
            </p>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              {boardGames.map((game) => (
                <Card key={game.title} className="overflow-hidden">
                  <div className="aspect-video w-full bg-muted flex items-center justify-center">
                    <Dice5 className="h-16 w-16 text-muted-foreground/30" />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Dice5 className="h-5 w-5 text-primary/70" />
                      {game.title}
                    </CardTitle>
                    <CardDescription>Tabletop Game</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{game.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-3xl font-bold leading-[1.1] text-center sm:text-3xl md:text-5xl">
              Skills &amp; Expertise
            </h2>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Game Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Unity</Badge>
                    <Badge variant="secondary">Godot</Badge>
                    <Badge variant="secondary">Game Design</Badge>
                    <Badge variant="secondary">Board Game Design</Badge>
                    <Badge variant="secondary">Mobile Games</Badge>
                    <Badge variant="secondary">AI Systems</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Project Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Requirement Engineering</Badge>
                    <Badge variant="secondary">Team Leadership</Badge>
                    <Badge variant="secondary">Project Documentation</Badge>
                    <Badge variant="secondary">Client Communication</Badge>
                    <Badge variant="secondary">Agile Methodologies</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technical Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Jira</Badge>
                    <Badge variant="secondary">Trello</Badge>
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">Slack</Badge>
                    <Badge variant="secondary">Asana</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Programming Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">C#</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="secondary">GDScript</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-3xl font-bold leading-[1.1] text-center sm:text-3xl md:text-5xl">Education</h2>
            <div className="mx-auto grid max-w-5xl gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Bachelor of Science in Electrical and Computer Engineering</CardTitle>
                      <CardDescription>Addis Ababa University</CardDescription>
                    </div>
                    <Badge>2014 - 2020</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-4">
                    <Link
                      href="https://www.aau.edu.et/aait/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Visit University Website
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>High School Diploma</CardTitle>
                      <CardDescription>Lazarist Catholic School</CardDescription>
                    </div>
                    <Badge>2012 - 2014</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-4">
                    <Link
                      href="https://lazaristcatholicschool.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Visit School Website
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Get in Touch</h2>
                <p className="mt-4 text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <Mail className="mr-4 h-5 w-5 text-muted-foreground" />
                    <span>freadamabebe@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-4 h-5 w-5 text-muted-foreground" />
                    <span>+(251)932209141</span>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Freadam Abebe. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/freadam" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="mailto:freadamabebe@gmail.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
