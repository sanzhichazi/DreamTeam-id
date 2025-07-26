import { basehub } from "basehub"
import { sendEvent, parseFormData } from "basehub/events"
import { InputForm } from "@/components/waitlist-form"
import { WaitlistWrapper } from "@/components/box"
import type { Metadata } from "next"
import "../basehub.config"

export const dynamic = "force-static"
export const revalidate = 30

export const generateMetadata = async (): Promise<Metadata> => {
  try {
    const data = await basehub().query({
      settings: {
        metadata: {
          titleTemplate: true,
          defaultTitle: true,
          defaultDescription: true,
          favicon: {
            url: true,
          },
          ogImage: {
            url: true,
          },
        },
      },
    })
    return {
      title: {
        template: data.settings.metadata.titleTemplate,
        default: data.settings.metadata.defaultTitle,
      },
      description: data.settings.metadata.defaultDescription,
      openGraph: {
        type: "website",
        images: [data.settings.metadata.ogImage.url],
      },
      twitter: {
        card: "summary_large_image",
        images: [data.settings.metadata.ogImage.url],
      },
      icons: [data.settings.metadata.favicon.url],
    }
  } catch (error) {
    console.error("BaseHub connection failed:", error)
    return {
      title: "Darwin: The AI-Powered Crypto E-commerce Ecosystem",
      description: "Run your e-commerce store with AI, 24/7, fully automated and profit-generating.",
    }
  }
}

export default async function Home() {
  try {
    const { waitlist } = await basehub().query({
      waitlist: {
        title: true,
        subtitle: {
          json: {
            content: true,
          },
        },
        input: {
          ingestKey: true,
          schema: true,
        },
        button: {
          idleCopy: true,
          successCopy: true,
          submittingCopy: true,
        },
      },
    })

    const emailInput = waitlist.input.schema[0]
    if (!emailInput) {
      console.warn("No email input found")
    }

    return (
      <WaitlistWrapper>
        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-medium text-slate-12 text-pretty">
            Darwin: The AI-Powered Crypto E-commerce Ecosystem
          </h1>
          <div className="text-slate-10 space-y-2 text-pretty">
            <p>Run your e-commerce store with AI, 24/7, fully automated and profit-generating.</p>
            <p>Darwin empowers anyone to build a global, automated, and ever-evolving online business.</p>
            <p className="text-sm font-medium">Now integrated with ForestMarket.net</p>
            <p className="text-sm">
              A crypto-native e-commerce platform where AI learns from every transaction to continuously optimize
              product selection, pricing, marketing, and logistics.
            </p>
          </div>
        </div>
        {/* Form */}
        <div className="px-1 flex flex-col w-full self-stretch">
          {emailInput && (
            <InputForm
              buttonCopy={{
                idle: waitlist.button.idleCopy || "Apply for Early Access",
                success: waitlist.button.successCopy || "Application Sent!",
                loading: waitlist.button.submittingCopy || "Submitting...",
              }}
              formAction={async (data) => {
                "use server"
                try {
                  const parsedData = parseFormData(waitlist.input.ingestKey, waitlist.input.schema, data)
                  if (!parsedData.success) {
                    console.error(parsedData.errors)
                    return {
                      success: false,
                      error:
                        parsedData.errors[emailInput.name] || Object.values(parsedData.errors)[0] || "Unknown error",
                    }
                  }
                  await sendEvent(waitlist.input.ingestKey, parsedData.data)
                  return { success: true }
                } catch (error) {
                  console.error(error)
                  return {
                    success: false,
                    error: "There was an error while submitting the form",
                  }
                }
              }}
              {...emailInput}
            />
          )}
        </div>
      </WaitlistWrapper>
    )
  } catch (error) {
    console.error("Failed to fetch waitlist data:", error)

    // Fallback content when BaseHub is not available
    return (
      <WaitlistWrapper>
        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-medium text-slate-12 text-pretty">
            Darwin: The AI-Powered Crypto E-commerce Ecosystem
          </h1>
          <div className="text-slate-10 space-y-2 text-pretty">
            <p>Run your e-commerce store with AI, 24/7, fully automated and profit-generating.</p>
            <p>Darwin empowers anyone to build a global, automated, and ever-evolving online business.</p>
            <p className="text-sm font-medium">Now integrated with ForestMarket.net</p>
            <p className="text-sm">
              A crypto-native e-commerce platform where AI learns from every transaction to continuously optimize
              product selection, pricing, marketing, and logistics.
            </p>
          </div>
        </div>
        {/* Fallback Form */}
        <div className="px-1 flex flex-col w-full self-stretch">
          <div className="flex items-center justify-between gap-3 relative">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 text-sm pl-4 pr-32 py-2 h-11 bg-gray-11/5 cursor-text rounded-full text-gray-12 placeholder:text-gray-9 border border-gray-11/10"
              disabled
            />
            <button
              type="button"
              disabled
              className="absolute h-8 px-3.5 bg-gray-12 text-gray-1 text-sm top-1/2 transform -translate-y-1/2 right-1.5 rounded-full font-medium flex gap-1 items-center disabled:cursor-not-allowed"
            >
              Apply for Early Access
            </button>
          </div>
          <div className="w-full h-2" />
          <p className="text-xs text-slate-10 px-2">BaseHub configuration needed to submit form</p>
        </div>
      </WaitlistWrapper>
    )
  }
}
