import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ProjectType } from "./_constants/side-projects-constants"

export type SideProjectProps = {
  project: ProjectType
}

export const SideProject = ({ project }: SideProjectProps) => {
  const { Logo, image, title, description, shortDescription, url } = project
  return (
    <Link
      href={url}
      className="inline-flex items-center group gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
      target="blank"
      type="external"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        {Logo ? <Logo size={16} /> : null}
        {image ? (
          <Image src={image} alt={`${title} logo`} width={16} height={16} />
        ) : null}
      </span>
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-lg text-muted-foreground max-sm:hidden">
          {description}
        </p>
        <p className="text-lg text-muted-foreground md:hidden">
          {shortDescription}
        </p>
      </div>
      <div className="ml-auto">
        <ArrowUpRight
          size={16}
          className="mr-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
        />
      </div>
    </Link>
  )
}
