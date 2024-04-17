import { ContactMe } from "./_components/ContactMe"
import { Header } from "./_components/Header"
import { Hero } from "./_components/Hero"
import { Skills } from "./_components/Skills"
import { Spacing } from "./_components/Spacing"
import { Status } from "./_components/Status"

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing />
      <Hero />
      <Spacing />
      <Status />
      <Spacing />
      <Skills />
      <Spacing />
      <ContactMe />
      <Spacing />
    </main>
  )
}
