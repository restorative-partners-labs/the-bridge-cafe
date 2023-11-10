import { Button } from '@/components/Button'

export default function HolidayMenuBanner() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-bridge pt-14">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-bridge ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <img
            src="/holiday-menu.png"
            alt=""
            className="mt-10 w-full max-w-lg rounded-2xl object-cover sm:mt-10 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-10"
          />
          <div className="mt-10 flex items-center justify-center">
            <Button
              href="https://order.spoton.com/so-the-bridge-cafe-10987/san-luis-obispo-ca/63338b3bf3ebec0040438b39"
              variant="outline"
              color="theme"
              className="w-56 bg-white"
            >
              <span className="ml-2.5">
                <p className="text-xl">Order Now</p>
              </span>
            </Button>
          </div>
          <h2
            id="sale-heading"
            className="text-xl font-bold tracking-tight text-bridge md:text-2xl text-center"
          >
            Check Out Our Thanksgiving Menu and Order Now! Order Online Before
            11/20 @3PM
          </h2>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  )
}
