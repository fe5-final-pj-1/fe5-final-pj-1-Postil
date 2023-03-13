import React from 'react';
import styles from './ContactsPage.module.scss';

function ContactsPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contacts</h1>
            <h2 className={styles.textTitle}>We are a real online store of home textiles!</h2>
            <p className={styles.text}>We are 24 hours a day on the Internet!</p>
            <p className={styles.text}>
                Call centers of the Postil online store are located in Kyiv and Lvov. There is no
                showroom. Warehouses of the online store are located in the cities: Kyiv, Dnipro,
                Kharkov, Poltava, Odessa, Chernivtsi. Products presented on the site are delivered
                to customers directly from warehouses and factories of manufacturers to any
                convenient branch of `Nova Poshta` throughout Ukraine and by couriers of the online
                store to your home or office.
            </p>
            <div className={styles.body}>
                <div className={styles.info}>
                    <h2 className={styles.textTitles}>Our phones:</h2>
                    <p className={styles.text}>+38(050) 777-77-77 </p>
                    <p className={styles.text}>+38(097) 066-66-66 </p>
                    <p className={styles.text}>+38(063) 222-22-22 - Viber</p>
                    <p className={styles.text}>Skype: Postyl.com.ua</p>
                    <h2 className={styles.warntext}>
                        ONLINE orders are accepted around the clock!
                    </h2>
                    <h2 className={styles.textTitle}>Call Center Hours:</h2>
                    <p className={styles.textBold}>Mon - Fri 8.00-18.00</p>
                    <p className={styles.textBold}>Sat - Sun: we accept orders online</p>
                </div>
                <div className={styles.map}>
                    <h2 className={styles.mapTextTitles}>Find us on the map:</h2>
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d162583.11395771115!2d30.52877154454943!3d50.45299909261162!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1678449520839!5m2!1sru!2sua"
                        height="300"
                        style={{ border: `${0}em`, width: `${100}%` }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactsPage;
