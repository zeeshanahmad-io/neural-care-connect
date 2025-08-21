import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Clock, Award, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "Over 12 years of specialized neurological care with training from premier institutions including AIIMS New Delhi."
    },
    {
      icon: Users,
      title: "Patient-Centered Care",
      description: "Comprehensive treatment plans tailored to each patient's unique needs and health goals."
    },
    {
      icon: Clock,
      title: "Timely Treatment",
      description: "Quick diagnosis and immediate intervention for neurological emergencies and urgent conditions."
    },
    {
      icon: Award,
      title: "Advanced Treatment",
      description: "Latest neurological treatments and evidence-based medicine for optimal patient outcomes."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      condition: "Migraine Treatment",
      text: "Dr. Faiyaz Ahmad's treatment plan completely changed my life. My chronic migraines are now well-controlled.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      condition: "Stroke Recovery",
      text: "Excellent care during my stroke treatment. Dr. Ahmad's quick intervention and follow-up care were outstanding.",
      rating: 5
    },
    {
      name: "Meera Devi",
      condition: "Epilepsy Management",
      text: "Very knowledgeable doctor. My seizures are now completely controlled with his expert treatment plan.",
      rating: 5
    }
  ];

  return (
    <Layout>
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
              Why Choose Dr. Faiyaz Ahmad?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Excellence in neurological care backed by years of experience and a commitment to patient-centered treatment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="medical-card-gradient hover:shadow-lg medical-transition group text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 medical-transition">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
              Areas of Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Comprehensive neurological care covering a wide range of conditions with specialized treatment approaches.
            </p>
            <Button asChild size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
              Patient Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Read what our patients say about their experience with Dr. Faiyaz Ahmad's neurological care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="medical-card-gradient">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards better neurological health. Book your consultation today 
            or reach out to us for any questions about your neurological concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/appointments">
                Book Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
