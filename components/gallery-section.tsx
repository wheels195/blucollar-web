import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const images = [
  {
    id: 1,
    src: "/landscape.png",
    alt: "Landscape Design Company Website",
    title: "Landscape Design Co.",
    description: "Modern landscaping solutions for your outdoor space"
  },
  {
    id: 2,
    src: "/electric.png",
    alt: "Electric Solutions Website",
    title: "Electric Solutions",
    description: "Professional electrical services website"
  },
  {
    id: 3,
    src: "/painting.png",
    alt: "Color Masters Painting Website",
    title: "Color Masters Painting",
    description: "Expert painting services showcase"
  },
  {
    id: 4,
    src: "/restaurant.png",
    alt: "Bistro Delight Restaurant Website",
    title: "Bistro Delight",
    description: "Cozy restaurant and dining experience"
  },
  {
    id: 5,
    src: "/roof.png",
    alt: "Premium Roofing Website",
    title: "Premium Roofing",
    description: "Quality roofing solutions and services"
  },
  {
    id: 6,
    src: "/freshwheels.png",
    alt: "Fresh Wheels Auto Detailing Website",
    title: "Fresh Wheels Detailing",
    description: "Professional automotive detailing and care services"
  }
]

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    console.log('Gallery mounted, current index:', currentIndex)
  }, [currentIndex])

  const handlePrevClick = () => {
    console.log('Previous clicked')
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    console.log('New index will be:', newIndex)
    setCurrentIndex(newIndex)
  }

  const handleNextClick = () => {
    console.log('Next clicked')
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    console.log('New index will be:', newIndex)
    setCurrentIndex(newIndex)
  }

  const handleDotClick = (index) => {
    console.log('Dot clicked:', index)
    setCurrentIndex(index)
  }

  return (
    <section id="gallery" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
              Our Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Explore our portfolio of beautifully crafted websites across various industries.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="relative h-[800px] overflow-hidden rounded-xl bg-gray-100">
            {/* Main Image */}
            <div className="absolute inset-0">
              <img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/50 text-white">
                <h3 className="text-2xl font-bold mb-2">{images[currentIndex].title}</h3>
                <p className="text-white/80">{images[currentIndex].description}</p>
              </div>
            </div>

            {/* Arrow Navigation */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
              <button
                onClick={handlePrevClick}
                className="z-20 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors transform hover:scale-110"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={handleNextClick}
                className="z-20 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors transform hover:scale-110"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Dot Navigation */}
            <div className="absolute bottom-24 inset-x-0 flex justify-center gap-3 z-20">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`
                    transition-all duration-300 ease-in-out
                    ${currentIndex === idx 
                      ? 'w-8 h-3 bg-white' 
                      : 'w-3 h-3 bg-white/50 hover:bg-white/75'
                    } rounded-full
                  `}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 