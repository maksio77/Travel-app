import Hero from "@/components/hero/Hero";
import CardList from "@/components/CardList";


export default function HomePage() {
  return (
    <>
      <Hero
        title="Your best friend when traveling"
        subtitle="Find something interesting for yourself"
        imageUrl="/images/hero.jpeg"
      />
      <CardList/>
    </>
  )
}
