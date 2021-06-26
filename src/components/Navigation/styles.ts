import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  min-height: 70px;
  height: auto;
  border-radius: 10px;
  padding: 10px;
  backdrop-filter: blur(6px);
  background: linear-gradient(160deg,rgba(122, 76, 229, 0.1), rgba(4, 211, 97, 0.1));

  display: flex;
  flex-flow: column;
`
export const TabHeader = styled.header`
  width: 100%;
  min-height: 15px;
  height: auto;  

  display: flex;
  flex-flow: row nowrap;
`
export const Tab = styled.div`
  width: 150px;
  height: auto;
  padding: 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;  
  
  /* background-color: #121214; */
  cursor: pointer;

  position: relative;
  transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  margin-bottom: 4px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  font-size: 0.5em;
  font-weight: 500;
  color: #a8a8b3;

  & ~ & {
    margin-left: 10px;
  }

  svg {
    font-size: 20px;
    fill: #a8a8b3;
    margin-right: 10px;
  }

  &::after{
    content: "";
    width: 100%;
    height: 3px;
    background: none;    
    position: absolute;
    bottom: -3px;
    left: 0px;
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:hover {
    &::after{
      content: "";
      width: 100%;
      height: 3px;
      background: none;
      background-color: #4fe090;
      position: absolute;
      bottom: 0px;
      left: 0px;
      transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }

  &.tab-in-focus {
    background-color: rgba(130,87,230,0.20);
    transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

    font-size: 0.5em;
    font-weight: 500;
    color: #e1e1e6;

    svg {
      font-size: 20px;
      fill: #e1e1e6;
      margin-right: 10px;
    }

    &::after{
      content: "";
      width: 100%;
      height: 3px;
      background: none;
      background-color: #4fe090;
      position: absolute;
      bottom: 0px;
      left: 0px;
      transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
`
export const ContentNavigation = styled.div`
  width: 100%;
  min-height: 100px;
  height: auto;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0px 10px 0px;

  background: linear-gradient(160deg,rgba(122, 76, 229, 0.2), rgba(4, 211, 97, 0.1));

  font-size: 0.5em;
  font-weight: 500;
  color: #e1e1e6;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`
