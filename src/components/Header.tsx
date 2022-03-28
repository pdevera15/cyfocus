import React from "react"
import styled from "styled-components"

function Header() {
  return (
    <HeaderStyled>
      <LogoStyled>CyFocus</LogoStyled>
      <MenuStyled>
        <div>Home</div>
        <div>About Us</div>
      </MenuStyled>
    </HeaderStyled>
  )
}

export default Header

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`

const LogoStyled = styled.div`
  font-size: 24px;
  font-weight: bold;
`

const MenuStyled = styled.div`
  display: flex;
  gap: 12px;
  font-size: 16px;
  align-items: center;
`
