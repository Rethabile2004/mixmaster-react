import styled from 'styled-components';

const Wrapper = styled.div`
min-height: 100vh;
justify-content: center;
align-items: center;
text-align: center;
display: flex;
img{
  max-width:90vw;
  display: block;
  margin-top: -3rem;
  margin-bottom: 2rem;
}
h3{
  margin-bottom: 1rem;
}
p{
  color:var(--grey-500);
  margin-bottom: 1.5rem;
  line-height: 1.5;
}
a{
  color: var(--primary-500);
  text-transform: capitalize;
}
`;

export default Wrapper;
