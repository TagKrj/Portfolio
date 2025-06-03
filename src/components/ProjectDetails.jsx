
const ProjectDetails = ({ title, description, subDescription, image, tags, href }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
            <div
                className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-nany border-white/10 ">
                <button className="absolute p-2 rounded-b-sm top-5 right-5 bg-midnight hover:bg-gray-500">
                    <img src="/public/assets/close.svg"
                        className="w-6 h-6" />
                </button>
                <img src={image} alt={title}
                    className="w-full rounded-t-2xl" />
                <div
                    className="p-5"
                >
                    <h5
                        className="mb-2 text-2xl font-bold text-white">{title}</h5>
                    <p
                        className="mb-3 font-normal text-neutral-400">{description}</p>
                    {subDescription.map((subDesc, index) => (
                        <p
                            className="mb-3 font-normal"
                            key={index}>
                            {subDesc}
                        </p>
                    ))}
                    <div className="flex items-center justify-between mt-4">
                        <div>
                            {tags.map((tag) => (
                                <span
                                    key={tag.id}
                                    className="inline-block px-3 py-1 mr-2 text-sm font-medium text-white bg-gray-700 rounded-full">
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails