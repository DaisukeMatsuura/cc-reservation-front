import { FC } from 'react';

type Props = {
  htmlFor?: string;
  className?: string;
  children?: string;
};

export const Label: FC<Props> = ({
  children,
  htmlFor = '',
  className = '',
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${className} block text-blue-700`}
      {...props}
    >
      {children}
    </label>
  );
};
