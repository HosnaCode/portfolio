import React, {useState, useEffect, useRef} from 'react';
import {
    Mail, Github, Linkedin, ArrowRight, ExternalLink, Sparkles, Layout, ShoppingCart, BarChart3, Briefcase, Code2, Zap, Smartphone
} from 'lucide-react';
import {motion, useScroll, useTransform} from 'framer-motion';

/* -------------------- Helpers -------------------- */

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
    hidden: {opacity: 0, y: 60}, visible: {opacity: 1, y: 0}
};

const Magnetic = ({children}) => {
    const ref = useRef(null);

    const move = (e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    };

    const reset = () => {
        if (ref.current) ref.current.style.transform = `translate(0px,0px)`;
    };

    return (<div ref={ref} onMouseMove={move} onMouseLeave={reset} className="transition-transform duration-200">
        {children}
    </div>);
};

/* -------------------- Component -------------------- */

const Portfolio = () => {
    const [mouse, setMouse] = useState({x: 0, y: 0});
    const {scrollYProgress} = useScroll();
    const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);

    useEffect(() => {
        const move = (e) => setMouse({x: e.clientX, y: e.clientY});
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    const services = [{
        icon: <Layout size={24}/>,
        title: 'Startup Websites',
        desc: 'Fast, modern landing pages that convert visitors into customers'
    }, {
        icon: <Briefcase size={24}/>,
        title: 'Portfolio Sites',
        desc: 'Elegant showcases for creatives, professionals and agencies'
    }, {
        icon: <BarChart3 size={24}/>,
        title: 'Dashboards & Panels',
        desc: 'Intuitive admin interfaces and data visualization tools'
    }, {
        icon: <ShoppingCart size={24}/>,
        title: 'E-Commerce',
        desc: 'Complete online stores with payment integration'
    }, {
        icon: <Code2 size={24}/>, title: 'Management Systems', desc: 'Custom CRM, ERP and business management platforms'
    }, {icon: <Zap size={24}/>, title: 'Web Applications', desc: 'Full-stack solutions with complex functionality'},
        {
            icon: <Smartphone size={24} />,
            title: 'Mobile Applications',
            desc: 'Cross-platform mobile apps with smooth animations, modern UI, and scalable architecture'
        }
    ];

    const projects = [{
        title: 'Healthcare Management System',
        desc: 'Leading the development of a comprehensive medical management platform with responsibilities in project management, feature enhancements, UI/UX improvements, bug fixes, and backend extensions.',
        tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
        year: '2025 – Present',
        category: 'Management System',
        role: 'Project Manager / Backend Developer',
        image: 'images/healthcare.png',
        link: '#',
        github: '#',
        current: true,
        impact: 'Optimized workflows, enhanced user experience, and improved system performance through strategic feature development and architectural improvements.'
    },  {
        title: 'Medical Mobile App API',
        desc: 'Designed and developed a secure backend API for a medical mobile application in collaboration with a digital agency.\n' +
            'The application allows patients to report their pain level through an intuitive interface. Based on the submitted pain degree, nurses receive real-time notifications and can promptly respond by scheduling an appropriate appointment.',
        tech: ['Laravel', 'MySQL', 'REST API','Infobip', 'Twilio'],
        year: '2024',
        category: 'Backend API',
        role: 'Backend Developer',
        image: 'images/medical-api.png',
        link: '#',
        github: '#'
    }];

    const designProjects = [{
        title: 'Pâtisserie Landing Page',
        tools: ['React', 'UI/UX Design'],
        year: '2024',
        category: 'Landing Page Design',
        image: 'images/patisserie-design.png'
    }, {
        title: 'Restaurant Landing Page',
        tools: ['React', 'UI/UX Design'],
        year: '2024',
        category: 'Landing Page Design',
        image: 'images/restaurant-design.PNG'
    }];

    const skills = [
        'Laravel',
        'PHP',
        'MySQL',
        'Vue.js',
        'React',
        'JavaScript',
        'Tailwind CSS',
        'REST APIs',
        'Flutter',
        'Dart',
        'Git'
    ];

    return (<div className="bg-[#0a0a0a] text-white overflow-x-hidden">

        {/* Cursor */}
        <motion.div
            animate={{x: mouse.x - 10, y: mouse.y - 10}}
            transition={{type: 'spring', stiffness: 300, damping: 30}}
            className="fixed top-0 left-0 w-5 h-5 rounded-full bg-emerald-400 z-50 pointer-events-none mix-blend-difference"
        />

        {/* Glow Effect */}
        <div
            className="fixed inset-0 pointer-events-none z-10"
            style={{
                background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(16,185,129,.12), transparent 80%)`
            }}
        />

        {/* NAV */}
        <nav className="fixed w-full z-40 backdrop-blur-md bg-black/40 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center">
                <motion.span
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    className="font-bold text-xl tracking-tight"
                >
                    <span className="text-emerald-400">H</span>OSNA
                </motion.span>
                <div className="hidden md:flex gap-8 text-sm font-medium">
                    {['Work', 'Services', 'About', 'Contact'].map((i, idx) => (<motion.a
                        key={i}
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: idx * 0.1}}
                        href={`#${i.toLowerCase()}`}
                        className="hover:text-emerald-400 transition-colors"
                    >
                        {i}
                    </motion.a>))}
                </div>
            </div>
        </nav>

        {/* HERO */}
        <section id="home" className="min-h-screen flex items-center px-6 md:px-8 relative">
            <div
                className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent pointer-events-none"/>
            <div className="max-w-7xl mx-auto pt-32 w-full">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{visible: {transition: {staggerChildren: 0.15}}}}
                >
                    <motion.div variants={fadeUp} transition={{duration: 1, ease}}>
                        <span
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 text-emerald-400 text-xs font-medium backdrop-blur-sm">
                            <Sparkles size={14}/> Available for Projects
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        transition={{duration: 1.2, ease}}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mt-8 leading-[1.1]"
                    >
                        Crafting Digital<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                            Solutions That
                        </span>{' '}
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                            Drive Results
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        transition={{duration: .9, ease}}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mt-8 leading-relaxed"
                    >
                        Full-stack developer specialized in Laravel & modern web technologies.
                        Building scalable systems, elegant interfaces, and seamless user experiences.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        transition={{duration: .9}}
                        className="flex flex-wrap gap-4 mt-12"
                    >
                        <Magnetic>
                            <a href="#work"
                               className="group px-8 py-4 bg-emerald-400 text-black rounded-full font-semibold flex items-center gap-2 hover:bg-emerald-300 transition-colors">
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                            </a>
                        </Magnetic>
                        <a href="#contact"
                           className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors">
                            Let's Talk
                        </a>

                        <Magnetic>
                            <a
                                href="https://drive.google.com/file/d/1C2iv9JDNtM_d44vF_QoTWacT7CjJvvIn/view?usp=sharing "
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-emerald-400 text-black rounded-full font-semibold flex items-center gap-2 hover:bg-emerald-300 transition-colors"
                            >
                                View CV
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                            </a>
                        </Magnetic>


                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        transition={{duration: .9}}
                        className="flex items-center gap-6 mt-16 text-sm text-gray-500"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
                            <span>Based in Algeria</span>
                        </div>
                        <div>•</div>
                        <div>Master's in Networks & Distributed Systems</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>

        {/* SERVICES */}
        <section id="services"
                 className="py-32 px-6 md:px-8 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        What I Build
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        From startups to established businesses, I create tailored solutions that solve real
                        problems
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`group p-8 rounded-2xl border border-white/5 bg-white/[0.02] 
      hover:bg-white/[0.05] hover:border-emerald-400/20 transition-all duration-300
      ${i === services.length - 1 ? 'lg:col-span-3 flex justify-center' : ''}`}
                        >
                            <div className={`${i === services.length - 1 ? 'max-w-md w-full text-center' : ''}`}>
                                <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>

        {/* WORK */}
        <section id="work" className="py-32 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 text-lg">
                        A selection of my recent work
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {projects.map((project, i) => (<motion.div
                        key={i}
                        initial={{opacity: 0, y: 60}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, ease}}
                        className="group"
                    >
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            {/* Image */}
                            <div className={`order-1 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div
                                    className={`relative overflow-hidden rounded-2xl border aspect-[4/3] bg-gradient-to-br from-emerald-500/10 to-teal-500/5 ${project.current ? 'border-teal-400/30' : 'border-white/10'}`}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`order-2 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className="flex items-center gap-3 mb-4 flex-wrap">
                                    <span
                                        className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                                        {project.category}
                                    </span>
                                    {project.current && (
                                        <span className="text-xs font-semibold text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full border border-teal-400/30 animate-pulse">
                                            Current Role
                                        </span>
                                    )}
                                    <span className="text-sm text-gray-500">{project.year}</span>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {project.desc}
                                </p>

                                {/* Impact Section */}
                                {project.impact && (
                                    <div className="mb-6 p-4 rounded-lg bg-emerald-400/5 border border-emerald-400/10">
                                        <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                                            Impact & Achievements
                                        </div>
                                        <p className="text-sm text-gray-300 leading-relaxed">
                                            {project.impact}
                                        </p>
                                    </div>
                                )}

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((tech, idx) => (<span
                                        key={idx}
                                        className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                                    >
                                        {tech}
                                    </span>))}
                                </div>

                                {/* Links */}

                            </div>
                        </div>
                    </motion.div>))}
                </div>
            </div>
        </section>

        {/* DESIGN PROJECTS */}
        <section id="design" className="py-32 px-6 md:px-8 bg-gradient-to-b from-transparent to-white/[0.02]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-12">
                    Design Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {designProjects.map((design, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10">
                            <img
                                src={design.image}
                                alt={design.title}
                                className="w-full h-96 md:h-[500px] lg:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay Text */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-xl">
                                    {design.title}
                                </h3>
                                <div className="mt-4 flex flex-wrap gap-3">
                                    {design.tools.map((tool, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-1 text-sm rounded-full bg-white/10 text-white"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </section>

        {/* MOBILE APP */}
        <section id="mobile-app" className="py-32 px-6 md:px-8 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Mobile Application
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Check out the mobile app I developed. Includes login animation and interactive features.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Video */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-[300px] md:w-[350px] lg:w-[400px] mx-auto"
                    >
                        {/* Phone frame */}
                        <div className="relative bg-black rounded-3xl border-4 border-gray-700 shadow-xl overflow-hidden">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 rounded-b-xl bg-gray-900 z-10" />

                            {/* Video */}
                            <video
                                src="videos/mobile-login.mp4"
                                autoPlay
                                loop
                                muted
                                className="w-full h-[600px] md:h-[650px] lg:h-[700px] object-cover rounded-3xl"
                            />
                        </div>

                        {/* Optional: shadow or reflection */}
                        <div className="absolute inset-0 pointer-events-none shadow-2xl rounded-3xl"/>
                    </motion.div>


                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-400">
                            Mobile App Login Animation
                        </h3>
                        <p className="text-gray-400 mb-6">
                            This mobile application features an interactive login screen with smooth animations.
                            Built using Flutter & Dart, focusing on UX and performance.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {['Flutter', 'Dart', 'Firebase', 'REST API'].map((tech) => (
                                <span key={tech} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">
              {tech}
            </span>
                            ))}
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>


        {/* ABOUT */}
        <section id="about" className="py-32 px-6 md:px-8 bg-gradient-to-b from-white/[0.02] to-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={{visible: {transition: {staggerChildren: .12}}}}
                    >
                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6">
                            Building With Purpose
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed mb-6">
                            I'm a full-stack developer with a Master's degree in Networks & Distributed Systems.
                            My focus is on creating clean, efficient, and scalable solutions using Laravel and
                            modern web technologies.
                        </motion.p>
                        <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed mb-8">
                            Whether it's a startup MVP, an e-commerce platform, or a complex management system,
                            I approach every project with attention to detail and a commitment to excellence.
                        </motion.p>
                        <motion.a
                            variants={fadeUp}
                            href="#contact"
                            className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:gap-3 transition-all"
                        >
                            Let's work together <ArrowRight size={18}/>
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={{visible: {transition: {staggerChildren: .08}}}}
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-gray-300">Technical Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map(s => (<motion.span
                                    key={s}
                                    variants={fadeUp}
                                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-emerald-400/30 hover:bg-emerald-400/5 transition-all cursor-pointer"
                                >
                                    {s}
                                </motion.span>))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                                <div className="text-3xl font-bold text-emerald-400 mb-2">3+</div>
                                <div className="text-sm text-gray-400">Years Experience</div>
                            </div>
                            <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
                                <div className="text-3xl font-bold text-emerald-400 mb-2">15+</div>
                                <div className="text-sm text-gray-400">Projects Completed</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Let's Create Something<br/>
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                            Exceptional Together
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                        Have a project in mind? Let's discuss how I can help bring your vision to life
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        <Magnetic>
                            <a
                                href="mailto:hosna.bensihamdi@univ-constantine2.dz"
                                className="px-8 py-4 bg-emerald-400 text-black rounded-full font-semibold hover:bg-emerald-300 transition-colors inline-flex items-center gap-2"
                            >
                                <Mail size={20}/>
                                Send Email
                            </a>
                        </Magnetic>
                    </div>

                    <div className="flex justify-center gap-6 text-gray-400">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                           className="hover:text-emerald-400 transition-colors">
                            <Github size={24}/>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                           className="hover:text-emerald-400 transition-colors">
                            <Linkedin size={24}/>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-8 px-6 md:px-8">
            <div
                className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <div>© 2025 Hosna. All rights reserved.</div>
                <div>Crafted with passion & precision</div>
            </div>
        </footer>

        <style>{`
            * { cursor: none; }
            html { scroll-behavior: smooth; }
        `}</style>
    </div>);
};

export default Portfolio;