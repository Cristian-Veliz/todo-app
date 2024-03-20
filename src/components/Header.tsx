import { TodoTitle } from "../types"

interface Props {
    onAddTodo: ({title}: TodoTitle) => void
}

export const Header: React.FC<Props> = ({onAddTodo}) => {
return (
    <header className="header">
        <h1>todo
        <img
        style={{width: '60px', height: 'auto'}} 
        src="https://media.printables.com/media/prints/744766/images/5814515_854c67bc-6861-4faf-a006-2ea2e865b8ec_d4eec15e-d179-4f60-9b8d-25a82897e60f/thumbs/cover/800x800/png/ts-logo-512.webp" alt="Imagen TypeScript" />
        <CreateTodo saveTodo={onAddTodo}/> 
        </h1>
    </header>
)

}