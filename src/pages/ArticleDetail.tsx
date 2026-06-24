import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ChevronLeft, Phone, Calendar as CalendarIcon, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "@/components/SEO";
import { detailedArticles } from "@/data/articlesContent";

import strokeBanner from "@/assets/stroke-guide-banner.jpg";
import epilepsyBanner from "@/assets/epilepsy-guide-banner.jpg";
import migraineBanner from "@/assets/migraine-guide-banner.jpg";

// Map slugs to local assets import to prevent bundler reference errors
const imageMap: Record<string, string> = {
  "understanding-acute-stroke-treatment-patna": strokeBanner,
  "epilepsy-seizure-treatment-guide": epilepsyBanner,
  "managing-chronic-migraine-prevention-treatment": migraineBanner
};

const formatBoldText = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const renderSectionContent = (content: string) => {
  const lines = content.split("\n");
  const renderedElements: React.ReactNode[] = [];
  let currentListItems: React.ReactNode[] = [];

  const flushList = (key: string | number) => {
    if (currentListItems.length > 0) {
      renderedElements.push(
        <ul key={`list-${key}`} className="list-disc pl-6 mb-6 space-y-2">
          {currentListItems}
        </ul>
      );
      currentListItems = [];
    }
  };

  lines.forEach((line, lineIdx) => {
    if (line.startsWith("  - ")) {
      const textPart = line.replace("  - ", "");
      currentListItems.push(
        <li key={`li-${lineIdx}`} className="ml-6 text-muted-foreground text-base">
          {formatBoldText(textPart)}
        </li>
      );
      return;
    }
    
    if (line.startsWith("- ")) {
      const textPart = line.replace("- ", "");
      currentListItems.push(
        <li key={`li-${lineIdx}`} className="text-muted-foreground text-base">
          {formatBoldText(textPart)}
        </li>
      );
      return;
    }

    flushList(lineIdx);

    if (line.trim() === "") {
      renderedElements.push(<div key={`spacer-${lineIdx}`} className="h-2" />);
      return;
    }

    renderedElements.push(
      <p key={`p-${lineIdx}`} className="mb-4 leading-relaxed text-lg text-muted-foreground">
        {formatBoldText(line)}
      </p>
    );
  });

  flushList("end");
  return renderedElements;
};

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? detailedArticles[slug] : null;

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 text-center space-y-6">
          <h1 className="text-3xl font-heading font-bold text-foreground">Article Not Found</h1>
          <p className="text-muted-foreground">The guide you are looking for does not exist or has been relocated.</p>
          <Button asChild>
            <Link to="/articles">Return to Articles</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // Get mapped static asset
  const bannerImage = imageMap[article.slug] || article.image;

  // Generate BlogPosting JSON-LD Schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.description,
    "image": `https://drfaiyazahmad.com${article.image}`,
    "datePublished": "2026-06-24",
    "author": {
      "@type": "Person",
      "name": "Dr. Faiyaz Ahmad",
      "jobTitle": "Consultant Neurologist",
      "worksFor": {
        "@type": "MedicalBusiness",
        "name": "Healthy Minds Brain & Nerve Clinic"
      }
    },
    "publisher": {
      "@type": "MedicalBusiness",
      "name": "Healthy Minds Brain & Nerve Clinic",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "G-105, P.C Colony, Opp Aditya Vision, Kankarbagh",
        "addressLocality": "Patna",
        "addressRegion": "Bihar",
        "postalCode": "800020",
        "addressCountry": "IN"
      }
    },
    "about": article.schemaAbout
  };

  // Generate FAQPage JSON-LD Schema for the article FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const whatsappUrl = `https://wa.me/918102779584?text=Hello Dr. Faiyaz Ahmad, I read your article on ${article.category} and want to schedule a consultation.`;

  return (
    <Layout>
      <SEO
        title={article.title}
        description={article.description}
        keywords={article.keywords}
        schema={[blogSchema, faqSchema]}
      />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Back Link */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="pl-0 text-muted-foreground hover:text-foreground">
            <Link to="/articles" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
          </Button>
        </div>

        <article className="space-y-8">
          {/* Header Metadata */}
          <div className="space-y-4">
            <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1">
              {article.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center text-sm text-muted-foreground space-x-6 border-b border-border/40 pb-6">
              <span className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {article.date}
              </span>
              <span className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {article.readTime}
              </span>
              <span className="font-semibold text-primary">
                By Dr. Faiyaz Ahmad (DM Neurology)
              </span>
            </div>
          </div>

          {/* Banner Image */}
          <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg border border-border/20">
            <img 
              src={bannerImage} 
              alt={article.title} 
              className="object-cover w-full h-full"
            />
          </div>

          {/* Article Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-12 pt-6">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <p className="text-xl text-foreground font-medium leading-relaxed italic border-l-4 border-primary pl-6 py-2">
                {formatBoldText(article.introduction)}
              </p>

              {/* Sections */}
              <div className="space-y-8 text-foreground leading-relaxed text-lg">
                {article.sections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-foreground pt-4">
                      {section.heading}
                    </h2>
                    {section.content && (
                      <div className="space-y-2">{renderSectionContent(section.content)}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* AEO FAQ Section */}
              <div className="border-t border-border/40 pt-10 mt-10 space-y-8">
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  Common Questions & Answers (FAQ)
                </h2>
                <div className="space-y-6">
                  {article.faqs.map((faq, idx) => (
                    <div key={idx} className="space-y-2 border-b border-border/30 pb-6">
                      <h3 className="text-lg font-heading font-bold text-foreground flex items-start">
                        <span className="text-primary font-semibold mr-2">Q.</span>
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed pl-5">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-primary-light p-6 rounded-xl border border-primary/20 space-y-3">
                <h3 className="text-lg font-heading font-bold text-primary">Summary & Clinical Outlook</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {article.conclusion}
                </p>
              </div>
            </div>

            {/* Sidebar CTA Card */}
            <div className="space-y-6">
              <Card className="sticky top-24 medical-card-gradient medical-shadow border-primary/20">
                <CardContent className="p-6 space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-heading font-bold text-foreground">Consult Dr. Faiyaz Ahmad</h3>
                    <p className="text-sm text-muted-foreground">
                      Get expert diagnosis and personalized neurological care at Healthy Minds Clinic in Patna.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button asChild className="w-full">
                      <Link to="/appointments">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        Book Appointment
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="mr-2 h-4 w-4" />
                        WhatsApp Consultation
                      </a>
                    </Button>
                  </div>

                  <div className="border-t border-border/40 pt-4 space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="mr-3 h-4 w-4 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">+91 8102779584</p>
                        <p className="text-xs">Clinic Help Desk</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-3 h-4 w-4 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Mon-Sat: 2-4 PM, 7-9 PM</p>
                        <p className="text-xs">Wednesdays & Sundays Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default ArticleDetail;
