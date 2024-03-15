import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Slider.module.css"
import { SundayBrunch } from '@/components/SundayBrunch'
import { Hero } from '@/components/Hero'

const slides = [{component: <Hero/>, key:1},{component: <SundayBrunch/>, key:2}
]

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

export default function HeroSlider () {
  const [loaded, setLoaded] = React.useState([])
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const [sliderRef,instanceRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 7000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  React.useEffect(() => {
    const new_loaded = [...loaded]
    new_loaded[currentSlide] = true
    setLoaded(new_loaded)
  }, [currentSlide])

  return (
    <div ref={sliderRef} className="keen-slider">
      {slides.map((src, idx) => (
        <div key={idx} className="keen-slider__slide lazy__slide">
          {src.component}
        </div>
      ))}
    </div>
  )
}
