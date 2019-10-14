CREATE TABLE Governments (
    id SERIAL,
    userType INT NOT NULL,
    name VARCHAR(31) NOT NULL,
    address VARCHAR(63) NOT NULL,
    service VARCHAR(63) NOT NULL,
    contactPerson VARCHAR(63) NOT NULL,
    phoneNumber VARCHAR(15) NOT NULL,
    passowrd VARCHAR(63) NOT NULL,
    verified BOOLEAN NOT NULL,  

    PRIMARY KEY (id),
    FOREIGN KEY (userType) REFERENCES UserTypes(id)
);