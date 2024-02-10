import Link from "next/link"
import { cn } from "@/lib/utils"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import CustomButton from "./custom-button"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-24 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-5">
          <nav className="flex items-center space-x-6">
            {siteConfig.mainNav?.length ? (
              <nav className="flex gap-6">
                {siteConfig.mainNav?.map(
                  (item, index) =>
                    item.href && (
                      <Link
                        key={index}
                        href={item.href}
                        className={cn(
                          "flex items-center text-xl font-bold",
                          // item.disabled && "cursor-not-allowed opacity-80"
                        )}
                      >
                        {item.title}
                      </Link>
                    )
                )}
              </nav>
            ) : null}
            <a href="tel:9122333">
              <CustomButton>
                Enquire Now
              </CustomButton>
            </a>
            {/* <ThemeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  )
}
