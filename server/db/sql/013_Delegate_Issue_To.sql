CREATE TABLE IF NOT EXISTS delecate_issue_to (
    id SERIAL PRIMARY KEY,
    
    issue_id NOT NULL REFERENCES issues(id),
    user_id NOT NULL REFERENCES users(id)
);
