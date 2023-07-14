# React Todo list 만들기

### 완성 사이트

### 사용언어
+ React v18.2

### Hooks
+ useState
+ useRef
+ useCallback

### 프로젝트 준비
1. 라이브러리 설치

+ UI디자인 사용 : styled-components react-icons
+ className 사용 : classnames
```
yarn add styled-components react-icons
yarn add classnames
```

2. root폴더에 .prettierrc파일을 생성한다.
```
{
    "arrowParens": "always",
    "semi": true,
    "singleQuote": true,
    "useTabs": false,
    "trailingComma": "all",
    "tabWidth": 2,
    "printWidth": 80
}
```

3. root폴더에 jsconfig.json 파일을 생성하여 import를 위한 절대경로 설정을 한다.
```
{
    "compilerOptions": {
        "target": "es6",
        "baseUrl": "src"
    },
    "include": ["src"]
}
```
# TodoList
