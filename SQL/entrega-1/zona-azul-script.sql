USE zona_azul;

SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(50) NOT NULL,
    user_surname VARCHAR(50) NOT NULL,
    dni VARCHAR(9) NOT NULL,
    mail VARCHAR(50) NOT NULL,
    phone_number VARCHAR(9) NOT NULL,
    account_number INT NOT NULL
);

CREATE TABLE IF NOT EXISTS vehicles (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    model VARCHAR(50) NOT NULL,
    brand VARCHAR(50) NOT NULL,
    kind_of_vehicle ENUM('coche', 'moto', 'furgoneta'),
    plate_number VARCHAR(7) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS registries (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    initial_par_time DATETIME,
    final_park_time DATETIME,
    payment DECIMAL(4,2)
);

CREATE TABLE IF NOT EXISTS districts (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    neighborhood_name VARCHAR(50),
    initial_schedule DATETIME,
    final_schedule DATETIME,
    price_per_minute DECIMAL(3,2) NOT NULL,
    time_limit INT NOT NULL,
    observartion ENUM('operativo', 'en obras'),
    id_registry INT UNSIGNED,
    FOREIGN KEY (id_registry) REFERENCES registries (id)
);

CREATE TABLE IF NOT EXISTS penalties (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    quantity DECIMAL(5,2),
    id_registry INT UNSIGNED,
    FOREIGN KEY (id_registry) REFERENCES registries (id),
    id_reclamation INT UNSIGNED,
    FOREIGN KEY (id_reclamation) REFERENCES reclamations (id)
);

CREATE TABLE IF NOT EXISTS reclamations (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    processing ENUM('tramitada', 'en trámite') NOT NULL,
    status ENUM('aceptada', 'rechazada') NOT NULL,
    date DATE,
    motive VARCHAR(500),
    id_user INT UNSIGNED,
    FOREIGN KEY (id_user) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS users_vehicles (
	id_user INT UNSIGNED,
    FOREIGN KEY (id_user) REFERENCES users (id),
    id_vehicle INT UNSIGNED,
    FOREIGN KEY (id_vehicle) REFERENCES vehicles (id)
);

CREATE TABLE IF NOT EXISTS users_registries (
	id_user INT UNSIGNED,
    FOREIGN KEY (id_user) REFERENCES users (id),
    id_registry INT UNSIGNED,
    FOREIGN KEY (id_registry) REFERENCES registries (id)
);

SET FOREIGN_KEY_CHECKS =1;