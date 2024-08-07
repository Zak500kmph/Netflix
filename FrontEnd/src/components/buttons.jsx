function Buttons({items,handler}){

    return <div>
        {items.map((item)=>{return <button className="ml-5 bg-red-800 h-10 w-[79px] rounded-xl mr-2" onClick={()=>{handler(item)}} key={items}>{item}</button>})}
    </div>
}
export default Buttons