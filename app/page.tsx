"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Phone, Video, Star, Clock, Book, Sparkles, Menu } from 'lucide-react';
import Image from 'next/image';

const heroImages = [
  "https://images.unsplash.com/photo-1507490903500-1f7947d3926?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1515942661900-94b3d1972591?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?auto=format&fit=crop&w=2000&q=80",
];

const consultations = [
  {
    id: '1',
    title: 'Voice Call Consultation',

    price: 1500,
    duration: '15 minutes',
    type: 'Voice Call',
  },
  {
    type: 'Voice Call',
    title: 'Voice Call Consultation',
    duration: '30 minutes',
    price: 3000,
  },
  {
    type: 'Voice Call',
    title: 'Voice Call Consultation',
    duration: '45 minutes',
    price: 4500,
  },
  {
    type: 'Voice Call',
    title: 'Voice Call Consultation',
    duration: '60 minutes',
    price: 6000,
  },
  {
    id: '2',
    title: 'Video Call Consultation',

    price: 3000,
    duration: '15 minutes',
    type: 'Video Call',
  },
  {
    title: 'Video Call Consultation',

    price: 6000,
    duration: '30 minutes',
    type: 'Video Call',
  },
  {
    title: 'Video Call Consultation',

    price: 8500,
    duration: '45 minutes',
    type: 'Video Call',
  }, {
    title: 'Video Call Consultation',

    price: 12500,
    duration: '60 minutes',
    type: 'Video Call',
  },
  {
    id: '3',
    title: '  Monthly Guidance Package',

    price: 25000,
    duration: '4-8 weeks',
    type: 'Premium',
  },
  {
    id: '4',
    title: 'Yearly Guidance Package',

    price: 100000,
    duration: '12 months',
    type: 'Premium',
  },
];

const courses = [
  {
    id: '1',
    title: 'Twin Flame Guidance',
    
    price: 25000,
    duration: '3 months',
    level: 'All Levels',
  },
  {
    id: '2',
    title: 'Twin Flame Guidance',
   
    price: 50000,
    duration: '6 months',
    level: 'All Levels',
  },
  {
    id: '3',
    title: 'Twin Flame Guidance',
    
    price: 100000,
    duration: '1 Year',
    level: 'All Levels',
  },
  {
    id: '4',
    title: 'Karmic blockage removal guidance',
    
    price: 25000,
    duration: '3 months',
    level: 'All Levels',
  },
  {
    id: '5',
    title: 'Karmic blockage removal guidance',
    
    price: 50000,
    duration: '6 months',
    level: 'All Levels',
  },
  {
    id: '6',
    title: 'Karmic blockage removal guidance',
  
    price: 100000,
    duration: '1 Year',
    level: 'All Levels',
  },
  {
    id: '7',
    title: 'Soul mission guidance',
    
    price: 25000,
    duration: '6 months',
    level: 'All Levels',
  },
];
const courses_ = [
  {
    id: '1',
    title: 'Meditation Session',
    
    price: 1500,
    duration: 'per-session',
    level: 'All Levels',
  },
];

