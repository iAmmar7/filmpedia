import * as React from 'react';
import { useState } from 'react';

import { FieldWrapper, AddMovieInput, AddMovieButton } from './styles';

interface AddMovieProps {
  handleSubmit: (actorId: string, name: string) => Promise<void>;
  actorId: string;
}

function AddMovie({ handleSubmit, actorId }: AddMovieProps) {
  const [name, setName] = useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit && handleSubmit(actorId, name);
    setName('');
  };

  return (
    <form onSubmit={onSubmit}>
      <FieldWrapper>
        <label>Add: </label>
        <AddMovieInput type="text" name="movie" value={name} onChange={(e) => setName(e.target.value)} />
        <AddMovieButton type="submit" disabled={name.length < 1}>
          Submit
        </AddMovieButton>
      </FieldWrapper>
    </form>
  );
}

export default AddMovie;
