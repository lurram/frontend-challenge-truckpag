import { ChevronDown, ChevronUp, Eye, File, Heart, Star, StarIcon } from "lucide-react";
import Image from "next/image";
import MovieImg from "../../public/story.png"
import { Button } from "./button";
import { useState } from "react";

export interface MovieCardProps {
  title: string;
  year: number;
  duration: number;
  rating?: number;
  score?: number;
  synopsis: string;
  director: string;
  producer: string;
  favorite?: boolean;
  watched?: boolean;
}

export function MovieCard({
  title,
  year,
  duration,
  rating = 0,
  score,
  synopsis,
  director,
  producer
}: MovieCardProps) {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatched, setIsWatched] = useState(false);
  const [isRated, setIsRated] = useState(false);

  const [movies, setMovies] = useState<MovieCardProps[]>([]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const toggleWatched = () => {
    setIsWatched(!isWatched);
  }

  return (
    <div className="w-80 items-center justify-center p-4 rounded-lg shadow-lg">

      <Image src={MovieImg} alt={'cover'} width={320} height={400} />

      <label className="font-medium text-lg">{title}</label>
      <p className="text-sm text-gray-500">{year} • {duration}</p>

      <div className="flex flex-row items-center justify-between">

        <div className="flex flex-row gap-2 items-center">
          <StarIcon color="#FFC222" fill="#FFC222" size={18} />
          <p>{score}</p>
        </div>

        {isRated
          ?
          <div className="flex flex-row gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                size={12}
                color={star <= rating ? '#FFC222' : '#C4C4C4'}
                fill={star <= rating ? '#FFC222' : 'none'}
              />
            ))}

          </div>
          :
          <p className="text-sm text-gray-400">Not rated</p>
        }
      </div>

      <p className={`text-sm items-center justify-center px-2 py-1 ${!isExpanded ? 'line-clamp-3' : ''}`}>
        {synopsis}
      </p>

      <Button
        onClick={toggleExpand}
        className="text-xs text-gray-500 h-4 p-2"
      >
        {isExpanded
          ?
          <>
            <ChevronUp size={18} />
            <span>Show less</span>

          </>
          :
          <>
            <ChevronDown size={18} />
            <span>Read more</span>
          </>
        }

      </Button>

      <div className="flex flex-col p-2">
        <p className="text-xs text-gray-500">Director: {director}</p>
        <p className="text-xs text-gray-500">Producer: {producer}</p>
      </div>

      <div className="flex flex-col items-center justify-center p-2 gap-2">

        {isWatched
          ?
          <Button
            className="w-full bg-black text-white border border-gray-400 hover:bg-black/70 hover:text-white"
            onClick={toggleWatched}
          >
            <Eye size={18} />
            Watched
          </Button>
          :
          <Button
            className="w-full border border-gray-400"
            onClick={toggleWatched}
          >
            <Eye size={18} />
            Mark Watched
          </Button>
        }
        {isFavorite
          ?
          <Button
            className="w-full bg-red-600 text-white border border-gray-400 hover:bg-red-600/70 hover:text-white"
            onClick={toggleFavorite}
          >
            <Heart size={18} fill={isFavorite ? 'white' : 'none'} />
            Favorite
          </Button>
          :
          <Button
            className="w-full border border-gray-400"
            onClick={toggleFavorite}
          >
            <Heart size={18} />
            Add Favorite
          </Button>
        }

        <Button className="w-full border border-gray-400">
          <File size={18} />
          Add Note
        </Button>
      </div>
    </div>
  )
}