import { Button, buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "./icons/GithubIcon"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LinkedinIcon } from "./icons/LinkedinIcon"

export type HeaderProps = {}

export const Header = (props: HeaderProps) => {
  return (
    <header className="sticky top-0 py-4 backdrop-blur-md">
      <Section classname="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">gabrielsaudau.com</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/GabrielSaudau"
            target="blank"
            type="external"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://linkedin.com/in/gabriel-saudau"
            target="blank"
            type="external"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedinIcon size={12} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  )
}
