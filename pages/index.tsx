import Header from "@/components/Header";
import Hero from "@/components/hero/Hero";
import CardList from "@/components/CardList";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header/>
      <Hero
        title="Your best friend when traveling"
        subtitle="Find something interesting for yourself"
        imageUrl="/images/hero.jpeg"
      />
      <CardList/>
      <Footer/>
    </>
  )
}
