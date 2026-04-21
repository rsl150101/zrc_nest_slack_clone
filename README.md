# Nest Slack Clone Backend

Slack의 핵심 기능을 클론한 백엔드 서버 프로젝트입니다. NestJS 프레임워크와 TypeORM을 기반으로 구축되었습니다.

## 🚀 개요

이 프로젝트는 워크스페이스, 채널, 다이렉트 메시지(DM), 실시간 채팅 등 Slack의 주요 기능을 제공하는 RESTful API 서버입니다.

## 🛠 Tech Stack

- **Framework**: [NestJS](https://nestjs.com/) (v11)
- **Language**: TypeScript
- **Database**: MySQL (via [TypeORM](https://typeorm.io/))
- **Authentication**: Passport.js (Local Strategy), Session-based auth
- **Documentation**: Swagger (@nestjs/swagger)
- **Validation**: class-validator, class-transformer
- **Development**: Webpack HMR (Hot Module Replacement)

## ✨ 주요 기능

- **회원가입 및 로그인**: bcrypt를 이용한 비밀번호 암호화 및 세션 기반 인증
- **워크스페이스**: 워크스페이스 생성, 조회, 멤버 초대 및 관리
- **채널**: 워크스페이스 내 채널 생성, 조회, 채널 멤버 관리
- **다이렉트 메시지 (DM)**: 사용자 간 1:1 메시지 전송 및 내역 조회

## 📂 프로젝트 구조

```text
src/
├── auth/            # 인증 로직 (Passport, Session)
├── channels/        # 채널 관리 및 채널 채팅 관련
├── common/          # 공통 데코레이터, 인터셉터, DTO 등
├── database/        # 데이터베이스 시딩 및 설정
├── dms/             # 다이렉트 메시지 관련
├── entities/        # TypeORM 엔티티 정의
├── middlewares/     # 로거 등 커스텀 미들웨어
├── migrations/      # DB 마이그레이션 파일
├── users/           # 사용자 프로필 및 가입 관련
├── workspaces/      # 워크스페이스 관리 관련
└── main.ts          # 애플리케이션 진입점
```

## ⚙️ 설정 방법

### 1. 환경 변수 설정
프로젝트 루트 디렉토리에 `.env` 파일을 생성하고 다음 설정을 입력합니다.
```env
# Application Configuration
PORT=3095

# Database Configuration
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=password
DB_DATABASE=slack_clone

# Security
COOKIE_SECRET=your_cookie_secret_here
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 데이터베이스 설정
MySQL 데이터베이스가 실행 중이어야 합니다. 이후 아래 명령어로 데이터베이스를 생성하고 테이블을 동기화할 수 있습니다.

```bash
# DB 생성 (typeorm-extension 이용)
npm run db:create

# 마이그레이션 실행
npm run db:migrate
```

## 🏃 실행 방법

```bash
# 개발 모드 (HMR 적용)
npm run start:dev

# 프로덕션 빌드 및 실행
npm run build
npm run start:prod
```

## 📝 API 문서

서버 실행 후 브라우저에서 아래 주소로 접속하면 Swagger를 통한 API 명세를 확인할 수 있습니다.

- `http://localhost:3095/api-docs` (기본 설정 포트 기준)

---

이 프로젝트는 교육 및 포트폴리오 목적으로 제작되었습니다.
