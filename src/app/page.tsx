import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, GalleryHorizontal, History, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AlpanaIcon } from "@/components/icons/alpana";
import { Countdown } from "@/components/countdown";
import { DhakPlayer } from "@/components/dhak-player";

export default function Home() {
  const pujaStartDate = new Date("2025-09-28T18:00:00");

  return (
    <div className="flex flex-col">
       <section className="relative h-[calc(100dvh)] w-full">
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1800x1200.png"
            alt="Durga Puja Celebration"
            fill
            objectFit="cover"
            className="opacity-30"
            data-ai-hint="durga puja celebration"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
            <div className="flex flex-col items-center">
                <AlpanaIcon className="h-20 w-20 text-primary" />
                <h1 className="mt-4 font-headline text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
                    Durga pujo 2025
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
                    Experience the divine celebration of Durga Puja with Dubrajpur Sporting Association. A fusion of tradition, culture, and community spirit.
                </p>
                
                <Countdown targetDate={pujaStartDate.toISOString()} />
                
                <div className="mt-10 flex flex-wrap gap-4 justify-center">
                    <Button asChild size="lg" className="font-bold">
                    <Link href="/schedule">
                        View Schedule <ArrowRight className="ml-2" />
                    </Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>

      <section id="about" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                A Legacy of Celebration
              </h2>
              <p className="mt-4 text-lg text-foreground/70">
                Dubrajpur Sporting Association (DSA) has been at the heart of the community for generations, fostering unity and cultural heritage. Our Durga Puja is more than just a festival; it's a grand spectacle of art, devotion, and togetherness that brings smiles to thousands of faces every year.
              </p>
              <Button asChild className="mt-8 font-bold">
                <Link href="/history">Our History</Link>
              </Button>
            </div>
            <div className="relative h-80 w-full rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105">
               <Image
                src="https://placehold.co/600x400.png"
                alt="DSA Club Members"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                data-ai-hint="indian community event"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Join the Festivities
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/70">
            Dive into the heart of our celebration. Explore events, meet our team, relive memories, and learn about our rich past.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="transform text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-2xl">Events</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  From the grand inauguration to the heartfelt send-off, discover our full schedule of pujas, cultural programs, and more.
                </CardDescription>
                 <Button asChild variant="link" className="px-0 mt-4 font-bold">
                  <Link href="/schedule">Full Schedule <ArrowRight className="ml-2"/></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="transform text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <CardHeader>
                 <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <GalleryHorizontal className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-2xl">Gallery</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A visual journey through the vibrant colors, emotions, and divine moments of our past celebrations.
                </CardDescription>
                <Button asChild variant="link" className="px-0 mt-4 font-bold">
                  <Link href="/gallery">View Photos <ArrowRight className="ml-2"/></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="transform text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <CardHeader>
                 <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <History className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-2xl">History</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Travel back in time and explore the legacy of the DSA, a story of community, culture, and celebration.
                </CardDescription>
                 <Button asChild variant="link" className="px-0 mt-4 font-bold">
                  <Link href="/history">Explore Legacy <ArrowRight className="ml-2"/></Link>
                </Button>
              </CardContent>
            </Card>
             <Card className="transform text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <CardHeader>
                 <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Users className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-2xl">Our Team</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                    Meet the passionate individuals who work tirelessly to make the DSA Durga Puja a grand success every year.
                </CardDescription>
                 <Button asChild variant="link" className="px-0 mt-4 font-bold">
                  <Link href="/team">Meet the Team <ArrowRight className="ml-2"/></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <DhakPlayer />
    </div>
  );
}
