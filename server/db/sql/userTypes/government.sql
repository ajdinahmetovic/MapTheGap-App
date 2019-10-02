CREATE TABLE government (
    id INT NOT NULL UNIQUE,
    name VARCHAR(31) NOT NULL,
    address VARCHAR(63) NOT NULL,
    service VARCHAR(63) NOT NULL,
    contactPerson VARCHAR(63) NOT NULL
    phoneNumber VARCHAR(15) NOT NULL,

    PRIMARY KEY (id),
);