import Image from "next/image";

export default function SchedulePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Events
          </h1>
          <p className="mt-4 text-lg text-foreground/70">
            Beyond our signature Durga Puja, DSA is a hub of year-round cultural and community engagement. Explore our other vibrant initiatives.
          </p>
        </div>

        <div className="mt-20 space-y-20">
          {/* Basanta Baithak Section */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="font-headline text-3xl font-bold md:text-4xl font-bengali">বসন্ত বৈঠক</h2>
              <h3 className="font-headline text-2xl font-bold md:text-3xl text-primary -mt-2">Basanta Baithak</h3>
              <p className="mt-4 text-foreground/70">
                Alongside our grand Durga Puja, DSA proudly hosts “Basanta Baithak” — a vibrant celebration of spring inspired by Bengal’s Basanta Utsab. This annual cultural gathering features soulful Rabindra Sangeet, folk and classical dance, poetry recitations, and colorful traditional attire. Set against a backdrop of music, flowers, and joy, the event brings together people of all ages in a spirit of unity and cultural pride. Basanta Baithak reflects our deep-rooted love for art, nature, and heritage — a refreshing, joyous start to the season of colors.
              </p>
            </div>
            <div className="relative order-1 h-80 w-full rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 lg:order-2">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Basanta Baithak Celebration"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                data-ai-hint="spring festival"
              />
            </div>
          </div>

          {/* Bho-Katta Section */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative h-80 w-full rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Bho-Katta Kite Festival"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                data-ai-hint="kite festival"
              />
            </div>
            <div>
              <h2 className="font-headline text-3xl font-bold md:text-4xl font-bengali">ভো-কাট্টা</h2>
                <h3 className="font-headline text-2xl font-bold md:text-3xl text-primary -mt-2">Bho-Katta</h3>
              <p className="mt-4 text-foreground/70">
                Adding vibrant hues to the skies and hearts, DSA’s annual kite festival "Bho-Katta" is a celebration of joy, competition, and childhood nostalgia. Held beside our grand Durga Puja celebrations, this 2024 edition saw an explosion of colorful kites, cheerful shouts, and community spirit. Participants of all ages gathered to relive the age-old tradition of kite flying and thread-spinning duels, echoing "Bho-Katta!" through the sky. It’s more than just an event—it’s a reminder of our roots, our joy, and our unity. Let the skies speak the language of freedom!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
