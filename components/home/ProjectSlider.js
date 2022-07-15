import Slider from 'react-slick'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

export default function ProjectSlider() {
  const images = [
    { url: '/home/project-1.png', alt: 'project-1' },
    { url: '/home/project-2.png', alt: 'project-2' },
    { url: '/home/project-3.png', alt: 'project-3' },
    { url: '/home/project-4.png', alt: 'project-4' },
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
