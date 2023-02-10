import style from "./aside.module.scss";


const Aside = ({marca}) => {
    return(
        <div className={style.container}>
            <label>
                <input className={style.checkbox} type="checkbox" />
                {marca}
            </label>
        </div >
    )
}
export default Aside;