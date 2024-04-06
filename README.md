### Blog Buzz

pg:
  image: postgres
  container_name: blog-buzz-pg
  restart: always
  ports:
    - 5435:5432
  environment:
    POSTGRES_PASSWORD: blog-buzz
    PGDATA: /data/postgres
  volumes:
    - ./postgres:/data/postgres