import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock, MapPin, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    priority: "",
    message: ""
  });

  const whatsappUrl = `https://wa.me/918102779584?text=Hello Dr. Faiyaz Ahmad, I have a question.`;

  const encode = (data: { [key: string]: any }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-requests", ...formData })
      });

      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We'll respond within 24 hours.",
      });

      setFormData({
        name: "", email: "", phone: "", subject: "", priority: "", message: ""
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Consultation",
      description: "Speak directly with our medical team",
      contact: "+91 8102779584",
      availability: "Mon-Sat: 2-4 PM, 7-9 PM",
      action: "Call Now",
      href: "tel:+918102779584"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp Support",
      description: "Quick responses for urgent queries",
      contact: "+91 8102779584",
      availability: "24/7 Emergency Support",
      action: "Chat on WhatsApp",
      href: whatsappUrl
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed inquiries and documentation",
      contact: "contact@drfaiyazahmad.com",
      availability: "Response within 24 hours",
      action: "Send Email",
      href: "mailto:contact@drfaiyazahmad.com"
    }
  ];

  const subjects = [
    "General Inquiry",
    "Appointment Scheduling",
    "Medical Question",
    "Insurance & Billing",
    "Emergency Consultation",
    "Second Opinion Request",
    "Prescription Refill",
    "Test Results Inquiry"
  ];

  const priorities = [
    { value: "low", label: "Low - General inquiry" },
    { value: "medium", label: "Medium - Non-urgent medical question" },
    { value: "high", label: "High - Urgent medical concern" },
    { value: "emergency", label: "Emergency - Immediate attention needed" }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help with your neurological health concerns. Reach out to us through 
            any of the convenient methods below, and we'll respond promptly to assist you.
          </p>
        </div>

        {/* Hidden form for Netlify to detect fields */}
        <form name="contact-requests" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="text" name="subject" />
          <input type="text" name="priority" />
          <textarea name="message"></textarea>
        </form>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="medical-card-gradient hover:shadow-lg medical-transition group text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-light rounded-full flex items-center justify-center group-hover:bg-primary/20 medical-transition">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-heading">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{method.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold">{method.contact}</p>
                  <p className="text-sm text-muted-foreground">{method.availability}</p>
                </div>
                <Button asChild className="w-full" variant="outline">
                  <a href={method.href} target={method.href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer">{method.action}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="medical-card-gradient medical-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-heading">
                  <Send className="mr-3 h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+91 9999999999"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority Level *</Label>
                      <Select value={formData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          {priorities.map((priority) => (
                            <SelectItem key={priority.value} value={priority.value}>
                              {priority.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please describe your inquiry or concern in detail"
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="medical-card-gradient">
              <CardHeader>
                <CardTitle className="text-lg font-heading">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">+91 8102779584</p>
                      <p className="text-sm text-muted-foreground">Clinic Direct Line</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaWhatsapp className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">+91 8102779584</p>
                      <p className="text-sm text-muted-foreground">WhatsApp Support</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">contact@drfaiyazahmad.com</p>
                      <p className="text-sm text-muted-foreground">Email Support</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="medical-card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-heading">
                  <Clock className="mr-3 h-5 w-5 text-primary" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday</span>
                    <span className="text-muted-foreground">2:00 PM - 4:00 PM, 7:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Tuesday</span>
                    <span className="text-muted-foreground">2:00 PM - 4:00 PM, 7:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Wednesday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Thursday</span>
                    <span className="text-muted-foreground">2:00 PM - 4:00 PM, 7:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Friday</span>
                    <span className="text-muted-foreground">2:00 PM - 4:00 PM, 7:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span className="text-muted-foreground">2:00 PM - 4:00 PM, 7:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="medical-card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-heading">
                  <MapPin className="mr-3 h-5 w-5 text-primary" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  G-105, P.C Colony, Opp Aditya Vision<br />
                  Kankarbagh, Patna<br />
                  Bihar 800020, India
                </p>
                <Button variant="outline" className="w-full">
                  <MapPin className="mr-2 h-4 w-4" />
                  View on Map
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Notice */}
            <Card className="bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800">
              <CardContent className="p-4">
                <h4 className="font-medium mb-2 text-red-800 dark:text-red-200">Emergency Cases</h4>
                <p className="text-sm text-red-700 dark:text-red-300 mb-3">
                  For life-threatening neurological emergencies, please call 102 or visit the nearest emergency department immediately.
                </p>
                <p className="text-sm text-red-600 dark:text-red-400">
                  For urgent consultations outside office hours, contact us via WhatsApp.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;