CREATE TABLE company (
    id SERIAL,
    userType INT NOT NULL,
    name VARCHAR(31) NOT NULL,
    email VARCHAR(31) NOT NULL UNIQUE,
    phoneNumber VARCHAR(15) NOT NULL UNIQUE,
    address VARCHAR(63) NOT NULL,
    fieldOfAction VARCHAR(31)[] NOT NULL,
    type VARCHAR(63) NOT NULL, 

    PRIMARY KEY (id),
    FOREIGN KEY (userType) REFERENCES userType(id)
);