import * as React from 'react';
import { useState } from 'react';

import { Container, FieldWrapper, Input, Button } from './styles';

interface AddActorProps {
  handleSubmit: (name: string) => Promise<void>;
}

function AddActor({ handleSubmit }: AddActorProps) {
  const [name, setName] = useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit && handleSubmit(name);
    setName('');
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <FieldWrapper>
          <label>Add Actor: </label>
          <Input type="text" name="actor" value={name} onChange={(e) => setName(e.target.value)} />
          <Button type="submit" disabled={name.length < 1}>
            Add
          </Button>
        </FieldWrapper>
      </form>
    </Container>
  );
}

export default AddActor;
