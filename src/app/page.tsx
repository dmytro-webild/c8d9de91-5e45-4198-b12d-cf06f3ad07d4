"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboardRotatedCarousel from "@/components/sections/hero/HeroBillboardRotatedCarousel";
import FeatureCardTwelve from "@/components/sections/feature/FeatureCardTwelve";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import PricingCardOne from "@/components/sections/pricing/PricingCardOne";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Sparkles, Heart, ChefHat, Calendar, HelpCircle, Users, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="compact"
      sizing="largeSizeMediumTitles"
      background="circleGradient"
      cardStyle="inset"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="glass"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="The Hideout Emporium"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "Brunch", id: "brunch" },
            { name: "Reviews", id: "reviews" },
            { name: "About", id: "about" }
          ]}
          button={{
            text: "Book Table",            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Welcome to The Hideout Emporium"
          description="Holmfirth's cosiest café hideaway for outrageous toasties, bottomless brunch and seriously good coffee. Come hungry. Leave happy. Bring the dog."
          background={{ variant: "aurora" }}
          tag="Holmfirth's Worst Kept Secret"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Book a Table", href: "#contact" },
            { text: "View Menu", href: "#menu" }
          ]}
          buttonAnimation="slide-up"
          carouselItems={[
            {
              id: "toastie-1",              imageSrc: "http://img.b2bpic.net/free-photo/delicious-melted-cheese-snacks_23-2149274829.jpg",              imageAlt: "Golden melted cheese toastie"
            },
            {
              id: "cocktails-1",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-lemonade-with-grapefruit-lme-drinking-glasses-tablepg_140725-12819.jpg",              imageAlt: "Colourful cocktails on table"
            },
            {
              id: "interior-1",              imageSrc: "http://img.b2bpic.net/free-photo/teen-boy-with-book-near-vintage-counter-cafe_23-2147860813.jpg",              imageAlt: "Cosy café interior"
            },
            {
              id: "coffee-1",              imageSrc: "http://img.b2bpic.net/free-photo/dark-coffee-cup-with-heart-latte-art_84443-84061.jpg",              imageAlt: "Perfect latte art"
            },
            {
              id: "cake-1",              imageSrc: "http://img.b2bpic.net/free-photo/different-types-pastries-glass-cabinet-with-price-tag_23-2148028012.jpg",              imageAlt: "Indulgent homemade cakes"
            },
            {
              id: "dog-1",              imageSrc: "http://img.b2bpic.net/free-photo/cute-girls-park-playing-with-little-dog_1157-32657.jpg",              imageAlt: "Happy dog-friendly café moment"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
          ariaLabel="The Hideout Emporium hero carousel"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwelve
          title="Why Everyone Loves The Hideout"
          description="From legendary toasties to dog-friendly vibes, discover what makes us Holmfirth's favourite café escape."
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Our Specialties"
          tagIcon={Heart}
          tagAnimation="slide-up"
          features={[
            {
              id: "toasties",              label: "Legendary Toasties",              title: "Golden Toasted Perfection",              items: [
                "Braised beef with melted cheese on sourdough",                "Triple cheese crispy outside, melted inside",                "Slow-cooked fillings that keep you coming back"
              ]
            },
            {
              id: "boards",              label: "Proper Cheese Boards",              title: "Sharing Moments",              items: [
                "Locally loved cheese selection",                "Perfect pairing with wine or something good",                "The sharing experience you're looking for"
              ]
            },
            {
              id: "brunch",              label: "Bottomless Brunch",              title: "Cocktails Flowing",              items: [
                "Amazing food all morning",                "Great cocktails never stop",                "The perfect catch-up spot in Holmfirth"
              ]
            },
            {
              id: "dogs",              label: "Dog Friendly",              title: "Four-Legged Friends",              items: [
                "Your pup is always welcome here",                "We'll probably make a fuss of them",                "Bring your furry friend to feel at home"
              ]
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Signature Menu Favourites"
          description="Our best-sellers that keep customers coming back for more."
          tag="Menu Highlights"
          tagIcon={ChefHat}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "braised-beef",              name: "Braised Beef Toastie",              price: "£8.50",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-schnitzel-with-cream-cheese-with-baked-potatoes-foil-with-vegetables-board_141793-5088.jpg",              imageAlt: "Slow cooked braised beef toastie"
            },
            {
              id: "triple-cheese",              name: "Triple Cheese Toastie",              price: "£7.95",              imageSrc: "http://img.b2bpic.net/free-photo/cheese-plate-wooden-board-top-view_141793-2335.jpg",              imageAlt: "Three cheeses melted perfection"
            },
            {
              id: "cheese-board",              name: "Hideout Cheese Board",              price: "£18.00",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-organic-wine-cheese-table_23-2148414288.jpg",              imageAlt: "Perfect sharing cheese board"
            },
            {
              id: "homemade-cakes",              name: "Homemade Cakes",              price: "£4.50",              imageSrc: "http://img.b2bpic.net/free-photo/dessert-catering_1203-2654.jpg",              imageAlt: "Fresh bakes daily"
            },
            {
              id: "bottomless-brunch",              name: "Bottomless Brunch",              price: "£24.99",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-eggs-with-toasted-slices-breads-with-avocado-pulp-onn-orange-plate-with-fork-sack-cloth-blue_141793-17178.jpg",              imageAlt: "Food and flowing cocktails"
            },
            {
              id: "coffee",              name: "Seriously Good Coffee",              price: "£3.50",              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-male-worker-coffee-shop_23-2148366546.jpg",              imageAlt: "Perfect espresso with latte art"
            }
          ]}
          buttons={[
            { text: "View Full Menu", href: "#" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="The food was amazing. They did an incredible cheese board and the cocktails were fantastic. Staff were so friendly and accommodating. This place is a gem!"
          rating={5}
          author="Sarah Mitchell"
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/woman-putting-crossed-eyes_1187-3266.jpg",              alt: "Sarah Mitchell profile"
            },
            {
              src: "http://img.b2bpic.net/free-photo/young-male-holding-hands-his-jacket-white-shirt-jacket-looking-confident-front-view_176474-99665.jpg",              alt: "Michael Chen profile"
            },
            {
              src: "http://img.b2bpic.net/free-photo/portrait-beautiful-business-office-business-center_1303-20365.jpg",              alt: "Emma Rodriguez profile"
            },
            {
              src: "http://img.b2bpic.net/free-photo/man-clapping-hands-isolated-studio_1303-30130.jpg",              alt: "David Park profile"
            },
            {
              src: "http://img.b2bpic.net/free-photo/close-up-young-businesswoman_23-2149153828.jpg",              alt: "Jessica Wong profile"
            }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Not Just a Café" }
          ]}
          buttons={[
            { text: "Follow Us on Instagram", href: "https://instagram.com" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Bottomless Brunch at The Hideout"
          description="Amazing food. Great cocktails. Even better company. Perfect for birthdays, catch-ups and last-minute plans."
          tag="Popular Experience"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          plans={[
            {
              id: "brunch-standard",              badge: "Perfect for Groups",              badgeIcon: Users,
              price: "£24.99",              subtitle: "Per person",              features: [
                "All day brunch menu access",                "Cocktails flowing all afternoon",                "Coffee and pastries included",                "Dog friendly outdoor seating"
              ]
            },
            {
              id: "brunch-special",              badge: "Best Value",              badgeIcon: Star,
              price: "£34.99",              subtitle: "Per person, weekend premium",              features: [
                "Premium brunch selections",                "Prosecco or craft cocktails",                "Complimentary cake slice",                "Reserved table 2+ hours",                "Dog friendly courtyard"
              ]
            }
          ]}
          buttons={[
            { text: "Book Brunch", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Your Questions Answered"
          description="Everything you need to know about visiting The Hideout Emporium."
          tag="FAQ"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-photo/beautiful-thanksgiving-meal-concept_23-2148629588.jpg"
          imageAlt="Cosy café interior FAQ section"
          mediaAnimation="slide-up"
          mediaPosition="right"
          faqs={[
            {
              id: "faq-1",              title: "Are dogs really welcome?",              content: "Absolutely! Four-legged friends are always welcome at The Hideout. We have dog-friendly outdoor seating and indoor spaces. We'll probably make a fuss of your pup too!"
            },
            {
              id: "faq-2",              title: "Do you do bottomless brunch every day?",              content: "We offer bottomless brunch Thursday through Sunday from 11am to 3pm. Perfect for catch-ups, celebrations, or weekend treats. Book ahead during peak times."
            },
            {
              id: "faq-3",              title: "Can I order takeaway?",              content: "Yes! Our toasties, cheese boards and cakes are perfect for takeaway. Order at the counter or ask your server. Ideal for picnics in Holmfirth."
            },
            {
              id: "faq-4",              title: "Do you cater for dietary requirements?",              content: "We're happy to discuss dietary needs. Many items can be adapted. Speak with staff about vegan, gluten-free or allergenic options."
            },
            {
              id: "faq-5",              title: "Can I book a private party?",              content: "Absolutely! The Hideout hosts private gatherings. Contact us to discuss your event, group size and catering preferences."
            },
            {
              id: "faq-6",              title: "How do I find The Hideout?",              content: "We're tucked away in Holmfirth's heart—Holmfirth's worst kept secret! Get directions on Google Maps or ask a local. First-timers always say 'wish I'd found this sooner!'"
            }
          ]}
          faqsAnimation="slide-up"
          animationType="smooth"
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Book Your Table"
          description="Reserve your spot at Holmfirth's cosiest café. We'll save you a seat."
          tagIcon={Calendar}
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email to book"
          buttonText="Book Now"
          termsText="By booking you agree to our reservation terms and cancellation policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "The Hideout",              items: [
                { label: "Menu", href: "#menu" },
                { label: "Brunch", href: "#brunch" },
                { label: "About", href: "#about" },
                { label: "Reviews", href: "#reviews" }
              ]
            },
            {
              title: "Visit Us",              items: [
                { label: "Get Directions", href: "#" },
                { label: "Contact", href: "#contact" },
                { label: "Book a Table", href: "#contact" },
                { label: "Private Parties", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Google Reviews", href: "#" },
                { label: "Email", href: "mailto:info@hideoutemporium.co.uk" }
              ]
            }
          ]}
          bottomLeftText="© 2024 The Hideout Emporium. All rights reserved."
          bottomRightText="Come hungry. Leave happy. Bring the dog."
        />
      </div>
    </ThemeProvider>
  );
}
