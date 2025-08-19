import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Arijit Banerjee",
    role: "President",
    avatar: "https://placehold.co/200x200.png",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
     data_ai_hint: "man portrait",
  },
  {
    name: "Priya Das",
    role: "Secretary",
    avatar: "https://placehold.co/200x200.png",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
     data_ai_hint: "woman portrait",
  },
  {
    name: "Rohan Dutta",
    role: "Treasurer",
    avatar: "https://placehold.co/200x200.png",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
     data_ai_hint: "man face",
  },
  {
    name: "Sneha Gupta",
    role: "Cultural Secretary",
    avatar: "https://placehold.co/200x200.png",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
    data_ai_hint: "woman face",
  },
  {
    name: "Vikram Singh",
    role: "Executive Member",
    avatar: "https://placehold.co/200x200.png",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
    data_ai_hint: "indian man",
  },
  {
    name: "Ananya Sharma",
    role: "Executive Member",
    avatar: "https://placehold.co/200x200.png",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
     data_ai_hint: "indian woman",
  },
];

export default function TeamPage() {
  return (
    <div className="bg-secondary/30">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Our Team
          </h1>
          <p className="mt-4 text-lg text-foreground/70">
            Meet the dedicated individuals who work tirelessly behind the scenes to make our Durga Puja a memorable experience for everyone.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.name} className="group overflow-hidden text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <CardContent className="p-6">
                <Avatar className="mx-auto h-32 w-32 border-4 border-primary/50 transition-transform duration-300 group-hover:scale-110">
                  <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.data_ai_hint} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-headline text-2xl font-bold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
                <div className="mt-4 flex justify-center gap-4">
                  <Link href={member.social.linkedin} className="text-foreground/60 transition-colors hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                   <Link href={member.social.facebook} className="text-foreground/60 transition-colors hover:text-primary">
                    <Facebook className="h-5 w-5" />
                  </Link>
                   <Link href={member.social.instagram} className="text-foreground/60 transition-colors hover:text-primary">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
