init:
	yarn install

build:
	NODE_ENV=development npx parcel build --out-dir './dist' --target 'browser' --no-minify './src/client.tsx'

run:
	npx ts-node src/index.tsx
