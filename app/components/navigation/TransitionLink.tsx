"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/app/utils/animations"

interface Props {
  href: string
  children?: React.ReactNode
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const TransitionLink = ({ href, children, props }: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    const currentPath = href.includes("#") ? href.split("#")[0] : href
    if (pathname !== currentPath) {
      animatePageOut(href, router)
    }

    if (props && props.onClick) {
      console.log(props.onClick)
      // @ts-ignore
      props.onClick();
    }
  }

  return (
    <button
      {...props}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default TransitionLink
