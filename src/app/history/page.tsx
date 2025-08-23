
const history_events = [
    {
      year: "2010-2024",
      title: "বিবর্তনে ১৬ বছর",
      description: "সেই ২০১০ সালে পথচলা শুরু। প্রথম দুই বছর প্যান্ডেলের পুজো দিয়ে শুরু হলেও ২০১২ সালে নিজেদের তৃতীয় বর্ষেই নিয়ে আসে দুবরাজপুরের প্রথম সার্বিক থিম পুজো।",
      main: true,
    },
    { year: "২০১২", title: "আফ্রিকান জুলু কালচার" },
    { year: "২০১৩", title: "বর্ণপরিচয়" },
    { year: "২০১৪", title: "শহর থেকে দূরে" },
    { year: "২০১৫", title: "মাশরুম কিংডম" },
    { year: "২০১৬", title: "ডাকিনীনাশীনি" },
    { year: "২০১৭", title: "মামা ভাগ্নে পাহাড়" },
    { year: "২০১৮", title: "ক্রমবিবর্তনে বিশ্ব-উষ্ণায়ন" },
    { year: "২০১৯", title: "ধারাপাত" },
    { year: "২০২০", title: "কোভিড বিধি মেনে পূজা" },
    { year: "২০২১", title: "কোকামহল" },
    { year: "২০২২", title: "বাংলা ও বাঙালীয়ানা" },
    { year: "২০২৩", title: "ইডোনা" },
    { year: "২০২৪", title: "শৈশব" },
];

export default function HistoryPage() {
  return (
    <div className="bg-muted/30">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            About Us
          </h1>
           <p className="mt-6 text-lg text-foreground/80">
            Since its founding in 1979, Dubrajpur Sports Association (DSA) has stood as a cornerstone of community spirit and cultural celebration in Dubrajpur. Strategically located at Ashram More, just off Station Road, our club offers a serene and welcoming environment away from the city’s noise.
          </p>
          <p className="mt-4 text-lg text-foreground/70">
            What began as a humble sports club has evolved into a vibrant hub of tradition, art, and unity. For over four decades, DSA has championed social engagement, youth empowerment, and spiritual expression through dynamic programs and festivities. Our signature Durga Puja has become one of the most anticipated events in the region. Drawing thousands of visitors annually, it showcases creative excellence, thematic installations, and the deep-rooted devotion of our community. At DSA, we believe in building connections that last—through sport, service, and celebration.
          </p>
        </div>

        <div className="relative mt-20">
          <div
            className="absolute left-1/2 top-0 -ml-px h-full w-0.5 bg-border"
            aria-hidden="true"
          />
          {history_events.map((event, index) => (
            <div
              key={index}
              className="group relative mb-8 flex items-center md:mb-12"
            >
              <div
                className={`flex w-full items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className={`p-4 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="rounded-xl bg-card p-6 shadow-lg transition-shadow duration-300 group-hover:shadow-2xl">
                       <p className="text-sm font-semibold text-primary">{event.year}</p>
                       <h3 className="font-headline text-2xl font-bold font-bengali">{event.title}</h3>
                       {event.description && <p className="mt-2 text-foreground/70 font-bengali">{event.description}</p>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 -ml-4 hidden h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-accent text-lg font-bold text-accent-foreground shadow-md md:flex">
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
