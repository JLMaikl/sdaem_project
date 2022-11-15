import { SocialProps } from './Social.props';
import styles from './Social.module.css';
import cn from 'classnames';

export const Social = ({ className, ...props }: SocialProps): JSX.Element => {
    return (
        <div
            className={cn(styles.social, className )}
            {...props}
        >
            <p className={styles.p}>Мы в соцсетях</p>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <a href="#">
                        <img src="./image/icons/inst.svg" alt="inst" />
                    </a>
                </li>
                <li className={styles.item}>
                    <a href="#">
                        <img src="./image/icons/vk.svg" alt="vk" />
                    </a>
                </li>
                <li className={styles.item}>
                    <a href="#">
                        <img src="./image/icons/fb.svg" alt="facebook" />
                    </a>
                </li>
            </ul>
        </div>
            
    )
};


