import AdminPosts from "@/components/adminPosts/adminPosts";
import styles from "./admin.module.css";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import { auth } from "@/lib/auth"

const AdminPage = async () => {

    const session = await auth();

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <AdminPosts />
                </div>
                <div className={styles.col}>
                    <AdminPostForm userId = {session.user.id}/>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <AdminUsers />
                </div>
                <div className={styles.col}>
                    <AdminUserForm />
                </div>
            </div>
        </div>
    )
}

export default AdminPage