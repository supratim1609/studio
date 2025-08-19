import Image from "next/image";

const images = [
  { src: "https://placehold.co/600x800.png", alt: "Goddess Durga Idol", data_ai_hint: "durga idol" },
  { src: "https://placehold.co/600x400.png", alt: "Cultural Dance Performance", data_ai_hint: "indian dance" },
  { src: "https://placehold.co/600x600.png", alt: "Aarti Ceremony", data_ai_hint: "hindu ritual" },
  { src: "https://placehold.co/600x700.png", alt: "Crowd of Devotees", data_ai_hint: "festival crowd" },
  { src: "https://placehold.co/600x450.png", alt: "Pandal Decoration", data_ai_hint: "festival decoration" },
  { src: "https://placehold.co/600x900.png", alt: "Children in Traditional Attire", data_ai_hint: "indian children" },
  { src: "https://placehold.co/600x500.png", alt: "Sindur Khela", data_ai_hint: "holi festival" },
  { src: "https://placehold.co/600x600.png", alt: "Bhog Distribution", data_ai_hint: "food sharing" },
  { src: "https://placehold.co/600x400.png", alt: "Evening Lights at Pandal", data_ai_hint: "festival lights" },
];

export default function GalleryPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Gallery
          </h1>
          <p className="mt-4 text-lg text-foreground/70">
            A visual tapestry of devotion, culture, and joy from our past celebrations. Relive the unforgettable moments.
          </p>
        </div>

        <div className="columns-2 gap-4 pt-16 md:columns-3 lg:columns-4">
          {images.map((image, index) => (
            <div key={index} className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={800}
                className="h-auto w-full transform transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={image.data_ai_hint}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex h-full items-end p-4">
                  <p className="text-sm font-bold text-white">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
