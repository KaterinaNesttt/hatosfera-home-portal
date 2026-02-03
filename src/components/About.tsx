import { CheckCircle, Award, Shield, Heart } from "lucide-react";
import ownerImage from "@/assets/owner.jpg";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Професіоналізм",
      description: "15+ років успішної роботи на ринку нерухомості",
    },
    {
      icon: Shield,
      title: "Надійність",
      description: "Повний юридичний супровід кожної угоди",
    },
    {
      icon: Heart,
      title: "Індивідуальний підхід",
      description: "Враховую всі побажання та потреби клієнтів",
    },
  ];

  const achievements = [
    "Понад 1200 успішних угод",
    "Власна база перевірених об'єктів",
    "Ліцензований ріелтор",
    "Безкоштовна оцінка нерухомості",
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Про мене
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Агент, якому довіряють
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ксенія Бондаренко — професіонал, який допомагає знаходити ідеальні рішення для вашого комфорту
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Owner Card */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl overflow-hidden shadow-lg">
              <img
                src={ownerImage}
                alt="Ксенія Бондаренко - агент з нерухомості"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-8">
                <h3 className="font-serif text-2xl text-primary-foreground mb-1">
                  Ксенія Бондаренко
                </h3>
                <p className="text-primary-foreground/80">
                  Агент з нерухомості
                </p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Ваш надійний партнер у світі нерухомості
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Я працюю на ринку нерухомості з 2009 року і моя місія — зробити процес купівлі, 
              продажу та оренди нерухомості максимально простим, прозорим та комфортним 
              для кожного клієнта.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="grid sm:grid-cols-2 gap-3">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
