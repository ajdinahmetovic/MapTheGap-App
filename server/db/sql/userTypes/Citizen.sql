CREATE TABLE Citizens (
    id SERIAL,
    userType INT NOT NULL,
    name VARCHAR(63) NOT NULL,
    email VARCHAR(31) NOT NULL UNIQUE,
    phoneNumber VARCHAR(15) NOT NULL UNIQUE,
    dateOfBirth DATE NOT NULL,
    address VARCHAR(63) NOT NULL,
    password VARCHAR(31) NOT NULL,
    verified BOOLEAN NOT NULL, 

    PRIMARY KEY (id),
    FOREIGN KEY (userType) REFERENCES UserTypes(id)
);