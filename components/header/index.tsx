import { basehub } from "basehub"
import { NavbarLink, NavbarLinkBackground } from "./link"
import clsx from "clsx"

export const Header = async () => {
  const fallbackItems = [
    { href: "/", _title: "Home" },
    { href: "/manifesto", _title: "Darwin" },
  ]

  let navItems = fallbackItems

  try {
    const {
      header: { navbar },
    } = await basehub().query({
      header: {
        navbar: {
          items: {
            href: true,
            _title: true,
          },
        },
      },
    })

    if (navbar?.items?.length > 0) {
      navItems = navbar.items.map((item) => ({
        href: item.href || "/",
        _title: item._title,
      }))
    }
  } catch (error) {
    console.error("Failed to fetch header data:", error)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <nav className="bg-slate-1 rounded-full">
        <div
          className={clsx(
            "bg-slate-1 rounded-full p-1 flex relative items-center",
            "shadow-[0px_-1px_3px_0px_rgba(0,_0,_0,_0.05),_0px_7px_2px_0px_rgba(0,_0,_0,_0.02),_0px_4px_2px_0px_rgba(0,_0,_0,_0.05),_0px_2px_1px_0px_rgba(0,_0,_0,_0.05),_0px_1px_1px_0px_rgba(0,_0,_0,_0.03),_0px_0px_1px_0px_rgba(0,_0,_0,_0.04)]",
            "dark:shadow-[0px_-1px_3px_0px_rgba(0,_0,_0,_0.03),_0px_7px_2px_0px_rgba(0,_0,_0,_0.03),_0px_4px_2px_0px_rgba(0,_0,_0,_0.05),_0px_2px_1px_0px_rgba(0,_0,_0,_0.1),_0px_1px_1px_0px_rgba(0,_0,_0,_0.1),_0px_0px_1px_0px_rgba(0,_0,_0,_0.1)]",
          )}
        >
          <NavbarLinkBackground links={navItems.map((item) => item.href)} />
          {navItems.map(({ href, _title }) => (
            <NavbarLink key={href} href={href}>
              {_title}
            </NavbarLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
