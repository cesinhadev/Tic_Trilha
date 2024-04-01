import style from './Rotape.module.css'

const Rotape = (props) => {
    const { criador } = props;

    const Ano = (new Date()).getFullYear();
    return(
        <div className={style.Rotape}>
            <footer>
                <p>React Basico - 2024 - {criador}</p>
            </footer>
        </div>
    )
}

export { Rotape }