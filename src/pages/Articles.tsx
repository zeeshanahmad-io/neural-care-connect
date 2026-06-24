import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import SEO from "@/components/SEO";

import strokeBanner from "@/assets/stroke-guide-banner.png";
import epilepsyBanner from "@/assets/epilepsy-guide-banner.png";
import migraineBanner from "@/assets/migraine-guide-banner.png";

export const articlesData = [
  {
    slug: "understanding-acute-stroke-treatment-patna",
    title: "Understanding Acute Stroke: Symptoms, Treatment, and Emergency Care in Patna",
    description: "Get critical medical information on identifying stroke symptoms (FAST), the thrombolysis window period, mechanical thrombectomy, and emergency neurologist consultation in Patna, Bihar.",
    excerpt: "Learn how to spot acute stroke symptoms (FAST) and find emergency stroke care, thrombolysis, and mechanical thrombectomy treatments in Patna. Time is brain — get immediate medical help.",
    category: "Stroke Management",
    readTime: "9 min read",
    date: "June 24, 2026",
    image: strokeBanner,
    keywords: "stroke treatment Patna, stroke symptoms FAST, thrombolysis clinic Patna, mechanical thrombectomy Patna, neurologist Kankarbagh emergency"
  },
  {
    slug: "epilepsy-seizure-treatment-guide",
    title: "Epilepsy and Seizure Management: A Patient's Guide to Diagnostic Testing and Treatment",
    description: "Read our patient guide on epilepsy treatment in Patna, Bihar. Learn about focal and generalized seizures, EEG testing, medication management, and advanced surgery.",
    excerpt: "Understand focal and generalized seizures, the importance of digital EEG diagnostic testing, and modern treatment options for epilepsy in Patna, Bihar. Get professional seizure management tips.",
    category: "Epilepsy Care",
    readTime: "8 min read",
    date: "June 23, 2026",
    image: epilepsyBanner,
    keywords: "epilepsy treatment Patna, seizure doctor Patna, EEG test clinic Patna, epilepsy medication management, Kankarbagh neurology clinic"
  },
  {
    slug: "managing-chronic-migraine-prevention-treatment",
    title: "Managing Chronic Migraine: Prevention, Triggers, and Modern Treatment Options",
    description: "Explore the modern treatments for chronic migraine in Patna. Learn about migraine triggers, prevention plans, nerve blocks, and Botox for migraines from a consultant neurologist.",
    excerpt: "Learn to identify chronic migraine triggers and discover advanced preventative therapies, including lifestyle modifications, Botox, and nerve blocks in Patna. Find chronic headache relief today.",
    category: "Headache Medicine",
    readTime: "8 min read",
    date: "June 22, 2026",
    image: migraineBanner,
    keywords: "migraine specialist Patna, chronic headache clinic Patna, migraine prevention therapy, Kankarbagh headache treatment, neurologist consultation Patna"
  }
];

const Articles = () => {
  const articlesSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Patient Education & Articles Hub - Healthy Minds Clinic",
    "description": "Access patient education guides and research articles about stroke management, epilepsy care, and migraine treatments written by Dr. Faiyaz Ahmad in Patna, Bihar.",
    "publisher": {
      "@type": "MedicalBusiness",
      "name": "Healthy Minds Brain & Nerve Clinic",
      "address": "G-105, P.C Colony, Opp Aditya Vision, Kankarbagh, Patna, Bihar 800020, India"
    }
  };

  return (
    <Layout>
      <SEO
        title="Patient Education & Neurology Articles | Healthy Minds Patna"
        description="Read comprehensive guides and medical articles on acute stroke management, digital EEG testing, epilepsy treatment, and chronic migraine prevention by Patna neurologist Dr. Faiyaz Ahmad."
        keywords="neurologist articles Patna, stroke guide Patna, epilepsy information, migraine prevention tips, Kankarbagh medical guides, neurology blog Bihar"
        schema={articlesSchema}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 transition-all text-sm px-3 py-1">
            Patient Education Center
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-foreground">
            Neurology Insights & Patient Guides
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering patients with expert, evidence-based medical information. Read detailed guides on stroke emergencies, epilepsy diagnostic tests, and modern chronic migraine treatments.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-8"></div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article, index) => (
            <Card key={index} className="flex flex-col h-full overflow-hidden medical-card-gradient hover:shadow-xl medical-transition group border border-border/55">
              {/* Image Banner */}
              <div className="relative aspect-video overflow-hidden border-b border-border/30">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-semibold">
                  {article.category}
                </Badge>
              </div>

              {/* Card Content */}
              <CardContent className="flex flex-col flex-grow p-6 space-y-4">
                <div className="flex items-center text-xs text-muted-foreground space-x-4">
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-3.5 w-3.5" />
                    {article.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="mr-1 h-3.5 w-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    <Link to={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-auto border-t border-border/40">
                  <Button asChild variant="ghost" className="p-0 text-primary hover:text-primary-hover hover:bg-transparent font-semibold group/btn">
                    <Link to={`/articles/${article.slug}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Consultation Call to Action */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 text-center max-w-4xl mx-auto space-y-6">
          <BookOpen className="h-12 w-12 text-primary mx-auto" />
          <h2 className="text-2xl font-heading font-bold text-foreground">Have Questions About a Neurological Condition?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These guides are for educational purposes. For a personalized diagnosis and medical care plan, book an appointment with Dr. Faiyaz Ahmad in Patna, Bihar.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/appointments">Book an Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Our Clinic</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Articles;
