'use-client'

import { Button } from "@/components/button";
import { CheckBox, Input, SelectInput } from "@/components/input";
import Modal from "@/components/modal";
import { Eye, File, Heart, Star } from "lucide-react";
import { useState } from "react";
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <div className="flex flex-col items-center justify-center p-4 gap-4">
        <h1 className="font-semibold text-5xl">
          Studio Ghibli Collection
        </h1>
        <p className="text-lg text-gray-600 text-center">
          Explore the magical world of Studio Ghibli films. Mark your favorites and keep track of what <br /> you've watched.
        </p>
      </div>

      <div className="py-4 px-8">
        <Input placeholder="Search movies..." />

        <div className="flex flex-row items-center justify-between gap-4 py-6">
          <CheckBox value="synopsis" />
          <SelectInput />
        </div>

        <div className="flex flex-row gap-2 items-center">
          Filters:
          <Button>
            <Eye size={16} />
            Watched
          </Button>
          <Button>
            <Heart size={16} />
            Favorites
          </Button>
          <Button>
            <File size={16} />
            With Notes
          </Button>
          <Button>
            <Star size={16} />
            Rating
          </Button>
        </div>

        <div className="py-6">
          <MovieCard />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(true)} title="Modal title">Modal content</Modal>
    </main >
  );
}
