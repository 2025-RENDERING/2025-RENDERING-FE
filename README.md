<div align="center">

# 2025 덕성여자대학교 IT미디어공학전공 졸업 전시회 웹사이트

</div>
<br>

## 🙋🏻‍♀️ FE Developer를 소개합니다!

**덕성여자대학교 멋쟁이사자처럼 13기 운영진**

| <a href="https://github.com/seunghyeonKang"><img src="https://avatars.githubusercontent.com/u/101852433?v=4" width="120px" alt="강승현"/></a> | <a href="https://github.com/jinhyo0"><img src="https://avatars.githubusercontent.com/u/150879545?v=4" width="120px" alt="김진효"/></a> | <a href="https://github.com/yeon-yeon1"><img src="https://avatars.githubusercontent.com/u/158417764?v=4" width="120px" alt="노진경"/></a> | <a href="https://github.com/mzxxzysy"><img src="https://avatars.githubusercontent.com/u/163836325?v=4" width="120px" alt="정서영"/></a> | <a href="https://github.com/chldsbdud"><img src="https://avatars.githubusercontent.com/u/142567232?v=4" width="120px" alt="최윤영"/></a> |
| :---: | :---: | :---: | :---: | :---: |
| **강승현** | **김진효** | **노진경** | **정서영** | **최윤영** |


<br>


## 🛠 기술 스택
| **역할**             | **종류**                                                                                                                                                                                                                                                                                                                        | **선정 이유**                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Library              | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">                                                                                                                                                                                                                            | 팀원 기술 수준을 고려해, 컴포넌트 기반 UI 개발로 효율적인 개발이 가능 |
| Programming Language | <img src="https://img.shields.io/badge/TypeScript-4477C0?style=for-the-badge&logo=TypeScript&logoColor=white"/>                                                                                                                                                                                                                 | 정적 타이핑을 통해 쉬운 디버깅 및 유지보수성이 향상됨 |
| Styling              | <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"> | Utility-First CSS 프레임워크로, 클래스 기반의 빠르고 일관된 스타일링이 가능 |
| Data Fetching        | <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">                                                                                                                                                                                                                            | Promise 기반 HTTP 클라이언트로, 직관적인 비동기 데이터 통신이 가능 |
| Routing              | <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white">                                                                                                                                                                                                                | 직관적인 라우팅 관리 및 다양한 옵션 제공 |
| Formatting           | <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-000000?style=for-the-badge&logo=prettier&logoColor=F7B93E"> <img src="https://img.shields.io/badge/stylelint-263238?style=for-the-badge&logo=stylelint&logoColor=white"> | 코드 품질을 유지하고 협업 시 일관된 코드 스타일을 제공 |
| Package Manager      | <img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">                                                                                                                                                                                                                              | 빠른 패키지 설치 속도와 높은 안정성 제공 |
| Deployment           | <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">                                                                                                                                                                                                                          | 쉽고 빠른 배포 환경 제공 및 자동 CI/CD 지원 |
| Bundler              | <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white">                                                                                                                                                                                                                              | esbuild 기반 번들링으로 빠른 개발 환경 제공 |


## ✅ Bundler & Package Manager

- **port 번호**: `5173`
- **yarn 명령어 예시**

```
yarn install # 전체 설치
yarn add 라이브러리 # 라이브러리 설치
yarn dev # 실행
```

## ⌨️ Code Styling

- **camelCase**
  - 변수명, 함수명에 적용
  - 첫글자는 소문자로 시작, 띄어쓰기는 붙이고 뒷 단어의 시작을 대문자로
    - ex- handleDelete
  - 언더바 사용 X (클래스명은 허용)

## 🔗 Git Convention

### 💫 Git Flow

```
main ← feat
```

- main : 배포 및 전체 개발 브랜치 (feat이 merge되는 브랜치) -> 1차 배포 브랜치
- develop : 1차 배포 이후, 2차 배포를 위한 작업이 merge되는 브랜치 -> 2차 배포 브랜치
- feat : 페이지/기능 별 브랜치
- refactor : 리펙토링/수정 별 브랜치

### 🔥 Commit Message Convention

- **커밋 유형**

  - ✨ Feat: 새로운 기능 추가
  - 🐛 Fix : 버그 수정
  - 💄 Design : UI(CSS) 수정
  - ✏️ Typing Error : 오타 수정
  - 🚚 Mod : 폴더 구조 이동 및 파일 이름 수정
  - 💡 Add : 파일 추가 (ex- 이미지 추가)
  - 🔥 Del : 파일 삭제
  - ♻️ Refactor : 코드 리펙토링
  - 🎉 Init: 프로젝트 세팅

