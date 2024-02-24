import { type Todo as TodoType } from "../types";

type Props = TodoType;

export const Todo: React.FC<Props> = ({id, title, completed}) => {
    return (
    <div>
        <input 
        className="toggle"
        checked={completed}
        type="checkbox" 
        onChange={()=>{}}

        />
        <label>{title}</label>
        <button
        className="destroy"
        onClick={() => {}}
        />
         
    </div>
    )
}