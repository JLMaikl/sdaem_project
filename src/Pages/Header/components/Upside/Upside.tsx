import { UpsideProps } from './Upside.props';
import styles from './Upside.module.css';
import cn from 'classnames';

export const Upside = ({ className, ...props }: UpsideProps): JSX.Element => {
    return (
        <div className={styles.upside}>
            <ul className={styles.leftItems}>
                <li className={styles.leftItem}><a href="#">Главная</a></li>
                <li className={styles.leftItem}><a href="#">Новости</a></li>
                <li className={styles.leftItem}><a href="#">Размещение и тарифы</a></li>
                <li className={cn(styles.itemColorBlack, styles.leftItem)}>
                    <img src="./image/icons/map.svg" alt="map" className={styles.mapSvg}/>
                    <a href="#">Объявления на карте</a>
                </li>
                <li><a href="#">Контакты</a></li>
            </ul>
            <ul className={styles.rightItems}>
                <li className={styles.rightItem}>
                    <a href="#">Закладки</a>
                    <img src="./image/icons/heart.png" alt="heart" className={styles.heartSvg} />
                </li>
                <li className={styles.itemColorPurple}><a href="#">Вход и регистрация</a></li>
            </ul>
        </div>            
    )
};

