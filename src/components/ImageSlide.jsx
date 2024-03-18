import { Button } from '@/components/Button'

  
  export function ImageSlide() {
    return (
      <div className="relative bg-beige">
        {/* Decorative background image and gradient */}
        <div aria-hidden="true" className="">
          <div className="xl:px-8">
            <img
              src="/vip-sunday-brunch.png"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>

        </div>
  
        {/* Callout */}
        <section
          aria-labelledby="sale-heading"
          className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-6 text-center sm:px-6 lg:px-8"
        >
            <Button
                href="/vip-sunday-brunch"
                variant="outline"
                color="theme"
                className="w-56 bg-white"
              >
                <span className="ml-2.5">
                  <p className="text-xl">Sign Up Now!</p>
                </span>
              </Button>
        </section>
  
        {/* Testimonials */}
      </div>
    )
  }
  