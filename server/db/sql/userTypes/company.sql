CREATE TABLE company (
    id INT NOT NULL UNIQUE,
    name VARCHAR(31) NOT NULL,
    email VARCHAR(31) NOT NULL UNIQUE,
    phoneNumber VARCHAR(15) NOT NULL UNIQUE,
    address VARCHAR(63) NOT NULL,
    fieldOfAction VARCHAR(31)[] NOT NULL,
    type VARCHAR(63) NOT NULL, 

    PRIMARY KEY (id),
);