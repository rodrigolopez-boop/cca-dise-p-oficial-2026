import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold transition-colors [&>svg]:pointer-events-none [&>svg]:size-3.5 focus-visible:ring-4 focus-visible:ring-primary/15",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-primary",
        success: "border-success/20 bg-success/10 text-success dark:text-green-300",
        warning: "border-warning/20 bg-warning/10 text-warning dark:text-amber-300",
        error: "border-destructive/20 bg-destructive/10 text-destructive dark:text-red-300",
        info: "border-info/20 bg-info/10 text-info dark:text-blue-300",
        outline: "border-primary/20 bg-background/70 text-primary dark:bg-white/5 dark:text-blue-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
