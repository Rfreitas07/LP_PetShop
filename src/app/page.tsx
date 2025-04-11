import { About } from "./_components/about";
import {Services} from "./_components/services"
import Hero from "./_components/hero";

export default function Home(){
  return(
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  )
}