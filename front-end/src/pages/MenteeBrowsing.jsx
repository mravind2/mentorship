/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Jane Doe',
      href: '#',
      price: 'Project Management Specialist',
      imageSrc: 'public/Images/images/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.webp',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Adam Smith',
      href: '#',
      price: 'Data Analysis Specialist',
      imageSrc: 'public/Images/images/features-03-image-02.png',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'John Adams',
      href: '#',
      price: 'Construction Manager',
      imageSrc: 'public/Images/images/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.webp',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Michael Crow',
      href: '#',
      price: 'President of ASU',
      imageSrc: 'public/Images/images/mentor2.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },

    {
      id: 5,
      name: 'Coming Soon',
      href: '#',
      // price: '$48',
      imageSrc: 'public/Images/images/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.webp',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 6,
      name: 'Coming Soon',
      href: '#',
      // price: '$35',
      imageSrc: 'public/Images/images/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.webp',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 7,
      name: 'Coming Soon',
      href: '#',
      // price: '$89',
      imageSrc: 'public/Images/images/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.webp',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },

      {
        id: 8,
        name: 'Coming Soon',
        href: '#',
        // price: '$35',
        imageSrc: 'public/Images/images/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.webp',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
    // More products...
  ]
  
  export default function MenteeBrowsing() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    // className="h-full w-full object-cover object-center group-hover:opacity-75"
                    className="h-full w-full object-contain object-center group-hover:opacity-75 bg-white"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-700">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }