import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ReactIcon } from "./icons/ReactIcon"
import { Code } from "./Code"
import { TailwindIcon } from "./icons/TailwindIcon"
import { NextIcon } from "./icons/NextIcon"
import Link from "next/link"
import { MentionIcon } from "./icons/MentionIcon"

export const Skills = () => (
  <Section classname="flex flex-col items-start gap-4">
    <Badge variant="outline">Skills</Badge>
    <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      What I do
    </h2>
    <div className="flex max-md:flex-col gap-6">
      <div className="flex flex-col gap-2 max-w-xs">
        <ReactIcon
          size={32}
          className="animate-spin"
          style={{ animationDuration: "10s" }}
        />
        <h3 className="text-2xl font-semibold tracking-tight">Reactjs</h3>
        <p className="text-sm text-muted-foreground">
          <Code>Reactjs</Code> is my main framework. I worked on it 3 years
          during my experience with{" "}
          <Code className="inline-flex items-center gap-1">
            <Link href="https://mention.com/fr/" target="blank" type="external">
              Mention
            </Link>
          </Code>
        </p>
      </div>
      <div className="flex flex-col gap-2 max-w-xs">
        <TailwindIcon size={32} />
        <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
        <p className="text-sm text-muted-foreground">
          With <Code>Tailwind</Code> I can rapidly build nice applications.
        </p>
      </div>
      <div className="flex flex-col gap-2 max-w-xs">
        <NextIcon size={32} />
        <h3 className="text-2xl font-semibold tracking-tight">Nextjs</h3>
        <p className="text-sm text-muted-foreground">
          This is the framework I love working with for my side projects. I use{" "}
          <Code>Nextjs</Code> as frontend and backend framework.
        </p>
      </div>
    </div>
  </Section>
)
