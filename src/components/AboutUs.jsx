import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { SectionIntro } from '@/components/SectionIntro'

export default function AboutUs() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40 lg:pb-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-bridgelight"></div>

      <SectionIntro
        eyebrow="About Us"
        title="Transforming Lives One Bite at a Time"
      >
        <p>
          Joining Restorative Partners dozens of other wraparound programs and
          services, The Bridge Cafe creates a community for justice-involved
          individuals to seek employment, gain empowered education, and enter
          the workforce in a supported, sustainable way. Simultaneously, The
          Bridge Cafe allows the community to change lives and engage in
          restorative practices in a simple way: by grabbing a bite to eat and
          meeting our staff.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList columnCount={2}>
          <GridListItem title="Social Enterprise">
            A business whose primary purpose is addressing a social challenge
            rather than creating profit for owners or shareholders. All proceeds
            from the cafe are fed back into Restorative Partners&#39; programs and
            services.
          </GridListItem>
          <GridListItem title="Quality Convenient Dining">
            Delicious food to gather around, whether grabbing to go or dining on
            our patio to admire the community artwork.
          </GridListItem>
          <GridListItem title="Employment & Job Development">
            In partnership with Cuesta College&#39;s Culinary Arts Foundation, The
            Bridge Cafe provides paid experience for justice-involved
            individuals seeking a certificate of specialization in culinary
            arts. Upon completion of the program, Restorative Partners assists
            participants with finding culinary employment.
          </GridListItem>
          <GridListItem title="Fundraising">
            Your donation can support a justice-involved individual through
            Cuesta College's program and help maintain and grow Restorative
            Partners' other services and programs. Tax ID 47-4825349
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}
