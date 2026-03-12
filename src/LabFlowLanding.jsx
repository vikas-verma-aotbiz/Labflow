import React from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  PlayCircle,
  Activity,
  FileText,
  X
} from "lucide-react";
import * as Content from "./labFlowConstants.js";

const NavLink = ({ label, href }) => (
  <a href={href} className="hover:text-blue-600 transition-colors">
    {label}
  </a>
);

const FeatureBlock = ({ icon: Icon, title, description }) => (
  <div className="group p-8 bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-7 h-7 text-indigo-600" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
  </div>
);

const ReportExplainItem = ({ title, description }) => (
  <div className="p-7 bg-white rounded-3xl border border-slate-200/70 shadow-sm">
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
      </div>
      <div>
        <h3 className="text-lg font-black tracking-tight text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const LabFlowLanding = () => {
  const reportContent = Content.REPORT_EXPLAIN_CONTENT;
  const sampleReport = reportContent.sampleReport;
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe7WG0i1DTKIbnbtjc2ZgC2lp30wzkpWYlcd1RA2xlxJvPDQQ/viewform?usp=publish-editor";
  const embeddedGoogleFormUrl = `${googleFormUrl}&embedded=true`;
  const [isLeadFormOpen, setIsLeadFormOpen] = React.useState(false);

  const openLeadForm = () => {
    setIsLeadFormOpen(true);
  };

  const closeLeadForm = () => setIsLeadFormOpen(false);

  React.useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isLeadFormOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isLeadFormOpen]);

  return (
    <div className="min-h-screen bg-[#FAFAFB] font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <Activity className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">LabFlow</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-600">
            {Content.NAV_LINKS.map((link, i) => (
              <NavLink key={i} {...link} />
            ))}
            <button
              onClick={openLeadForm}
              className="bg-slate-900 text-white px-7 py-3 rounded-full hover:bg-indigo-600 transition-all duration-300 shadow-lg shadow-slate-200"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
                {Content.HERO_CONTENT.badge}
              </div>
              <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-10 text-slate-900">
                {Content.HERO_CONTENT.headline.main} <br />
                <span className="text-indigo-600 italic font-serif font-normal">{Content.HERO_CONTENT.headline.highlight}</span>
              </h1>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl font-medium">
                {Content.HERO_CONTENT.subheadline}
              </p>
              <div className="flex flex-wrap gap-5">
                <button
                  onClick={openLeadForm}
                  className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-indigo-200"
                >
                  {Content.HERO_CONTENT.primaryCTA}
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-3">
                  <PlayCircle className="w-6 h-6 text-indigo-600" />
                  {Content.HERO_CONTENT.secondaryCTA}
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 rounded-full blur-[100px] -z-10"></div>
              <div className="relative bg-white rounded-[3rem] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-200/50">
                <img 
                  src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  alt="Diagnostic laboratory workflow" 
                  className="rounded-[2.5rem] w-full object-cover aspect-[3/4]"
                  referrerPolicy="no-referrer"
                />
                {/* Floating Stat Card */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden xl:block"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Accuracy Rate</p>
                      <p className="text-3xl font-black text-slate-900">99.9%</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-10 text-slate-900 leading-tight">
                {Content.WHY_US_CONTENT.title}
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed font-medium">
                {Content.WHY_US_CONTENT.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="h-40 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-black text-indigo-600">500+</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Labs Trusted</p>
                </div>
              </div>
              <div className="h-40 bg-indigo-600 rounded-3xl flex items-center justify-center text-white">
                <div className="text-center">
                  <p className="text-4xl font-black">24/7</p>
                  <p className="text-xs font-bold text-indigo-200 uppercase tracking-widest mt-2">Expert Support</p>
                </div>
              </div>
              <div className="col-span-2 h-40 bg-slate-900 rounded-3xl flex items-center justify-between px-10 text-white">
                <div>
                  <p className="text-3xl font-black italic">LabFlow Pro</p>
                  <p className="text-sm text-slate-400">Enterprise Ready Solution</p>
                </div>
                <ArrowRight className="w-8 h-8 text-indigo-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Explanation Section */}
      <section id="reports" className="pt-32 pb-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[11px] font-bold uppercase tracking-[0.18em] mb-6">
              <FileText className="w-4 h-4" />
              {reportContent.badge}
            </div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-5">
              {reportContent.title}
            </h2>
            <p className="text-slate-500 text-xl font-medium max-w-3xl mx-auto">
              {reportContent.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.35)] overflow-hidden">
                <div className="px-7 py-5 bg-slate-900 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300 font-bold">Diagnostic Report</p>
                    <p className="text-lg font-black mt-1">{sampleReport.testName}</p>
                  </div>
                  <span className="text-[11px] bg-indigo-500/20 border border-indigo-400/40 text-indigo-200 px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">
                    Final
                  </span>
                </div>

                <div className="p-7">
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-6 text-sm">
                    <p><span className="text-slate-400 font-semibold">Patient:</span> <span className="font-bold text-slate-900">{sampleReport.patientName}</span></p>
                    <p><span className="text-slate-400 font-semibold">Patient ID:</span> <span className="font-bold text-slate-900">{sampleReport.patientId}</span></p>
                    <p><span className="text-slate-400 font-semibold">Age / Sex:</span> <span className="font-bold text-slate-900">{sampleReport.ageSex}</span></p>
                    <p><span className="text-slate-400 font-semibold">Collected:</span> <span className="font-bold text-slate-900">{sampleReport.collectedOn}</span></p>
                    <p><span className="text-slate-400 font-semibold">Reported:</span> <span className="font-bold text-slate-900">{sampleReport.reportedOn}</span></p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-100 text-slate-600">
                        <tr>
                          <th className="text-left px-4 py-3 font-bold">Parameter</th>
                          <th className="text-left px-4 py-3 font-bold">Result</th>
                          <th className="text-left px-4 py-3 font-bold">Reference</th>
                          <th className="text-left px-4 py-3 font-bold">Flag</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sampleReport.results.map((row, index) => (
                          <tr key={index} className="border-t border-slate-100">
                            <td className="px-4 py-3 font-semibold text-slate-800">{row.parameter}</td>
                            <td className={`px-4 py-3 font-black ${row.flag === "Normal" ? "text-slate-900" : "text-rose-600"}`}>
                              {row.value}
                            </td>
                            <td className="px-4 py-3 text-slate-500">{row.range}</td>
                            <td className="px-4 py-3">
                              <span
                                className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                                  row.flag === "Normal"
                                    ? "bg-emerald-50 text-emerald-700"
                                    : "bg-rose-50 text-rose-700"
                                }`}
                              >
                                {row.flag}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
                    <p className="text-xs uppercase tracking-widest text-indigo-600 font-bold mb-2">
                      Interpretation
                    </p>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                      {sampleReport.interpretation}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-5 space-y-5"
            >
              {reportContent.highlights.map((item, i) => (
                <ReportExplainItem key={i} {...item} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-6">Precision Engineering</h2>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">Every tool you need to run a flawless diagnostic operation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {Content.FEATURE_BLOCKS.map((feature, i) => (
              <FeatureBlock key={i} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-40 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.15),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-10 leading-none">
              {Content.CLOSING_CONTENT.headline} <br />
              <span className="text-indigo-400 italic font-serif font-normal">{Content.CLOSING_CONTENT.subheadline}</span>
            </h2>
            <button
              onClick={openLeadForm}
              className="bg-indigo-600 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-indigo-500 hover:scale-105 transition-all duration-300 shadow-[0_20px_50px_rgba(79,70,229,0.3)]"
            >
              {Content.CLOSING_CONTENT.cta}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
              <Activity className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">LabFlow</span>
          </div>
          <p className="text-slate-400 text-sm font-medium">© {new Date().getFullYear()} Aotbiz LabFlow. Crafted for Precision.</p>
          <div className="flex gap-10 text-sm font-bold text-slate-900">
            {Content.FOOTER_LINKS.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-indigo-600 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {isLeadFormOpen && (
        <div
          className="fixed inset-0 z-[70] bg-slate-900/70 backdrop-blur-sm flex items-center justify-center px-4 py-6"
          onClick={closeLeadForm}
        >
          <div
            className="w-full max-w-5xl h-[90vh] bg-white rounded-3xl overflow-hidden shadow-[0_40px_120px_-25px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="h-14 px-5 border-b border-slate-200 flex items-center justify-between bg-white">
              <p className="text-sm font-bold text-slate-700 tracking-wide">Book a Demo</p>
              <button
                onClick={closeLeadForm}
                className="w-9 h-9 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors flex items-center justify-center"
                aria-label="Close form"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>
            <iframe
              src={embeddedGoogleFormUrl}
              title="LabFlow Lead Form"
              className="w-full h-[calc(90vh-56px)] border-0"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LabFlowLanding;
