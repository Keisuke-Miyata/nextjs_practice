// import { signIn, auth } from "@/lib/auth";
import LoginForm from "@/components/loginForm/loginForm"
import { handleGithubLogin, login } from "@/lib/action";
import styles from "./login.module.css"
import { Router } from "react-router-dom";

const LoginPage = () => {

    // const session = await auth();
    // console.log(session)

    // auth?.user?.isAdmin && Router.push("/");

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form action={handleGithubLogin}>
                    <button className={styles.github}>Login with Github</button>
            </form>
            <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage