import { callToAction } from "@/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 -rotate-1 scale-105 origin-center"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {callToAction.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {callToAction.subtitle}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Ready for Your Breakthrough?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {callToAction.description}
              </p>
              <div className="space-y-2">
                {callToAction.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goals">Your Biggest Challenge</Label>
                <Input
                  id="goals"
                  placeholder="What would you like to overcome?"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                {callToAction.action}
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Button>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-300 inline-flex items-center">
            Prefer to email directly?
            <a
              href={`mailto:${callToAction.email}`}
              className="ml-2 font-medium text-primary hover:underline"
            >
              {callToAction.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
