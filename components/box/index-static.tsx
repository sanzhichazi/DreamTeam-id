import clsx from "clsx"
import type { PropsWithChildren } from "react"
import { ThemeSwitcher } from "../switch-theme"

export function WaitlistWrapper({ children }: PropsWithChildren) {
  return (
    <div
      className={clsx(
        "w-full mx-auto max-w-[500px] flex flex-col justify-center items-center bg-gray-1/85 pb-0 overflow-hidden rounded-2xl",
        "shadow-[0px_170px_48px_0px_rgba(18,_18,_19,_0.00),_0px_109px_44px_0px_rgba(18,_18,_19,_0.01),_0px_61px_37px_0px_rgba(18,_18,_19,_0.05),_0px_27px_27px_0px_rgba(18,_18,_19,_0.09),_0px_7px_15px_0px_rgba(18,_18,_19,_0.10)]",
      )}
    >
      <div className="flex flex-col items-center gap-4 flex-1 text-center w-full p-8 pb-4">
        <div>
          <div className="flex justify-center items-center mx-auto">
            <h1 className="text-3xl font-bold text-slate-12">Darwin</h1>
          </div>
        </div>
        <div className="flex flex-col gap-10">{children}</div>
      </div>
      <footer className="flex justify-between items-center w-full self-stretch px-8 py-3 text-sm bg-gray-12/[.07] overflow-hidden">
        <div className="flex items-center gap-2">
          <p className="text-xs text-slate-10">© 2024 Darwin AI</p>
          <span className="text-xs text-slate-8">•</span>
          <a
            href="https://x.com/DarwinGjzx2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-10 hover:text-slate-12 underline"
          >
            @DarwinGjzx2
          </a>
          <span className="text-xs text-slate-8">•</span>
          <a
            href="https://t.me/darwingjzx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-10 hover:text-slate-12 underline"
          >
            @darwingjzx
          </a>
        </div>
        <ThemeSwitcher />
      </footer>
    </div>
  )
}
