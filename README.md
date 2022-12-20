# Template - Create React App v5

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 주요 패키지

- react 18
- typescript
- recoil
- axios
- react-query
- styled-components

---

## 네이밍 컨벤션

### PascalCase

- react component
- interface
- type
- styled component

### camelCase

- variable
- function
- prop
- custom hook
- non-component file

### kebab-case

- environment variables file

### SNAKE_CASE

- constants

---

## 타입스크립트 파일 ts/tsx 확장자

- **react component**만 **tsx 확장자** 사용 이외에는 ts 확장자 사용

---

## 디렉토리 구조

### 리액트 컴포넌트

- 로직 영역인 index.tsx와 마크업 영역인 --View.tsx를 한쌍으로 함
- 로직이 없고 순수하게 화면 레이아웃만 들어가는 templates의 경우는 예외적으로 한 파일로 구성

```
src
+-- components
│   +-- atoms
│   │   +-- ReactCompo
│   │       +-- ReactCompView.tsx
│   │       +-- index.tsx
│   │
```

### 나머지

#### case 1 - 일반적

- 대분류는 ts파일 단위로 하고 import시 깔끔하게 `utils`까지만 가져오도록 index.ts로 묶는다

```typescript
src
+-- utils
│   +-- workflow.ts
│   +-- api.ts
│   +-- index.ts
│

// example
import { apiUtil } from "utils";
apiUtil.handler();
```

#### case 2 - 하위 디렉토리가 구분 상 필요한 경우지만 되도록 이런 식의 depth가 들어가는 구조는 피할 것

```typescript
src
+-- apis
│   +-- workflows
│   │   +-- workflow.ts
│   │   +-- execute.ts
│   │   +-- index.ts
│   +-- library
│   │   +-- library.ts
│   │   +-- index.ts
│   +-- index.ts
│   │


// exmaple
import { workflowAPI } from "api"
const listWorkflow = async () => await workflowAPI.listWorkflow();
```

#### case 3 - 예외

- styles만 예외적으로 폴더와 파일이 혼재
- css-override 부분이 외부에 쓰일 일이 없고 globalStyle에만 적용됨

```
src
+-- styles
│   +-- css-override
│   │   +-- button.module.css
│   │   +-- select.module.css
│   │   +-- index.ts
│   +-- globalStyle.ts
│   +-- theme.ts
│   +-- index.ts
│
```
