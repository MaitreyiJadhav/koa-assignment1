
CREATE TABLE todoList ( 
        todoID       INT AUTO_INCREMENT, 
        todoItem    VARCHAR(250) NOT NULL UNIQUE, 
        todoDateAdded  DATE NOT NULL, 
        todoStatus  BOOL NOT NULL, 
        todoDueBy   DATE NOT NULL,                                              
            PRIMARY KEY     (todoID) 
      ); 