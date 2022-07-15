import Slider from 'react-slick'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

export default function ProjectSlider() {
  const images = [
    { url: '/home/hero.png', alt: 'hero' },
    { url: '/home/hero.png', alt: 'hero' },
    { url: '/home/hero.png', alt: 'hero' },
    { url: '/home/hero.png', alt: 'hero' },
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.url}>
            <Image src={image.url} alt={image.alt} width={2572} height={1984} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
