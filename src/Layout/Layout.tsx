import { LayoutProps } from './Layout.props';
import { Footer } from '../Pages/Footer/Footer';
import { Header } from '../Pages/Header/Header';
import { FunctionComponent } from 'react';

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footer />        
        </>
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


