import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { SectionIntro } from '@/components/SectionIntro'

export function DailySpecials() {
  return (
    <div className="relative mb-12 mt-6 pb-12 pt-6 sm:mt-4 sm:pt-4 lg:mt-10 lg:pt-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="stroke-neutral-950/5 absolute inset-0 h-full w-full fill-neutral-100 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow=""
        id="daily-specials"
        title=" Unwrap Deliciousness with Our Daily Specials!"
      >
        <p className="text-2xl">
          Indulge in a culinary journey with our ever-changing weekly specials
          at The Bridge Cafe. From unique flavors to delightful surprises, our
          specials showcase the best of the season. Join us to experience a
          fresh twist on café dining every week!
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Monday" dish="SHREDDED BEEF TACOS" price="$8">
            SERVED WITH GUACAMOLE, SOUR CREAM & CHOPPED LETTUCE.
          </GridListItem>
          <GridListItem title="Tuesday" dish="HUEVOS RANCHEROS" price="$9">
            2 EGGS, 2 CORN TORTILLAS, BEANS, SALSA VERDE & A SLICE OF AVOCADO.
          </GridListItem>
          <GridListItem title="Wednesday" dish="BAGEL SANDO" price="$8">
            FRESH BAGEL, CHOICE OF SAUSAGE OR BACON WITH HARD SCRAMBLED EGGS.
          </GridListItem>
          <GridListItem title="Thursday" dish="TUNA MELT" price="$11">
            CHEF JASON&apos;S ULTIMATE TUNA MIX SERVED WITH SMOKED GOUDA OVER
            FRESH CIABATTA BREAD.
          </GridListItem>
          <GridListItem title="Friday" dish="BISCUIT & GRAVY" price="$12">
            HOMEMADE BISCUITS, WITH GRANDMA&apos;S COUNTRY STYLE SAUSAGE GRAVY.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}
