import { Container } from "@mui/material";
import React from "react";

const Home = () => {
  const libraries = [
    {
      name: "react-transition-group",
      description: "Управление анимациями",
      descriptionLong: "",
    },
    {
      name: "redux",
      description: "Глобальное хранилище",
      descriptionLong: "",
    },
    {
      name: "redux-devtools-extension",
      description: "Девтулс в хроме",
      descriptionLong: "",
    },
    {
      name: "redux-thunk",
      description: "Асинхронные операции с хранилищем",
      descriptionLong:
        "мидлварь для Redux, который позволяет вам описывать асинхронные действия, как функции, вместо обычных объектов action. Он позволяет вам определять логику выполнения асинхронных операций, как диспатчить действия в ответ на успешные или неудачные асинхронные операции, и как обрабатывать ошибки.",
    },
    {
      name: "redux-saga",
      description: "Асинхронные операции с хранилищем на основе генераторов",
      descriptionLong:
        "мидлварь для React/Redux приложений, которая позволяет управлять сайд-эффектами, такими как асинхронные операции и взаимодействие с API, в виде итераторов (генераторов). Это облегчает отладку и тестирование, а также улучшает читаемость кода.",
    },
  ];
  return (
    <div>
      <Container maxWidth={false}>
        <h1>Home</h1>

        <div className="component">
          <h2>Опыт работы с библиотеками</h2>

          {libraries.map((lib) => (
            <div title={lib.descriptionLong}>
              <strong>{lib.name}</strong> - <span>{lib.description}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
