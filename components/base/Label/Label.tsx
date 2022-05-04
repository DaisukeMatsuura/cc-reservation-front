import { FC } from 'react';

type Props = {
  disabled?: boolean;
  className?: string;
  children?: string;
};

export const Label: FC<Props> = ({ children, className = '', ...props }) => {
  return (
    <label
      className={`${className} block text-blue-700`}
      {...props}
    >
      {children}
    </label>
  );
};
