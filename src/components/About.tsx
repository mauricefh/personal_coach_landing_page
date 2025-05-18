import { about } from "@/constants";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Card className="overflow-hidden shadow-lg pl-2">
          <div className="flex flex-col md:flex-row">
            {/* Image Section - 50% */}
            <div className="w-full md:w-1/2 relative h-80 md:h-auto">
              <Image
                src={about.imageUrl}
                alt={about.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r md:from-black/30 md:to-transparent" />
            </div>

            {/* Text Section - 50% */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-white dark:bg-gray-900">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {about.title}
                  </h2>
                  <p className="text-lg text-primary mt-2">{about.subtitle}</p>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {about.bio}
                </p>

                {about.qualifications && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      My Qualifications:
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      {about.qualifications.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 text-primary">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {about.signature && (
                  <div className="mt-6">
                    <Image
                      src={about.signature}
                      alt="Signature"
                      width={150}
                      height={50}
                      className="dark:invert"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
