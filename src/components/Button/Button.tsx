import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  href?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  href,
  className = '',
  ...props
}: ButtonProps) => {
  const baseClassName = `button button--${variant} button--${size} ${
    fullWidth ? 'button--full-width' : ''
  } ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClassName} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClassName} {...props}>
      {children}
    </button>
  );
}; 