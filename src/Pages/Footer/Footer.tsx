import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { P } from '../../components';
import { References } from './components/References/References';
import { Social } from './components/Social/Social';
import { Paycard } from './components/Paycard/Paycard';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div className={styles.footerLogo}>
                <div className="footer-logo_img">
                    <img src="./image/logo.png" alt="logo" />
                    <p className={styles.footerLogoText}>СДАЁМ БАЙ</p>
                </div>
                <div className={styles.details}>
                    <P size='s'>ИП Шушкевич Андрей Викторович</P>
                    <P size='s'>УНП 192602485 Минским горисполкомом</P>
                    <P size='s'>10.02.2016</P>
                    <P size='s'>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</P>
                    <P size='s'>+375 29 621 48 33, sdaem@sdaem.by</P>
                    <P size='s'>Режим работы: 08:00-22:00</P>
                </div>
            </div>
            <div className={styles.links}>
                <References />
                <div className={styles.output}>
                    <Social />
                    <Paycard />
                </div>
            </div>
        </footer>
    )
};


