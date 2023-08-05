INSERT INTO department (department_name)
VALUES ("Finance"),
        ("Marketing"),
        ("Sales"),
        ("Engineering");

INSERT INTO roles (title, salary, department_id)
VALUES ("CFO", 110.000, 1),
    ("CMO", 120.000, 2),
    ("VP", 125.000, 3),
    ("Financial Analyst", 88.000, 1),
    ("Accountant", 91.000, 1),
    ("Account Executive", 75.000, 2),
    ("Brand Management", 83.000, 2),
    ("Sales Representative", 77.000, 3),
    ("Account Manager", 80.000, 3),
    ("Design Engineer", 85., 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Alex", "Morgan", 2, null),
    ("Megan", "Rapinoe", 1, null),
    ("Rose", "Lavelle", 10, null),
    ("Julie", "Ertz", 9, 8),
    ("Trinity", "Rodman", 8, 8),
    ("Sophia", "Smith", 7, 1),
    ("Alyssa", "Thompson", 6, 1),
    ("Lindsey", "Horan", 3, null),
    ("Lynn", "Williams", 5, 2),
    ("Emily", "Fox", 4, 2);
