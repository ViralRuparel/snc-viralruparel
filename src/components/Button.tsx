import {
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  ButtonHTMLAttributes,
} from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};
