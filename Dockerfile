FROM node:12.3.1 as build

WORKDIR /app
RUN npm install -g pkg

COPY . .

RUN npm install
RUN PKG_CACHE_PATH=.pkg-cache pkg -t node12.2.0-linux-x64 .

FROM alpine:latest

RUN apk update && apk add --no-cache libstdc++ libgcc

COPY --from=build /app/statuscake /statuscake
CMD ["/statuscake"]
