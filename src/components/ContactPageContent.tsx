'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from 'next/image';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CONTACT_DETAILS, SERVICE_CATEGORIES_FOR_FORM, ICONS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";




const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }).optional().or(z.literal('')),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).optional().or(z.literal('')),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data); // Replace with actual submission logic (e.g., API call, server action)
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary/10 via-background to-background pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="text-center">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            We're here to help! Reach out to us with your queries, or to get started with our services.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="shadow-xl rounded-xl p-6 md:p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="font-headline text-2xl text-primary-foreground">Send Us a Message</CardTitle>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+91 98765 43210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Required</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {SERVICE_CATEGORIES_FOR_FORM.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                           <SelectItem value="Other">Other Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little more about your needs..."
                          className="resize-none min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </Card>

          {/* Contact Details & Map */}
          <div className="space-y-8">
            <Card className="shadow-xl rounded-xl">
              <CardHeader className="bg-muted/30">
                <CardTitle className="font-headline text-2xl text-primary-foreground">Get In Touch Directly</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center">
                  <ICONS.Phone className="w-6 h-6 text-accent mr-4 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-foreground">Phone / WhatsApp</h3>
                    <a href={`tel:${CONTACT_DETAILS.phone.replace(/\s/g, '')}`} className="text-foreground/80 hover:text-primary block">{CONTACT_DETAILS.phone}</a>
                    <a href={`https://wa.me/${CONTACT_DETAILS.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary block">WhatsApp: {CONTACT_DETAILS.whatsapp}</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <ICONS.Mail className="w-6 h-6 text-accent mr-4 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-foreground">Email</h3>
                    <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-foreground/80 hover:text-primary">{CONTACT_DETAILS.email}</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <ICONS.MapPin className="w-6 h-6 text-accent mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-foreground">Main Office</h3>
                    <p className="text-foreground/80">{CONTACT_DETAILS.address}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-accent mr-4 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-foreground">Business Hours</h3>
                    <p className="text-foreground/80">{CONTACT_DETAILS.businessHours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://placehold.co/600x400.png?text=Office+Location+Map"
                alt="Vedika Vista Office Location"
                layout="fill"
                objectFit="cover"
                data-ai-hint="office map location"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
