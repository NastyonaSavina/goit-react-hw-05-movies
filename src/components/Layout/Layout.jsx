

import {
  Container,
  Header,
  IconMovie,
  Link,
} from './Layout.styled';

export const Layout = ({ children }) => {


  return (
    <>
      <Container>
      <Header>
        <IconMovie />
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
        </Header>
         <main>
          <div>{children}</div>
        </main>

      </Container>
    
    </>
    
   
      
  );
};

