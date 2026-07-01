import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RequestDemoModal from "@/components/RequestDemoModal";
import {
  ArrowRight,
  Sparkles,
  Target,
  Route as RouteIcon,
  Building2,
  Network,
  ShieldCheck,
  LifeBuoy,
  GitBranch,
} from "lucide-react";
import GroupHeader from "@/components/group/GroupHeader";
import GroupFooter from "@/components/group/GroupFooter";

const advisory = [
  {
    icon: Target,
    title: "Aligning Tech to Business (Technology Strategy)",
    desc: "Too many technical roadmaps drift away from actual business realities. We provide long-form technology direction explicitly aligned to your business intent, market reality, and operational maturity, ensuring every technical asset drives strategic growth.",
  },
  {
    icon: RouteIcon,
    title: "De-risking the Product Timeline (Product & Roadmap Planning)",
    desc: "Unrealistic roadmaps lead to missed deadlines and burned-out engineering teams. We construct product roadmaps deeply grounded in technical feasibility—carefully sequencing capability, dependencies, and hidden risks against actual commercial value.",
  },
  {
    icon: Building2,
    title: "Building for Scale and Longevity (Architecture Consulting)",
    desc: "Fixing a broken architecture after deployment is incredibly slow and expensive. We deliver robust reference architectures and comprehensive design reviews that pre-empt scale, integration, and lifecycle issues before they compromise your product.",
  },
  {
    icon: Network,
    title: "Hardening Infrastructure Early (Scalability & Infrastructure Planning)",
    desc: "Scaling a system under high user load exposes every hidden structural flaw. We step in with proactive capacity, reliability, and cloud infrastructure thinking to ensure your systems remain stable before scale ever becomes an operational liability.",
  },
  {
    icon: ShieldCheck,
    title: "Validating High-Stakes Technical Choices (Technical Decision Support)",
    desc: "A wrong choice in software stack, vendor, or buy-vs-build strategy can lock an organization into technical debt for years. We provide senior, objective input on critical technical decisions —protecting your direction and mitigating long-term risk.",
  },
];