- **형식**: `커밋유형: 상세설명 (#이슈번호)`
- **예시**:
  - 🎉 Init: 프로젝트 초기 세팅 (#1)
  - ✨ Feat: 메인페이지 개발 (#2)

### 🌿 Branch Convention

**Branch Naming 규칙**

- **브랜치 종류**
  - `Feat`: 새로운 기능 추가
  - `Fix` : 버그 수정
  - `Refactor` : 코드 리펙토링
  - `Init`: 프로젝트 세팅
- **형식**: `브랜치종류/#이슈번호/상세기능`
- **예시**:
  - Init/#1/init
  - fix/#2/splash

### 📋 Issue Convention

**Issue Title 규칙**

- **태그 목록**:
  - `Feat`: 새로운 기능 추가
  - `Fix` : 버그 수정
  - `Refactor` : 코드 리펙토링
  - `Init`: 프로젝트 세팅
- **예시**:
  - [Feat] Header 컴포넌트 구현
  - [Init] 프로젝트 초기 세팅

### Issue Template

- **제목**: [Feat] 간단한 요약
- **내용**:

```
## 📄 About

<!-- 해당 이슈에서 작업할 내용을 작성해주세요. -->

## ✅ To Do

<!-- 해당 이슈와 관련된 할 일을 작성해주세요. -->
<!-- 할 일을 완료했다면 체크 표시로 기록해주세요. -->

- [ ] todo
- [ ] todo

## 🎨 Preview

<!-- 작업하고자 하는 내용의 뷰를 첨부해주세요. -->

```

## 🔄 Pull Request (PR) Convention

**PR Title 규칙**

- **형식**: `[태그] 제목`
- **태그 목록**:
  - `Feat`: 새로운 기능 추가
  - `Fix` : 버그 수정
  - `Refactor` : 코드 리펙토링
  - `Init`: 프로젝트 세팅
- **예시**:
  - [Feat] Header 컴포넌트 구현
  - [Fix] Header 컴포넌트 버그 수정

### PR Template

- **PR 작성 규칙**:

```
<!-- PR 제목은 '[Feat] 작업 내용' 과 같은 형태로 작성해주세요.  -->

### 📑 이슈 번호

<!-- 이슈 번호를 작성해주세요. 해당 PR이 Merge되면 자동으로 이슈가 close됩니다. ex) #1 -->

- close #

<br>

### ✨️ 작업 내용

<!-- 작업 내용을 간략히 설명해주세요 -->

<br>

### 💭 코멘트

<!-- 코드 리뷰가 필요한 부분이나 궁금한 점을 자유롭게 남겨주세요! -->

<br>

### 📸 구현 결과

<!-- 구현한 기능이 모두 결과물에 포함되도록 자유롭게 첨부해주세요 (스크린샷, gif, 동영상, 배포링크 등) -->

<!-- PR 제목 컨벤션에 맞게 잘 작성했는지, assignee 지정했는지 체크하기 !! -->

```

## 📂 프로젝트 구조

```
📦2025-RENDERING-FE
 ┣ 📁.github
 ┣ 📁node_modules
 ┣ 📂public
 ┃  ┣ 📁favicons
 ┃  ┗ 📁fonts
 ┣ 📂src
 ┃  ┣ 📂assets
 ┃  ┣ 📁components
 ┃  ┣ 📂lib
 ┃  ┃  ┗ 📜colorPalette.ts
 ┃  ┣ 📁routes
 ┃  ┃  ┣ 📁main
 ┃  ┃  ┣ 📁exhibition
 ┃  ┃  ┣ 📁works
 ┃  ┃  ┣ 📁booth
 ┃  ┃  ┣ 📁guestbook
 ┃  ┃  ┗ 📁partners
 ┃  ┣ 📜App.tsx
 ┃  ┗ 📜Main.tsx
 ┣ 📜.gitignore
 ┣ 📜eslint.config.js
 ┣ 📜index.html
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜vite.config.ts
 ┗ 📜yarn.lock
```

- public
  - favicons - 파비콘
  - fonts - 폰트
- src
  - assets - 사용되는 모든 에셋
  - components - 라우팅 페이지 외 모든 기능 및 컴포넌트
  - routes - 라우팅 페이지
  - styles - CSS(Styled-components 등)
  <!-- prettier-ignore-end -->
