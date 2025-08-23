
const history_events = [
  {
    year: "1950",
    title: "Foundation of DSA",
    description:
      "A group of visionaries laid the foundation for the Dubrajpur Sports Association, aiming to foster community spirit through sports and culture.",
  },
  {
    year: "1955",
    title: "The First Durga Puja",
    description:
      "DSA organized its first Durga Puja, a small but heartfelt celebration that marked the beginning of a cherished annual tradition.",
  },
  {
    year: "1980",
    title: "Inauguration of Community Hall",
    description:
      "With overwhelming support from the community, the club inaugurated its own community hall, providing a permanent venue for events.",
  },
  {
    year: "2000",
    title: "Silver Jubilee Celebration",
    description:
      "The club celebrated 50 years of community service and cultural festivities with a grand Silver Jubilee event, attended by thousands.",
  },
  {
    year: "2023",
    title: "Record Footfall & Recognition",
    description:
      "DSA's Durga Puja received widespread acclaim and saw a record number of visitors, cementing its status as a premier celebration in the region.",
  },
];

export default function HistoryPage() {
  return (
    <div className="bg-muted/30">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Our Legacy
          </h1>
          <p className="mt-4 text-lg text-foreground/70">
            A journey through time, celebrating the milestones that have shaped the Dubrajpur Sports Association.
          </p>
        </div>

        <div className="relative mt-20">
          <div
            className="absolute left-1/2 top-0 -ml-px h-full w-0.5 bg-border"
            aria-hidden="true"
          />
          {history_events.map((event, index) => (
            <div
              key={event.year}
              className="group relative mb-12 flex items-center md:mb-24"
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
                       <h3 className="font-headline text-2xl font-bold">{event.title}</h3>
                       <p className="mt-2 text-foreground/70">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 -ml-4 hidden h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-accent text-lg font-bold text-accent-foreground shadow-md md:flex">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
