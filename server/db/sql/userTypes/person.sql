CREATE TABLE person (
    id INT NOT NULL UNIQUE,
    name VARCHAR(63) NOT NULL,
    email VARCHAR(31) NOT NULL UNIQUE,
    phoneNumber VARCHAR(15) NOT NULL UNIQUE,
    dateOfBirth DATE NOT NULL,
    address VARCHAR(63) NOT NULL,

    PRIMARY KEY (id)
);