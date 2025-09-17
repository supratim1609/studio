
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, GalleryHorizontal, History, Users, Activity, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HeadlineAnimation } from "@/components/headline-animation";
import { TypingAnimation } from "@/components/typing-animation";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { motion } from "framer-motion";
import { InteractiveImage } from "@/components/interactive-image";

export default function Home() {

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
  };
  
  const textContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };


  return (
    <div className="flex flex-col">
      <section className="relative h-dvh w-full overflow-hidden">
        <div className="absolute inset-0">
          <HeroSlideshow />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
            <div className="flex flex-col items-center">
                 <h1 className="font-headline font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl">
                  <span className="block text-2xl font-normal text-foreground/80 md:text-3xl">Welcome to</span>
                  <HeadlineAnimation texts={["Dubrajpur Sports Association", "DSA"]} />
                </h1>
                <div className="mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
                    <TypingAnimation
                        texts={[
                            "Beyond Celebrations – A Home for Culture, Sports & Togetherness.",
                        ]}
                        className="text-primary font-bold"
                    />
                </div>

                <div className="mt-10 grid w-full max-w-4xl grid-cols-1 items-center gap-8 rounded-xl bg-background p-8 shadow-lg backdrop-blur-md md:grid-cols-3">
                    <div className="relative h-64 w-full md:h-full">
                         <InteractiveImage
                          src="/tshirt.webp"
                          alt="DSA Official T-Shirt"
                          data_ai_hint="tshirt design"
                      />
                    </div>
                    <div className="text-left md:col-span-2">
                        <h2 className="font-headline text-3xl font-bold">Get the Official DSA T-Shirt!</h2>
                        <p className="mt-2 text-foreground/80">Wear your pride! This limited edition t-shirt features a unique design celebrating our club's heritage. Show your support and become a part of the DSA legacy.</p>
                        <Button asChild size="lg" className="mt-6 font-bold">
                            <Link href="tel:08906479173">
                                <Phone className="mr-2"/>
                                Call to Order
                            </Link>
                        </Button>
                    </div>
                </div>
                
            </div>
        </div>
      </section>

      <section id="about" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                A Legacy of Celebration
              </h2>
              <p className="mt-4 text-lg text-foreground/70">
                Dubrajpur Sports Association (DSA) has been at the heart of the community for generations, fostering unity and cultural heritage. Our Durga Puja is more than just a festival; it's a grand spectacle of art, devotion, and togetherness that brings smiles to thousands of faces every year.
              </p>
              <Button asChild className="mt-8 font-bold">
                <Link href="/history">Our History</Link>
              </Button>
            </div>
            <div className="relative h-80 w-full rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105">
               <Image
                src="/slideshow8.webp"
                alt="DSA Club Members celebrating"
                layout="fill"
                objectFit="fill"
                className="rounded-xl"
                data-ai-hint="indian festival crowd"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-20 lg:py-32">
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
                Explore our year-round calendar of events, from major tournaments to cultural festivals and community gatherings.
                </CardDescription>
                 <Button asChild variant="link" className="px-0 mt-4 font-bold">
                  <Link href="/schedule">Explore events <ArrowRight className="ml-2"/></Link>
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
                    <Activity className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-2xl">Activities</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                 Discover the various sports and cultural activities that DSA proudly organizes throughout the year.
                </CardDescription>
                 <Button asChild variant="link" className="px-0 mt-4 font-bold">
                  <Link href="/activities">Discover Activities <ArrowRight className="ml-2"/></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="support" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-xl bg-primary/10 p-10 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Become a Part of Our Family
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
             Your support helps us continue our tradition of grand celebrations and community service. Join us as a member or contribute with a donation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="font-bold">
                <Link href="/join">Become a Member</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

    