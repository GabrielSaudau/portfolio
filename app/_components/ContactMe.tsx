import { Card } from "@/components/ui/card"
import { ArrowUpRight, Mail, Smartphone } from "lucide-react"
import Link from "next/link"
import { Section } from "./Section"
import { Badge } from "@/components/ui/badge"

export const ContactMe = () => (
  <Section classname="flex flex-col items-start gap-4">
    <Badge variant="outline">Contact me</Badge>
    <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      I would be happy to work with you.
    </h2>
    <div className="flex max-md:flex-col w-full gap-4">
      <Link
        href="https://linkedin.com/in/gabriel-saudau"
        target="blank"
        type="external"
        className="w-full"
      >
        <Card className="p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/30 group transition-colors">
          <div className="relative">
            <img
              src="/gabriel.png"
              alt="gabriel's linked profil picture"
              className="w-10 h-10 rounded-full object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
              alt="linked icon"
              className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-lg font-semibold">Gabriel Saudau</p>
            </div>
            <p className="text-xs text-muted-foreground">#OPENTOWORK</p>
          </div>
          <div className="ml-auto">
            <ArrowUpRight
              size={16}
              className=" mr-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
            />
          </div>
        </Card>
      </Link>
      <Link href="mailto:gabriel.saudau@gmail.com" className="w-full">
        <Card className="p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/30 group transition-colors">
          <span className="bg-accent text-accent-foreground p-3 rounded-sm">
            <Mail size={16} />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-lg font-semibold">Mail</p>
            </div>
            <p className="text-xs text-muted-foreground">
              gabriel.saudau@gmail.com
            </p>
          </div>
          <div className="ml-auto">
            <ArrowUpRight
              size={16}
              className=" mr-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
            />
          </div>
        </Card>
      </Link>
      <Card className="p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/30 group transition-colors w-full">
        <span className="bg-accent text-accent-foreground p-3 rounded-sm">
          <Smartphone size={16} />
        </span>
        <div>
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">Phone</p>
          </div>
          <p className="text-xs text-muted-foreground">+33 6 51 11 94 60</p>
        </div>
      </Card>
    </div>
  </Section>
)
