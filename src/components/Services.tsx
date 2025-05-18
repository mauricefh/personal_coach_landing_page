import { services } from "@/constants";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Services() {
  return (
    <section
      id="services"
      className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Transformational Coaching Packages
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Personalized programs designed to help you breakthrough limitations
            and achieve extraordinary results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  {service.popular && (
                    <Badge variant="default" className="ml-2">
                      Most Popular
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-lg font-semibold text-primary mt-2">
                  ${service.price}
                  {service.priceSuffix && ` ${service.priceSuffix}`}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {service.desc}
                </p>

                {service.features && (
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
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
                        <span className="text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>

              <div className="px-6 pb-6">
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                  Get Started
                </button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Not sure which package is right for you?
          </p>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Book a Free Discovery Call
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
          </button>
        </div>
      </div>
    </section>
  );
}
