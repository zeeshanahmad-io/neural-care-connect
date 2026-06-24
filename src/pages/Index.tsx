import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Clock, Award, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Faiyaz Ahmad",
    "image": "https://drfaiyazahmad.com/assets/dr-faiyaz-ahmad.png",
    "telephone": "+91 8102779584",
    "email": "contact@drfaiyazahmad.com",
    "medicalSpecialty": "Neurology",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "G-105, P.C Colony, Opp Aditya Vision, Kankarbagh",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "postalCode": "800020",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.5941",
      "longitude": "85.1633"
    },
    "url": "https://drfaiyazahmad.com/",
    "logo": "https://drfaiyazahmad.com/favicon.ico",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
        "opens": "14:00",
        "closes": "16:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
        "opens": "19:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://wa.me/918102779584"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the best neurologist in Patna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dr. Faiyaz Ahmad is a leading neurologist in Patna, Bihar, with over 12 years of specialized clinical experience. He completed MD Medicine from PMCH and DM Neurology from Burdwan Medical College, and completed intensive residency training at the prestigious AIIMS, New Delhi."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Dr. Faiyaz Ahmad's neurology clinic located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dr. Faiyaz Ahmad's clinic, Healthy Minds Brain & Nerve Clinic, is located at G-105, P.C Colony, opposite Aditya Vision, Kankarbagh, Patna, Bihar 800020, India. It is easily accessible by public transport and offers ample parking."
        }
      },
      {
        "@type": "Question",
        "name": "What neurological conditions does Dr. Faiyaz Ahmad treat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dr. Faiyaz Ahmad specializes in the treatment and management of acute stroke, epilepsy, chronic migraines and headaches, movement disorders (including Parkinson's disease), peripheral neuropathy, memory loss, and Alzheimer's disease."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book an appointment with Dr. Faiyaz Ahmad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book a consultation by visiting the 'Book Appointment' page on our website at drfaiyazahmad.com/appointments and submitting the request form, or by calling the clinic directly at +91 8102779584."
        }
      },
      {
        "@type": "Question",
        "name": "What are the working hours of the Healthy Minds Clinic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The clinic operates Monday, Tuesday, Thursday, Friday, and Saturday from 2:00 PM to 4:00 PM and from 7:00 PM to 9:00 PM. The clinic is closed on Wednesdays and Sundays."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "Who is the best neurologist in Patna?",
      answer: "Dr. Faiyaz Ahmad is a leading neurologist in Patna, Bihar, with over 12 years of specialized clinical experience. He completed MD Medicine from PMCH and DM Neurology from Burdwan Medical College, and completed intensive residency training at the prestigious AIIMS, New Delhi."
    },
    {
      question: "Where is Dr. Faiyaz Ahmad's neurology clinic located?",
      answer: "Dr. Faiyaz Ahmad's clinic, Healthy Minds Brain & Nerve Clinic, is located at G-105, P.C Colony, opposite Aditya Vision, Kankarbagh, Patna, Bihar 800020, India. The location is easily accessible by bus, train, and other public transport, with dedicated parking available."
    },
    {
      question: "What neurological conditions does Dr. Faiyaz Ahmad treat?",
      answer: "Dr. Faiyaz Ahmad specializes in treating complex neurological conditions, including acute stroke management, epilepsy and seizures, chronic migraine and cluster headaches, movement disorders like Parkinson's disease, peripheral neuropathy, and memory disorders like Alzheimer's or dementia."
    },
    {
      question: "How can I book an appointment with Dr. Faiyaz Ahmad?",
      answer: "You can book an appointment by navigating to our Book Appointment page and submitting the request form, or by calling the clinic direct line at +91 8102779584. You can also contact us via WhatsApp for urgent medical inquiries."
    },
    {
      question: "What are the working hours of the Healthy Minds Clinic?",
      answer: "The clinic is open on Monday, Tuesday, Thursday, Friday, and Saturday. Consultation timings are 2:00 PM - 4:00 PM and 7:00 PM - 9:00 PM. The clinic remains closed on Wednesdays and Sundays."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Dr. Faiyaz Ahmad - Best Neurologist in Patna | Expert Neurological Care"
        description="Consult Dr. Faiyaz Ahmad (DM Neurology, Ex-AIIMS New Delhi), the leading neurologist in Patna for expert treatment of stroke, epilepsy, migraines, neuropathies, and Parkinson's at Healthy Minds Clinic, Kankarbagh."
        keywords="Dr. Faiyaz Ahmad, neurologist Patna, best neurologist in Patna, stroke specialist Patna, epilepsy treatment Patna, migraine doctor Patna, Kankarbagh neurology clinic"
        schema={[physicianSchema, faqSchema]}
      />
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
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-light rounded-full flex items-center justify-center group-hover:bg-primary/20 medical-transition">
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

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find quick answers to common questions about neurological treatments, clinic schedules, and appointment bookings.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card medical-shadow">
                <AccordionTrigger className="text-left font-heading text-lg font-semibold hover:no-underline text-foreground py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
