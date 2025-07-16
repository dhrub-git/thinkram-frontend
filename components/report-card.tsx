import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ReportCardProps {
  imageUrl: string
  category: string
  title: string
  description: string
  link: string
}

export const ReportCard = ({ imageUrl, category, title, description, link }: ReportCardProps) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group transition-all duration-300 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-900/20 flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute top-4 right-4 bg-red-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
          {category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed flex-grow mb-6">{description}</p>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="mt-auto w-full border-white/20 text-white hover:bg-red-500 hover:text-white hover:border-red-500 bg-transparent transition-colors"
        >
          <Link href={link}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
