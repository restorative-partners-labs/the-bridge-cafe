import { useId } from 'react'

import { Container } from '@/components/Container'

const breakfast = [
  {
    name: 'BREAKFAST BURRITO',
    description: 'smoked bacon, egg, cheese, salsa, potato',
    icon: DeviceArrowIcon,
  },
  {
    name: 'BREAKFAST BOWL',
    description: 'egg, cheese, potatoes, chives, sour cream, sausage or bacon.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'BREAKFAST SANDWICH',
    description: 'bacon, egg, cheese, spinach on fresh baked bread',
    icon: DeviceClockIcon,
  },
  {
    name: 'FARMERS BREAKFAST',
    description: 'tortilla chips, onions, mole, sour cream, cotija cheese.',
    icon: DeviceListIcon,
  },
  {
    name: 'VEGAN & BOWL',
    description: 'fresh baked biscuit, house made gravy, bacon jam',
    icon: DeviceLockIcon,
  },
  {
    name: 'OVERNIGHT OATS',
    description: '',
    icon: DeviceChartIcon,
  },
  {
    name: 'YOGURT PARFAIT',
    description: '',
    icon: DeviceChartIcon,
  },
]

const hotLunch = [
  {
    name: 'THE BRIDGE',
    description:
      'cheddar, bacon jam, grilled onions, butter lettuce, tomato aioli',
    icon: DeviceArrowIcon,
  },
  {
    name: 'THE VEGAN BURGER',
    description:
      'fried tofu, butter lettuce, grilled onions, heirloom tomato, avocado, kale chickpea spread',
    icon: DeviceClockIcon,
  },
  {
    name: 'CALI - GOUCHEESE SANDO',
    description: 'mozzarella, gouda, cheddar, avocado, bacon jam, spread',
    icon: DeviceLockIcon,
  },
  {
    name: 'GRILLED CHICKEN SANDWICH',
    description:
      'brioche bun, grilled chicken, tomato, butterleaf lettuce, onion, cheddar cheese, the bridge sauce',
    icon: DeviceLockIcon,
  },
  {
    name: 'WESTERN BURGER',
    description:
      'brioche bun, 6oz beef patty, bacon, smoked cheddar, onion rings, bbq sauce',
    icon: DeviceArrowIcon,
  },
]

const coldLunch = [
  {
    name: 'CHEF SALAD',
    description:
      'chicken, spring mix, bacon bits, tomato, red onion, cheddar, ranch',
    icon: DeviceListIcon,
  },
  {
    name: 'GARDEN SALAD',
    description:
      'cherry tomato, red onion, cucumber, carrot, citrus vinaigrette',
    icon: DeviceListIcon,
  },

  {
    name: 'CEASAR SALAD',
    description:
      'butter lettuce, parmesan, homemade croutons, creamy Caesar dressing',
    icon: DeviceArrowIcon,
  },

  {
    name: 'HAM-LETT SANDO',
    description: 'ham, butter lettuce, cheese, tomato, onion, spread',
    icon: DeviceListIcon,
  },
  {
    name: 'BRIDGE CLUB SANDO',
    description:
      'chicken, bacon, provolone, butterleaf lettuce, avocado, tomato, onion, mayo',
    icon: DeviceListIcon,
  },
  {
    name: 'TURK-E-DELIGHT WRAP',
    description: 'turkey, provolone, butterleaf lettuce, tomato, onion, mayo',
    icon: DeviceCardsIcon,
  },
]

const soups = [
  {
    name: 'FRENCH ONION',
    description:
      'savory French onion topped with melted parmesan and fresh bread',
    icon: DeviceArrowIcon,
  },
  {
    name: 'TOMATO BISQUE',
    description:
      'creamy tomato bisque with fried basil leaves and homemade croutons',
    icon: DeviceCardsIcon,
  },
  {
    name: 'ITALIAN TUSCAN',
    description:
      'hearty potatoes, kale, Italian sausage, in a creamy broth and fresh bread',
    icon: DeviceClockIcon,
  },
  {
    name: 'CHICKEN COUSCOUS',
    description:
      'shredded chicken, carrots, celery with Israeli couscous and fresh bread',
    icon: DeviceListIcon,
  },
]

const bakedGoods = [
  {
    name: 'SAVORY SCONE',
    description: '',
    icon: DeviceArrowIcon,
  },
  {
    name: 'SWEET SCONE',
    description: '',
    icon: DeviceCardsIcon,
  },
  {
    name: 'HAM & CHEESE CROISSANT',
    description: '',
    icon: DeviceClockIcon,
  },
  {
    name: 'SPINACH & FETA CROISSANT',
    description: '',
    icon: DeviceListIcon,
  },
  {
    name: 'CHOCOLATE CROISSANT',
    description: '',
    icon: DeviceLockIcon,
  },
  {
    name: 'ALMOND CROISSANT',
    description: '',
    icon: DeviceChartIcon,
  },
  {
    name: 'PLAIN CROISSANT',
    description: '',
    icon: DeviceChartIcon,
  },
  {
    name: 'COOKIES',
    description: '',
    icon: DeviceChartIcon,
  },
  {
    name: '360 MUFFIN',
    description: '',
    icon: DeviceChartIcon,
  },
  {
    name: 'BCC BUSCUITS',
    description: '',
    icon: DeviceChartIcon,
  },
  {
    name: 'SWEET MUFFINS',
    description: '',
    icon: DeviceChartIcon,
  },
  {
    name: 'TURNOVER',
    description: '',
    icon: DeviceChartIcon,
  },
  {
    name: 'VEGGIE QUICHE',
    description: '',
    icon: DeviceChartIcon,
  },
  {
    name: 'MEAT QUICHE',
    description: '',
    icon: DeviceChartIcon,
  },
]

