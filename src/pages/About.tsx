import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "DM Neurology",
      institution: "Burdwan Medical College & Hospital, West Bengal",
      year: "2018–2021",
      description: "Specialized training in advanced neurological conditions and interventional neurology"
    },
    {
      degree: "MD Medicine",
      institution: "Patna Medical College & Hospital, Bihar",
      year: "2009–2012",
      description: "Comprehensive internal medicine training with focus on neurological disorders"
    },
    {
      degree: "MBBS",
      institution: "Darbhanga Medical College & Hospital, Bihar",
      year: "2005–2009",
      description: "Bachelor of Medicine and Bachelor of Surgery"
    }
  ];

  const experience = [
    {
      title: "Consultant Neurologist",
      organization: "PARAS-HMRI, Patna",
      period: "2021–2022",
      description: "Leading comprehensive neurological care and emergency stroke management"
    },
    {
      title: "Assistant Professor",
      organization: "IGIMS, Patna",
      period: "2017–2018",
      description: "Teaching neurology residents and managing complex neurological cases"
    },
    {
      title: "Senior Resident",
      organization: "IGIMS, Patna",
      period: "2013–2016",
      description: "Advanced training in neurology and research in movement disorders"
    },
    {
      title: "Senior Resident",
      organization: "AIIMS, New Delhi",
      period: "2012–2013",
      description: "Intensive training in neurocritical care and neurointervention"
    }
  ];

  const publications = [
    {
      title: "Novel Therapeutic Approaches in Ischemic Stroke Management",
      authors: "Ahmad F, Sharma R, Kumar S",
      journal: "Indian Journal of Neurology",
      year: "2023"
    },
    {
      title: "Epidemiology of Epilepsy in Eastern India: A Comprehensive Study",
      authors: "Ahmad F, Verma P, Singh A, Gupta M",
      journal: "Neurology India",
      year: "2022"
    },
    {
      title: "Treatment Outcomes in Migraine: A Multicenter Analysis",
      authors: "Ahmad F, Patel K",
      journal: "Headache Medicine Journal",
      year: "2021"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            About Dr. Faiyaz Ahmad
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With over 12 years of dedicated experience in neurology, Dr. Faiyaz Ahmad combines 
              cutting-edge medical expertise with compassionate patient care. His journey from AIIMS 
              New Delhi to leading neurological practices has been marked by a commitment to excellence 
              in treating complex neurological conditions.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Philosophy */}
        <Card className="mb-16 medical-card-gradient medical-shadow">
          <CardContent className="p-8">
            <h2 className="text-2xl font-heading font-semibold mb-4 text-center">Philosophy of Care</h2>
            <p className="text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              "Every patient deserves personalized, evidence-based neurological care delivered with empathy 
              and understanding. My approach combines the latest advances in neurology with time-tested 
              clinical wisdom to provide comprehensive care that addresses not just the condition, 
              but the whole person."
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-heading font-semibold">Education & Training</h2>
          </div>
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="medical-card-gradient hover:shadow-lg medical-transition">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                    <Badge variant="secondary" className="md:ml-4 self-start md:self-center mt-2 md:mt-0">
                      {edu.year}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Briefcase className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-heading font-semibold">Professional Experience</h2>
          </div>
          <div className="grid gap-6">
            {experience.map((exp, index) => (
              <Card key={index} className="medical-card-gradient hover:shadow-lg medical-transition">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <Badge variant="outline" className="md:ml-4 self-start md:self-center mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">{exp.organization}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section>
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-heading font-semibold">Recent Publications</h2>
          </div>
          <div className="grid gap-6">
            {publications.map((pub, index) => (
              <Card key={index} className="medical-card-gradient hover:shadow-lg medical-transition">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground leading-tight flex-1">
                      {pub.title}
                    </h3>
                    <Badge className="ml-4 flex-shrink-0">{pub.year}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">{pub.authors}</p>
                  <p className="text-primary font-medium">{pub.journal}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;