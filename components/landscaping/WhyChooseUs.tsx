import { Award, Clock, Leaf, Shield, ThumbsUp, Users } from "lucide-react";
import { WhyChooseUsData } from "./types";

interface WhyChooseUsProps {
  data: WhyChooseUsData;
}

export default function WhyChooseUs({ data }: WhyChooseUsProps) {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {data.title}
          </h2>
          <p className="text-muted-foreground text-lg">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-green-50 text-green-600 group-hover:bg-green-100 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="mt-4 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-8 p-8 rounded-2xl bg-green-50">
            {data.stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center px-6 ${
                  index === 1 ? "border-l border-r border-green-200" : ""
                }`}
              >
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
