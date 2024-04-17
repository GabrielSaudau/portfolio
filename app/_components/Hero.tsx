import { ComponentPropsWithoutRef } from "react"
import { Section } from "./Section"
import { cn } from "@/lib/utils"
import { MentionIcon } from "./icons/MentionIcon"
import { ReactIcon } from "./icons/ReactIcon"
import { Home } from "lucide-react"
import Link from "next/link"
import { Code } from "./Code"

export const Hero = () => {
  return (
    <Section classname="flex max-md:flex-col items-start justify-between gap-8 ">
      <div className="flex-[3] flex flex-col gap-2">
        <h2 className="font-caption text-5xl font-bold text-primary">
          Gabriel Saudau
        </h2>
        <h3 className="font-caption text-3xl">Frontend developer</h3>
        <p className="text-base">
          I create apps with{" "}
          <Code className="inline-flex items-center gap-1">
            <ReactIcon size={16} /> Reactjs
          </Code>
          . Previously working for{" "}
          <Code className="inline-flex items-center gap-1">
            <Link href="https://mention.com/fr/" target="blank" type="external">
              <MentionIcon className="inline" size={16} /> Mention
            </Link>
          </Code>
          . Living in{" "}
          <Code className="inline-flex items-center gap-1">
            <Home className="inline" size={16} /> Tours
          </Code>
          .
        </p>
      </div>
      <div className="flex-[2] flex justify-end m-auto">
        <img
          src="/gabriel.png"
          className="w-auto max-w-60 rounded-full max-md:w-56"
          alt="gabriel's photo"
        />
      </div>
    </Section>
  )
}
