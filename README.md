This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

check **.env** file, it should contains :

```bash
DEBUG_MODE = true
BASE_URL = http://localhost:3000
SITE_NAME = Crowdfund

DB_HOST=localhost
DB_NAME=crowdfund
DB_USER=crowdfund
DB_PASSWORD=crowdfund
```
at the next step you need to setup the config file for migrations and seeders in **db\config\config.json** Example:

```bash
    "username": "crowdfund",
    "password": "crowdfund",
    "database": "crowdfund",
    "host": "127.0.0.1",
    "dialect": "mysql"
```
before start project, run migration and seeders^

```bash
npm run migrate
npm run seed
# or
yarn migrate
yarn seed
```

at the last step you need start project

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


the project is divided to both server and client parts.
The source code of the server parts you can find in **/server** folder. The server source code consist of:
- controllers **/server/controllers** 
- models **/server/models** 
- services **/server/services** 

The source code of the clients parts consist of:
- web pages **/pages** 
- components **/src/components** 
- hooks **/src/hooks** 
- redux **/src/redux** 

