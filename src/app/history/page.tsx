
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const history_events = [
    {
      year: "2012",
      title: "আফ্রিকান জুলু কালচার",
      description: "An exploration of the vibrant and rich culture of the African Zulu people.",
       image: {
          src: "https://placehold.co/1200x800.png",
          alt: "Zulu culture theme",
          data_ai_hint: "african tribe"
      }
    },
    {
      year: "2013",
      title: "বর্ণপরিচয়",
      description: "Celebrating the foundations of Bengali literature and language.",
       image: {
          src: "https://placehold.co/1200x800.png",
          alt: "Bengali alphabet theme",
          data_ai_hint: "bengali script"
      }
    },
    {
      year: "2014",
      title: "শহর থেকে দূরে",
      description: "A theme celebrating the tranquility and beauty of life away from the city.",
       image: {
          src: "https://placehold.co/1200x800.png",
          alt: "Rural life theme",
          data_ai_hint: "village landscape"
      }
    },
    {
      year: "2015",
      title: "মাশরুম কিংডম",
      description: "A whimsical theme that transported visitors to a fantasy Mushroom Kingdom.",
       image: {
          src: "https://placehold.co/1200x800.png",
          alt: "Mushroom Kingdom theme",
          data_ai_hint: "fantasy mushroom"
      }
    },
     {
      year: "2016",
      title: "প্লাস্টিকনাশীনি",
      description: "An innovative theme highlighting the destruction of plastic pollution.",
       image: {
          src: "https://placehold.co/1200x800.png",
          alt: "Anti-plastic theme",
          data_ai_hint: "plastic waste"
      }
    },
    {
      year: "2017",
      title: "মামা ভাগ্নে পাহাড়",
      description: "Thematically centered around the famous local hills of Birbhum.",
       image: {
          src: "https://placehold.co/1200x800.png",
          alt: "Mama Bhagne Pahar theme",
          data_ai_hint: "rock formation"
      }
    },
    {
      year: "2018",
      title: "ক্রমবিবর্তনে বিশ্ব-উষ্ণায়ন",
      description: "A powerful theme addressing the evolution and impact of global warming.",
       image: {
          src: "https://placehold.co/1200x800.png",
          alt: "Global warming theme",
          data_ai_hint: "melting glacier"
      }
    },
    {
      year: "2019",
      title: "ধারাপাত",
      description: "A theme based on the Bengali primer, evoking nostalgia for early education.",
       image: {
          src: "https://placehold.co/1200x800.png",
          alt: "Bengali alphabet theme",
          data_ai_hint: "vintage textbook"
      }
    },
    {
      year: "2020",
      title: "কোভিড বিধি মেনে পূজা",
      description: "A celebration held with responsibility, adhering to all COVID-19 protocols.",
       image: {
          src: "https://placehold.co/1200x800.png",
          alt: "Celebration with masks",
          data_ai_hint: "social distancing"
      }
    },
     {
      year: "2021",
      title: "কেকামহল",
      description: "Inspired by the dance of the peacock, a theme of beauty and grace.",
       image: {
          src: "https://placehold.co/1200x800.png",
          alt: "Peacock palace theme",
          data_ai_hint: "peacock feathers"
      }
    },
    {
      year: "2022",
      title: "বাংলা ও বাঙালীয়ানা",
      description: "A tribute to the rich culture and essence of Bengal and its heritage.",
       image: {
          src: "https://placehold.co/1200x800.png",
          alt: "Bengal culture theme",
          data_ai_hint: "bengali culture"
      }
    },
    {
      year: "2023",
      title: "ইচ্ছেডানা",
      description: "A theme that celebrated the 'Wings of Desire', inspiring hope and aspiration.",
       image: {
          src: "https://placehold.co/1200x800.png",
          alt: "Wings of Desire theme",
          data_ai_hint: "abstract desire"
      }
    },
    {
      year: "2024",
      title: "শৈশব",
      description: "A journey back to the carefree days of childhood, celebrating innocence and joy.",
      image: {
          src: "https://placehold.co/1200x800.png",
          alt: "Childhood theme",
          data_ai_hint: "childhood joy"
      }
    },
];

export default function HistoryPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            History
          </h1>
           <p className="mt-6 text-lg text-foreground/80">
            Since its founding in 1979, Dubrajpur Sports Association (DSA) has evolved from a humble sports club into a vibrant hub of tradition, art, and unity. For over four decades, we have championed social engagement and cultural expression, with our signature Durga Puja becoming one of the most anticipated events in the region, drawing thousands of visitors annually.
          </p>
        </div>
      </div>

        <div className="relative">
            {history_events.map((event, index) => (
                <section key={index} className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
                    <Image 
                        src={event.image.src}
                        alt={event.image.alt}
                        fill
                        className="object-cover"
                        data-ai-hint={event.image.data_ai_hint}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <motion.div
                        className="relative z-10 flex h-full items-center justify-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8 }}
                         variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                         <div className="max-w-xl rounded-xl bg-background/80 p-8 text-center text-foreground shadow-2xl backdrop-blur-md">
                            <p className="font-headline text-xl font-semibold text-primary">{event.year}</p>
                            <h3 className="mt-2 font-headline text-4xl font-bold font-bengali">{event.title}</h3>
                            {event.description && <p className="mt-4 text-foreground/80">{event.description}</p>}
                        </div>
                    </motion.div>
                </section>
            ))}
        </div>
    </div>
  );
}
