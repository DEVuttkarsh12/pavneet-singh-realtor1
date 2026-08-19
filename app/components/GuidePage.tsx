import Link from "next/link";
import { Footer } from "./Footer";
import { Header } from "./Header";

export type GuideStep = {
  title: string;
  body: string;
  bullets?: string[];
};

type GuidePageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  steps: GuideStep[];
  ctaTitle: string;
  ctaText: string;
  children?: React.ReactNode;
};

export function GuidePage({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  steps,
  ctaTitle,
  ctaText,
  children,
}: GuidePageProps) {
  return (
    <main className="page-shell">
      <Header />
      <section className="page-hero">
        <div className="page-hero-image">
          <img src={image} alt={imageAlt} />
        </div>
        <div className="page-hero-content shell">
          <p className="eyebrow light">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lead">{lead}</p>
        </div>
      </section>

      <section className="content-section">
        <div className="shell guide-layout">
          <nav className="guide-nav" aria-label="Guide steps">
            {steps.map((step, index) => (
              <a key={step.title} href={`#step-${index + 1}`}>
                {String(index + 1).padStart(2, "0")} · {step.title}
              </a>
            ))}
          </nav>
          <div className="guide-steps">
            {steps.map((step, index) => (
              <article className="guide-step" id={`step-${index + 1}`} key={step.title}>
                <span className="step-label">Step {String(index + 1).padStart(2, "0")}</span>
                <h2>{step.title}</h2>
                <p>{step.body}</p>
                {step.bullets ? (
                  <ul>
                    {step.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
          {children}
        </div>
      </section>

      <section className="page-cta">
        <div className="shell">
          <p className="eyebrow">Personal guidance from start to finish</p>
          <h2>{ctaTitle}</h2>
          <p>{ctaText}</p>
          <Link className="button button-ink" href="/contact">
            Start with a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
