export interface ArtProject {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  symbol: string;
}

export const artProjects: ArtProject[] = [
  {
    id: "darren-computer-1",
    title: "darren.computer",
    description: "Darren Angle is an artist and AI research engineer.",
    image: "/art/darren.computer.jpeg",
    symbol: "✴︎",
  },
  {
    id: "darren-computer-2",
    title: "Interface Study",
    description: "An exploration of minimal UI patterns and brutalist aesthetics.",
    image: "/art/darren.computer.2.jpeg",
    symbol: "※",
  },
  {
    id: "hello-world",
    title: "Synthetic Data",
    description: "Visualizing the latent space of synthetic generation models.",
    image: "/work/hello-world-research/cover.jpeg",
    symbol: "✩",
    link: "/work/hello-world-research"
  },
  {
    id: "browser-agents",
    title: "Browser Agents",
    description: "Models that perceive the web and act upon it in real-time.",
    image: "/work/optimizing-react-render-cycles/cover.jpeg",
    symbol: "✦",
    link: "/work/future-of-browser-agents"
  }
];