export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedConsultation, setSelectedConsultation] = useState<any>(null);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    preferredDate: '',
    preferredTime: '',
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const handleBookConsultation = (consultation: any) => {
    setSelectedConsultation(consultation);
    setIsDialogOpen(true);
  };

  const handleEnrollCourse = (course: any) => {
    setSelectedCourse(course);
    setIsDialogOpen(true);
  };

  const handleSubmit = () => {
    const message = encodeURIComponent(
      `Hello, I would like to book/enroll in the following:\n\n` +
      (selectedConsultation ? `Consultation: ${selectedConsultation.title}\n` : '') +
      (selectedCourse ? `Course: ${selectedCourse.title}\n` : '') +
      `Name: ${formData.name}\n` +
      `WhatsApp: ${formData.whatsapp}\n` +
      (selectedConsultation ? `Preferred Date: ${formData.preferredDate}\n` : '') +
      (selectedConsultation ? `Preferred Time: ${formData.preferredTime}\n` : '') +
      `Please confirm my booking/enrollment.`
    );

    window.open(`https://wa.me/9101273197?text=${message}`, '_blank');
    setIsDialogOpen(false);
    setFormData({ name: '', whatsapp: '', preferredDate: '', preferredTime: '' });
  };

  return (
    <main className="min-h-screen">
      <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold text-xl pl-4">Tarot Deepshikha Gogoi</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About Me" },
              { id: "consultations", label: "Consultations" },
              { id: "courses", label: "Courses" },
            ].map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={activeSection === item.id ? "bg-secondary" : ""}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About Me" },
              { id: "consultations", label: "Consultations" },
              { id: "courses", label: "Courses" },
            ].map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={`w-full justify-start ${activeSection === item.id ? "bg-secondary" : ""}`}
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Divine Path
            <Sparkles className="inline-block ml-2 h-8 w-8" />
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            with Tarot Expert Deepshikha Gogoi and Transform your life with her  spiritual guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => scrollToSection("consultations")}
            >
              Book Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
              onClick={() => scrollToSection("courses")}
            >
              Explore Courses
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-70 h-70 relative overflow-hidden rounded-full">
              <Image
                src="/img.jpeg?height=256&width=256"
                alt="Tarot Deepshikha"
                width={256}
                height={256}
                className="object-cover"
              />
            </div>
            <div className="max-w-2xl">
              <p className="text-lg mb-4">
                I am a divine feminine on  twin flame journey, working on my soul mission. I have guided over 100 twin flames globally and transformed the lives of more than 2,000 clients by addressing their past life karmic blockages. With years of experiences on renowned astrological platforms, I now help people discover their true life purposes.
              </p>
              <p className="text-lg">
                If you're experiencing an intense attraction towards your partner who seems to be running away  from you despite of  having deep feelings for you, you might be in a twin flame connection. My courses , guidance will help you heal and navigate this spiritual journey of yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="consultations" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Tarot Card Reading Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {consultations.map((consultation) => (
              <Card key={consultation.id} className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={consultation.type === 'Premium' ? 'default' : 'secondary'}>
                      {consultation.type === 'Voice Call' && <Phone className="h-4 w-4 mr-1" />}
                      {consultation.type === 'Video Call' && <Video className="h-4 w-4 mr-1" />}
                      {consultation.type === 'Premium' && <Star className="h-4 w-4 mr-1" />}
                      {consultation.type}
                    </Badge>
                  </div>
                  <CardTitle>{consultation.title}</CardTitle>
                 
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{consultation.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 font-semibold">
                      <span>₹{consultation.price}</span>
                      {consultation.type === 'Premium' && <Badge>Best Value</Badge>}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => handleBookConsultation(consultation)}>
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Spiritual Guidance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle>{course.title}</CardTitle>
                  
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Book className="h-4 w-4" />
                      <span>Personal Consultation</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">

                      <span>₹{course.price}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => handleEnrollCourse(course)}>
                    Enroll Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section id="courses_" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Meditation Guidance - By Meenal Gupta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses_.map((course) => (
              <Card key={course.id} className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle>{course.title}</CardTitle>
                  
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Book className="h-4 w-4" />
                      <span>Personal Consultation</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">

                      <span>₹{course.price}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => handleEnrollCourse(course)}>
                    Enroll Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedConsultation ? `Book ${selectedConsultation.title}` : `Enroll in ${selectedCourse?.title}`}
            </DialogTitle>
            <DialogDescription>
              Please provide your details to proceed with the booking or enrollment.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="name">Full Name</label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="whatsapp">WhatsApp Number</label>
              <Input
                id="whatsapp"
                placeholder="Enter your WhatsApp number"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              />
            </div>
            {selectedConsultation && (
              <>
                <div className="space-y-2">
                  <label htmlFor="date">Preferred Date</label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="time">Preferred Time</label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  />
                </div>
              </>
            )}
          </div>
          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Confirm</Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}

