import { ArrowUpRight, LucideIcon } from "lucide-react"
import Link from "next/link"

export type SideProjectProps = {
  Logo: LucideIcon
  title: string
  description: string
  url: string
}

export const SideProject = ({
  Logo,
  title,
  description,
  url,
}: SideProjectProps) => {
  return (
    <Link
      href={url}
      className="inline-flex items-center group gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
      target="blank"
      type="external"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-lg text-muted-foreground">{description}</p>
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
