CREATE TABLE googledatabase.regUsers ( 
    id INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(120) NOT NULL,
    userEmail VARCHAR(120) NOT NULL,
    userAge DATE NOT NULL,
    user_id INTEGER NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);