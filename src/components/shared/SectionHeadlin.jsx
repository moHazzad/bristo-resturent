

function SectionHeadlin({tags , title} ) {
  return (
    <div className="text-center mb-10 ">
        <p className="text-[#D99904] mb-3   ">{tags}</p>
        <h2 className="uppercase font-bold text-4xl">{title}</h2>
    </div>
  )
}

export default SectionHeadlin