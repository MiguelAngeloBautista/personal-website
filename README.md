<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). -->

This project is a personal portfolio website in which you can see all of my work for both personal and University projects.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### To run in build mode
```bash
npm run build

npm start
```

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Running with docker
To build the image, run:
```bash 
docker compose build
```
To run the docker container enter:
```bash
docker run -p 80:3000 personal-website

# Run the the background
docker run -d -p 80:3000 personal-website
```

With Docker Compose
```bash
docker compose up -d
# or
docker-compose up -d
```

## Automated building
In windows run the build-tag.bat. Dont try selecting 'y' in pushing the image to registry as that isn't public so it might just crash the bat file

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

