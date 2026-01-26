import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className: string;
  width?: "w-full" | "w-fit";
}

const Buttton = ({
  children,
  className,
  width = "w-full",
  ...rest
}: IProps) => {
  return (
    <button
      className={`w-full ${className} ${width} p-2 rounded-md cursor-pointer`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Buttton;
