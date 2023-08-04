INSERT INTO department (department_name)
VALUES ("Finance"),
        ("Marketing"),
        ("Sales"),
        ("Engineering");

INSERT INTO roles (title, salary)
VALUES ("CFO", 110.000),
    ("CMO", 120.000),
    ("VP", 125.000),
    ("Financial Analyst", 88.000),
    ("Accountant", 91.000),
    ("Account Executive", 75.000),
    ("Brand Management", 83.000),
    ("Sales Representative", 77.000),
    ("Account Manager", 80.000),
    ("Design Engineer", 85.000);

INSERT INTO employee (first_name, last_name, manager_id)
VALUES ("Alex", "Morgan", null),
    ("Megan", "Rapinoe", null),
    ("Rose", "Lavelle", null),
    ("Julie", "Ertz", 8),
    ("Trinity", "Rodman", 8),
    ("Sophia", "Smith", 1),
    ("Alyssa", "Thompson", 1),
    ("Lindsey", "Horan", null),
    ("Lynn", "Williams", 2),
    ("Emily", "Fox", 2);
