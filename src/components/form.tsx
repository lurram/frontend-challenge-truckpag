import { StarIcon } from "lucide-react";
import { useState } from "react";
import { InputField, InputFieldArea, InputRoot } from "./input";

type ContentModalProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function Form({ value, onChange }: ContentModalProps) {
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);


  const getStarColor = (star: number) => {
    const displayRating = hoverRating || userRating;
    return star <= displayRating ? "#FFC222" : "#E2E8F0";
  };

  return (
    <div>
      <div className="flex flex-col gap-2 pb-4">
        <h2>Your rating:</h2>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              onClick={() => setUserRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="focus:outline-none  transition-colors cursor-pointer"
            >
              <StarIcon
                size={20}
                color={getStarColor(star)}
                fill={getStarColor(star)}
                className="transition-all duration-200 hover:scale-110"
              />
            </button>
          ))}
          <p className="text-sm text-gray-400">
            {
              userRating > 0
                ? `${userRating}/5`
                : "Not rated"
            }
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2>Your notes:</h2>
        <form action="">
          <InputRoot
            className="h-60"
          >
            <InputFieldArea
              placeholder="Write your thoughts about this movie..."
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          </InputRoot>
        </form>
      </div>
      {
        value === ''
          ? <p className="text-red-500 text-xs px-2">Notes cannot be empty</p>
          : null
      }
    </div>
  )
}