import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { SectionIntro } from '@/components/SectionIntro'

export function DailySpecials({ specials = [] }) {
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

      <SectionIntro
        eyebrow=""
        title=" Unwrap Deliciousness with Our Daily Specials!"
      >
        <p className="text-2xl">
          Indulge in a culinary journey with our ever-changing specials at The
          Bridge Cafe. From unique flavors to delightful surprises, our specials
          showcase the best of the season. Join us to experience a fresh twist
          on café dining!
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          {specials.map((special) => {
            <GridListItem
              className="rounded-lg hover:bg-bridgelight"
              title={special.name}
              price={special.price}
            >
              {special.description}
            </GridListItem>
          })}
          <GridListItem
            className="rounded-lg hover:bg-bridgelight"
            title="Avocado TOAST"
            price="$12"
          >
            toasted sourdough with 2 tomatoes whole Avocado fanned out with 2
            eggs
          </GridListItem>
          <GridListItem
            className="rounded-lg hover:bg-bridgelight"
            title="FRENCH TOAST BREAKFAST"
            price="$12"
          >
            2 pieces cinnamon swirl bread scrambled eggs choice sausage or bacon
          </GridListItem>
          <GridListItem
            className="rounded-lg hover:bg-bridgelight"
            title="Street Tacos"
            price="$6"
          >
            2 grilled chicken or al pastor, diced onion, & cilantro, served on
            corn tortilla with a side of avocado and salsa.
          </GridListItem>

          <GridListItem
            className="rounded-lg hover:bg-bridgelight"
            title="Patty Melt"
            price="$11"
          >
            swiss cheese, caramelized onions on marbled rye.
          </GridListItem>
          <GridListItem
            className="rounded-lg hover:bg-bridgelight"
            title="Mediterranean Salad"
            price="$12"
          >
            cucumber, tomatoes, red onion, kalamata olives, feta cheese and our
            house made lemon vinaigrette.
          </GridListItem>
          <GridListItem
            className="rounded-lg hover:bg-bridgelight"
            title="BISCUITS & GRAVY"
            price="$12"
          >
            FRIDAY ONLY! HOMEMADE BISCUITS, WITH GRANDMA&#39;S COUNTRY STYLE
            SAUSAGE GRAVY
          </GridListItem>
          <GridListItem
            className="rounded-lg hover:bg-bridgelight"
            title="Fish & Chips"
            price="$12"
          >
            FRIDAY ONLY! two cod filets with fries and housemade tartar sauce.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}
