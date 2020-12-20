-- CREATE DATABASE todo_db;

CREATE TABLE todo (
    id SERIAL PRIMARY KEY, -- TODO use UUID for Production
    task VARCHAR(255)
)