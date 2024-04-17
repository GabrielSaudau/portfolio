import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"
import Link from "next/link"

export type WorkExperienceProps = {
  image: string
  title: string
  role: string
  date: string
  url: string
  badge?: string
}

export const WorkExperience = ({
  image,
  title,
  role,
  date,
  url,
  badge,
}: WorkExperienceProps) => {
  return (
    <Link
      href={url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
      target="blank"
      type="external"
    >
      <img src={image} alt={title} className="w-10 h-10 object-contain" />
      <div>
        <div className="flex items-center gap-2">
          <p className="text-md font-semibold md:text-lg">{title}</p>
          {badge && <Badge variant="outline">{badge}</Badge>}
        </div>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-muted-foreground">{date}</p>
      </div>
    </Link>
  )
}
