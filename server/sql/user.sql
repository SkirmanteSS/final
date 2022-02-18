
CREATE TABLE googledatabase.user (
    id INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR (120) NOT NULL,
    userEmail VARCHAR (120) NOT NULL,
    userAge VARCHAR (120) NOT NULL,
    UNIQUE (email),
    PRIMARY KEY (id)
);