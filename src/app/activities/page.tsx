
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const activities = [
  {
    name: "Cricket",
    description: "Fostering teamwork and sportsmanship on the cricket field, our club nurtures local talent.",
    imageSrc: "/cricket.webp",
    data_ai_hint: "cricket match",
    phone: "08906479173",
  },
  {
    name: "Football",
    description: "From grassroots training to competitive matches, our football program is a hub for passion and skill.",
    imageSrc: "/football.webp",
    data_ai_hint: "football game",
    phone: "08906479173",
  },
  {
    name: "Karate",
    description: "Building discipline, confidence, and self-defense skills through the art of karate.",
    imageSrc: "/karate.webp",
    data_ai_hint: "karate class",
    phone: "08906479173",
  },
  {
    name: "Dance",
    description: "Celebrating culture and creativity through various dance forms, from classical to contemporary.",
    imageSrc: "/dance.webp",
    data_ai_hint: "dance performance",
    phone: "08906479173",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

export default function ActivitiesPage() {
  return (
    <div className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:py-24 text-center">
             <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                Our Activities
             </h1>
             <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
                Beyond our signature Puja, DSA is a hub of year-round cultural, sports, and community engagement. Explore our vibrant initiatives.
             </p>
        </div>
        <motion.div 
            className="container mx-auto px-4 pb-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {activities.map((activity) => (
                <motion.div
                    key={activity.name}
                    className="group relative h-[450px] w-full overflow-hidden rounded-xl shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    variants={itemVariants}
                >
                    <Image
                        src={activity.imageSrc}
                        alt={activity.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={activity.data_ai_hint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-white">
                        <h2 className="font-headline text-4xl font-bold">{activity.name}</h2>
                        <div className="h-0.5 w-16 bg-primary my-3" />
                         <div className="opacity-0 transition-all duration-500 group-hover:opacity-100 max-h-0 group-hover:max-h-40 overflow-hidden">
                            <p className="text-white/90 mb-4">{activity.description}</p>
                            <Button asChild size="sm" className="font-bold">
                                <Link href={`tel:${activity.phone}`}>
                                    <Phone className="mr-2 h-4 w-4" />
                                    Call to Inquire
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
                ))}
            </div>
        </motion.div>
    </div>
  );
}
