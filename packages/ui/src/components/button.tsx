import { Children, cloneElement, isValidElement, type ComponentProps, type ReactNode } from "react";
import { cn } from "../lib/cn";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

type ButtonAsButtonProps = BaseButtonProps &
  Omit<ComponentProps<"button">, keyof BaseButtonProps> & {
    asChild?: false;
  };

type ButtonAsChildProps = BaseButtonProps & {
  asChild: true;
};

export type ButtonProps = ButtonAsButtonProps | ButtonAsChildProps;

const styles =
  "focus-ring inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium transition disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary: "bg-accent text-white hover:bg-accent-strong",
  secondary: "border border-line bg-surface text-app-text hover:bg-surface-subtle",
} as const;

export function Button(props: ButtonProps) {
  const { children, className, variant = "primary", asChild } = props;
  const mergedClassName = cn(styles, variants[variant], className);

  if (props.asChild) {
    const child = Children.only(children);

    if (!isValidElement<{ className?: string }>(child)) {
      throw new Error("Button with asChild requires exactly one valid React element.");
    }

    return cloneElement(child, {
      className: cn(mergedClassName, child.props.className),
    });
  }

  const {
    children: _children,
    className: _className,
    variant: _variant,
    asChild: _asChild,
    ...buttonProps
  } = props;

  return (
    <button type="button" {...buttonProps} className={mergedClassName}>
      {children}
    </button>
  );
}
