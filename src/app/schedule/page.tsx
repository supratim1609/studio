
import Image from "next/image";

const events = [
  {
    day: "Maha Panchami",
    date: "September 28, 2025",
    time: "6:00 PM",
    title: "Pandal Inauguration",
    description: "Grand opening of the DSA '25 pandal, welcoming Maa Durga amidst chants and celebrations.",
    ai_hint: "festival inauguration",
  },
  {
    day: "Maha Shashti",
    date: "September 29, 2025",
    time: "8:00 AM",
    title: "Kalparambha & Bodhon",
    description: "The ritualistic beginning of the puja and the awakening of the Goddess.",
    ai_hint: "hindu ritual",
  },
  {
    day: "Maha Saptami",
    date: "September 30, 2025",
    time: "9:00 AM",
    title: "Nabapatrika Snan & Saptami Puja",
    description: "The holy bathing of Nabapatrika followed by the main Saptami puja and pushpanjali.",
    ai_hint: "holy ceremony",
  },
  {
    day: "Maha Ashtami",
    date: "October 1, 2025",
    time: "10:00 AM",
    title: "Ashtami Puja & Anjali",
    description: "One of the most significant days of Puja, with morning pushpanjali for all devotees.",
    ai_hint: "devotees praying",
  },
  {
    day: "Maha Ashtami",
    date: "October 1, 2025",
    time: "4:01 PM",
    title: "Sandhi Puja",
    description: "The sacred worship at the juncture of Ashtami and Navami tithi.",
    ai_hint: "prayer candles",
  },
   {
    day: "Maha Navami",
    date: "October 2, 2025",
    time: "9:30 AM",
    title: "Navami Puja & Homa",
    description: "The final day of worship, concluding with the sacred fire ritual (homa).",
    ai_hint: "sacred fire",
  },
  {
    day: "Maha Navami",
    date: "October 2, 2025",
    time: "7:00 PM",
    title: "Grand Cultural Evening",
    description: "An evening of music, dance, and drama performed by local artists and club members.",
    ai_hint: "dance performance",
  },
  {
    day: "Vijayadashami",
    date: "October 3, 2025",
    time: "4:00 PM",
    title: "Sindur Khela & Bisarjan",
    description: "A joyous farewell to the Goddess, followed by the immersion procession.",
    ai_hint: "joyful festival",
  },
];

export default function SchedulePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Event Schedule
          </h1>
          <p className="mt-4 text-lg text-foreground/70">
            Join us in celebrating the divine presence of Maa Durga. Here is our schedule of events for DSA '25.
          </p>
        </div>

        <div className="mt-20 space-y-20">
            {events.map((event, index) => (
                <div key={event.title} className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    <div className={`relative h-80 w-full rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 ${index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}`}>
                        <Image
                            src="https://placehold.co/600x400.png"
                            alt={event.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl"
                            data-ai-hint={event.ai_hint}
                        />
                    </div>
                    <div className={`${index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}`}>
                        <p className="font-semibold text-primary">{event.day} - {event.date} at {event.time}</p>
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">{event.title}</h2>
                        <p className="mt-4 text-foreground/70">
                            {event.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
