'use client'

import { Button } from "@/components/button";
import Form from "@/components/form";
import { CheckBox, InputField, InputIcon, InputRoot, SelectInput } from "@/components/input";
import Modal from "@/components/modal";
import { MovieCard } from "@/components/movie-card";
import { Eye, File, Heart, Search, Star } from "lucide-react";
import { useState } from "react";

export default function Home() {

  const [modal, setModal] = useState(false);
  const [notes, setNotes] = useState("");

  const isSaveDisabled = notes.trim() === ""

  const handleSave = () => {
    console.log("Notas salvas:", notes);
    setModal(false);
  };

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
        <InputRoot className="flex items-center">
          <InputIcon>
            <Search size={20} />
          </InputIcon>
          <InputField placeholder="Search" type="search" />
        </InputRoot>

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
          <MovieCard
            title={""}
            year={0}
            duration={0}
            synopsis={""}
            director={""}
            producer={""}
            showModal={() => setModal(true)}
          />
        </div>
      </div>

      <Modal
        isOpen={modal}
        onClose={() => {
          setModal(false)
          setNotes("")
        }}
        title={`Add Notes for 'title'`}
        isSaveDisabled={isSaveDisabled}
        onSave={handleSave}
      >
        <Form onChange={(newValue) => setNotes(newValue)} value={notes} />
      </Modal>

    </main >
  );
}
