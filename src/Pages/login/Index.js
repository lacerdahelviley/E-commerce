import styles from "./Index.module.css";

function Login() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.Conteiner}>
          <div className={styles.Form}>
            <h2>Login</h2>
            <input type="email" className={styles.Email} placeholder="E-mail" />
            <span className={styles.BorderEmail} />
            <input type="password" className={styles.Password} placeholder="Senha" />
            <span className={styles.BorderPassword} />
            <button type="submit" className={styles.SubmitBtn}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
