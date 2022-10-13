import react, { useState } from 'react';
const Index = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      {/* Navigation */}
      <div className="mx-auto container xl:px-0 px-4">
        {/* Desktop */}
        <nav>
          <div className="xl:flex hidden items-center justify-between py-4">
            <a href="/">
              <img
                loading="lazy"
                src="/bridge-cafe-logo.png"
                className="w-1/4"
                alt="logo"
              />
            </a>
            <ul className="flex leading-loose">
              <a href="/">
                <li className="xl:text-2xl text-xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer text-hover">
                  Home
                </li>
              </a>
              <a href="/menu">
                <li className="xl:text-2xl text-xl leading-8 mr-10 text-color-orange relative font-normal cursor-pointer text-hover">
                  Menu
                  <hr className="border-4 border-color-orange bg-color-orange w-10 absolute right-0" />
                </li>
              </a>
              <a href="/contact">
                <li className="xl:text-2xl text-xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer text-hover">
                  Contact
                </li>
              </a>
              {/* <a href="/contact">
                <li className="xl:text-2xl text-xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer text-hover">
                  Contact
                </li>
              </a>
              <a href="#">
                <li className="xl:text-2xl text-xl leading-8 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer text-hover">
                  Reservation
                </li>
              </a> */}
            </ul>
          </div>
        </nav>
        {/* Desktop */}
        {/* Mobile */}
        <nav className="xl:hidden z-40 relative">
          <div className="flex py-4 justify-between items-center px-4">
            <div>
              <img
                loading="lazy"
                src="/bridge-cafe-logo.png"
                alt="logo"
                className="w-1/4"
              />
            </div>
            <div className="visible flex items-center">
              <ul
                id="list"
                className={
                  menu
                    ? 'top-100 p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-12 md:mt-16'
                    : 'hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-12 md:mt-16'
                }
              >
                <li className="flex cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2">
                  <a href="/">
                    <span className="ml-2 font-bold">Home</span>
                  </a>
                </li>
                <li
                  className="flex flex-col cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal py-2 flex justify-center"
                  onclick="dropdownHandler(this)"
                >
                  <a href="/menu">
                    <span className="ml-2 font-bold">Menu</span>
                  </a>
                </li>
                <li className="flex cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                  <a href="/contact">
                    <span className="ml-2 font-bold">Contact</span>
                  </a>
                </li>
                {/* <li
                  className="flex flex-col cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal py-2 flex justify-center"
                  onclick="dropdownHandler(this)"
                >
                  <a href="/contact">
                    <span className="ml-2 font-bold">Contact</span>
                  </a>
                </li>
                <li
                  className="flex flex-col cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 flex justify-center"
                  onclick="dropdownHandler(this)"
                >
                  <a href="#">
                    <span className="ml-2 font-bold">Reservation</span>
                  </a>
                </li> */}
              </ul>
              <div className="xl:hidden">
                {!menu ? (
                  <svg
                    id="open"
                    onClick={() => setMenu(true)}
                    aria-haspopup="true"
                    aria-label="Main Menu"
                    xmlns="http://www.w3.org/2000/svg"
                    className="show-m-menu icon icon-tabler icon-tabler-menu"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                  </svg>
                ) : (
                  <div
                    id="close"
                    className="close-m-menu"
                    onClick={() => setMenu(false)}
                  >
                    <svg
                      aria-label="Close"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
        {/* Mobile */}
      </div>
      {/* Navigation */}
      {/* Hero */}
      <div>
        <div className="w-full relative bg-img-height items-center justify-center xl:flex hidden">
          <img
            loading="lazy"
            src="https://cdn.tuk.dev/assets/templates/foodies/menu-hero.png"
            className="w-full h-full absolute"
          />
          <button
            style={{ color: 'white' }}
            className="text-5xl text-white rounded-lg bg-color-orange px-14 py-2 relative hover:opacity-90"
          >
            MENU
          </button>
        </div>
      </div>
      <div className="w-full relative flex items-center justify-center xl:hidden md:h-64 h-32 xl:pt-16 pt-0">
        <img
          loading="lazy"
          src="https://cdn.tuk.dev/assets/templates/foodies/menu-hero.png"
          className="w-full h-full absolute"
        />
        <button
          style={{ color: 'white' }}
          className="text-base text-white rounded-lg bg-color-orange px-6 py-2 relative hover:opacity-90"
        >
          MENU
        </button>
      </div>
      {/* Hero */}
      {/* section1 */}
      <div className="mx-auto container xl:px-0 px-4 mt-20">
        <div className="flex items-center justify-center 2xl:-ml-0 -ml-4">
          <hr className="w-2.5 h-16 bg-color-orange" />
          <h1 className="text-3xl font-bold text-color-black pl-7">
            BREAKFAST
          </h1>
        </div>
        {/* Prices  */}
        <div className="mt-16">
          {/* row1 */}
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  BACON BURRITO
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  smoked bacon, egg, cheese, salsa, potato
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  VEGGIE SCRAMBLE
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  tomato, egg, spinach, onion, mushroom, cheese, and fresh bread
                </p>
              </div>
            </div>
          </div>
          {/* row1 */}
          {/* row2 */}
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  BREAKFAST SANDWICH
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  bacon, egg, cheese, spinach on fresh baked bread
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  CHILIQUILES
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  tortilla chips, onions, mole, sour cream, cotija cheese
                </p>
              </div>
            </div>
          </div>
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  BUSCUITS & GRAVY
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  fresh baked biscuit, house made gravy, bacon jam
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  BREAKFAST PIZZA
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  bacon, egg, cheese, basil aioli, spinach
                </p>
              </div>
            </div>
          </div>
          {/* row2 */}
        </div>
        {/* Prices  */}
      </div>
      {/* section1 */}
      {/* section2 */}
      <div className="mx-auto container xl:px-0 px-4 mt-36">
        <div className="flex items-center justify-center">
          <hr className="w-2.5 h-16 bg-color-orange" />
          <h1 className="text-3xl font-bold text-color-black pl-7">
            GRAB & GO
          </h1>
        </div>
        {/* Prices  */}
        <div className="mt-16">
          {/* row1 */}
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  HARD-BOILED EGG BENTO BOX
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  eggs, cucumber, cherry tomato, basil aioli
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  OVERNIGHT OATS
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  gf oats, oat milk, honey, vanilla with choice of toppings
                </p>
              </div>
            </div>
          </div>
          {/* row1 */}
          {/* row2 */}
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  YOGURT PARFAIT
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  Wgreek yogurt, house granola, maple syrup, fruit compote
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  ASSORTED PASTRIES
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  fresh baked daily pastries
                </p>
              </div>
            </div>
          </div>
          {/* row2 */}
          {/* row3 */}
          {/* <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  Quiche Lorraine
                </h1>
                <p className="px-5 text-color-orange xl:block hidden">
                  --------------------------------------
                </p>
                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">
                  -----------------
                </p>
                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">
                  ------------------------------------------------------------------------
                </p>
                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">
                  -----------------------------------------------------------------------------------------
                </p>
                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">
                  ------------------------------------------------------------------------------------------------------------------------------------------
                </p>
                <p className="xl:text-2xl text-xl font-semibold">$31</p>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  White bread, Pastrami bacon, Swiss cheese, Lettuce, Tomatoes,
                  Mayonnaise
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  Quiche Lorraine
                </h1>
                <p className="px-5 text-color-orange xl:block hidden">
                  --------------------------------------
                </p>
                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:hidden block">
                  -----------------
                </p>
                <p className="px-5 text-color-orange xl:hidden md:hidden sm:block lg:hidden hidden">
                  ------------------------------------------------------------------------
                </p>
                <p className="px-5 text-color-orange xl:hidden md:block sm:hidden lg:hidden hidden">
                  -----------------------------------------------------------------------------------------
                </p>
                <p className="px-5 text-color-orange xl:hidden md:hidden sm:hidden lg:block hidden">
                  ------------------------------------------------------------------------------------------------------------------------------------------
                </p>
                <p className="xl:text-2xl text-xl font-semibold">$31</p>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  White bread, Pastrami bacon, Swiss cheese, Lettuce, Tomatoes,
                  Mayonnaise
                </p>
              </div>
            </div>
          </div>
          {/* row3 */}
          {/* row4 */}
          {/* row4 */}
        </div>
        {/* Prices  */}
      </div>
      {/* section2 */}
      {/* section3 */}
      <div className="mx-auto container xl:px-0 px-4 mt-36">
        <div className="flex items-center justify-center">
          <hr className="w-2.5 h-16 bg-color-orange" />
          <h1 className="text-3xl font-bold text-color-black pl-7">
            SANDWICHES
          </h1>
        </div>
        {/* Prices  */}
        <div className="mt-16">
          {/* row1 */}
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">B.A.A.T</h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  bacon, avocado, arugula, tomato with choice of spread
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  TURK - E - DELIGHT
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  turkey, cheese, English cucumber, spinach, with choice of
                  spread
                </p>
              </div>
            </div>
          </div>
          {/* row1 */}
          {/* row2 */}
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  BIRD - A - PEST
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  turkey, chicken, avocado, pesto, arugula, onion, tomato,
                  spread
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  HAM - LETT
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  ham, butter lettuce, cheese, tomato, onion, spread
                </p>
              </div>
            </div>
          </div>
          {/* row2 */}
          {/* row3 */}
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  CALI - GOUCHEESE
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  mozzarella, gouda, cheddar, avocado, bacon jam, spread
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">TUNA CLUB</h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  tuna salad, bacon, butter lettuce, tomato, spread
                </p>
              </div>
            </div>
          </div>

          {/* row6 */}
        </div>
        {/* Prices  */}
      </div>
      {/* section3 */}
      {/* section4 */}
      <div className="mx-auto container xl:px-0 px-4 mt-36">
        <div className="flex items-center justify-center">
          <hr className="w-2.5 h-16 bg-color-orange" />
          <h1 className="text-3xl font-bold text-color-black pl-7">BURGERS</h1>
        </div>
        {/* Prices  */}
        <div className="mt-16">
          {/* row1 */}
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  THE BRIDGE
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  cheddar, bacon jam, grilled onions, butter lettuce, tomato
                  aioli
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  THE CAPRESE
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  fresh mozzarella, basil leaves, balsamic glaze, heirloom
                  tomato, basil aioli
                </p>
              </div>
            </div>
          </div>
          {/* row1 */}
          {/* row2 */}
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">THE VEGAN</h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  fried tofu, butter lettuce, grilled onions, heirloom tomato,
                  avocado, kale chickpea spread
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4"></div>
          </div>
        </div>
        {/* Prices  */}
      </div>
      {/* section4 */}
      {/* section5 */}
      <div className="mx-auto container xl:px-0 px-4 mt-36">
        <div className="flex items-center justify-center">
          <hr className="w-2.5 h-16 bg-color-orange" />
          <h1 className="text-3xl font-bold text-color-black pl-7">SOUPS</h1>
        </div>
        {/* Prices  */}
        <div className="mt-16">
          {/* row1 */}
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  FRENCH ONION
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  savory French onion topped with melted parmesan and fresh
                  bread
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  TOMATO BISQUE
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  creamy tomato bisque with fried basil leaves and homemade
                  croutons
                </p>
              </div>
            </div>
          </div>
          {/* row1 */}
          {/* row2 */}
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  ITALIAN TUSCAN
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  hearty potatoes, kale, Italian sausage, in a creamy broth and
                  fresh bread
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  CHICKEN COUSCOUS
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  shredded chicken, carrots, celery with Israeli couscous and
                  fresh bread
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Prices  */}
      </div>
      {/* section5 */}
      <div className="mx-auto container xl:px-0 px-4 mt-36">
        <div className="flex items-center justify-center">
          <hr className="w-2.5 h-16 bg-color-orange" />
          <h1 className="text-3xl font-bold text-color-black pl-7">SALADS</h1>
        </div>
        {/* Prices  */}
        <div className="mt-16">
          {/* row1 */}
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">CEASAR</h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  butter lettuce, parmesan, homemade croutons, creamy Caesar
                  dressing
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">CAPRESE</h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  cherry tomatoes, fresh mozzarella, basil, balsamic glaze over
                  butter lettuce
                </p>
              </div>
            </div>
          </div>
          {/* row1 */}
          {/* row2 */}
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">WEDGE</h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  bacon, cherry tomatoes, blue cheese, red onion, egg, blue
                  cheese dressing
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">GARDEN</h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  cherry tomato, red onion, cucumber, carrot, citrus vinaigrette
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Prices  */}
      </div>
      <div className="mx-auto container xl:px-0 px-4 mt-36">
        <div className="flex items-center justify-center">
          <hr className="w-2.5 h-16 bg-color-orange" />
          <h1 className="text-3xl font-bold text-color-black pl-7">
            SPECIALTY DISHES
          </h1>
        </div>
        {/* Prices  */}
        <div className="mt-16">
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  CARBONARA COUSCOUS
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  Israeli couscous, egg, parmesan, garlic, salt, pepper, basil
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  LETTUCE WRAP
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  chicken or tofu, sesame, soy sauce, carrots, shallots, butter
                  lettuce
                </p>
              </div>
            </div>
          </div>
          {/* row1 */}
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  MARGARITA PIZZA
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  fresh mozzarella, red sauce, basil, olive oil, heirloom
                  tomatoes
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  AVOCADO TOAST
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  avocado, cucumber, tomato, sprouts, arugula, olive oil, salt
                </p>
              </div>
            </div>
          </div>
          {/* row1 */}
          {/* row2 */}
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">THE VEGAN</h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  fried tofu, butter lettuce, grilled onions, heirloom tomato,
                  avocado, kale chickpea spread
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">THE VEGAN</h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  fried tofu, butter lettuce, grilled onions, heirloom tomato,
                  avocado, kale chickpea spread
                </p>
              </div>
            </div>
          </div>
          {/* row3 */}
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  FLAUTAS WITH MOLE
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  flour tortilla, chicken, cheese, onion, mole, crema
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  GREEK QUESADILLA
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  spinach, tomato, feta cheese, kalamata olives, drizzled with
                  tomato aioli
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto container xl:px-0 px-4 mt-36">
          <div className="flex items-center justify-center">
            <hr className="w-2.5 h-16 bg-color-orange" />
            <h1 className="text-3xl font-bold text-color-black pl-7">SIDES</h1>
          </div>
          {/* Prices  */}
          <div className="mt-16">
            {/* row1 */}
            <div className="xl:flex items-center justify-center w-full xl:pb-9">
              <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                <div className="w-full flex items-center justify-between">
                  <h1 className="xl:text-2xl text-xl font-semibold">
                    FRENCH FRIES
                  </h1>
                </div>
                <div>
                  <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                    served with signature seasoning and spread
                  </p>
                </div>
              </div>
              <div className="xl:w-2/5 xl:py-0 py-4">
                <div className="w-full flex items-center justify-between">
                  <h1 className="xl:text-2xl text-xl font-semibold">
                    PAN CON TOMATE
                  </h1>
                </div>
                <div>
                  <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                    fresh grated tomato, olive oil, basil, salt on baked bread
                  </p>
                </div>
              </div>
            </div>
            {/* row1 */}
            {/* row2 */}
            <div className="xl:flex items-center justify-center w-full xl:pb-9">
              <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
                <div className="w-full flex items-center justify-between">
                  <h1 className="xl:text-2xl text-xl font-semibold">
                    FRIED TOFU
                  </h1>
                </div>
                <div>
                  <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                    crispy fried with signature seasoning and spread
                  </p>
                </div>
              </div>
              <div className="xl:w-2/5 xl:py-0 py-4"></div>
            </div>
          </div>
          {/* Prices  */}
        </div>
        {/* Prices  */}
      </div>
      <div className="mx-auto container xl:px-0 px-4 mt-36">
        <div className="flex items-center justify-center">
          <hr className="w-2.5 h-16 bg-color-orange" />
          <h1 className="text-3xl font-bold text-color-black pl-7">SPREADS</h1>
        </div>
        {/* Prices  */}
        <div className="mt-16">
          {/* row1 */}
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  BASIL AIOLI (V)
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  vegan mayo, dijon, basil, lemon, garlic, salt
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  SPICY CHILI AIOLI (V)
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  vegan mayo, dijon, chili pepper, lemon, garlic, salt
                </p>
              </div>
            </div>
          </div>
          {/* row1 */}
          {/* row2 */}
          <div className="xl:flex items-center justify-center w-full xl:pb-9">
            <div className="xl:w-2/5 xl:py-0 py-4 xl:mr-14">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  KALE CHICKPEA (V)
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  kale, carrot, chickpea, nutritional yeast, tahini, lemon, salt
                </p>
              </div>
            </div>
            <div className="xl:w-2/5 xl:py-0 py-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-2xl text-xl font-semibold">
                  GARLIC TOMATO HERB AIOLI (V)
                </h1>
              </div>
              <div>
                <p className="xl:text-lg text-sm xl:pr-16 pt-4">
                  vegan mayo, tomato, garlic, Italian herbs, salt
                </p>
              </div>
            </div>
          </div>
          {/* row2 */}
          {/* row3 */}

          {/* row6 */}
        </div>
        {/* Prices  */}
      </div>
    </div>
  );
};
export default Index;
