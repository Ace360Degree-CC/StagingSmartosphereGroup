import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Network as NetworkIcon, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import GroupHeader from "@/components/group/GroupHeader";
import GroupFooter from "@/components/group/GroupFooter";

const organisations = [
  {
    name: "Innovative Billboards",
    monogram: "IB",
    logo: "/network logos/innovativebillboards.avif",
    website: "https://www.innovativebillboards.com",
    description: "Outdoor media infrastructure and digital display technology solutions.",
  },
  {
    name: "TECHLok",
    monogram: "TL",
    logo: "/network logos/techlok-logo.webp",
    website: "https://shop.techlok.com",
    description: "Technology-driven security and access management solutions.",
  },
  {
    name: "Pointe Angels",
    monogram: "PA",
    logo: "/network logos/pointeangels.png",
    website: "https://www.pointeangels.com",
    description: "Supporting innovation, entrepreneurship, and growth-focused initiatives.",
  },
  {
    name: "LightHanded Enterprises",
    monogram: "LH",
    logo: "/network logos/Lighthanded.png",
    website: "https://www.light-handed.com",
    description: "Technology and business initiatives focused on practical innovation.",
  },
  {
    name: "mQrg",
    monogram: "mQ",
    logo: "/network logos/logo-mq.png",
    website: "https://mqrg-na.com",
    description: "Technology-driven solutions and specialised industry applications.",
  },
  {
    name: "BARC",
    monogram: "BARC",
    logo: "/network logos/BARC-Logo.png",
    website: "https://www.barc.gov.in/randd/eic.html",
    description: "Research and engineering-oriented initiatives within scientific and technical domains.",
  },
  {
    name: "Wherabouts",
    monogram: "Wa",
    logo: "/network logos/wherabouts.svg",
    website: "https://wherabouts.com",
    description: "Location intelligence and technology-enabled tracking solutions.",
  },
];

const Network = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GroupHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 72% 35%) 0%, transparent 60%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-elevated/50 backdrop-blur-sm mb-6">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-medium tracking-wider uppercase text-body">Network</span>
            </div>
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-heading leading-[1.05] tracking-tight">
              A Network Built Through{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg, hsl(32 93% 55%), hsl(350 72% 55%))" }}
              >
                Innovation
              </span>
            </h1>
            <p className="mt-5 text-lg lg:text-xl font-light text-body tracking-wide">
              Organisations Connected Through Innovation &amp; Technology
            </p>
            <div className="mt-8 space-y-4 text-base lg:text-lg text-body leading-relaxed">
              <p>Innovation rarely happens in isolation.</p>
              <p>
                Over time, Smartosphere Group has engaged with organisations across engineering, infrastructure,
                technology, research, and innovation-driven initiatives.
              </p>
              <p>
                The network below represents organisations that have been associated with Smartosphere Group through
                various engagements and collaborations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Network Grid */}
      <section className="py-20 lg:py-28 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {organisations.map((o, i) => (
              <motion.a
                key={o.name}
                href={o.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative rounded-2xl p-8 border border-border bg-surface-elevated/60 backdrop-blur-sm hover:border-accent/50 transition-all overflow-hidden block"
              >
                <div
                  className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                  style={{ background: "radial-gradient(circle, hsl(350 72% 40%) 0%, transparent 70%)" }}
                />
                <div className="relative">
                  <div
                    className="flex items-center justify-center h-24 mb-6 rounded-lg border border-border/60 bg-background/40 transition-all p-4"
                    style={{ boxShadow: "inset 0 0 30px hsl(0 0% 0% / 0.3)" }}
                  >
                    {o.logo ? (
                      <img src={o.logo} alt={o.name} className={`max-h-full max-w-full object-contain ${o.invert ? 'invert' : ''}`} />
                    ) : (
                      <span
                        className="font-heading font-bold text-2xl text-body group-hover:text-accent transition-colors tracking-wide"
                        style={{
                          textShadow: "0 0 24px hsl(32 93% 48% / 0)",
                        }}
                      >
                        {o.monogram}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-heading leading-tight">{o.name}</h3>
                  <p className="mt-3 text-sm text-body leading-relaxed">{o.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-body group-hover:text-accent transition-colors">
                    Visit Website
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Value of Strong Networks */}
      <section className="py-24 lg:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Why Networks Matter</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              The Value of Strong Networks
            </h2>
            <div className="mt-8 space-y-5 text-lg text-body leading-relaxed">
              <p>
                Meaningful innovation is often strengthened through collaboration, technical exchange, research
                participation, strategic relationships, and shared expertise.
              </p>
              <p>
                The organisations represented here reflect the breadth of environments in which Smartosphere Group
                operates and contributes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 lg:py-40 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 72% 35%) 0%, transparent 60%)" }}
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <NetworkIcon className="w-10 h-10 text-accent mx-auto mb-6" />
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              Let&apos;s Build What&apos;s Next
            </h2>
            <p className="mt-6 text-lg text-body leading-relaxed">
              Whether you&apos;re exploring innovation opportunities, technical challenges, or strategic initiatives,
              we&apos;d be glad to start a conversation.
            </p>
            <Link
              to="/contact"
              className="mt-10 group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-primary-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-[0_0_30px_hsl(350_72%_50%/0.45)]"
              style={{ background: "linear-gradient(135deg, hsl(32 93% 48%), hsl(350 72% 50%))" }}
            >
              Contact Smartosphere Group
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <GroupFooter />
    </div>
  );
};

export default Network;
