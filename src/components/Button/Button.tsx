import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button= ({ appearance, children, ...props }: ButtonProps): JSX.Element => {
  return (
      <button
        className={cn(styles.button, {
            [styles.header]: appearance === 'header',
            [styles.read]: appearance === 'read',
        })}
        {...props}
      >
          {children}
      </button>
  )
};


