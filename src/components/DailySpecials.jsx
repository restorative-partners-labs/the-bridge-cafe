import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { SectionIntro } from '@/components/SectionIntro'
import { FadeIn } from './FadeIn'

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
          {specials.map((special) => (
            <FadeIn key={special._id}>
              {' '}
              <a href={special.link}>
                {' '}
                <GridListItem
                  className="rounded-lg hover:bg-bridgelight"
                  title={special.name}
                  price={`$ ${special.price}`}
                >
                  {special.description}
                </GridListItem>
              </a>
            </FadeIn>
          ))}
        </GridList>
      </Container>
    </div>
  )
}
