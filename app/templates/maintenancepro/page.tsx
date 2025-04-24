import Link from "next/link"
import { NavigationButtons } from "@/components/navigation-buttons"
import { Button } from "@/components/ui/button"

export default function MaintenanceProTemplate() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/80 backdrop-blur-md">
        <div className="container flex h-16 items-center">
          <div className="ml-auto">
            <NavigationButtons />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                  MaintenancePro Template
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Professional website template for commercial and residential maintenance services
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 rounded-full font-medium shadow-lg">
                <Link href="/contact">Get This Template</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