const salads = [
  {
    name: 'CEASAR',
    description:
      'butter lettuce, parmesan, homemade croutons, creamy Caesar dressing',
    icon: DeviceArrowIcon,
  },
  {
    name: 'CAPRESE',
    description:
      'cherry tomatoes, fresh mozzarella, basil, balsamic glaze over butter lettuce',
    icon: DeviceCardsIcon,
  },
  {
    name: 'WEDGE',
    description:
      'bacon, cherry tomatoes, blue cheese, red onion, egg, blue cheese dressing',
    icon: DeviceClockIcon,
  },
  {
    name: 'GARDEN',
    description:
      'cherry tomato, red onion, cucumber, carrot, citrus vinaigrette',
    icon: DeviceListIcon,
  },
]

const sides = [
  {
    name: 'FRENCH FRIES',
    description: '',
    icon: DeviceArrowIcon,
  },
  {
    name: 'ONION RINGS',
    description: '',
    icon: DeviceCardsIcon,
  },
  {
    name: 'SALSA',
    description: '',
    icon: DeviceClockIcon,
  },
]

const spreads = [
  {
    name: 'BASIL AIOLI (V)',
    description: 'vegan mayo, dijon, basil, lemon, garlic, salt',
    icon: DeviceArrowIcon,
  },
  {
    name: 'SPICY CHILI AIOLI (V)',
    description: 'vegan mayo, dijon, chili pepper, lemon, garlic, salt',
    icon: DeviceCardsIcon,
  },
  {
    name: 'KALE CHICKPEA (V)',
    description:
      'kale, carrot, chickpea, nutritional yeast, tahini, lemon, salt',
    icon: DeviceClockIcon,
  },
  {
    name: 'GARLIC TOMATO HERB AIOLI (V)',
    description: 'vegan mayo, tomato, garlic, Italian herbs, salt',
    icon: DeviceListIcon,
  },
]

function DeviceArrowIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        d="M12 25l8-8m0 0h-6m6 0v6"
        stroke="#171717"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceCardsIcon(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z"
        fill={`url(#${id}-gradient)`}
      />
      <rect x={9} y={6} width={14} height={4} rx={1} fill="#171717" />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={16}
          y1={12}
          x2={16}
          y2={28}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#737373" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}

function DeviceClockIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z"
        fill="#171717"
      />
    </svg>
  )
}

function DeviceListIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <circle cx={11} cy={14} r={2} fill="#171717" />
      <circle cx={11} cy={20} r={2} fill="#171717" />
      <circle cx={11} cy={26} r={2} fill="#171717" />
      <path
        d="M16 14h6M16 20h6M16 26h6"
        stroke="#737373"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceLockIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 19.5a3.5 3.5 0 117 0V22a2 2 0 012 2v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6a2 2 0 012-2v-2.5zm2 2.5h3v-2.5a1.5 1.5 0 00-3 0V22z"
        fill="#171717"
      />
    </svg>
  )
}

function DeviceChartIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 13.838V26a2 2 0 01-2 2H11a2 2 0 01-2-2V15.65l2.57 3.212a1 1 0 001.38.175L15.4 17.2a1 1 0 011.494.353l1.841 3.681c.399.797 1.562.714 1.843-.13L23 13.837z"
        fill="#171717"
      />
      <path
        d="M10 12h12"
        stroke="#737373"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

export function SecondaryFeatures({ menuItems }) {
  return (
    <>
      {' '}
      <section
        id="menu"
        aria-label="breakfast for building a portfolio"
        className="sm:py-10"
      >
        <Container>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900">
              BREAKFAST
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
          >
            {breakfast.map((feature) => (
              <li
                key={feature.name}
                style={{ borderColor: '#05716c' }}
                className="rounded-2xl border border-gray-200 p-8"
              >
                {/* <feature.icon className="h-8 w-8" /> */}
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-2xl text-gray-700">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section
        id="secondary-breakfast"
        aria-label="breakfast for building a portfolio"
        className="py-10 sm:py-10"
      >
        <Container>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900">
              HOT LUNCH
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
          >
            {hotLunch.map((feature) => (
              <li
                key={feature.name}
                className="rounded-2xl border p-8"
                style={{ borderColor: '#05716c' }}
              >
                {/* <feature.icon className="h-8 w-8" /> */}
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-2xl text-gray-700">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section
        id="secondary-breakfast"
        aria-label="breakfast for building a portfolio"
        className="py-10 sm:py-10"
      >
        <Container>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900">
              COLD LUNCH
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
          >
            {coldLunch.map((feature) => (
              <li
                key={feature.name}
                className="rounded-2xl border p-8"
                style={{ borderColor: '#05716c' }}
              >
                {/* <feature.icon className="h-8 w-8" /> */}
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-2xl text-gray-700">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section
        id="secondary-breakfast"
        aria-label="breakfast for building a portfolio"
        className="py-10 sm:py-10"
      >
        <Container>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900">
              BAKED GOODS
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
          >
            {bakedGoods.map((feature) => (
              <li
                key={feature.name}
                className="rounded-2xl border p-8"
                style={{ borderColor: '#05716c' }}
              >
                {/* <feature.icon className="h-8 w-8" /> */}
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-2xl text-gray-700">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section
        id="secondary-breakfast"
        aria-label="breakfast for building a portfolio"
        className="py-10 sm:py-10"
      >
        <Container>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900">
              SIDES
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
          >
            {sides.map((feature) => (
              <li
                key={feature.name}
                className="rounded-2xl border p-8"
                style={{ borderColor: '#05716c' }}
              >
                {/* <feature.icon className="h-8 w-8" /> */}
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-2xl text-gray-700">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
