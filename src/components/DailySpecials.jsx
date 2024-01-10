import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { SectionIntro } from '@/components/SectionIntro'
import { FadeIn } from './FadeIn'

export function DailySpecials({ specials = [], fadeIn = true }) {
  return (
    <div
      id="daily-specials"
      className="relative mb-12 mt-6 pb-12 pt-6 sm:mt-4 sm:pt-4 lg:mt-10 lg:pt-10"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <SectionIntro
            eyebrow=""
            title=" Unwrap Deliciousness with Our Daily Specials!"
          >
            <p className="text-2xl">
              Indulge in a culinary journey with our ever-changing specials at
              The Bridge Cafe. From unique flavors to delightful surprises, our
              specials showcase the best of the season. Join us to experience a
              fresh twist on café dining!
            </p>
          </SectionIntro>
          <div>
            <link
              rel="stylesheet"
              href="https://cdn6.localdatacdn.com/badges/restaurantji/css/circle_v12.css?v=61517"
            ></link>
            <div
              id="circle_v12_wrap"
              style={{ width: `calc(250px * 1)`, height: `calc(220px * 1)` }}
            >
              <div id="circle_v12" tabindex="0">
                <div id="circletype_v12_brand_name" class="autoFontSize">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.restaurantji.com/ca/san-luis-obispo/the-bridge-caf-/"
                    class="ahref_emprty_area"
                    style={{ fontSize: `calc(13px * 1)` }}
                  >
                    The Bridge Café
                  </a>
                </div>
                <a
                  href="https://www.restaurantji.com"
                  target="_blank"
                  rel="noreferrer"
                  id="rewards_link"
                >
                  Restaurantji
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container className="mt-24">
        <GridList>
          {specials.map((special) =>
            fadeIn == true ? (
              <FadeIn key={special._id}>
                <a href={special.link}>
                  <GridListItem
                    className="rounded-lg hover:bg-bridgelight"
                    title={special.name}
                    price={`$ ${special.price}`}
                  >
                    {special.description}
                  </GridListItem>
                </a>
              </FadeIn>
            ) : (
              <a href={special.link}>
                <GridListItem
                  className="rounded-lg hover:bg-bridgelight"
                  title={special.name}
                  price={`$ ${special.price}`}
                >
                  {special.description}
                </GridListItem>
              </a>
            )
          )}
        </GridList>
      </Container>
    </div>
  )
}
