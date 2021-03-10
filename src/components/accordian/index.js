import React, { useState, useContext, createContext } from "react";
export default function Accordian({ children, ...restProps }) {
  const ToggleContext = createContext();
  //context provider so headers can have access to state of item
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordian.Title = function AccordianTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordian.Frame = function AccordianFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordian.Item = function AccordianItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return;
  <ToggleContext.Provider value={(toggleShow, setToggleShow)}>
    <Item {...restProps}> {children}</Item>
  </ToggleContext.Provider>;
};

Accordian.Header = function AccordianHeader({ chilren, ...restProps }) {
  //destructor the togglecontext provider here
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      //above means take the previous take and reserve it. Looks inefficient but deals with the issue of use clicking many times and not giving react time to adjust!!
      {...restProps}
    >
      {chilren}
    </Header>
  );
};
