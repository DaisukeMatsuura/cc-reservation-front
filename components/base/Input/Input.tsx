import { FC } from 'react';

type Props = {
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  className?: string;
  children?: string;
  onChange?: (e: any) => void;
};

export const Input: FC<Props> = ({
  type = '',
  id = '',
  name = '',
  value,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <input
      type={type}
      disabled={disabled}
      id={id}
      name={name}
      value={value}
      className={`${className} outline-none border border-blue-400 h-10 px-2 rounded focus:border-blue-800`}
      {...props}
    />
  );
};
