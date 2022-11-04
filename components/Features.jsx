import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ScaleIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const transferFeatures = [
  {
    id: 1,
    name: 'Quality Convenient Dining',
    description:
      'Delicious food to gather around, whether grabbing to-go or dining on our patio admiring the community artwork',
    icon: ClockIcon,
  },
  {
    id: 2,
    name: 'Career Advancement & Training',
    description:
      'On-the-job training and certification for justice involved individuals in partnerships with Cuesta College',
    icon: AcademicCapIcon,
  },
  {
    id: 3,
    name: 'Job Opportunities',
    description:
      'Employment to the clients we serve and others who are justice involved ',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    id: 4,
    name: 'Fundraising',
    description:
      'Ongoing fiscal support for maintaining and growing programming at Restorative Partners',
    icon: CurrencyDollarIcon,
  },
];
const communicationFeatures = [];

export default function Example() {
  return (
    <div className="overflow-hidden bg-gray-50 lg:pb-20">
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <svg
          className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        ></svg>

        <div className="relative">
          <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Social Enterprise
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
            A business whose primary purpose is addressing a socail challenge
            rather than creating profit for owners or shareholders.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              What we do
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              "Every path in life has bridges, the journey is crossing them."
              You can be an integral partner in building these bridges for our
              community.
              <br />
              <br />
              The Bridge Café serves the San Luis Obispo County community in a
              variety of ways:
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <img
              className="relative mx-auto"
              width={490}
              src="https://gosolo.subkit.com/content/images/2022/03/96124c45-7880-47d8-bbcf-b94e9b5b311f-photo_of_your_product_or_your_service-_AJP3788.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Why we do it
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                The café will act as a "bridge" in furthering our clients'
                reentry journey, preparing them to move ahead in life with a
                self-supported career path. It will also be a bridge between
                community members. So often, our clients face stigma based on
                past decisions alone. Many of those employed by the café will
                come from our programs and have the opportunity to connect with
                café patrons and county officials, creating restorative
                relationships and networks.
              </p>

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
              <img
                className="relative mx-auto"
                width={490}
                src="https://images.pexels.com/photos/3437689/pexels-photo-3437689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
