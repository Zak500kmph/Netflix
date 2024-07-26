function Button({buttons}){

    return buttons.map(item=> <button className="font-normal mr-4 bg-red-800 w-20 h-8 rounded-xl text-white" key={item}>
        {item}
        </button>)
}
export default Button