const SmartosphereTechnicalities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GroupHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-0 left-1/3 w-[900px] h-[900px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 72% 28%) 0%, transparent 60%)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(32 93% 35%) 0%, transparent 60%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-elevated/50 backdrop-blur-sm mb-6 hover:border-accent/50 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-medium tracking-wider uppercase text-body">
                Smartosphere Ecosystem · Technologies
              </span>
            </Link>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-heading leading-[1.05] tracking-tight">
              Smartosphere
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg, hsl(32 93% 55%), hsl(350 72% 55%))" }}
              >
                Technologies INC
              </span>
            </h1>
            <p className="mt-5 text-lg lg:text-xl font-light text-body tracking-wide max-w-xl">
              Simplifying Complexity. Empowering Growth.
            </p>
            <p className="mt-8 text-base lg:text-lg text-body leading-relaxed max-w-xl">
              Guiding innovators through complex technical landscapes with precise, enterprise-grade technology strategy.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-primary-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-[0_0_30px_hsl(350_72%_50%/0.45)]"
                style={{ background: "linear-gradient(135deg, hsl(32 93% 48%), hsl(350 72% 50%))" }}
              >
                Start a Strategic Discussion
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Hero Visual — system architecture layers */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative aspect-square max-w-[520px] mx-auto w-full"
          >
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, hsl(350 72% 35%) 0%, transparent 65%)" }}
            />
            <svg viewBox="0 0 400 400" className="relative w-full h-full">
              <defs>
                <linearGradient id="tline" x1="0" x2="1">
                  <stop offset="0%" stopColor="hsl(32 93% 55%)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(350 72% 55%)" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Architecture layers — isometric stack */}
              {[
                { y: 110, label: "Strategy" },
                { y: 170, label: "Architecture" },
                { y: 230, label: "Systems" },
                { y: 290, label: "Execution" },
              ].map((layer, i) => (
                <motion.g
                  key={layer.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                >
                  <path
                    d={`M 100 ${layer.y} L 200 ${layer.y - 30} L 300 ${layer.y} L 200 ${layer.y + 30} Z`}
                    fill="hsl(220 15% 16%)"
                    stroke="url(#tline)"
                    strokeWidth="1.2"
                    opacity={0.95 - i * 0.08}
                  />
                  <text x="200" y={layer.y + 4} textAnchor="middle" fill="hsl(var(--heading))" fontSize="10" fontWeight="600" className="font-heading tracking-widest">
                    {layer.label.toUpperCase()}
                  </text>
                </motion.g>
              ))}

              {/* Vertical connectors */}
              <motion.line x1="200" y1="80" x2="200" y2="320" stroke="url(#tline)" strokeWidth="1" strokeDasharray="3 4" opacity="0.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.9 }} />

              {/* Orbiting decision nodes */}
              {[
                { cx: 60, cy: 140 },
                { cx: 340, cy: 200 },
                { cx: 70, cy: 270 },
                { cx: 330, cy: 100 },
              ].map((n, i) => (
                <motion.circle
                  key={i}
                  cx={n.cx} cy={n.cy} r="4"
                  fill="hsl(32 93% 55%)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 + i * 0.2 }}
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Our Role */}
      <section className="py-24 lg:py-28 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="lg:col-span-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Our Role</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-heading leading-tight">
              Simplifying Complexity, Not Adding to It.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 space-y-5 text-lg text-body leading-relaxed"
          >
            <p>
              Modern technology environments are rarely defined by a single decision—they accumulate through architectural trade-offs, parallel initiatives, and deferred technical debt until direction itself becomes fragmented. Smartosphere Technologies exists to eliminate that drift. We provide innovators with the definitive technical clarity, enterprise-grade architecture strategy, and deep engineering alignment needed to build a defensible foundation for the next decade of business growth.
            </p>
            <p>
              Technology decisions made today dictate market agility tomorrow. What truly prevents fragmentation and empowers long-term growth is strategy explicitly paired with objective technical reasoning, clear operational constraints, and an exact understanding of down-line execution. Smartosphere Technologies is uniquely positioned to simplify your landscape and deliver this strategic direction as a core pillar of the broader Smartosphere network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Areas of Interest */}
      <section className="py-24 lg:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Our Focus: Areas of Interest</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              Aligning Complex Architecture with Strategic Intent.
            </h2>
          </motion.div>

          <div className="mt-16 flex flex-wrap justify-center gap-6 lg:gap-8">
            {advisory.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1rem)] group relative rounded-2xl p-8 border border-border bg-surface-elevated/60 backdrop-blur-sm hover:border-accent/50 transition-all overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                  style={{ background: "radial-gradient(circle, hsl(350 72% 40%) 0%, transparent 70%)" }} />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-accent/40 bg-background/60 mb-6"
                    style={{ boxShadow: "0 0 22px hsl(32 93% 48% / 0.25)" }}>
                    <a.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-heading leading-tight">{a.title}</h3>
                  <p className="mt-4 text-sm text-body leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Smartosphere Advantage */}
      <section className="py-24 lg:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">The Smartosphere Advantage</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight mb-6">
              Strategic Direction Grounded in Execution.
            </h2>
            <p className="text-lg text-body leading-relaxed mb-16">
              Smartosphere Technologies does not deliver abstract strategy in a vacuum. Our insights are actively informed and reinforced by the broader Smartosphere ecosystem:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-2xl p-8 border border-border bg-surface-elevated/60 backdrop-blur-sm hover:border-accent/50 transition-all overflow-hidden text-left"
            >
              <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                style={{ background: "radial-gradient(circle, hsl(350 72% 40%) 0%, transparent 70%)" }}
              />
              <div className="relative">
                <div
                  className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg border border-accent/40 bg-background/60"
                  style={{ boxShadow: "0 0 22px hsl(32 93% 48% / 0.25)" }}
                >
                  <LifeBuoy className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-heading leading-tight mb-3">
                  Capital Aligned
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  We work in tight coordination with <strong className="text-white">Smartosphere Capital LLC</strong>, ensuring your technology roadmaps perfectly protect and accelerate strategic investments without forcing you to compromise technical integrity for short-term narratives.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative rounded-2xl p-8 border border-border bg-surface-elevated/60 backdrop-blur-sm hover:border-accent/50 transition-all overflow-hidden text-left"
            >
              <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                style={{ background: "radial-gradient(circle, hsl(32 93% 40%) 0%, transparent 70%)" }}
              />
              <div className="relative">
                <div
                  className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg border border-accent/40 bg-background/60"
                  style={{ boxShadow: "0 0 22px hsl(32 93% 48% / 0.25)" }}
                >
                  <GitBranch className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-heading leading-tight mb-3">
                  Execution Ready
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  Our reference architectures and technical designs transition seamlessly into full-scale production through <strong className="text-white">Smartosphere Solutions LLP</strong>, eliminating the friction, lost context, and structural drift that typically happens when handing blueprints off to outside engineering teams.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing / Next Step */}
      <section className="py-28 lg:py-40 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 72% 38%) 0%, transparent 60%)" }}
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">Next Step</p>
            <h2 className="font-heading text-4xl lg:text-6xl font-bold text-heading leading-tight">
              Strategy is Only
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg, hsl(32 93% 55%), hsl(350 72% 55%))" }}
              >
                Half the Battle
              </span>
            </h2>
            <p className="mt-8 text-lg lg:text-xl text-body leading-relaxed max-w-3xl mx-auto">
              Smartosphere Technologies sets the vector, but navigating the full lifecycle requires seamless movement from planning to execution. Explore the other pillars of our group model to see how we protect and build your vision:
            </p>

            <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8 text-left">
              <div className="p-8 rounded-2xl border border-border bg-surface-elevated/40 backdrop-blur-sm hover:border-accent/40 transition-all flex flex-col h-full">
                <h3 className="font-heading text-2xl font-bold text-heading mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0"></span>
                  Smartosphere Capital LLC
                </h3>
                <p className="text-body leading-relaxed mb-8 flex-1">
                  Transforming breakthrough ideas into resilient enterprises by pairing targeted capital participation with long-term strategic growth.
                </p>
                <div className="mt-auto">
                  <Link
                    to="/capital"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-heading text-sm font-semibold hover:border-accent/60 hover:text-accent transition-colors w-full justify-center"
                  >
                    Explore Smartosphere Capital
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-surface-elevated/40 backdrop-blur-sm hover:border-accent/40 transition-all flex flex-col h-full">
                <h3 className="font-heading text-2xl font-bold text-heading mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0"></span>
                  Smartosphere Solutions LLP
                </h3>
                <p className="text-body leading-relaxed mb-8 flex-1">
                  Delivering the robust engineering execution required to turn technical blueprints into stable, market-ready products.
                </p>
                <div className="mt-auto">
                  <Link
                    to="/solutions-llp"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-heading text-sm font-semibold hover:border-accent/60 hover:text-accent transition-colors w-full justify-center"
                  >
                    Explore Smartosphere Solutions
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <p className="text-xl font-medium text-heading mb-8">
                Ready to align your vision with our ecosystem?
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg text-primary-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-[0_0_35px_hsl(350_72%_50%/0.5)]"
                style={{ background: "linear-gradient(135deg, hsl(32 93% 48%), hsl(350 72% 50%))" }}
              >
                Discuss an Opportunity
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <GroupFooter />
    </div>
  );
};

export default SmartosphereTechnicalities;
