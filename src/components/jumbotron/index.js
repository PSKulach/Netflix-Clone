import React from "react";
import {Container, Pane, Image, Title, Inner, Item} from "./styles/jumbotron";

export default function Jumbotron({children, direction = "row", ...restProps}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>
        {children}
      </Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps}) {
  return <Container { ...restProps}>{children}</Container>;
};
Jumbotron.Pane = function JumbotronPane({ children, ...restProps}) {
  return <Pane { ...restProps}>{children}</Pane>;
};
Jumbotron.Title = function JumbotronTitle({ children, ...restProps}) {
  return <Title { ...restProps}>{children}</Title>;
};
Jumbotron.Image = function JumbotronImage({ ...restProps}) {
  return <Image { ...restProps}/>;
};
