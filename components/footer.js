export default function Footer() {
  return (
    <footer>
      <div className="mt-4 bg-color-black py-16 flex flex-col items-center justify-center f-f-l">
        <div className="w-1/5">
          <img loading="lazy" src="/footer-logo.png" />
        </div>
        <div className="flex space-x-4 items-center py-12">
          <a
            className="cursor-pointer"
            href="https://www.facebook.com/TheBridgeCafeSLO"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={13}
              height={20}
              viewBox="0 0 13 20"
              fill="none"
            >
              <path
                d="M1 8V12H4V19H8V12H11L12 8H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V8H1Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            className="cursor-pointer"
            href="https://www.instagram.com/thebridgecafeslo/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-instagram"
              width={22}
              height={22}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x={4} y={4} width={16} height={16} rx={4} />
              <circle cx={12} cy={12} r={3} />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </a>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-4 items-center">
            <a href="home.html">
              <li
                style={{ color: 'white' }}
                className="lg:text-lg text-sm text-sm leading-5  text-white flex flex-col items-end justify-end font-normal cursor-pointer text-hover"
              >
                Home
              </li>
            </a>
            <a href="/menu">
              <li
                style={{ color: 'white' }}
                className="lg:text-lg text-sm text-sm leading-5  text-white relative font-normal cursor-pointer text-hover"
              >
                Menu
              </li>
            </a>
            <a href="#">
              <li
                style={{ color: 'white' }}
                className="lg:text-lg text-sm text-sm leading-5 text-white flex flex-col items-end justify-end font-normal cursor-pointer text-hover"
              >
                About
              </li>
            </a>
            <a href="/contact">
              <li
                style={{ color: 'white' }}
                className="lg:text-lg text-sm text-sm leading-5  text-white flex flex-col items-end justify-end font-normal cursor-pointer text-hover"
              >
                Contact
              </li>
            </a>
          </ul>
        </div>
        <div className="pt-16 flex items-center">
          <p className="lg:text-base text-xs text-white leading-5">
            2022 The Bridge Cafe, All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
