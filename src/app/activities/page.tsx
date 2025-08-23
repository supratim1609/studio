import Image from "next/image";

const activities = [
  {
    name: "Cricket",
    description: "Fostering teamwork and sportsmanship on the cricket field, our club nurtures local talent.",
    imageSrc: "https://placehold.co/600x400.png",
    data_ai_hint: "cricket match",
  },
  {
    name: "Football",
    description: "From grassroots training to competitive matches, our football program is a hub for passion and skill.",
    imageSrc: "https://placehold.co/600x400.png",
    data_ai_hint: "football game",
  },
  {
    name: "Karate",
    description: "Building discipline, confidence, and self-defense skills through the art of karate.",
    imageSrc: "https://placehold.co/600x400.png",
    data_ai_hint: "karate class",
  },
  {
    name: "Dance",
    description: "Celebrating culture and creativity through various dance forms, from classical to contemporary.",
    imageSrc: "https://placehold.co/600x400.png",
    data_ai_hint: "dance performance",
  },
];

export default function ActivitiesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Our Activities
          </h1>
          <p className="mt-4 text-lg text-foreground/70">
            Beyond our signature Puja, DSA is a hub of year-round cultural, sports, and community engagement. Explore our vibrant initiatives.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => (
            <div key={activity.name} className="group relative h-96 overflow-hidden rounded-xl shadow-2xl">
              <Image
                src={activity.imageSrc}
                alt={activity.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                data-ai-hint={activity.data_ai_hint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-headline text-3xl font-bold text-white">
                  {activity.name}
                </h3>
                <p className="mt-2 max-h-0 text-white/80 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-40 group-hover:opacity-100">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
