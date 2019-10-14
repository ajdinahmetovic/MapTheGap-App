CREATE TABLE NGOs (
    id SERIAL,
    userType INT NOT NULL,
    name VARCHAR(31) NOT NULL,
    email VARCHAR(31) NOT NULL UNIQUE,
    phoneNumber VARCHAR(15) NOT NULL UNIQUE,
    address VARCHAR(63) NOT NULL,
    fieldOfAction VARCHAR(31)[] NOT NULL,
    areaOfAction VARCHAR(31)[] NOT NULL,
    password VARCHAR(63) NOT NULL, 
    verified BOOLEAN NOT NULL, 

    PRIMARY KEY (id),
    FOREIGN KEY (userType) REFERENCES UserTypes(id)
);