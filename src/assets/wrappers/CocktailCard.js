import styled from 'styled-components';
const Wrapper = styled.article`
  background-color: var(--white);
  border-radius: 5px;
  transition: 0.3s ease-in-out all;
  box-shadow: 0 2px 6px -2 rgba(0,0,0,0.1);
  grid-template-rows: auto 1fr;
  :hover{
    box-shadow: 0 4px 19px rgba(0,0,0,0.1);
  }

  .img{
  height: 15rem;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px
  }

  .footer{
    padding: 1.5rem;
    h4,h5{
      margin-bottom: 0.5rem;
    }
    h4{
      font-weight: 700;
    }
    p{
      color: var(--grey-500);
      margin-bottom: 1rem;
    }
  }
`;

export default Wrapper;
