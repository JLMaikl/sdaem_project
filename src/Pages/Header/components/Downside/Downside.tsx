import { DownsideProps } from './Downside.props';
import styles from './Downside.module.css';
import cn from 'classnames';
import { Button } from '../../../../components';

export const Downside = ({ className, ...props }: DownsideProps): JSX.Element => {
    return (
        <div className={styles.downside}>            
            <img src="./image/logo.png" alt="logo" className={styles.logo}/>
            <nav>
                <ul className={styles.items}>
                    <li className={cn(styles.itemIt, styles.item)}>
                        <a href="#">Квартиры на сутки</a>
                        <img src="./image/icons/map2.svg" alt="map" className={styles.mapSvg} />
                    </li>
                    <li className={styles.item}><a href="#">Коттеджи и усадьбы</a></li>
                    <li className={styles.item}><a href="#">Бани и Сауны</a></li>
                    <li><a href="#">Авто напрокат</a></li>
                </ul>
            </nav>
            <div className={styles.button}>
                <Button appearance='header'>+  Разместить объявление</Button>         
            </div>
        </div>            
    )
};

