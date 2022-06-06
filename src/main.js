import { NavLink } from "react-router-dom";

export default function Main(){
    return <>
    <div>
        <ul>
            <li>
                <NavLink to="/calculadora">Calculadora de grados</NavLink>
            </li>
            <li>
                <NavLink to="/formulario">Formulario personal</NavLink>
            </li>
            <li>
                <NavLink to="/operaciones">Operaciones matematicas</NavLink>
            </li>
        </ul>
    </div>
    </>
}