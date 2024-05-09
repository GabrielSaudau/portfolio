import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { SIDE_PROJECTS } from "./_constants/side-projects-constants"
import { SideProject } from "./SideProject"
import { WORK_EXPERIENCES } from "./_constants/work-experience-constant"
import { WorkExperience } from "./WorkExperience"
import { ArrowUpRight } from "lucide-react"
import { ContactMe } from "./ContactMe"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const Status = () => {
  return (
    <Section classname="flex flex-col items-start gap-8 ">
      <div className=" h-full w-full flex-[2] gap-8 flex flex-col">
        <div>
          <Link
            className={cn(buttonVariants({ variant: "outline" }))}
            href="/gabriel_saudau_resume.pdf"
            download
            target="blank"
          >
            Download my resume
          </Link>
        </div>
        <Card className="flex-1 p-4 flex flex-col gap-2">
          <p className="text-lg w-full text-muted-foreground">
            Work experiences
          </p>
          <div className="flex flex-col gap-4">
            {WORK_EXPERIENCES.map((experience, index) => (
              <WorkExperience
                image={experience.image}
                key={index}
                role={experience.role}
                title={experience.title}
                date={experience.date}
                url={experience.url}
                badge={experience.badge}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[3] w-full">
        <Card className="flex flex-col gap-2 p-4 ">
          <p className="text-lg w-full text-muted-foreground">Side projets</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject key={index} project={project} />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  )
}
