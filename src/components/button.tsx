import { ComponentProps } from "react";
import { clsx } from "clsx";

interface ButtonProps extends ComponentProps<"button"> { }

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center p-1.5 gap-1.5 rounded-lg cursor-pointer hover:bg-black/5",
        className
      )}
      {...props}
    />
  )
}