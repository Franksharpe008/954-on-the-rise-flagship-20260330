import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";

export default function ContactPage() {
  return (
    <section className="page-shell">
      <Reveal className="page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Reach 954 On The Rise while the records still have their attention.</h1>
        <p>
          This route is the live handoff. It turns motion and music into a real name, email, interest, and next move
          that can actually be worked.
        </p>
      </Reveal>
      <LeadForm />
    </section>
  );
}
