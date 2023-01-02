import styles from "./Login.module.css"

function Login(){
    
    return(
        <div className={styles.Conteiner}>
            <div className={styles.Form}>
                <h2>Login</h2>
                <input type="email" className="email" placeholder="E-mail"/>
                <span className="BorderEmail" />
                <input type="password" className="password" placeholder="Senha"/>
                <span className="BorderPassword"/>
                <button type="submit" className={styles.SubmitBtn}>Entrar</button>
            </div>
        </div>
    )
}

export default Login;