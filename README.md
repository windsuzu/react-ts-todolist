<!--
*** Thanks for checking out the react-ts-todolist. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username (that is "windsuzu"), repo_name (that is "react-ts-todolist"), project_title, project_description
-->

<!-- [![Issues][issues-shield]][issues-url] -->
<!-- [![PR Welcome][pr-welcome-shield]](#contributing) -->
[![Contributors][contributors-shield]][contributors-url]
[![MIT License][license-shield]][license-url]
[![Author][author-shield]][author-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://windsuzu.github.io/react-ts-todolist">
    <img src="public/logo.png" alt="Todo icons created by Flowicon - Flaticon" height="100">
  </a>

  <h3 align="center">React TypeScript Todo List</h3>

  <p align="center">
    A simple todo list program demonstrating how to apply TypeScript to a React project.
    <br />
    <a href="https://windsuzu.github.io/react-ts-todolist">View Demo</a>
    ·
    <a href="https://github.com/windsuzu/react-ts-todolist/issues">Report Bug</a>
    ·
    <a href="https://github.com/windsuzu/react-ts-todolist/issues">Request Feature</a>
  </p>
</p>

<details>
<summary>Table of Contents</summary>

* [About](#about)
* [Examples](#examples)
  * [Components, Props, Children](#components-props-children)
  * [React Hooks](#react-hooks)
  * [Custom Hooks](#custom-hooks)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

</details>

---

<!-- ABOUT THE PROJECT -->
## About

<table>
<tr>
<td>

這個專案主要示範如何使用 TypeScript 開發簡單的 react.js 專案:

1. Creating a React + TypeScript Project
   * [`npx create-react-app app_name --template typescript`](https://create-react-app.dev/docs/adding-typescript/)
2. TypeScript + React Components (`props`, `children`, `forwardRef`)
3. TypeScript + React Hooks (`useState`, `useReducer`, `useRef`, `useEffect`, `useCallback`)
4. TypeScript + Custom Hooks (`useHttp`)
5. TypeScript + styled-components

**Built With**

* HTML5, CSS3, Javascript ES6
* TypeScript
* React.js
* styled-components

**DEMO**

* https://windsuzu.github.io/react-ts-todolist

</td>
</tr>
</table>

---

## Examples

### Components, Props, Children

* [props](https://github.com/windsuzu/react-ts-todolist/blob/main/src/components/todo/Todos.tsx#L12-L17)
* [children (ReactNode)](https://github.com/windsuzu/react-ts-todolist/blob/main/src/components/ui/Button.tsx#L20-L26)
* [forwardRef](https://github.com/windsuzu/react-ts-todolist/blob/main/src/components/ui/Input.tsx#L3-L16)

### React Hooks

* [useState](https://github.com/windsuzu/react-ts-todolist/blob/main/src/hooks/use-http.ts#L13-L14)
* [useReducer](https://github.com/windsuzu/react-ts-todolist/blob/main/src/App.tsx#L7-L48)
* [useEffect](https://github.com/windsuzu/react-ts-todolist/blob/main/src/App.tsx#L72)
* [useRef](https://github.com/windsuzu/react-ts-todolist/blob/main/src/components/todo/NewTodo.tsx#L38)
* [useCallback](https://github.com/windsuzu/react-ts-todolist/blob/main/src/hooks/use-http.ts#L16)

### Custom Hooks

* [useHttp](https://github.com/windsuzu/react-ts-todolist/blob/main/src/hooks/use-http.ts#L1-L49)

---

## License

Distributed under the MIT License. See [LICENSE](https://github.com/windsuzu/react-ts-todolist/blob/main/LICENSE) for more information.

## Contact

Reach out to the maintainer at one of the following places:

* [GitHub discussions](https://github.com/windsuzu/react-ts-todolist/discussions)
* The email which is located [in GitHub profile](https://github.com/windsuzu)

## Acknowledgements

* [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/)

[contributors-shield]: https://img.shields.io/github/contributors/windsuzu/react-ts-todolist.svg?style=for-the-badge
[contributors-url]: https://github.com/windsuzu/react-ts-todolist/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/windsuzu/react-ts-todolist.svg?style=for-the-badge
[issues-url]: https://github.com/windsuzu/react-ts-todolist/issues
[license-shield]: https://img.shields.io/github/license/windsuzu/react-ts-todolist.svg?style=for-the-badge&label=license
[license-url]: https://github.com/windsuzu/react-ts-todolist/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/windsuzu
[pr-welcome-shield]: https://shields.io/badge/PRs-Welcome-ff69b4?style=for-the-badge
[author-shield]: https://shields.io/badge/Made_with_%E2%9D%A4_by-windsuzu-F4A92F?style=for-the-badge
[author-url]: https://github.com/windsuzu
