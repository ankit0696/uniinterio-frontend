
import Lottie from 'lottie-react'
import KitchenAnimation from '../images/lottie/kitchen.json'
import WardrobeAnimation from '../images/lottie/wardrobe.json'
import FurnitureAnimation from '../images/lottie/furniture.json'
import WallPaintAnimation from '../images/lottie/paint.json'


export default function Solutions() {
  const solutions = [
    // {
    //   name: 'Modular Kitchen',
    //   svg: KitchenAnimation
    // },
    // {
    //   name: 'Storage and wardrobe',
    //   svg: WardrobeAnimation,
    // },
    // {
    //   name: 'Crockery Units',
    //   svg: KitchenAnimation
    // },
    {
      name: 'Space Saving Furniture',
      svg: FurnitureAnimation
    },
    // {
    //   name: 'TV Units',
    //   svg: KitchenAnimation
    // },
    // {
    //   name: 'Study Tables',
    //   svg: <Study />,
    // },
    // {
    //   name: 'False Ceiling',
    //   svg: <Ceiling />,
    // },
    // {
    //   name: 'Lights',
    //   svg: <Lights />,
    // },
    // {
    //   name: 'Wallpaper',
    //   svg: <Wallpaper />,
    // },
    {
      name: 'Wall Paint',
      svg: WallPaintAnimation
    },
    // {
    //   name: 'Bathroom',
    //   svg: <Bathroom />,
    // },
    // {
    //   name: 'Pooja Unit',
    //   svg: <Pooja />,
    // },
    // {
    //   name: 'Foyer Designs',
    //   svg: <Foyer />,
    // },
    // {
    //   name: 'Movable furniture',
    //   svg: <Movable />,
    // },
    // {
    //   name: 'Kids Bedroom',
    //   svg: <Kids />,
    // },
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
            <div className="flex justify-center w-full h-32">
              <Lottie 
                animationData={solution.svg}
                // animate on hover
                loop={false}
              
              />
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