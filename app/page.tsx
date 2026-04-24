import { ArrowRight, Download, ExternalLink, Github, Mail, Phone, Gamepad2, Dice5, Box, Swords, SlidersHorizontal, Globe, Rocket, Users, Clock, FlaskConical, Compass } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { SiteHeader } from "@/components/site-header"

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
    description: "Experimental AI dialogue system exploring emergent narrative branches.",
    icon: Box,
    link: "https://github.com",
    linkText: ">> View Repo",
  },
  {
    title: "Konker",
    description: "48-hour jam project. Local multiplayer arena brawler with rollback netcode.",
    icon: Swords,
    link: "https://github.com",
    linkText: ">> Play WebGL",
  },
  {
    title: "Watershed Sim",
    description: "Cellular automata-based terrain erosion and water flow simulation tool.",
    icon: SlidersHorizontal,
    link: "https://github.com",
    linkText: ">> View Source",
  },
  {
    title: "Solar System",
    description: "N-body gravity simulation rendered entirely using compute shaders.",
    icon: Globe,
    link: "https://github.com",
    linkText: ">> View Demo",
  },
  {
    title: "2D Space Shooter",
    description: "My first game. A classic bullet hell built from scratch in C++ and SDL2.",
    icon: Rocket,
    link: "https://github.com",
    linkText: ">> Download",
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

function GameCard({ game, className = "" }: { game: typeof professionalGames[0], className?: string }) {
  return (
    <Card className={`overflow-hidden group border-none bg-card/50 hover:bg-card transition-colors ${className}`}>
      <div className="aspect-video w-full overflow-hidden bg-muted relative">
        {game.type === "youtube" ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${game.videoId}?rel=0&controls=0`}
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
            autoPlay
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Badges overlay */}
        {game.tags && game.tags.length > 0 && (
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 z-10 pointer-events-none">
            {game.tags.map((tag, idx) => (
              <span 
                key={tag} 
                className={`text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 border bg-background/80 backdrop-blur-sm ${
                  idx === 0 ? 'text-primary border-primary' : 'text-[#b2ff05] border-[#b2ff05]'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <CardHeader className="pt-4 pb-2">
        <CardTitle className="text-xl tracking-tight">
          {game.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">{game.description}</p>
      </CardContent>
    </Card>
  )
}

function HobbyCard({ game }: { game: typeof hobbyGames[0] }) {
  const Icon = game.icon
  return (
    <Card className="flex flex-col justify-between border-none bg-card/50 hover:bg-card transition-colors p-6 group h-full">
      <div>
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{game.title}</h3>
          <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{game.description}</p>
      </div>
      {game.link && (
        <div className="mt-auto pt-4 flex">
          <Link
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-bold tracking-wider text-primary hover:text-primary/80 transition-colors"
          >
            {game.linkText}
          </Link>
        </div>
      )}
    </Card>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container pb-10">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-[800px] flex flex-col space-y-6">
            <div>
              <span className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-widest text-primary border border-primary/30 bg-primary/10 px-3 py-1 mb-6">
                <span className="mr-2 inline-block h-2 w-2 bg-primary"></span>
                System Init
              </span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Engineering <span className="text-primary">Digital</span> Realities
            </h1>
            
            <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
              High-performance game developer and technical designer. Specializing in systems architecture, core gameplay loops, and pushing pixels to their absolute limit.
            </p>
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
        <section id="projects" className="py-16 md:py-24 border-t border-border/50">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Professional Work
            </h2>
            <div className="h-[1px] flex-1 bg-border/50 mt-2"></div>
          </div>
          
          <div className="flex flex-col gap-8">
            {/* Top row - 2 cols */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {professionalGames.slice(0, 2).map((game) => (
                <GameCard key={game.title} game={game} />
              ))}
            </div>
            {/* Bottom row - 3 cols */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {professionalGames.slice(2, 5).map((game) => (
                <GameCard key={game.title} game={game} />
              ))}
            </div>
          </div>
        </section>

        {/* Hobby & Jam Projects Section */}
        <section className="py-16 md:py-24 border-t border-border/50">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Hobby &amp; Jam Projects
            </h2>
            <div className="h-[1px] flex-1 bg-border/50 mt-2"></div>
          </div>
          
          <div className="flex flex-col gap-6">
            {/* Top row - 3 cols */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {hobbyGames.slice(0, 3).map((game) => (
                <HobbyCard key={game.title} game={game} />
              ))}
            </div>
            {/* Bottom row - 2 cols */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {hobbyGames.slice(3, 5).map((game) => (
                <HobbyCard key={game.title} game={game} />
              ))}
            </div>
          </div>
        </section>

        {/* Board Game Prototypes Section */}
        <section id="boardgames" className="py-16 md:py-24 border-t border-border/50">
          <div className="max-w-[800px] mb-12 flex flex-col gap-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Board Game Prototypes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A collection of tabletop mechanics and visual designs currently in the alpha testing phase. Exploring resource management, asymmetric roles, and spatial reasoning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
            
            {/* Project Alpha (col-span-8) */}
            <Card className="col-span-1 border border-border/40 bg-card/30 overflow-hidden flex flex-col relative group md:col-span-8">
              {/* Fake backdrop overlay */}
              <div className="h-64 md:h-72 w-full bg-gradient-to-b from-transparent to-card/90 z-0 relative flex items-center justify-center border-b border-border/20 overflow-hidden">
                <div className="absolute inset-0 bg-muted/20 opacity-50 transition-opacity group-hover:opacity-60"></div>
                {/* Visual placeholder for the face asset */}
                <span className="text-muted-foreground/20 font-mono tracking-widest absolute">ALPHA_ASSET_MISSING</span>
              </div>
              <div className="absolute top-48 left-6 flex gap-3 z-10">
                <span className="text-xs uppercase font-mono font-bold tracking-wider px-2 py-1 border border-primary text-primary bg-background/50 backdrop-blur-sm">ENGINE_CORE</span>
                <span className="text-xs uppercase font-mono font-bold tracking-wider px-2 py-1 border border-[#b2ff05] text-[#b2ff05] bg-background/50 backdrop-blur-sm">PROTOTYPE</span>
              </div>
              
              <div className="p-8 flex flex-col flex-1 z-10 pt-16">
                <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">Project Alpha</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  A deep-space resource management game featuring asymmetrical factions and a modular, shifting board state. Currently balancing the late-game economy loops.
                </p>
                <div className="mt-8 border-t border-border/50 pt-4 flex items-center gap-6 text-sm font-mono text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" /> 2-4 Players
                  </div>
                  <div className="h-1 w-1 rounded-full bg-border"></div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" /> 90-120 Min
                  </div>
                </div>
              </div>
            </Card>

            {/* Project Beta (col-span-4) */}
            <Card className="col-span-1 border border-border/40 bg-card/30 overflow-hidden flex flex-col relative group md:col-span-4">
               {/* Visual placeholder */}
              <div className="h-56 w-full bg-gradient-to-b from-transparent to-card/90 relative flex items-center justify-center border-b border-border/20 overflow-hidden">
                <div className="absolute inset-0 bg-muted/10 opacity-50 transition-opacity group-hover:opacity-70"></div>
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest px-2 py-1 bg-muted text-muted-foreground">PRE-ALPHA</span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">Project Beta</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-8">
                  Abstract strategy focusing on territorial control via spatial puzzles. Minimalist component design prioritizing legibility and tactile feedback.
                </p>
                <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10 tracking-widest font-mono text-xs uppercase h-10 rounded-sm">
                  View Docs
                </Button>
              </div>
            </Card>

            {/* Project Gamma (col-span-6) */}
            <Card className="col-span-1 border border-border/40 bg-card/30 overflow-hidden flex flex-col sm:flex-row relative group md:col-span-6 min-h-[220px]">
               {/* Visual placeholder Left */}
               <div className="w-full sm:w-2/5 md:w-1/3 bg-muted/10 relative flex items-center justify-center border-r border-border/10"></div>
               <div className="p-6 sm:p-8 flex flex-col flex-1 w-full sm:w-3/5 md:w-2/3">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">Project Gamma</h3>
                    <FlaskConical className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                    Cooperative deck-building against an evolving AI deck. Testing a novel 'fatigue' mechanic to simulate narrative tension.
                  </p>
                  <div>
                    <div className="flex justify-between items-center text-xs font-mono mb-2">
                       <span className="text-[#b2ff05]">Testing Phase - 65% Complete</span>
                    </div>
                    <div className="h-1 bg-muted rounded-full w-full overflow-hidden">
                       <div className="h-full bg-[#b2ff05] w-[65%]"></div>
                    </div>
                  </div>
               </div>
            </Card>

            {/* Project Delta (col-span-6) */}
            <Card className="col-span-1 border border-border/40 bg-card/30 overflow-hidden flex flex-col sm:flex-row relative group md:col-span-6 min-h-[220px]">
               {/* Visual placeholder Left */}
               <div className="w-full sm:w-2/5 md:w-1/3 bg-muted/10 relative flex items-center justify-center border-r border-border/10"></div>
               <div className="p-6 sm:p-8 flex flex-col flex-1 w-full sm:w-3/5 md:w-2/3">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">Project Delta</h3>
                    <Compass className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                    A high-stakes bluffing game using hidden movement mechanics. Exploring physical screen components to hide board information.
                  </p>
                  <div className="flex gap-2">
                     <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-1 border border-primary/40 text-primary bg-primary/5">MECHANICS</span>
                     <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-1 border border-border text-muted-foreground bg-muted/50">DRAFT</span>
                  </div>
               </div>
            </Card>

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
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-xs font-mono text-muted-foreground md:text-left">
            © 2024 ENGINE_CORE. ALL SYSTEMS OPERATIONAL.
          </p>
          <div className="flex items-center gap-6 text-xs font-mono tracking-widest text-muted-foreground">
            <Link href="https://github.com/freadam" className="hover:text-primary transition-colors uppercase">
              Github
            </Link>
            <Link href="#" className="hover:text-primary transition-colors uppercase">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-primary transition-colors uppercase">
              ArtStation
            </Link>
            <Link href="mailto:freadamabebe@gmail.com" className="hover:text-primary transition-colors uppercase">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
