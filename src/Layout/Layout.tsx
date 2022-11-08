import { FunctionComponent } from 'react';
import { LayoutProps } from './Layout.props';
import { Footer } from '../Pages/Footer/Footer';
import { Header } from '../Pages/Header/Header';
import styles from './Layout.module.css';

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Header className={styles.header}/>
                <div className={styles.body}>
                    {children}
                </div>
                <Footer className={styles.footer}/>        
            </div>        
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};


