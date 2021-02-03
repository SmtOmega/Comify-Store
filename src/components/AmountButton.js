import { FaMinus, FaPlus } from "react-icons/fa"


const AmountButton = ({amount, decrease, increase}) => {
    return <div className="abtn">
        <button onClick={decrease}><FaMinus /></button>
        <p>{amount}</p>
        <button onClick={increase}> <FaPlus /></button>
    </div>
}

export default AmountButton