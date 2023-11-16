import { Contact, Experience, Header, Navbar, Project, Skills, Switcher } from "@/components";

export default function Home() {
  return (
    <main className="max-w-10xl mx-auto py-6 md:px-20 sm:px-10 px-5 min-h-screen bg-light-theme dark:bg-dark-theme">
      <Navbar />
      <Switcher />
      <Header />
      <Skills />
      <Project />
      <Experience />
      <Contact />
    </main>
  )
}
