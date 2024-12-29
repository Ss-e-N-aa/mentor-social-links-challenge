import styles from './Card.module.css'
import myImg from './../assets/avatar-jessica.jpeg'

let linksArr = ['Github', 'Frontend Mentor', 'Linkedin'];

export default function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <section className={styles.profileContainer}>
                    <img className={styles.profileImg} src={myImg} alt="profile image" />
                    <h3 className={styles.profileName}>Jessica Randall</h3>
                    <h5 className={styles.profileTag}>London, United Kingdom</h5>
                    <p className={styles.profileDescription}>
                        Front-end developer and avid reader.
                    </p>
                </section>

                <section className={styles.linksContainer}>
                    {linksArr.map((i, index) => (
                        <button key={index}>
                            {i}
                        </button>
                    ))}
                </section>
            </div>
        </div>
    )
}
