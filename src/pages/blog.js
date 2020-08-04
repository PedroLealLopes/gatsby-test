import React from 'react'
import Layout from '../components/Layout'
import styles from "../components/blog.module.css"

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
            <h1>This is our blog page</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nihil incidunt ipsa, in fuga, tempora eos labore molestias culpa nostrum nisi, vitae aspernatur. Non quod tempora delectus vitae asperiores explicabo similique. Quam id aut autem!</p>
            </div>
                
        </Layout>
    )
}

export default blog
