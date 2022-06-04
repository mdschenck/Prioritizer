DROP DATABASE IF EXISTS prioritizer_db;

CREATE DATABASE prioritizer_db;

USE prioritizer_db;

CREATE TABLE votes (
    vote_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    vote VARCHAR(100) NOT NULL,
    create_date DATE DEFAULT (CURRENT_DATE),
    start_time DEFAULT NULL
);



CREATE TABLE proposals (
  prop_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  proposal VARCHAR(100) NOT NULL,
  vote INT NOT NULL 
      FOREIGN KEY (votes)
    REFERENCES votes(vote_id)
    ON DELETE SET NULL,
prop_votes INT DEFAULT 0
);


CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    hash varchar(30) DEFAULT NULL,
    votes_remaining INT(1) DEFAULT 5
);

