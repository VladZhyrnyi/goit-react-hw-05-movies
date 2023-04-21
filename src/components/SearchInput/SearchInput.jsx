import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { useState } from 'react';
import {StyledForm, StyledInput} from './SearcInput.styled'


export const SearchInput = ({ value, onSubmit }) => {
  const[query, setQuery] = useState(value)
  const handleFormSubmit = e => {
    e.preventDefault();

    if (!query.trim()) {
      return;
    }

    onSubmit(query);
  };

  return (
    <Container>
      <StyledForm onSubmit={handleFormSubmit}>
        <StyledInput type="text" value={query} onChange={(e)=>(setQuery(e.target.value))} placeholder="Please input movie title..." />
        <Button type="submit"> Search </Button>
      </StyledForm>
    </Container>
  );
};
