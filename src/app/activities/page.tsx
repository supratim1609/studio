
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const activities = [
  {
    name: "Cricket",
    description: "Fostering teamwork and sportsmanship on the cricket field, our club nurtures local talent.",
    imageSrc: "https://placehold.co/1920x1080.png",
    data_ai_hint: "cricket match",
    phone: "08906479173",
  },
  {
    name: "Football",
    description: "From grassroots training to competitive matches, our football program is a hub for passion and skill.",
    imageSrc: "https://placehold.co/1920x1080.png",
    data_ai_hint: "football game",
    phone: "08906479173",
  },
  {
    name: "Karate",
    description: "Building discipline, confidence, and self-defense skills through the art of karate.",
    imageSrc: "https://placehold.co/1920x1080.png",
    data_ai_hint: "karate class",
    phone: "08906479173",
  },
  {
    name: "Dance",
    description: "Celebrating culture and creativity through various dance forms, from classical to contemporary.",
    imageSrc: "https://placehold.co/1920x1080.png",
    data_ai_hint: "dance performance",
    phone: "08906479173",
  },
];

function ActivitySection({ activity }: { activity: (typeof activities)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative h-[80vh] w-full overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src={activity.imageSrc}
          alt={activity.name}
          fill
          className="object-cover"
          data-ai-hint={activity.data_ai_hint}
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.5 }}
           className="font-headline text-5xl md:text-7xl font-bold"
        >
          {activity.name}
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-xl text-lg md:text-xl text-white/80"
        >
          {activity.description}
        </motion.p>
        <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5, delay: 0.4 }}
        >
            <Button asChild size="lg" className="mt-8 font-bold">
                <Link href={`tel:${activity.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call to Inquire
                </Link>
            </Button>
        </motion.div>
      </div>
    </section>
  );
}


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
        <div className="flex flex-col">
            {activities.map((activity) => (
                <ActivitySection key={activity.name} activity={activity} />
            ))}
        </div>
    </div>
  );
}
