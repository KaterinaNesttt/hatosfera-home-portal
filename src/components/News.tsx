import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const News = () => {
  const news = [
    {
      id: 1,
      title: "Як правильно оцінити вартість нерухомості у 2024 році",
      excerpt: "Детальний гід по оцінці ринкової вартості квартири чи будинку з урахуванням актуальних тенденцій ринку.",
      date: "15 січня 2024",
      readTime: "5 хв",
      category: "Поради",
    },
    {
      id: 2,
      title: "Нові умови іпотечного кредитування: що змінилось",
      excerpt: "Огляд оновлених програм державного та банківського кредитування на придбання житла.",
      date: "10 січня 2024",
      readTime: "7 хв",
      category: "Новини",
    },
    {
      id: 3,
      title: "ТОП-5 районів Києва для інвестицій у нерухомість",
      excerpt: "Аналітика найперспективніших локацій столиці для вигідних вкладень у житлову нерухомість.",
      date: "5 січня 2024",
      readTime: "6 хв",
      category: "Аналітика",
    },
  ];

  const tips = [
    {
      title: "Підготовка документів",
      description: "Перелік необхідних документів для швидкого оформлення угоди",
    },
    {
      title: "Перевірка продавця",
      description: "Як убезпечити себе від шахрайства при купівлі нерухомості",
    },
    {
      title: "Огляд квартири",
      description: "На що звертати увагу при огляді потенційного житла",
    },
  ];

  return (
    <section id="news" className="section-padding bg-secondary">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-widest text-sm">
            Блог
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Новини та матеріали
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Корисна інформація про ринок нерухомості, поради експертів та актуальні новини галузі
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Articles */}
          <div className="lg:col-span-2 space-y-6">
            {news.map((article) => (
              <Card 
                key={article.id} 
                className="bg-card border-border overflow-hidden card-hover cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 p-0">
                    Читати далі
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
            
            <div className="text-center pt-4">
              <Button variant="outline" className="btn-outline">
                Всі статті
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Sidebar Tips */}
          <div>
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground sticky top-24">
              <h3 className="font-serif text-2xl mb-6">
                Корисні матеріали
              </h3>
              
              <div className="space-y-6">
                {tips.map((tip, index) => (
                  <div 
                    key={index} 
                    className="pb-6 border-b border-primary-foreground/20 last:border-0 last:pb-0"
                  >
                    <h4 className="font-semibold mb-2 flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                        {index + 1}
                      </span>
                      {tip.title}
                    </h4>
                    <p className="text-primary-foreground/80 text-sm pl-9">
                      {tip.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <Button className="w-full mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium">
                Завантажити гід покупця
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
