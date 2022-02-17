
CREATE TABLE 'googledatabase'.'client' { 
    'id' INT NOT NULL AUTO_INCREMENT,
    'fullname' VARCHAR(120) NOT NULL,
    'email' VARCHAR(120) NOT NULL,
    'password' TEXT NOT NULL,
    UNIQUE ('email'),
    PRIMARY KEY ('id')
};