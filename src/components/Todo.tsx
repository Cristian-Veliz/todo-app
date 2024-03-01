import { type Todo as TodoType } from "../types";

interface Props extends TodoType{
onRemoveTodo: (id: string) => void   
}

export const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo}) => {
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
        onClick={() => {
            onRemoveTodo(id)
        }}
        
        />
         
    </div>
    )
}