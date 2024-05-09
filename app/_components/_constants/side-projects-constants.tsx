import { LucideIcon, TextSearch } from "lucide-react"
import { SideProjectProps } from "../SideProject"

export type ProjectType = {
  Logo?: LucideIcon
  image?: string
  title: string
  description: string
  shortDescription: string | null
  url: string
}

export const SIDE_PROJECTS: ProjectType[] = [
  {
    Logo: TextSearch,
    title: "PDF2AI",
    description: "With an ai, make chatting to your PDF files easy.",
    shortDescription: "Chat to your PDF files.",
    url: "https://pdf-2-ai.vercel.app/",
  },
  {
    image: "/rate-my-product-icon.png",
    title: "rate-my-product",
    description: "Make products reviews easy with audio transcription.",
    shortDescription: "Make products reviews easy.",
    url: "https://rate-my-product.vercel.app/",
  },
]
