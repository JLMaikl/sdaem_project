import { LayoutProps } from './Layout.props';
import styles from './P.module.css';
import { Footer } from './Pages/Footer/Footer';
import { Header } from './Pages/Header/Header';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footer />        
        </>
    )
};


