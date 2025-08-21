import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Target, Activity, Stethoscope, Timer, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Stroke Management",
      description: "Comprehensive acute stroke care including thrombolysis, mechanical thrombectomy, and post-stroke rehabilitation planning.",
      conditions: ["Ischemic Stroke", "Hemorrhagic Stroke", "TIA (Mini Stroke)", "Stroke Prevention"],
      whenToConsult: "Sudden weakness, speech difficulty, facial drooping, severe headache"
    },
    {
      icon: Zap,
      title: "Epilepsy Treatment",
      description: "Advanced epilepsy management with EEG monitoring, medication optimization, and surgical referrals when indicated.",
      conditions: ["Focal Seizures", "Generalized Seizures", "Status Epilepticus", "Epilepsy Surgery Evaluation"],
      whenToConsult: "Recurrent seizures, loss of consciousness, memory lapses during episodes"
    },
    {
      icon: Target,
      title: "Headache & Migraine",
      description: "Specialized treatment for various headache disorders with personalized management plans and prevention strategies.",
      conditions: ["Migraine", "Tension Headaches", "Cluster Headaches", "Chronic Daily Headache"],
      whenToConsult: "Severe or frequent headaches, changes in headache pattern, associated neurological symptoms"
    },
    {
      icon: Activity,
      title: "Movement Disorders",
      description: "Expert diagnosis and management of movement disorders including Parkinson's disease and tremor conditions.",
      conditions: ["Parkinson's Disease", "Essential Tremor", "Dystonia", "Chorea"],
      whenToConsult: "Tremors, muscle stiffness, involuntary movements, balance problems"
    },
    {
      icon: Stethoscope,
      title: "Peripheral Neuropathy",
      description: "Comprehensive evaluation and treatment of nerve disorders affecting peripheral nervous system.",
      conditions: ["Diabetic Neuropathy", "Carpal Tunnel Syndrome", "Guillain-Barré Syndrome", "Chronic Pain"],
      whenToConsult: "Numbness, tingling, weakness in hands or feet, burning pain"
    },
    {
      icon: Timer,
      title: "Memory Disorders",
      description: "Early detection and management of cognitive decline, dementia, and memory-related conditions.",
      conditions: ["Alzheimer's Disease", "Vascular Dementia", "Mild Cognitive Impairment", "Memory Loss"],
      whenToConsult: "Memory problems, confusion, difficulty with daily tasks, personality changes"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Neurological Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive neurological care covering the full spectrum of brain and nervous system disorders. 
            Each treatment plan is personalized to meet your specific needs and health goals.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-8"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="medical-card-gradient hover:shadow-lg medical-transition group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-light rounded-full flex items-center justify-center group-hover:bg-primary/20 medical-transition">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Conditions Treated:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.conditions.map((condition, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-primary-light text-primary px-2 py-1 rounded-full"
                      >
                        {condition}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-sm text-foreground mb-2">When to consult:</h4>
                  <p className="text-sm text-muted-foreground">
                    {service.whenToConsult}
                  </p>
                </div>

                <Button asChild className="w-full mt-4">
                  <Link to="/appointments">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Consultation
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Section */}
        <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200 dark:from-red-950 dark:to-red-900 dark:border-red-800">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-heading font-semibold mb-4 text-red-800 dark:text-red-200">
              Emergency Neurological Conditions
            </h2>
            <p className="text-red-700 dark:text-red-300 mb-6 max-w-2xl mx-auto">
              Seek immediate medical attention for sudden severe headache, stroke symptoms (FAST - Face drooping, 
              Arm weakness, Speech difficulty, Time to call emergency), seizures, or sudden loss of consciousness.
            </p>
            <div className="space-y-2 text-sm text-red-600 dark:text-red-400">
              <p><strong>Emergency Helpline:</strong> Call 102 or visit nearest emergency department</p>
              <p><strong>For urgent consultations:</strong> Contact via WhatsApp for immediate guidance</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Services;