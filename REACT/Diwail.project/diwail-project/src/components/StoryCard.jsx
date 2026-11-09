
const StoryCard = ({ title, images, children, number }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-orange-100 overflow-hidden hover:shadow-2xl transition-all duration-300">

      {/* Card Heading */}
      <div className="px-6 pt-6 pb-4 flex items-center gap-4">

        <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-xl font-extrabold">
          {number}
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">
            {title}
          </h2>

          <p className="text-sm text-orange-500 font-medium mt-1">
            Diwali Memories
          </p>
        </div>

      </div>

      {/* Image Gallery */}
      <div className={`grid gap-3 px-6 ${images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>

        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-2xl ${images.length === 3 && index === 0 ? 'col-span-2 sm:col-span-1' : ''}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-52 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}

      </div>

      {/* Story Content */}
      <div className="p-6">

        <div className="w-16 h-1 bg-orange-400 rounded-full mb-4"></div>

        <p className="text-gray-600 text-sm md:text-base leading-8 text-justify">
          {children}
        </p>

      </div>

    </div>
  )
}


export default StoryCard