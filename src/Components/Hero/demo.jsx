import img1 from "/assets/images/category/7.jpg";
import img2 from "/assets/images/category/8.jpeg";
import img3 from "/assets/images/category/9.webp";

const callouts = [
  {
    name: 'Desk and Office Gaming',
    description: 'Work from home accessories',
    imageSrc: img1,
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement Gaming',
    description: 'Journals and note-taking',
    imageSrc: img2,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Gaming ',
    imageSrc: img3, 
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
];

export default function Collection() {
  return (
    <div className="bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl py-16 mx-auto sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-4xl font-bold text-pink-500">Gaming Accessories</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="relative group">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc} // Properly reference the image source
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-white">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-white">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
