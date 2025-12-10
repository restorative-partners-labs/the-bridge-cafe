import { useState, useEffect } from 'react'

export default function HolidayClosureBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Check localStorage only after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
    // Only check localStorage after mount (client-side only)
    if (typeof window !== 'undefined') {
      const dismissed = localStorage.getItem('holidayBannerDismissed')
      if (dismissed === 'true') {
        setIsVisible(false)
      }
    }
  }, [])

  // Always render the same on server and initial client render
  // Only hide after checking localStorage on mount
  if (!isVisible) return null

  return (
    <>
      {/* 
        Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
        your content from being obscured when the user scrolls to the bottom of the page.
      */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
        <div className="pointer-events-auto flex items-center gap-x-3 overflow-hidden bg-bridge px-4 py-2.5 sm:gap-x-6 sm:rounded-xl sm:px-6 sm:py-3">
          <div className="flex flex-nowrap items-center justify-between gap-x-2 sm:justify-start sm:gap-x-4">
            <p className="whitespace-nowrap text-[1.3125rem] text-white">
              🎄 Closed{' '}
              <span className="md:hidden">
                <strong>Dec 19-28</strong> & <strong>Jan 1st</strong>
              </span>
              <span className="hidden md:inline">
                <strong>December 19-28</strong> & <strong>January 1st</strong>
              </span>
              .
            </p>
            <a
              href="https://order.toasttab.com/online/the-bridge-cafe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 rounded-full border-2 border-black bg-white px-2.5 py-1 text-xs font-semibold text-black shadow-sm hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:px-3.5 sm:text-sm"
            >
              Order Now <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

