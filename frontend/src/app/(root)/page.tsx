import Corrosel from "@/components/Corrosel";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";


export default function Home() {
  return (
    <section className="w-full min-h-[100dvh]">
      <Header/>
      <Navigation/>
      <Corrosel/>
    </section>
  );
}
