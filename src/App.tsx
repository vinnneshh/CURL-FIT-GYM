import { motion } from "motion/react";
import { Dumbbell, Phone, MessageSquare, MapPin, Clock, Star, CheckCircle2, Instagram, Facebook, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// --- Constants & Data ---

const BUSINESS = {
  name: "CURL FIT GYM",
  tagline: "THE FITNESS ARENA",
  locations: ["ATTAPUR", "BANJARA HILLS"],
  address: "5th Floor, 8-2, No:4, 413/B Road, Banjara Hills, Hyderabad, Telangana 500034",
  phone: "77990 00815",
  whatsapp: "77990 00815",
  email: "contact@curlfitgym.com", // Placeholder as requested
  mapsLink: "https://maps.app.goo.gl/QtApNqnSVpy2gjUV9",
  hours: "6AM - 10PM (Mon-Sat)",
  services: [
    { title: "Professional Trainer", desc: "Expert guidance tailored to your goals.", icon: Dumbbell },
    { title: "Strength Training", desc: "Premium equipment for muscle building.", icon: CheckCircle2 },
    { title: "Cardio Zone", desc: "High-end machines for heart health.", icon: Clock },
    { title: "CrossFit", desc: "High-intensity functional movements.", icon: Star },
    { title: "Zumba", desc: "Fun and energetic dance workouts.", icon: MessageSquare },
    { title: "Steam Bath", desc: "Relax and detox after your session.", icon: CheckCircle2 },
    { title: "Luxury Washrooms", desc: "Clean and premium facilities.", icon: CheckCircle2 },
  ],
  testimonials: [
    {
      name: "Prince Masih",
      role: "Local Guide",
      content: "Visited this gym using their one-day pass. The gym is well maintained and clean, and all the main workout machines and weights are available. Equipment is in good working condition and there is enough space to do workouts comfortably. The trainers were friendly and helpful.",
      rating: 5
    },
    {
      name: "Bhavaniprasad Mangnale",
      role: "Local Guide",
      content: "Curl Fit in Banjara Hills has made a commendable impression with its well-equipped facilities and friendly atmosphere. The gym boasts a wide range of equipment to cater to diverse fitness needs. The cleanliness is commendable.",
      rating: 5
    },
    {
      name: "Nitish Nirala",
      role: "Member",
      content: "I enrolled in a 3-month personal training program as a complete beginner. One of the best decisions I've made. Special mention to trainer Shahbaz for his expertise and dedication. The gym is well-maintained and professional.",
      rating: 5
    }
  ],
  gallery: [
    "17ldqf3L29WshjFQ7tYYZ0zodqU3mKYDF",
    "1QtSoDkRzL-noLtit9pbuhFhsyx7twl45",
    "1_OR-wJcCE6yHZ1OgamVN4nX6yfFfj-Ei",
    "1eOIRAp7kVcvT6UjwV_6w3kcSb969eeri",
    "1iFgxn8GhHWpETFJWIKB73__QzQEiCTzh"
  ]
};

const getImageUrl = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

// --- Components ---

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <div className="flex items-center gap-2 md:gap-6 relative">
        {/* Woman Silhouette (Left) */}
        <div className="hidden sm:block w-16 h-20 text-white/90">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            <path d="M12,2C10.89,2 10,2.89 10,4C10,5.11 10.89,6 12,6C13.11,6 14,5.11 14,4C14,2.89 13.11,2 12,2M10.5,7C8.57,7 7,8.57 7,10.5V14.5H8.5V22H11V18H13V22H15.5V14.5H17V10.5C17,8.57 15.43,7 13.5,7H10.5Z" />
          </svg>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-baseline italic font-display font-black text-5xl md:text-7xl tracking-tighter">
            <span className="text-primary drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>C</span>
            <span className="relative inline-flex items-center justify-center text-primary drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>
              U
              <div className="absolute inset-0 flex items-center justify-center pt-2">
                <div className="w-5 h-5 md:w-8 md:h-8 border-2 md:border-4 border-background rounded-full flex items-center justify-center bg-primary glow-primary">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-background rounded-full" />
                </div>
              </div>
            </span>
            <span className="text-primary drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>RL</span>
            <span className="ml-3 text-primary drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>FIT</span>
          </div>
          <div className="text-[10px] md:text-base tracking-[0.4em] font-black text-white uppercase mt-[-2px] md:mt-[-6px]">
            THE FITNESS ARENA
          </div>
        </div>

        {/* Man Silhouette (Right) */}
        <div className="hidden sm:block w-16 h-20 text-white/90">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            <path d="M12,2C10.89,2 10,2.89 10,4C10,5.11 10.89,6 12,6C13.11,6 14,5.11 14,4C14,2.89 13.11,2 12,2M15,7H9C7.9,7 7,7.9 7,9V14.5H8.5V22H11V18H13V22H15.5V14.5H17V9C17,7.9 16.1,7 15,7Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="scale-75 origin-left">
            <Logo className="items-start" />
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Home", "Services", "Gallery", "About", "Memberships", "Testimonials", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-xs font-bold hover:text-primary transition-colors uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
          <a href="#whatsapp-info">
            <Button className="glow-primary-hover font-bold uppercase tracking-widest text-xs px-6 h-10">
              Join Now
            </Button>
          </a>
        </div>

        <button className="md:hidden text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass border-t border-white/5 p-6 flex flex-col gap-4 md:hidden"
        >
          {["Home", "Services", "Gallery", "About", "Memberships", "Testimonials", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-lg font-medium py-2 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="#whatsapp-info" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full mt-4 glow-primary">Join Now</Button>
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-8 px-4 py-1.5 bg-primary/10 text-primary border-primary/20 text-[10px] uppercase tracking-[0.3em] font-black">
                Premium Fitness Arena
              </Badge>
              
              <div className="mb-10">
                <Logo className="items-start" />
              </div>

              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter mb-8 uppercase">
                TRANSFORM YOUR <br />
                <span className="text-gradient">LEGACY</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed font-medium">
                Experience the ultimate fitness arena in <span className="text-foreground font-bold border-b-2 border-primary/30">Attapur & Banjara Hills</span>. 
                Luxury facilities, professional coaching, and a community dedicated to excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#whatsapp-info">
                  <Button size="lg" className="h-16 px-12 text-sm font-black uppercase tracking-[0.2em] glow-primary-hover transition-all duration-300 w-full sm:w-auto">
                    Join Now
                  </Button>
                </a>
                <a href={BUSINESS.mapsLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="h-16 px-12 text-sm font-black uppercase tracking-[0.2em] border-white/10 hover:bg-white/5 transition-all duration-300 w-full sm:w-auto">
                    Visit Us
                  </Button>
                </a>
              </div>

              <div className="mt-20 flex flex-wrap items-center gap-10 opacity-60">
                <div className="flex flex-col">
                  <span className="text-3xl font-black font-display text-primary">1000+</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Active Members</span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-3xl font-black font-display text-primary">15+</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Expert Trainers</span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-3xl font-black font-display text-primary">2</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Prime Locations</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 glow-primary">
                <img 
                  src="https://picsum.photos/seed/gym-hero/600/800" 
                  alt="Gym Hero" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl border-primary/20 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Star className="text-background w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest">Top Rated</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">In Hyderabad</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">ELITE SERVICES</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Everything you need to transform your body and mind in a luxury environment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-muted/50 border-white/5 hover:border-primary/30 transition-all group overflow-hidden h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <service.icon className="text-primary group-hover:text-background transition-colors w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">The Arena</h2>
            <p className="text-muted-foreground max-w-md">Take a look at our world-class facilities and equipment.</p>
          </div>
          <Button variant="link" className="text-primary p-0 h-auto font-bold uppercase tracking-widest text-xs">View More on Instagram</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {BUSINESS.gallery.map((id, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img 
                src={getImageUrl(id)} 
                alt={`Gym Facility ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-sm font-medium uppercase tracking-widest">Premium Equipment</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
                alt="About Curl Fit" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-primary/10 rounded-3xl rotate-6 z-0" />
          </div>

          <div>
            <Badge className="mb-6 px-4 py-1 bg-primary/10 text-primary border-primary/20 text-xs uppercase tracking-[0.2em] font-bold">
              Our Story
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">More Than Just A Gym</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              CURL FIT GYM is not just a place to workout; it's a fitness arena designed for those who demand the best. 
              Located in the heart of Hyderabad, we provide a luxury environment where your fitness goals become reality.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              From our state-of-the-art strength equipment to our energetic Zumba sessions and relaxing steam baths, 
              every detail is crafted to provide a premium experience. Our professional trainers are here to guide you 
              every step of the way, ensuring you achieve the results you desire.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-primary font-bold text-3xl font-display mb-1">02</h4>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Prime Locations</p>
              </div>
              <div>
                <h4 className="text-primary font-bold text-3xl font-display mb-1">16h</h4>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Daily Access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">MEMBER VOICES</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Hear from the people who have transformed their lives at Curl Fit.</p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {BUSINESS.testimonials.map((t, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 p-4">
                <Card className="bg-background border-white/5 h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex gap-1 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground italic mb-8 flex-grow leading-relaxed">"{t.content}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
                        {t.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{t.name}</h4>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 border-white/10 hover:bg-primary hover:text-background" />
            <CarouselNext className="static translate-y-0 border-white/10 hover:bg-primary hover:text-background" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

const Memberships = () => {
  return (
    <section id="memberships" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <Badge className="mb-6 px-4 py-1.5 bg-primary/10 text-primary border-primary/20 text-[10px] uppercase tracking-[0.3em] font-black">
          Plans
        </Badge>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">Memberships</h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-[2rem] border-white/5 max-w-2xl mx-auto relative overflow-hidden"
        >
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
           <p className="text-2xl md:text-3xl font-display font-bold text-muted-foreground uppercase tracking-widest mb-4">
             Memberships Dropping Soon
           </p>
           <p className="text-muted-foreground leading-relaxed">
             We are currently refining our elite membership plans to provide you with the best fitness experience. 
             Stay tuned for exclusive packages tailored to your fitness journey.
           </p>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">Get In Touch</h2>
            <p className="text-muted-foreground mb-12 max-w-md mx-auto">Ready to start your journey? Contact us today or visit one of our locations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-8 glass rounded-3xl border-white/5 hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mb-6">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-3 uppercase tracking-widest text-xs">Location</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{BUSINESS.address}</p>
                <a href={BUSINESS.mapsLink} target="_blank" className="text-primary text-xs font-bold uppercase tracking-widest hover:underline inline-flex items-center gap-2">
                  Get Directions
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-8 glass rounded-3xl border-white/5 hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mb-6">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-3 uppercase tracking-widest text-xs">Call Us</h4>
                <p className="text-muted-foreground text-sm mb-4">{BUSINESS.phone}</p>
                <a href={`tel:${BUSINESS.phone}`} className="text-primary text-xs font-bold uppercase tracking-widest hover:underline inline-flex items-center gap-2">
                  Call Now
                </a>
              </div>
            </div>

            <div id="whatsapp-info" className="flex flex-col items-center text-center p-8 glass rounded-3xl border-primary/30 transition-all glow-primary">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mb-6">
                <MessageSquare className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-3 uppercase tracking-widest text-xs">WhatsApp</h4>
                <p className="text-muted-foreground text-sm mb-4">{BUSINESS.whatsapp}</p>
                <a href={`https://wa.me/${BUSINESS.whatsapp.replace(/\s/g, '')}`} target="_blank" className="text-primary text-xs font-bold uppercase tracking-widest hover:underline inline-flex items-center gap-2">
                  Chat with us
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-8 glass rounded-3xl border-white/5 hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mb-6">
                <Clock className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-3 uppercase tracking-widest text-xs">Opening Hours</h4>
                <p className="text-muted-foreground text-sm mb-1">{BUSINESS.hours}</p>
                <p className="text-destructive text-[10px] uppercase tracking-widest font-bold">Sunday Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-display text-4xl font-bold mb-12 text-center uppercase tracking-tighter">Common Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-white/5">
            <AccordionTrigger className="text-left font-bold hover:text-primary uppercase tracking-widest text-xs">Do you offer personal training?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Yes, we have highly qualified personal trainers like Shahbaz who specialize in strength training, weight loss, and general fitness for all levels.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-white/5">
            <AccordionTrigger className="text-left font-bold hover:text-primary uppercase tracking-widest text-xs">What are the gym hours?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              We are open from 6:00 AM to 10:00 PM, Monday through Saturday. We are closed on Sundays.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-white/5">
            <AccordionTrigger className="text-left font-bold hover:text-primary uppercase tracking-widest text-xs">Is there a trial pass available?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Yes, we offer a one-day trial pass for ₹500, which allows you to experience our facilities and equipment before committing to a membership.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Logo className="items-start scale-75 origin-left" />
            </div>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              The ultimate fitness arena in Hyderabad. Luxury facilities, professional coaching, and a community dedicated to excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-background transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-background transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-background transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Services", "Gallery", "About", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Locations</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>Attapur, Hyderabad</li>
              <li>Banjara Hills, Hyderabad</li>
              <li className="pt-4">
                <p className="text-foreground font-bold mb-1">Phone</p>
                {BUSINESS.phone}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Memberships />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
