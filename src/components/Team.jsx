import { FadeIn, FadeInStagger } from './FadeIn'
import { SanityDocument } from '@sanity/client'

const people = [
  {
    id: 1,
    name: 'Jason Hunter',
    role: 'General Manager/Chef',
    imageUrl: 'https://techsavagery.b-cdn.net/the-bridge-cafe/Jason.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    id: 2,
    name: 'Jaycee Holland',
    role: 'Assistant Manager',
    imageUrl: 'https://techsavagery.b-cdn.net/the-bridge-cafe/Jaycee.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    id: 4,
    name: 'Jared Lee',
    role: 'Line Cook',
    imageUrl: 'https://techsavagery.b-cdn.net/the-bridge-cafe/Jared.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]

export default function Team(teamMembers = []) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-bridge sm:text-4xl ">
            Meet our Team
          </h2>
          <p className="mt-4 text-2xl leading-8 text-bridge">
            At The Bridge Cafe, we are more than just a café - we are a social
            enterprise with a mission to make a positive impact on our
            community. Our dedicated kitchen staff plays a pivotal role in
            bringing this mission to life every day. Let us introduce you to the
            talented individuals who work behind the scenes to create culinary
            magic and a welcoming atmosphere.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-12"
        >
          {' '}
          {teamMembers.map((teamMember) => (
            <FadeIn key={teamMember.id}>
              {' '}
              <li
                key={teamMember.id}
                className="rounded-2xl bg-bridgelight px-8 py-10 ring-2 ring-bridge"
              >
                <img
                  className="mx-auto h-48 w-48 rounded-full ring-2 ring-bridge md:h-56 md:w-56"
                  src={teamMember.image}
                  alt=""
                />
                <h3 className="mt-6 text-3xl font-bold leading-7 tracking-tight text-bridge">
                  {teamMember.name}
                </h3>
                <p className="text-lg leading-6 text-gray-800">
                  {teamMember.role}
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </div>
  )
}
