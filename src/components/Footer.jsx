import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/components/Logo'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logo className="h-10 w-auto" />
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div
            id="contact"
            className="group relative -mx-4 items-center self-stretch p-4 transition-colors hover:bg-gray-100 lg:flex sm:flex-col sm:self-auto sm:rounded-2xl lg:mx-0 lg:flex-row lg:self-auto lg:p-6"
          >
            <div className="py-4 ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  The Bridge Cafe
                </Link>
              </p>
              <p className="mt-1 text-lg text-gray-700">1074 Higuera St</p>
              <p className="mt-1 text-lg text-gray-700">
                San Luis Obispo, CA 93401
              </p>
              <p className="mt-1 text-lg text-gray-700">805-439-1689</p>
              <p className="mt-1 text-lg text-gray-700">
                info@thebridgecafe.org
              </p>
            </div>
            <div className="py-4 ml-8 lg:w-64">
              <p className="text-lg font-semibold text-gray-900">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Restorative Partners
                </Link>
              </p>
              <p className="mt-1 text-lg text-gray-700">
                3196 S. Higuera St, Suite D
              </p>
              <p className="mt-1 text-lg text-gray-700">
                San Luis Obispo, CA 93401
              </p>
              <p className="mt-1 text-lg text-gray-700">805-242-1272</p>
              <p className="mt-1 text-lg text-gray-700">
                info@restorativepartners.org
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
          <Button
            href="https://restorativepartnersinc.salsalabs.org/TheBridgeCafeNewsletter/index.html"
            variant="outline"
            color="white"
            className="ml-4 flex-none"
          >
            <span className="hidden lg:inline">
              <p classNames="text-2xl">Join our newsletter</p>
            </span>
            <span className="text-2xl lg:hidden">Join newsletter</span>
          </Button>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
