import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Car, Navigation, Train } from "lucide-react";

const Location = () => {
  const clinicInfo = {
    name: "Dr. Faiyaz Ahmad Neurology Clinic",
    address: "123 Medical Complex, Bailey Road, Patna, Bihar 800001",
    phone: "+91 99999 99999",
    email: "dr.faiyaz@example.com"
  };

  const workingHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Emergency Only" }
  ];

  const landmarks = [
    "Near Patna Medical College & Hospital",
    "Opposite State Bank of India, Bailey Road",
    "5 minutes from Fraser Road",
    "Close to Boring Canal Road Junction"
  ];

  const parkingInfo = [
    "Free parking available for patients",
    "Wheelchair accessible entrance",
    "Reserved spots for emergency cases",
    "Security guard on duty during clinic hours"
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
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
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
                  <p><strong>Bus Routes:</strong> 12, 15, 23, 45 (Bailey Road stop)</p>
                  <p><strong>Auto Rickshaw:</strong> Available from all major areas</p>
                  <p><strong>Metro:</strong> Upcoming Patna Metro (Fraser Road station - 0.8 km)</p>
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