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
        <p style={{textAlign: "center"}}>Organiza tu día de manera eficiente con Todo App. Desde gestionar tus tareas diarias hasta planificar proyectos importantes, nuestra aplicación te ayuda a mantener el control y la claridad en tu vida. Simplifica tu rutina y haz que cada momento cuente. 📅✨</p>
        <Link to={buttonLink}>
        <button className={styles.button}>{buttonText}</button>
        </Link>
        
    </div>
)    
}

