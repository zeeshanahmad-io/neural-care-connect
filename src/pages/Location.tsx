import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Car, Navigation, Train } from "lucide-react";

const Location = () => {
  const clinicInfo = {
    name: "Healthy Minds Brain & Nerve Clinic",
    address: "G-105, P.C Colony, Opp Aditya Vision, Kankarbagh, Patna, Bihar 800020, India",
    phone: "+91 8102779584",
    email: "contact@drfaiyazahmad.com"
  };

  const workingHours = [
    { day: "Monday", time: "2:00 PM - 4:00 PM, 7:00 PM - 9:00 PM" },
    { day: "Tuesday", time: "2:00 PM - 4:00 PM, 7:00 PM - 9:00 PM" },
    { day: "Wednesday", time: "Closed" },
    { day: "Thursday", time: "2:00 PM - 4:00 PM, 7:00 PM - 9:00 PM" },
    { day: "Friday", time: "2:00 PM - 4:00 PM, 7:00 PM - 9:00 PM" },
    { day: "Saturday", time: "2:00 PM - 4:00 PM, 7:00 PM - 9:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  const landmarks = [
    "Directly opposite Aditya Vision",
    "In the vicinity of Monal Parag's Park and Flora Fountain Park",
    "Near various other clinics and hospitals in the area",
    "A short drive from major city landmarks like Golghar and Gandhi Maidan"
  ];

  const parkingInfo = [
    "Ample free parking available for patients' private vehicles",
    "Wheelchair accessible entrance and designated parking spots",
    "Secure environment with 'Pay & Park' options nearby for extended needs",
    "Valet parking services are also available in the Kankarbagh area"
  ];

  const handleGetDirections = () => {
    const encodedAddress = encodeURIComponent(clinicInfo.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Clinic Location
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit our modern neurology clinic conveniently located in the heart of Patna, 
            easily accessible by public transport and with ample parking facilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="space-y-6">
            <Card className="medical-card-gradient medical-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-heading">
                  <MapPin className="mr-3 h-5 w-5 text-primary" />
                  Interactive Map
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-100 rounded-lg m-4 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
                    <p className="text-muted-foreground mb-4">Interactive map will load here</p>
                    <Button onClick={handleGetDirections}>
                      <Navigation className="mr-2 h-4 w-4" />
                      Get Directions on Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button onClick={handleGetDirections} size="lg" className="h-auto py-4">
                <div className="text-center">
                  <Navigation className="h-6 w-6 mx-auto mb-2" />
                  <div>Get Directions</div>
                </div>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="h-auto py-4"
              >
                <a href={`tel:${clinicInfo.phone}`}>
                  <div className="text-center">
                    <Phone className="h-6 w-6 mx-auto mb-2" />
                    <div>Call Clinic</div>
                  </div>
                </a>
              </Button>
            </div>
          </div>

          {/* Information Section */}
          <div className="space-y-6">
            {/* Address & Contact */}
            <Card className="medical-card-gradient">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Clinic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">{clinicInfo.name}</h4>
                  <p className="text-muted-foreground flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    {clinicInfo.address}
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-2" />
                  <span>{clinicInfo.phone}</span>
                </div>
                <div className="flex items-center">
                  <span className="h-5 w-5 text-primary mr-2 flex items-center justify-center">
                    @
                  </span>
                  <span>{clinicInfo.email}</span>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="medical-card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-heading">
                  <Clock className="mr-3 h-5 w-5 text-primary" />
                  Working Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Emergency cases:</strong> Available 24/7 via WhatsApp or emergency helpline
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Landmarks */}
            <Card className="medical-card-gradient">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Nearby Landmarks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {landmarks.map((landmark, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{landmark}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Parking & Accessibility */}
            <Card className="medical-card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-heading">
                  <Car className="mr-3 h-5 w-5 text-primary" />
                  Parking & Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {parkingInfo.map((info, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0 mt-1.5"></div>
                      <span className="text-muted-foreground">{info}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Public Transport */}
            <Card className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-heading text-green-800 dark:text-green-200">
                  <Train className="mr-3 h-5 w-5" />
                  Public Transport
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-green-700 dark:text-green-300">
                  <p><strong>Bus:</strong> The area is well-serviced by local buses. Key operators include Sri Krishna Rath, Geetanjali Travels, and Samay Shatabdi Travels Pvt Ltd. The Bihar state bus service provides affordable connectivity to major towns.</p>
                  <p><strong>Bus Stand:</strong> Mithapur Bus Stand is a major nearby terminal for inter-city and local buses.</p>
                  <p><strong>Train:</strong> The clinic is easily accessible from the main Patna railway station, with frequent train services.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Location;