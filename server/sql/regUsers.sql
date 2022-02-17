
CREATE TABLE 'googledatabase'.'registrusers' { 
    'id' INT NOT NULL AUTO_INCREMENT,
    'fullname' VARCHAR(120) NOT NULL,
    'email' VARCHAR(120) NOT NULL,
    'age' DATE,
    'user_id' INTEGER NOT NULL,
    PRIMARY KEY ('id'),
    FOREIGN KEY ('user_id') REFERENCES users ('id')
};