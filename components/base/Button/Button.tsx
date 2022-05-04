import { FC } from 'react';

type Props = {
  type?: 'submit' | 'button' | 'reset';
  className?: string;
  children?: string;
};

export const Button: FC<Props> = ({
  type = 'submit',
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${className} rounded inline-flex items-center px-4 py-2 bg-blue-400
       border border-transparent font-semibold text-xs text-white uppercase tracking-widest
        hover:bg-blue-800 active:bg-blue-900 focus:outline-none focus:border-blue-900
         focus:ring ring-blue-300 disabled:opacity-25 transition ease-in-out duration-150`}
      {...props}
    />
  );
};
