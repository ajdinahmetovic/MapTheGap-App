CREATE OR REPLACE FUNCTION vote (_user_id INT, _issue_id INT, _b BOOLEAN)
RETURNS void AS $$
BEGIN
    IF _b THEN
        IF (SELECT COUNT(id)=0 FROM upvotes WHERE user_id=_user_id AND issue_id=_issue_id) THEN
            INSERT INTO upvotes(user_id, issue_id) VALUES (_user_id, _issue_id);
        END IF;
    ELSE
        DELETE FROM upvotes WHERE user_id=_user_id AND issue_id=_issue_id;
    END IF;
END; $$ LANGUAGE 'plpgsql'; 
