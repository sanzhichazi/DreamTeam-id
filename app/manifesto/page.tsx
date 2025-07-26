import { basehub } from "basehub"
import { WaitlistWrapper } from "@/components/box"
import { Alex_Brush } from "next/font/google"
import clsx from "clsx"
import type { Metadata } from "next"

const font = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

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
    console.error("Failed to fetch metadata:", error)
    return {
      title: "The AI-Powered Crypto E-commerce Ecosystem",
      description: "AI as Your Business Partner",
    }
  }
}

export default async function Manifesto() {
  try {
    const { manifesto } = await basehub().query({
      manifesto: {
        body: {
          json: {
            content: true,
          },
        },
        author: {
          signatureName: true,
          name: true,
          role: true,
        },
      },
    })

    return (
      <WaitlistWrapper>
        <div className="flex flex-col gap-8">
          <div className="text-slate-11 space-y-6 text-pretty text-start">
            <div>
              <h2 className="text-xl font-semibold text-slate-12 mb-3">Our Vision: AI as Your Business Partner</h2>
              <div className="space-y-2">
                <p>
                  Darwin is built to make AI your intelligent co-founder—automating decisions, operations, and growth.
                </p>
                <p>
                  You focus on creativity and products, AI handles sourcing, pricing, fulfillment, marketing, and
                  customer support.
                </p>
                <p>With crypto payments, your store becomes borderless. Support for USDT, USDC, and more.</p>
                <p>
                  Every transaction fuels AI learning. The more you sell, the smarter it gets—and the more you earn.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-12 mb-3">Core Modules</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-base font-medium text-slate-12">Multi-Agent AI System</h3>
                  <p className="text-sm">
                    Product selection, pricing, risk control, customer service, marketing—all handled by specialized
                    agents.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-slate-12">AI-Powered Product Sourcing</h3>
                  <p className="text-sm">Trend analysis, user preference prediction, competitor monitoring.</p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-slate-12">Smart Inventory & Logistics</h3>
                  <p className="text-sm">API integrations, auto restocking, optimized delivery routes.</p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-slate-12">AI Marketing Engine</h3>
                  <p className="text-sm">Content generation, audience segmentation, multi-language campaigns.</p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-slate-12">Risk & Compliance Automation</h3>
                  <p className="text-sm">Pricing safeguards, customs/tax rule lookup, payment compliance.</p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-slate-12">Crypto Payment Integration</h3>
                  <p className="text-sm">
                    Connect wallets like MetaMask or OKX; enable global checkout with instant settlement and zero
                    banking barriers.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-12 mb-3">How Darwin Evolves</h2>
              <div className="space-y-2">
                <p>Every sale, every cost, every interaction becomes training data.</p>
                <p>With real-time transaction data from ForestMarket.net, Darwin continuously improves:</p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                  <li>Dynamic pricing strategies</li>
                  <li>Hot trend forecasting</li>
                  <li>Ad performance optimization</li>
                  <li>Customer profiling & retention</li>
                </ul>
                <p className="font-medium">
                  This isn't just automation—It's an AI commerce system that learns, earns, and evolves with you.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-12 mb-3">Who Is It For?</h2>
              <ul className="space-y-2">
                <li>
                  <strong>Creators:</strong> Launch a store with no team—AI handles everything
                </li>
                <li>
                  <strong>Web3 Projects:</strong> Sell merchandise, tickets, collectibles
                </li>
                <li>
                  <strong>Tech Entrepreneurs:</strong> Build custom agents and e-commerce logic via API
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-start">
            <p className={clsx("text-slate-12 text-3xl font-medium italic", font.className)}>Darwin Team</p>
            <p className="text-slate-11 text-sm">
              Darwin AI Team <span className="text-slate-10 text-xs">AI E-commerce Ecosystem Builders</span>
            </p>
          </div>
        </div>
      </WaitlistWrapper>
    )
  } catch (error) {
    console.error("Failed to fetch manifesto data:", error)

    // Fallback content when BaseHub is not available
    return (
      <WaitlistWrapper>
        <div className="flex flex-col gap-8">
          <div className="text-slate-11 space-y-6 text-pretty text-start">
            <div>
              <h2 className="text-xl font-semibold text-slate-12 mb-3">Our Vision: AI as Your Business Partner</h2>
              <div className="space-y-2">
                <p>
                  Darwin is built to make AI your intelligent co-founder—automating decisions, operations, and growth.
                </p>
                <p>
                  You focus on creativity and products, AI handles sourcing, pricing, fulfillment, marketing, and
                  customer support.
                </p>
                <p>With crypto payments, your store becomes borderless. Support for USDT, USDC, and more.</p>
                <p>
                  Every transaction fuels AI learning. The more you sell, the smarter it gets—and the more you earn.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-12 mb-3">Core Modules</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-base font-medium text-slate-12">Multi-Agent AI System</h3>
                  <p className="text-sm">
                    Product selection, pricing, risk control, customer service, marketing—all handled by specialized
                    agents.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-slate-12">AI-Powered Product Sourcing</h3>
                  <p className="text-sm">Trend analysis, user preference prediction, competitor monitoring.</p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-slate-12">Smart Inventory & Logistics</h3>
                  <p className="text-sm">API integrations, auto restocking, optimized delivery routes.</p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-slate-12">AI Marketing Engine</h3>
                  <p className="text-sm">Content generation, audience segmentation, multi-language campaigns.</p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-slate-12">Risk & Compliance Automation</h3>
                  <p className="text-sm">Pricing safeguards, customs/tax rule lookup, payment compliance.</p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-slate-12">Crypto Payment Integration</h3>
                  <p className="text-sm">
                    Connect wallets like MetaMask or OKX; enable global checkout with instant settlement and zero
                    banking barriers.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-12 mb-3">How Darwin Evolves</h2>
              <div className="space-y-2">
                <p>Every sale, every cost, every interaction becomes training data.</p>
                <p>With real-time transaction data from ForestMarket.net, Darwin continuously improves:</p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                  <li>Dynamic pricing strategies</li>
                  <li>Hot trend forecasting</li>
                  <li>Ad performance optimization</li>
                  <li>Customer profiling & retention</li>
                </ul>
                <p className="font-medium">
                  This isn't just automation—It's an AI commerce system that learns, earns, and evolves with you.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-12 mb-3">Who Is It For?</h2>
              <ul className="space-y-2">
                <li>
                  <strong>Creators:</strong> Launch a store with no team—AI handles everything
                </li>
                <li>
                  <strong>Web3 Projects:</strong> Sell merchandise, tickets, collectibles
                </li>
                <li>
                  <strong>Tech Entrepreneurs:</strong> Build custom agents and e-commerce logic via API
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-start">
            <p className={clsx("text-slate-12 text-3xl font-medium italic", font.className)}>Darwin Team</p>
            <p className="text-slate-11 text-sm">
              Darwin AI Team <span className="text-slate-10 text-xs">AI E-commerce Ecosystem Builders</span>
            </p>
          </div>
        </div>
      </WaitlistWrapper>
    )
  }
}
