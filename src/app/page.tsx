'use client'
import CardMenu from "@/components/CardMenu";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
    <Header />
    <main className="flex flex-wrap justify-center items-center md:gap-4">
      <CardMenu
        title="Convert to Uppercase"
        description="Click to convert text to uppercase."
        to="/convert-to-uppercase"
      />
      <CardMenu
        title="Remove Empty Lines"
        description="Click to remove empty lines from the text."
        to="/remove-empty-line"
      />
    </main>
  </div>
  )
}
