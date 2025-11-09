import styled from 'styled-components';

const Wrapper = styled.div`
  header{
    text-align: center;
    margin-bottom: 3rem;
    .btn{
      margin-bottom: 1rem;
    }
  }
  .drink-info{
    padding-top: 3rem;
  }

  .drink p{
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-data{
    background-color: var(--primary-500);
    color: var(--primary-700);
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    margin: 0.5rem;
    letter-spacing: 2;
  }
  .img{
    display: inline;
     margin-right: 0.5rem;
  }
  @media (min-width: 992px) {
   .drink{
     display: grid;
     grid-template-columns: 2fr 3fr;
     gap: 3rem;
     align-items: center;
   }

    .drink-info{
    padding-top: 0;
  }
  }

`;

export default Wrapper;
