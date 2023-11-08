export default function HolidayMenuBanner() {
  return (
    <div className="bg-bridge">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative pb-16 pt-48 sm:pb-24">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
            <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
              <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                <div className="flex-shrink-0">
                  <img
                    className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                    src="/images/food/turkey.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                <div className="mt-6 flex-shrink-0 sm:mt-0">
                  <img
                    className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                    src="/images/food/pie.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                <div className="flex-shrink-0">
                  <img
                    className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                    src="/images/food/salad.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2
              id="sale-heading"
              className="text-xl font-bold tracking-tight text-white md:text-2xl"
            >
              Season of Giving & Gathering
              <br />
              Check Out Our Thanksgiving Menu and Order Now!
              <br />
              Order Online Before 11/20 @3PM
            </h2>
            <div className="mt-6 text-base">
              <a href="/holiday-menu.png" className="font-semibold text-white">
                View Menu
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
            <div className="mt-2 text-base">
              <a
                href="https://order.spoton.com/so-the-bridge-cafe-10987/san-luis-obispo-ca/63338b3bf3ebec0040438b39"
                className="font-semibold text-white"
              >
                Order Online
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
