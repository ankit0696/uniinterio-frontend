import FurnitureIcon from '@/images/solutions/furniture.svg'
import WallPaintIcon from '@/images/solutions/wall-paint.svg'
import KitchenAnimation from '@/images/solutions/kitchen.svg'
import CeilingIcon from '@/images/solutions/ceiling.svg'
import BathroomIcon from '@/images/solutions/bathroom.svg'
import BedroomIcon from '@/images/solutions/bedroom.svg'
import GlassIcon from '@/images/solutions/crystal.svg'
import WallPaperIcon from '@/images/solutions/wallpaper.svg'
import Image from 'next/image'
export default function Solutions() {
  const solutions = [
    {
      name: 'Modular Kitchen',
      icon: KitchenAnimation
    },
    // {
    //   name: 'Storage and wardrobe',
    //   icon: WardrobeAnimation,
    // },
    // {
    //   name: 'Crockery Units',
    //   icon: KitchenAnimation
    // },
    {
      name: 'Space Saving Furniture',
      icon: FurnitureIcon
    },
    // {
    //   name: 'TV Units',
    //   icon: KitchenAnimation
    // },
    // {
    //   name: 'Study Tables',
    //   icon: <Study />,
    // },
    {
      name: 'False Ceiling',
      icon: CeilingIcon
    },
    // {
    //   name: 'Lights',
    //   icon: <Lights />,
    // },

    {
      name: 'Wall Paint',
      icon: WallPaintIcon
    },
    {
      name: 'Bathroom',
      icon: BathroomIcon
    },
    // {
    //   name: 'Pooja Unit',
    //   icon: <Pooja />,
    // },
    // {
    //   name: 'Foyer Designs',
    //   icon: <Foyer />,
    // },
    {
      name: 'Glass Interior',
      icon: GlassIcon
    },
    {
      name: 'Master Bedroom',
      icon: BedroomIcon
    },
    {
      name: 'Wallpaper',
      icon: WallPaperIcon
    }
  ]
    

return (
<section className="">
  <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
      Interio Solutions
    </h2>
    <div className="mt-6 grid grid-cols-3 gap-8 md:grid-cols-5 lg:mt-8">
      {solutions.map((solution) => (
        <div key={solution.name} className="col-span-1 flex justify-center">
          <div className="max-w-xs space-y-1">
            <div className="flex justify-center w-full h-24 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md">
              {/* Add icon image here */}
              <Image src={solution.icon} alt={solution.name} />
            </div>
            <div className="">
              <div className="space-y-1 text-sm text-center font-semibold text-zinc-900 dark:text-zinc-100">
                <h3>{solution.name}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
)
}