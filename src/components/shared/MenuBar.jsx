// import menu1 from '../../assets/menu/banner3.jpg'
// import menu2 from '../../assets/menu/menu-bg.png'
// import menu3 from '../../assets/menu/pizza-bg.jpg'
// import menu4 from '../../assets/menu/dessert-bg.jpeg'
// import menu5 from '../../assets/menu/salad-bg.jpg'
// import menu6 from '../../assets/menu/soup-bg.jpg'



function MenuBar({menu}) {
    const {name,recipe,image,price} = menu
   
  return (
    <div>
        <div className="flex gap-3">
            <img className="w-20" style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
            <div className="flex">
            <div>
                <h4> {name} ------------------</h4>
                <p>{recipe}</p>
            </div>
            <div>
                <p className="text-[#D99904] font-semibold">${price}</p>

            </div>
            </div>
        </div>
    </div>
  )
}

export default MenuBar