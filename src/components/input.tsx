'use-client'

import clsx from "clsx";
import type { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<"div"> { }
export function InputRoot({ className, ...props }: InputRootProps) {
  return (
    <div
      className={
        clsx(
          "group bg-white h-12 border border-gray-400 rounded-lg p-2 gap-2 focus-within:border-black",
          className
        )
      }
      {...props}
    />
  )
}

interface InputIconProps extends ComponentProps<'span'> { }

export function InputIcon(props: InputIconProps) {
  return (
    <span className="text-gray-400 group-focus-within:text-gray-600"
      {...props}
    />)
}

interface InputFieldProps extends ComponentProps<"input"> { }
export function InputField({ className, ...props }: InputFieldProps) {
  return (
    <input
      className={
        clsx(
          "w-full h-full outline-0 placeholder-gray-700",
          className
        )
      }
      {...props}
    />
  )
}

interface InputFieldAreaProps extends ComponentProps<"textarea"> { }
export function InputFieldArea({ className, ...props }: InputFieldAreaProps) {
  return (
    <textarea
      className={
        clsx(
          "w-full h-full outline-0 placeholder-gray-700 resize-none align-top",
          className
        )
      }
      {...props}
    />
  );
}

interface SelectInputProps extends ComponentProps<"select"> { }

export function SelectInput(props: SelectInputProps) {

  const options = [
    { value: 'title-asc', label: 'Title (A-Z)' },
    { value: 'title-desc', label: 'Title (Z-A)' },
    { value: 'duration-asc', label: 'Duration (shortest)' },
    { value: 'duration-desc', label: 'Duration (longest)' },
    { value: 'rating-asc', label: 'Rating (highest)' },
    { value: 'rating-desc', label: 'Rating (lowest)' },
    { value: 'score-asc', label: 'Score (highest)' },
    { value: 'score-desc', label: 'Score (lowest)' },
  ]

  return (
    <div>
      <select
        {...props}
        className='p-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none'
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

interface CheckBoxProps extends ComponentProps<'input'> {
  value: string
}

export function CheckBox({ value, ...props }: CheckBoxProps) {
  return (
    <div className="flex items-center">
      <input className="w-4 h-4" type="checkbox" {...props} id="checkbox" value={value} />
      <label htmlFor="checkbox" className="px-2 items-center justify-center select-none ">Include synopsis in search</label>
    </div>
  )
}