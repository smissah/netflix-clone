import React from "react";
import Jumbotron from "./components/jumbotron";
import jumboData from "./fixtures/jumbo.json";
export default function App() {
  return (
    <div className="app">
      <Jumbotron.Container>
        {jumboData.map(({ id, title, subTitle, image, alt, direction }) => {
          return (
            <Jumbotron key={id} direction={direction}>
              <Jumbotron.Pane>
                <Jumbotron.Title>{title}</Jumbotron.Title>
                <Jumbotron.Subtitle>{subTitle}</Jumbotron.Subtitle>
              </Jumbotron.Pane>
              <Jumbotron.Image src={image} alt={alt} />
            </Jumbotron>
          );
        })}
      </Jumbotron.Container>
    </div>
  );
}
