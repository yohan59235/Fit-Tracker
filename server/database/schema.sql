create table user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  email varchar(255) NOT NULL UNIQUE,
  hashed_password VARCHAR(255) NOT NULL
);

-- create table item (
--   id int unsigned primary key auto_increment not null,
--   title varchar(255) not null,
--   user_id int unsigned not null,
--   foreign key(user_id) references user(id)
-- );
