'use-client'

import { Search } from "lucide-react";
import { ComponentProps, SelectHTMLAttributes } from "react";

interface InputProps extends ComponentProps<"input"> { }
export function Input(props: InputProps) {
  return (
    <div className="group bg-white h-12 border border-gray-400 rounded-lg px-4 flex items-center gap-2 focus-within:border-black">
      <span className="text-gray-400 group-focus-within:text-gray-600">
        <Search />
      </span>

      <input
        className="flex-1 outline-0 placeholder-gray-700"
        {...props} />
    </div>
  )
}

interface SelectInputProps extends ComponentProps<"select"> { }

export function SelectInput({
  ...props
}: SelectInputProps) {

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