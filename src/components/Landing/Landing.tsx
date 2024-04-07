import React from "react";
import { Link } from "react-router-dom";
import styles from './Landing.module.css';

interface LandingProps {
buttonText: string;
buttonLink: string;
}

export const Landing: React.FC<LandingProps> = ({buttonText, buttonLink}) => {

return (
    <div className={styles.container}>
        
        <h1 style={{ color: "#2196f3", fontSize: '45px', marginTop: '70px' }}> ¡Bienvenido a Todo App!</h1>
        <p >Organiza tu día de manera eficiente y haz que cada momento cuente con nuestra aplicación de tareas. Desde gestionar tus pendientes diarios hasta planificar proyectos importantes, Todo App te ayuda a mantener el control y la claridad en tu vida. 📅✨</p>
        <Link to={buttonLink}>
        <button className={styles.button}>{buttonText}</button>
        </Link>
        
    </div>
)    
}

