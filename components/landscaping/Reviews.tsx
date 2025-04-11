import { Star } from "lucide-react";

const reviews = [
  {
    name: "Jagjit S",
    role: "Local Guide",
    time: "2 years ago",
    rating: 5,
    quote:
      "Great place for all your landscape needs. They also have a very cosy cafe with tasty selections.",
  },
  {
    name: "Ruviantie Roslan",
    role: "Customer",
    time: "2 years ago",
    rating: 5,
    quote:
      "Positive. Responsiveness, Punctuality, Quality, Professionalism, Value.",
  },
  {
    name: "Hazura Hassan",
    role: "Local Guide",
    time: "2 years ago",
    rating: 5,
    quote: "The food is all delicious.. tip top menu.. the best services",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Read reviews from our satisfied customers who have experienced our
            services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-background rounded-lg border p-6 shadow-sm"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    {review.time}
                  </span>
                </div>
                <blockquote className="flex-1 mb-4 italic text-muted-foreground">
                  "{review.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{review.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
