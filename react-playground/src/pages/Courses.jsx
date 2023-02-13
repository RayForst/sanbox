import { Container } from "@mui/material";
import React from "react";
import Youtube from "../components/UI/icons/youtube/Youtube";

const Courses = () => {
  const courses = [
    {
      heading: "React",
      children: [
        {
          name: "React JS фундаментальный курс от А до Я",
          author: "Ulbi TV",
          link: "https://youtu.be/GNrdg3PzpJQ",
          duration: "3:01:07",
          status: "completed",
        },
        {
          name: "ТОП 5 REACT ХУКОВ (React hooks). Делаем свои React хуки",
          author: "Ulbi TV",
          link: "https://youtu.be/ks8oftGP2oc",
          duration: "29:55",
          status: "completed",
        },
        {
          name: "React & Redux & TypeScript ПОЛНЫЙ КУРС 2021",
          author: "Ulbi TV",
          link: "https://youtu.be/ETWABFYv0GM",
          duration: "38:45",
          status: "inProgress",
        },
      ],
    },
    {
      heading: "Redux",
      children: [
        {
          name: "Redux и React. Все о Redux. Понятная теория для всех. React + redux.",
          author: "Ulbi TV",
          link: "https://youtu.be/5Qtqzeh5FeM",
          duration: "4:28",
          status: "completed",
        },
        {
          name: "Redux и React. State, reducer, action + redux hooks useDispatch и useSelector",
          author: "Ulbi TV",
          link: "https://youtu.be/Dzzeir85i3c",
          duration: "8:27",
          status: "completed",
        },
        {
          name: "Redux и React. Combine Reducers, redux devtools",
          author: "Ulbi TV",
          link: "https://youtu.be/ldgnmiPIftw",
          duration: "5:09",
          status: "completed",
        },
        {
          name: "React и Redux.Action creators. Работа с массивами. Рефакторинг",
          author: "Ulbi TV",
          link: "https://youtu.be/WLeK7vIEi5I",
          duration: "7:07",
          status: "completed",
        },
        {
          name: "React и Redux.Action creators. Redux thunk и асинхронные действия",
          author: "Ulbi TV",
          link: "https://youtu.be/CtrWoX_KDjE",
          duration: "4:01",
          status: "completed",
        },
        {
          name: "Redux и React. Redux saga асинхронные actions",
          author: "Ulbi TV",
          link: "https://youtu.be/ylhHYtTyVGE",
          duration: "13:49",
          status: "completed",
        },
      ],
    },
  ];
  return (
    <Container maxWidth={false}>
      <h1>Выполненные курсы</h1>
      {courses.map((fragment) => (
        <div className="component">
          <h2>{fragment.heading}</h2>

          {fragment.children && (
            <ol>
              {fragment.children.map((course) => (
                <li>
                  <Youtube
                    name={course.name}
                    author={course.author}
                    sourceLink={course.link}
                    status={course.status}
                    duration={course.duration}
                  />
                </li>
              ))}
            </ol>
          )}
        </div>
      ))}
    </Container>
  );
};

export default Courses;
