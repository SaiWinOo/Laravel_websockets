## Run Locally

Clone the repo

```bash
  git clone https://github.com/SaiWinOo/Laravel_websockets.git
```

Go to the project directory

```bash
  cd Laravel_websockets
```

## Installation Steps

1. Install dependencies with composer and npm

```bash
  composer install && npm install
```

2. Copy .env.example and setup database

```bash
  cp .env.example .env
```

After that, setup database in .env

run this

```bash
  php artisan key:generate
```

```bash
  php artisan migrate --seed
```

```bash
  npm run dev
```

```bash
  php artisan serve
```

```bash
  php artisan websockets:serve
```

then just create user with tinker one user is enough..
then run

```bash
  php artisan user:color:update
```
