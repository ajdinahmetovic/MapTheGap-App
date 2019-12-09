CREATE TABLE IF NOT EXISTS issues (
    id SERIAL,
    title VARCHAR(255),
    short_description TEXT,
    detailed_description TEXT,
    proposed_solution TEXT,
    image TEXT[],
    participate BOOLEAN NOT NULL,
    up_votes INT DEFAULT 0,
    solved BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
