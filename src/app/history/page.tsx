
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";

const history_events = [
    {
      year: "۲۰১২",
      title: "আফ্রিকান জুলু কালচার",
      description: "An exploration of the vibrant and rich culture of the African Zulu people.",
       image: {
          src: "/2012.webp",
          alt: "Zulu culture theme",
          data_ai_hint: "african tribe"
      }
    },
    {
      year: "২০১৩",
      title: "বর্ণপরিচয়",
      description: "Celebrating the foundations of Bengali literature and language.",
       image: {
          src: "/2013.webp",
          alt: "Bengali alphabet theme",
          data_ai_hint: "bengali script"
      }
    },
    {
      year: "২০১৪",
      title: "শহর থেকে দূরে",
      description: "A theme celebrating the tranquility and beauty of life away from the city.",
       image: {
          src: "/2014.webp",
          alt: "Rural life theme",
          data_ai_hint: "village landscape"
      }
    },
    {
      year: "২০১৫",
      title: "মাশরুম কিংডম",
      description: "A whimsical theme that transported visitors to a fantasy Mushroom Kingdom.",
       image: {
          src: "/2015.webp",
          alt: "Mushroom Kingdom theme",
          data_ai_hint: "fantasy mushroom"
      }
    },
     {
      year: "২০১৬",
      title: "প্লাস্টিকনাশীনি",
      description: "An innovative theme highlighting the destruction of plastic pollution.",
       image: {
          src: "/2016.webp",
          alt: "Anti-plastic theme",
          data_ai_hint: "plastic waste"
      }
    },
    {
      year: "২০১৭",
      title: "মামা ভাগ্নে পাহাড়",
      description: "Thematically centered around the famous local hills of Birbhum.",
       image: {
          src: "/2017.webp",
          alt: "Mama Bhagne Pahar theme",
          data_ai_hint: "rock formation"
      }
    },
    {
      year: "২০১৮",
      title: "ক্রমবিবর্তনে বিশ্ব-উষ্ণায়ন",
      description: "A powerful theme addressing the evolution and impact of global warming.",
       image: {
          src: "/2018.webp",
          alt: "Global warming theme",
          data_ai_hint: "melting glacier"
      }
    },
    {
      year: "২০১৯",
      title: "ধারাপাত",
      description: "A theme based on the Bengali primer, evoking nostalgia for early education.",
       image: {
          src: "/2019.webp",
          alt: "Bengali alphabet theme",
          data_ai_hint: "vintage textbook"
      }
    },
    {
      year: "২০২০",
      title: "কোভিড বিধি মেনে পূজা",
      description: "A celebration held with responsibility, adhering to all COVID-19 protocols.",
       image: {
          src: "/2020.webp",
          alt: "Celebration with masks",
          data_ai_hint: "social distancing"
      }
    },
     {
      year: "২০২১",
      title: "কেকামহল",
      description: "Inspired by the dance of the peacock, a theme of beauty and grace.",
       image: {
          src: "/2121.webp",
          alt: "Peacock palace theme",
          data_ai_hint: "peacock feathers"
      }
    },
    {
      year: "২০২২",
      title: "বাংলা ও বাঙালীয়ানা",
      description: "A tribute to the rich culture and essence of Bengal and its heritage.",
       image: {
          src: "/2022.webp",
          alt: "Bengal culture theme",
          data_ai_hint: "bengali culture"
      }
    },
    {
      year: "২০২৩",
      title: "ইচ্ছেডানা",
      description: "A theme that celebrated the 'Wings of Desire', inspiring hope and aspiration.",
       image: {
          src: "/2023.webp",
          alt: "Wings of Desire theme",
          data_ai_hint: "abstract desire"
      }
    },
    {
      year: "২০২৪",
      title: "শৈশব",
      description: "A journey back to the carefree days of childhood, celebrating innocence and joy.",
      image: {
          src: "/2024.webp",
          alt: "Childhood theme",
          data_ai_hint: "childhood joy"
      }
    },
];

function HistoryEvent({ event, progress, range }: { event: (typeof history_events)[0], progress: any, range: [number, number] }) {
  const scale = useTransform(progress, range, [1, 0.7]);
  const opacity = useTransform(progress, range, [1, 0]);

  return (
    <motion.div 
      className="sticky top-0 flex h-dvh items-center justify-center"
      style={{ scale, opacity }}
    >
      <div className="relative h-[85vh] w-[90vw] max-w-5xl overflow-hidden rounded-2xl shadow-2xl">
          <Image
              src={event.image.src}
              alt={event.image.alt}
              fill
              className="object-cover"
              data-ai-hint={event.image.data_ai_hint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end justify-center p-8 md:p-12">
              <div className="max-w-xl rounded-xl bg-background/80 p-6 text-center text-foreground shadow-2xl backdrop-blur-md">
                  <p className="font-headline text-xl font-semibold text-primary">{event.year}</p>
                  <h3 className="mt-2 font-headline text-4xl font-bold font-bengali">{event.title}</h3>
                  {event.description && <p className="mt-4 text-foreground/80">{event.description}</p>}
              </div>
          </div>
      </div>
    </motion.div>
  );
}


export default function HistoryPage() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            History
          </h1>
          <p className="mt-6 text-lg text-foreground/80">
            Since its founding in <span className="font-bold text-primary text-xl">1979, Dubrajpur Sports Association (DSA)</span> has evolved from a humble sports club into a vibrant hub of tradition, art, and unity. For over four decades, we have championed social engagement and cultural expression, with our signature Durga Puja becoming one of the most anticipated events in the region, drawing thousands of visitors annually.
          </p>
        </div>
      </div>

      <div ref={ref} className="relative" style={{ height: `${history_events.length * 100}vh` }}>
        {history_events.map((event, index) => {
            const totalEvents = history_events.length;
            const start = index / totalEvents;
            const end = (index + 1) / totalEvents;
            const range: [number, number] = [start, end];

            return <HistoryEvent key={index} event={event} progress={scrollYProgress} range={range} />
        })}
      </div>
    </div>
  );
}
