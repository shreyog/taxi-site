import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

import GoaTaxiLogo from "@/assets/goa express taxi.png"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image height={250} width={250} src={GoaTaxiLogo} alt={"Goa Express Taxi"} />
        {/* <Icons.logo className="h-6 w-6" /> */}
        {/* <span className="inline-block text-3xl font-bold">{siteConfig.name}</span> */}
      </Link>
    </div>
  )
}
