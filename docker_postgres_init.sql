CREATE USER keycloak WITH PASSWORD 'password' CREATEDB;
CREATE DATABASE keycloak
    WITH 
    OWNER = root
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE OR REPLACE FUNCTION diesel_manage_updated_at(_tbl regclass) RETURNS VOID AS $$
BEGIN
    EXECUTE format('CREATE TRIGGER set_updated_at BEFORE UPDATE ON %s
                    FOR EACH ROW EXECUTE PROCEDURE diesel_set_updated_at()', _tbl);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION diesel_set_updated_at() RETURNS trigger AS $$
BEGIN
    IF (
        NEW IS DISTINCT FROM OLD AND
        NEW.updated_at IS NOT DISTINCT FROM OLD.updated_at
    ) THEN
        NEW.updated_at := current_timestamp;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE app_sessions (
    id VARCHAR NOT NULL PRIMARY KEY,
    user_id VARCHAR NOT NULL,
    duration FLOAT NOT NULL,
    init_session TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    finish_session TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE TABLE app_processes (
    id VARCHAR NOT NULL PRIMARY KEY,
    process_number INTEGER NOT NULL,
    init_process TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    end_process TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    duration FLOAT NOT NULL,
    process_state INTEGER NOT NULL,
    session_id VARCHAR NOT NULL,
    CONSTRAINT fk_session FOREIGN KEY(session_id) REFERENCES app_sessions(id) ON DELETE CASCADE
);

CREATE TABLE app_quizes (
    id VARCHAR NOT NULL PRIMARY KEY,
    user_id VARCHAR NOT NULL
);

CREATE TABLE app_questions (
    id VARCHAR NOT NULL PRIMARY KEY,
    quizz_id VARCHAR NOT NULL,
    question INTEGER NOT NULL,
    answer INTEGER NOT NULL,
    CONSTRAINT fk_quizes FOREIGN KEY(quizz_id) REFERENCES app_quizes(id) ON DELETE CASCADE
);

CREATE TABLE app_experiences (
    id VARCHAR NOT NULL PRIMARY KEY,
    user_id VARCHAR NOT NULL,
    times_used INTEGER NOT NULL
);
