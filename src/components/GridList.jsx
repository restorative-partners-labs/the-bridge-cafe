import clsx from 'clsx'

import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export function GridList({ className, children }) {
  return (
    <FadeInStagger>
      <ul
        role="list"
        className={clsx(
          'grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3',
          className
        )}
      >
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function GridListItem({
  title,
  price,
  children,
  className,
  invert = false,
}) {
  return (
    <li
      className={clsx(
        'text-xl',
        invert
          ? 'text-neutral-300 before:bg-white after:bg-white/10'
          : 'text-neutral-600 before:bg-neutral-950 after:bg-neutral-100',
        className
      )}
    >
      <FadeIn>
        <Border position="left" className="pl-8 hover:bg-none" invert={invert}>
          <strong
            className={clsx(
              'text-bridge',
              'text-3xl',
              'font-superbold',
              'uppercase',
              invert ? 'text-white' : 'text-neutral-950'
            )}
          >
            {title}
          </strong>{' '}
          <br />
          <strong
            className={clsx(
              'text-bridge',
              'text-xl',
              'font-superbold',
              'uppercase',
              invert ? 'text-white' : 'text-neutral-950'
            )}
          >
            {children}
          </strong>
          <br />
          <strong
            className={clsx(
              'text-bridge',
              'text-2xl',
              'font-superbold',
              invert ? 'text-white' : 'text-neutral-950'
            )}
          >
            {price}
          </strong>{' '}
        </Border>
      </FadeIn>
    </li>
  )
}
