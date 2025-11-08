import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
const Wrapper = styled.nav`
  .nav-center{
    background-color: var(--white);
    max-width: var(--max-width);
    width: var(--view-width);
    margin: 0 auto;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
  }
  .logo{
    color: var(--primary-500);
    font-weight: 700;
    font-size: clamp(1.5rem,3vw,3rem);
    letter-spacing: 2px;
  }
  .nav-links{
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 1rem;
  }
  .nav-link{
    color: var(--grey-500);
    letter-spacing: 2px;
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
  }
  .nav-link:hover{
    color: var(--primary-500);
  }
.active{
  color: var(--primary-500);
}
  @media (min-width: 768px){
    .nav-center{
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links{
      margin-top: 0;
      flex-direction: row;
    }
  }
  `;
export const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className='logo'>MixMatch</span>
        <div className='nav-links'>
          <NavLink to='/' className='nav-link'>Home</NavLink>
          <NavLink to='/about' className='nav-link'>About</NavLink>
          <NavLink to='/newsletter' className='nav-link'>Newsletter</NavLink>
        </div>
      </div>
    </Wrapper>
  );
}
