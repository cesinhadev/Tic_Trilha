/* Desafio em ciar uma pagina de Error personalizada*/ 

import style from './Error404.module.css';
const Error404 = () =>{
    return(
        <div className={style.Error404}>
            <h1>404</h1>
            <h2>Pagina não encontrada</h2>
        </div>
    )
}

export { Error404 };