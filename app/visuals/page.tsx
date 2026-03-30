import { Reveal } from "@/components/reveal";
import { featuredVisuals } from "@/lib/site";

export default function VisualsPage() {
  return (
    <section className="page-shell">
      <Reveal className="page-intro">
        <p className="eyebrow">Visuals</p>
        <h1>Fresh motion loops, campaign stills, and animated surfaces keep the whole build alive.</h1>
        <p>
          This route stacks the home loop, the portal passes, the skyline motion, and the fresh stills that give the
          songs a bigger stage.
        </p>
      </Reveal>
      <div className="visual-grid">
        {featuredVisuals.map((visual, index) => (
          <Reveal key={visual.id} className="media-card visual-card" delay={index * 80}>
            {visual.type === "video" ? (
              <video autoPlay loop muted playsInline poster={visual.poster}>
                <source src={visual.src} type="video/mp4" />
              </video>
            ) : (
              <img src={visual.src} alt={visual.title} />
            )}
            <div className="visual-copy">
              <p className="eyebrow">{visual.title}</p>
              <p>{visual.summary}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
