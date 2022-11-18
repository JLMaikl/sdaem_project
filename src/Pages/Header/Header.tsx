import cn from 'classnames';
import { HeaderProps } from './Header.props';
import { Upside } from './components/Upside/Upside';
import { Downside } from './components/Downside/Downside';
import styles from './Header.module.css';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    return (
        <header {...props} className={cn(className, styles.header)}>
            <Upside />
            <Downside />
        </header>
    )
};


