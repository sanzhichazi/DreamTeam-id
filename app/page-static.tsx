import { InputForm } from "@/components/waitlist-form"
import { WaitlistWrapper } from "@/components/box"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The AI-Powered Crypto E-commerce Ecosystem",
  description: "Run your e-commerce store with AI, 24/7, fully automated and profit-generating.",
}

export default function Home() {
  return (
    <WaitlistWrapper>
      {/* Heading */}
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-medium text-slate-12 text-pretty">
          The AI-Powered Crypto E-commerce Ecosystem
        </h1>
        <div className="text-slate-10 space-y-2 text-pretty">
          <p>Run your e-commerce store with AI, 24/7, fully automated and profit-generating.</p>
          <p>Darwin empowers anyone to build a global, automated, and ever-evolving online business.</p>
          <p className="text-sm font-medium">Now integrated with ForestMarket.net</p>
          <p className="text-sm">
            A crypto-native e-commerce platform where AI learns from every transaction to continuously optimize product
            selection, pricing, marketing, and logistics.
          </p>
        </div>
      </div>
      {/* Form */}
      <div className="px-1 flex flex-col w-full self-stretch">
        <InputForm
          buttonCopy={{
            idle: "Apply for Early Access",
            success: "Application Sent!",
            loading: "Submitting...",
          }}
          formAction={async (data) => {
            "use server"
            // 模拟表单提交
            const email = data.get("email") as string

            if (!email || !email.includes("@")) {
              return {
                success: false,
                error: "Please enter a valid email address",
              }
            }

            // 模拟延迟
            await new Promise((resolve) => setTimeout(resolve, 1000))

            // 这里你可以添加实际的邮件收集逻辑
            console.log("New signup:", email)

            return { success: true }
          }}
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
        />
      </div>
    </WaitlistWrapper>
  )
}
