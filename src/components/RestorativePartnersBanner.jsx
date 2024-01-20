import { Button } from '@/components/Button'

export default function RestorativePartnersBanner() {
  return (
    <div className="bg-bridgebeige">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Want to join us?
          <br />
          Learn about Restorative Partner's misson.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Button
            href="/restorative-partners"
            variant="outline"
            color="themecta"
          >
            <span className="text-2xl">Learn More</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
