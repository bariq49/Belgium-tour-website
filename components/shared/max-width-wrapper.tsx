import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={cn(
        " container mx-auto w-full  px-4 md:px-20",
        className
      )}>
      {children}
    </div>
  )
}
