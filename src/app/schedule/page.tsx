import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const events = [
  {
    day: "Maha Panchami",
    date: "September 28, 2025",
    time: "6:00 PM",
    title: "Pandal Inauguration",
    description: "Grand opening of the DSA '25 pandal, welcoming Maa Durga amidst chants and celebrations.",
    icon: "🪔",
  },
  {
    day: "Maha Shashti",
    date: "September 29, 2025",
    time: "8:00 AM",
    title: "Kalparambha & Bodhon",
    description: "The ritualistic beginning of the puja and the awakening of the Goddess.",
    icon: "🌺",
  },
  {
    day: "Maha Saptami",
    date: "September 30, 2025",
    time: "9:00 AM",
    title: "Nabapatrika Snan & Saptami Puja",
    description: "The holy bathing of Nabapatrika followed by the main Saptami puja and pushpanjali.",
    icon: "🌿",
  },
  {
    day: "Maha Ashtami",
    date: "October 1, 2025",
    time: "10:00 AM",
    title: "Ashtami Puja & Anjali",
    description: "One of the most significant days of Puja, with morning pushpanjali for all devotees.",
    icon: "🙏",
  },
  {
    day: "Maha Ashtami",
    date: "October 1, 2025",
    time: "4:01 PM",
    title: "Sandhi Puja",
    description: "The sacred worship at the juncture of Ashtami and Navami tithi.",
    icon: "🕯️",
  },
   {
    day: "Maha Navami",
    date: "October 2, 2025",
    time: "9:30 AM",
    title: "Navami Puja & Homa",
    description: "The final day of worship, concluding with the sacred fire ritual (homa).",
    icon: "🔥",
  },
  {
    day: "Maha Navami",
    date: "October 2, 2025",
    time: "7:00 PM",
    title: "Grand Cultural Evening",
    description: "An evening of music, dance, and drama performed by local artists and club members.",
    icon: "🎭",
  },
  {
    day: "Vijayadashami",
    date: "October 3, 2025",
    time: "4:00 PM",
    title: "Sindur Khela & Bisarjan",
    description: "A joyous farewell to the Goddess, followed by the immersion procession.",
    icon: "🎉",
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

        <div className="relative mt-16">
          <div
            className="absolute left-1/2 top-0 -ml-px h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary to-accent"
            aria-hidden="true"
          />
          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative flex items-center"
              >
                <div className="absolute left-1/2 -ml-4 h-8 w-8 rounded-full border-4 border-background bg-primary" />
                <div
                  className={`flex w-full flex-col items-start ${
                    index % 2 === 0 ? "md:items-end" : ""
                  }`}
                >
                  <div
                    className={`w-full p-4 md:w-5/12 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                      <CardHeader>
                        <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                          <span className="text-3xl">{event.icon}</span>
                          <div>
                            <p className="text-sm font-semibold text-primary">{event.day} - {event.date}</p>
                            <CardTitle className="font-headline text-2xl">{event.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{event.description}</CardDescription>
                        <p className="mt-2 font-bold text-accent">{event.time}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
