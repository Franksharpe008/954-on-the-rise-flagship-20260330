export type NavItem = {
  href: string;
  label: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type AudioTrack = {
  id: string;
  label: string;
  src: string;
  description: string;
};

export type Song = {
  id: string;
  title: string;
  genre: string;
  runtime: string;
  mood: string;
  description: string;
  audioSrc: string;
  downloadSrc: string;
  lyricsSrc: string;
  accent: string;
};

export type Visual = {
  id: string;
  title: string;
  summary: string;
  src: string;
  poster?: string;
  type: "video" | "image";
};

export const siteName = "954 On The Rise";

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/tracks", label: "Tracks" },
  { href: "/arcade", label: "Arcade" },
  { href: "/visuals", label: "Visuals" },
  { href: "/experience", label: "Experience" },
  { href: "/downloads", label: "Downloads" },
  { href: "/contact", label: "Contact" }
];

export const heroMetrics: Metric[] = [
  { label: "Track vault", value: "5 premium one-minute drops" },
  { label: "Voice lane", value: "Fresh spoken intro at entry" },
  { label: "World build", value: "Animated splash, video, and downloads" }
];

export const introTracks: AudioTrack[] = [
  {
    id: "intro-voice",
    label: "Intro voice",
    src: "/media/voice/intro-voice.mp3",
    description: "The fresh spoken welcome that frames the mood before the first record lands."
  },
  {
    id: "site-mix",
    label: "Night cruise mix",
    src: "/media/tracks/chrome-coast.mp3",
    description: "A glossy synth-led backdrop for reading the site with the lights all the way up."
  }
];

export const songs: Song[] = [
  {
    id: "rise-signal",
    title: "Rise Signal",
    genre: "Hip-Hop",
    runtime: "1:00",
    mood: "Confident, polished, late-night flex energy",
    description:
      "A hard-driving rap opener built for bold entrances, clean drums, and a hook that lands in the first breath.",
    audioSrc: "/media/tracks/rise-signal.mp3",
    downloadSrc: "/media/tracks/rise-signal.mp3",
    lyricsSrc: "/media/tracks/rise-signal-lyrics.txt",
    accent: "from-cyan-400 via-sky-500 to-blue-600"
  },
  {
    id: "after-hours-line",
    title: "After Hours Line",
    genre: "90s R&B",
    runtime: "1:00",
    mood: "Smooth, romantic, plush, radio-ready",
    description:
      "A velvet R&B glide with warm chords, a silky pocket, and a chorus made for repeat plays after midnight.",
    audioSrc: "/media/tracks/after-hours-line.mp3",
    downloadSrc: "/media/tracks/after-hours-line.mp3",
    lyricsSrc: "/media/tracks/after-hours-line-lyrics.txt",
    accent: "from-fuchsia-500 via-pink-500 to-rose-500"
  },
  {
    id: "pressure-skyline",
    title: "Pressure Skyline",
    genre: "Rock",
    runtime: "1:00",
    mood: "Arena-ready, urgent, bright-edged",
    description:
      "A live-wire rock cut with lift-off guitars, a fast chorus, and enough punch to widen the whole page.",
    audioSrc: "/media/tracks/pressure-skyline.mp3",
    downloadSrc: "/media/tracks/pressure-skyline.mp3",
    lyricsSrc: "/media/tracks/pressure-skyline-lyrics.txt",
    accent: "from-orange-400 via-red-500 to-amber-500"
  },
  {
    id: "chrome-coast",
    title: "Chrome Coast",
    genre: "80s Synth",
    runtime: "1:00",
    mood: "Chrome, color, midnight drive nostalgia",
    description:
      "An 80s-inspired synth anthem with bright pads, glossy drums, and a chorus built for a glowing coastline.",
    audioSrc: "/media/tracks/chrome-coast.mp3",
    downloadSrc: "/media/tracks/chrome-coast.mp3",
    lyricsSrc: "/media/tracks/chrome-coast-lyrics.txt",
    accent: "from-violet-500 via-indigo-500 to-cyan-400"
  },
  {
    id: "golden-motion",
    title: "Golden Motion",
    genre: "Soul Pop",
    runtime: "1:00",
    mood: "Premium, uplifting, crossover-ready",
    description:
      "A soulful pop closer with bounce, shine, and a feel-good lift that rounds the pack into something replayable.",
    audioSrc: "/media/tracks/golden-motion.mp3",
    downloadSrc: "/media/tracks/golden-motion.mp3",
    lyricsSrc: "/media/tracks/golden-motion-lyrics.txt",
    accent: "from-lime-300 via-emerald-400 to-teal-500"
  }
];

export const featuredVisuals: Visual[] = [
  {
    id: "hero-loop",
    title: "Neon arrival",
    summary: "A fresh campaign loop that gives the home screen a bigger-than-a-demo entrance.",
    src: "/media/hero/hero-loop.mp4",
    poster: "/media/hero/hero-poster.png",
    type: "video"
  },
  {
    id: "signal-pulse",
    title: "Chrome pulse",
    summary: "A portal-driven motion pass that keeps the release world charged between song panels.",
    src: "/media/derived/signal-pulse.mp4",
    poster: "/media/fusion/signal-portrait.png",
    type: "video"
  },
  {
    id: "portal-drift",
    title: "Portal drift",
    summary: "A luminous chrome tunnel sequence tuned for the visuals and downloads routes.",
    src: "/media/derived/portal-drift.mp4",
    poster: "/media/fusion/frequency-portal.png",
    type: "video"
  },
  {
    id: "boardroom-nocturne",
    title: "Skyline ignition",
    summary: "A rooftop performance loop that widens the project into a full campaign world.",
    src: "/media/derived/boardroom-nocturne.mp4",
    poster: "/media/fusion/boardroom-night.png",
    type: "video"
  },
  {
    id: "night-stage",
    title: "Night stage",
    summary: "A polished stage still for route headers, hero fallbacks, and quick review grabs.",
    src: "/media/fusion/night-stage.png",
    type: "image"
  },
  {
    id: "skyline-stage",
    title: "Skyline stage",
    summary: "A rooftop hero still that makes the campaign feel live, premium, and city-sized.",
    src: "/media/fresh/skyline-stage.png",
    type: "image"
  }
];

export const bundleFiles = [
  {
    label: "Full five-track vault",
    href: "/media/tracks/954-on-the-rise-five-pack.zip",
    note: "All five records plus lyrics files in one clean grab."
  },
  {
    label: "Visual and motion kit",
    href: "/media/downloads/954-on-the-rise-visual-kit.zip",
    note: "Fresh campaign stills, motion loops, and the voice lane for review or handoff."
  }
];

export const footerLinks = [
  { label: "Download the pack", href: "/downloads" },
  { label: "Play the splash gate", href: "/arcade" },
  { label: "Send your note", href: "/contact" }
];
