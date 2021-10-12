import styles from '../../styles/contacts/Card.module.css'


const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic='' }) => {
    return (
        <div className={styles.card}>
            <div className={styles.detailsContainer}>
                <div className={styles.avatarWrapper}>
                    <img className={styles.avatar} src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
                </div>
                <div style={{alignSelf: "center", }}>
                    <p style={{lineHeight: 0.5}}>{firstName} {lastName}</p>
                    <p style={{lineHeight: 0.5}}>{phoneNumber}</p>
                </div>
            </div>
            <div className={styles.actionsContainer}>
                <button className={styles.closeButton}>x</button>
            </div>
        </div>
    )
}

export default ContactCard;