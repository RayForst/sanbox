<style>
r { margin: 5px 0; display: inline-block; background: #FF2400; font-weight:bold; padding: 3px 10px; border-radius: 3px; }
o { margin: 5px 0; display: inline-block; background: #FF5F15; font-weight:bold; padding: 3px 10px; border-radius: 3px; }
g { margin: 5px 0; display: inline-block; background: #66a103; font-weight:bold; padding: 5px 10px; border-radius: 3px;}
</style>

# React БАЗА

**ReactDOM.render** - создание узла

**React.createElement** - создание одного элементаe. 3 параметр - содержимое элемента. Для избегания вложенности деревьев используют JSX

# Компоненты

Бывают двух видов:

- Классовый (Устаревший, но знать что он существует необходимо)
- Функциональный
  - управляемый
  - неуправляемый (доступ через ref)

## Props

# Хуки

Функции которые представляет реакт.
Все начинаются со слова **use**

- useState() - управление состоянием
- useEffect() - стадии монтирования
- useRef() - селектор эементов
- useMemo() - мемоизация, аналог computed во vue
- useCallback()
- useContext()

<g>В функциональных компонентах и кастомных хуках.</g>
<o>Используется в функциональных компонентах на высшем уровне. Нельзя использовать во вложенных функциях внутри нашего компонента.</o>

## Кастомные хуки

# Жизненный цикл

- монтирование (mount)
- обновление (update)
- размоннтирование (unmount)

# VS CODE

- https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets

# TODOs:

- <r>TODO:</r> Important thing to do
- <o>TODO:</o> Less important thing to do
- <g>DONE:</g> Breath deeply and improve karma

* useMemo для пагинации
* хук для пагинации usePagination

# redux-saga

альтернативная организациия асинхронных операций для redux, основанна на генераторах
