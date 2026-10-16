import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 outline-none focus-visible:ring-4 focus-visible:ring-primary/15 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-glow-violet hover:bg-primary-hover hover:brightness-110",
        accent:
          "bg-secondary text-primary shadow-glow-magenta hover:bg-[#ffdc5c] hover:brightness-105",
        outline:
          "border border-primary/25 bg-background text-primary shadow-sm hover:border-primary/50 hover:bg-accent dark:bg-transparent dark:text-blue-100",
        secondary:
          "bg-secondary text-primary-foreground shadow-glow-magenta hover:bg-secondary/85",
        ghost:
          "text-foreground hover:bg-accent hover:text-primary dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white",
        inverse:
          "border border-white/25 bg-white/10 text-white backdrop-blur hover:border-white/40 hover:bg-white/15",
        link: "h-auto rounded-md p-0 text-primary underline-offset-4 hover:text-primary-hover hover:underline dark:text-blue-200",
      },
      size: {
        default: "h-11 px-5 py-2.5 has-[>svg]:px-4",
        sm: "h-10 rounded-lg px-3.5 has-[>svg]:px-3",
        lg: "h-12 rounded-xl px-6 text-[15px] has-[>svg]:px-5",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
