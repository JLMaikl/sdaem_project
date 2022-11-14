import { ReferencesProps } from './References.props';
import styles from './References.module.css';
import cn from 'classnames';

export const References = ({ className, ...props }: ReferencesProps): JSX.Element => {
    return (
        <ul
            className={cn(styles.reference, className )}
            {...props}
        >
            
            <ul className={styles.links}>
                <li className={styles.link}><a href="#">Коттеджи и усадьбы</a></li>
                <li className={styles.link}><a href="#">Бани и сауны</a></li>
                <li className={styles.link}><a href="#">Авто на прокат</a></li>
                <li className={cn(styles.apartmentOne)}><a href="#">Квартиры</a></li>
                
            </ul>
            <ul className={styles.apartments}>
                <ul className={styles.apartment}>
                    <li><a href="#">Квартиры</a></li>
                </ul>

                <ul className={styles.cities}>
                    <ul className={styles.cityOne}>
                        <li><a href="#">Квартиры в Минске</a></li>
                        <li><a href="#">Квартиры в Гомеле</a></li>
                        <li><a href="#">Квартиры в Бресте</a></li>
                    </ul>
                    <ul className={styles.cityTwo}>
                        <li><a href="#">Квартиры в Витебске</a></li>
                        <li><a href="#">Квартиры в Гродно</a></li>
                        <li><a href="#">Квартиры в Могилеве</a></li>                        
                    </ul>
                </ul>
            </ul>
            <ul className={styles.news}>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Размещение и тарифы</a></li>
                <li><a href="#">Объявления на карте</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
            
        </ul>
    )
};


