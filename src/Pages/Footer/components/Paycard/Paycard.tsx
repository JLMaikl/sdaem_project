import { PaycardProps } from './Paycard.props';
import styles from './Paycard.module.css';
import cn from 'classnames';


export const Paycard = ({ className, ...props }: PaycardProps): JSX.Element => {
    return (
        <ul
            className={cn(styles.paycard, className )}
            {...props}
        >
            
                <li className={styles.detail}>
                    <a href="#">
                        <img src="./image/icons/visa.svg" alt="visa" />
                    </a>
                </li>
                <li className={styles.detail}>
                    <a href="#">
                        <img src="./image/icons/webpay.svg" alt="webpay" />
                    </a>
                </li>
                <li className={styles.detail}>
                    <a href="#">
                        <img src="./image/icons/vvisa.svg" alt="vvisa" />
                    </a>
                </li>
                <li className={styles.detail}>
                    <a href="#">
                        <img src="./image/icons/mastercard.svg" alt="mastercard" />
                    </a>
                </li>
                <li className={styles.details}>
                    <a href="#">
                        <img src="./image/icons/securecode.svg" alt="securecode" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="./image/icons/belkart.svg" alt="belcart" />
                    </a>
                </li>
            
        </ul>
            
    )
};


