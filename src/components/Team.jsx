import { FadeIn, FadeInStagger } from './FadeIn'

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
    id: 3,
    name: 'Abele Martinez',
    role: 'Line Cook',
    imageUrl: 'https://techsavagery.b-cdn.net/the-bridge-cafe/Abele.jpg',
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

export default function Team() {
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
          {people.map((person) => (
            <FadeIn key={person.id}>
              {' '}
              <li
                key={person.id}
                className="rounded-2xl bg-bridgelight px-8 py-10 ring-2 ring-bridge"
              >
                <img
                  className="mx-auto h-48 w-48 rounded-full ring-2 ring-bridge md:h-56 md:w-56"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-3xl font-bold leading-7 tracking-tight text-bridge">
                  {person.name}
                </h3>
                <p className="text-lg leading-6 text-gray-800">{person.role}</p>
                {/* <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    href={person.twitterUrl}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul> */}
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </div>
  )
}
