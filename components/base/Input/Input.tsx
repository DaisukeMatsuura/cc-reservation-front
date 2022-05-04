import { FC } from 'react';

type Props = {
  disabled?: boolean;
  className?: string;
  children?: string;
};

export const Input: FC<Props> = ({
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <input
      disabled={disabled}
      className={`${className} outline-none border border-blue-400 h-10 px-2 rounded`}
      {...props}
    />
  );
};
