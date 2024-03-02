-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           11.2.2-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Copiando dados para a tabela museu_db.visitantes: ~51 rows (aproximadamente)
INSERT INTO `visitantes` (`visitante_id`, `visitante_nome`, `visitante_genero`, `visitante_profissao`, `visitante_cidade`, `visitante_bairro`, `visitante_cpf`, `visitante_idade`) VALUES
	(1, 'Davi', 'masculino', 'estudante', 'Fortaleza', 'Aquiraz', '000.000.000-00', 26),
	(2, 'Jenny', 'feminino', 'estudante', 'Fortaleza', 'Messejana', '000.000.000-00', 19),
	(3, 'Suzana Furacão', 'outros', 'dançarina', 'São Paulo', 'Joinvile', '000.000.000-00', 32),
	(4, 'joao', 'masculino', 'tecnico de ti', 'fortaleza', 'messejana', '000.000.000-00', 28),
	(5, 'Ana', 'feminino', 'médica', 'Rio de Janeiro', 'Copacabana', '222.222.222-22', 40),
	(6, 'Pedro', 'masculino', 'advogado', 'Belo Horizonte', 'Savassi', '333.333.333-33', 45),
	(7, 'Mariana', 'feminino', 'engenheira', 'Curitiba', 'Batel', '444.444.444-44', 30),
	(8, 'Rafael', 'masculino', 'professor', 'Recife', 'Boa Viagem', '555.555.555-55', 28),
	(9, 'Fernanda', 'feminino', 'arquiteta', 'Brasília', 'Asa Sul', '666.666.666-66', 33),
	(10, 'Gabriel', 'masculino', 'estudante', 'Salvador', 'Barra', '777.777.777-77', 22),
	(11, 'Julia', 'feminino', 'estudante', 'Porto Alegre', 'Moinhos de Vento', '888.888.888-88', 20),
	(12, 'Thiago', 'masculino', 'médico', 'Manaus', 'Adrianópolis', '999.999.999-99', 38),
	(13, 'Carla', 'feminino', 'engenheira', 'Goiânia', 'Setor Marista', '101.101.101-10', 29),
	(14, 'Felipe', 'masculino', 'arquiteto', 'Florianópolis', 'Centro', '202.202.202-20', 34),
	(15, 'Larissa', 'feminino', 'advogada', 'Fortaleza', 'Aldeota', '303.303.303-30', 42),
	(16, 'Gustavo', 'masculino', 'estudante', 'Natal', 'Ponta Negra', '404.404.404-40', 21),
	(17, 'Amanda', 'feminino', 'professora', 'João Pessoa', 'Manaíra', '505.505.505-50', 31),
	(18, 'Marcos', 'masculino', 'engenheiro', 'Campo Grande', 'Centro', '606.606.606-60', 36),
	(19, 'Beatriz', 'feminino', 'médica', 'Teresina', 'Jóquei', '707.707.707-70', 39),
	(20, 'Matheus', 'masculino', 'arquiteto', 'Vitória', 'Praia do Canto', '808.808.808-80', 37),
	(21, 'Camila', 'feminino', 'advogada', 'Cuiabá', 'Centro Sul', '909.909.909-90', 43),
	(22, 'Rodrigo', 'masculino', 'professor', 'Aracaju', 'Atalaia', '010.010.010-01', 27),
	(23, 'Isabela', 'feminino', 'estudante', 'Maceió', 'Ponta Verde', '111.111.111-12', 23),
	(24, 'Vinícius', 'masculino', 'médico', 'Belém', 'Nazaré', '212.212.212-21', 41),
	(25, 'Nathalia', 'feminino', 'engenheira', 'Porto Velho', 'Centro', '313.313.313-31', 32),
	(26, 'Henrique', 'masculino', 'arquiteto', 'Boa Vista', 'Centro', '414.414.414-41', 33),
	(27, 'Leticia', 'feminino', 'advogada', 'Macapá', 'Central', '515.515.515-51', 30),
	(28, 'Eduardo', 'masculino', 'professor', 'Palmas', 'Plano Diretor Norte', '616.616.616-61', 29),
	(29, 'Luana', 'feminino', 'estudante', 'Teresópolis', 'Várzea', '717.717.717-71', 24),
	(30, 'Guilherme', 'masculino', 'médico', 'Santos', 'Gonzaga', '818.818.818-81', 37),
	(31, 'Priscila', 'feminino', 'engenheira', 'Ribeirão Preto', 'Jardim América', '919.919.919-91', 35),
	(32, 'Ricardo', 'masculino', 'arquiteto', 'Sorocaba', 'Centro', '020.020.020-02', 38),
	(33, 'Laura', 'feminino', 'advogada', 'Uberlândia', 'Centro', '121.121.121-12', 34),
	(34, 'Diego', 'masculino', 'professor', 'Blumenau', 'Centro', '222.222.222-23', 31),
	(35, 'Bianca', 'feminino', 'estudante', 'Itajaí', 'Centro', '323.323.323-32', 25),
	(36, 'Thales', 'masculino', 'médico', 'Jaraguá do Sul', 'Centro', '424.424.424-42', 28),
	(37, 'Manuela', 'feminino', 'engenheira', 'Joinville', 'Centro', '525.525.525-52', 36),
	(38, 'Vitor', 'masculino', 'arquiteto', 'Florianópolis', 'Centro', '626.626.626-62', 40),
	(39, 'Gabriela', 'feminino', 'advogada', 'Itajaí', 'Centro', '727.727.727-72', 33),
	(40, 'Cesar', 'masculino', 'professor', 'Blumenau', 'Centro', '828.828.828-82', 30),
	(41, 'Isadora', 'feminino', 'estudante', 'Itapema', 'Centro', '929.929.929-92', 26),
	(42, 'Leonardo', 'masculino', 'médico', 'Navegantes', 'Centro', '030.030.030-03', 39),
	(43, 'Fernanda', 'feminino', 'engenheira', 'Balneário Camboriú', 'Centro', '131.131.131-13', 35),
	(44, 'Marcelo', 'masculino', 'arquiteto', 'Joinville', 'Centro', '232.232.232-23', 32),
	(45, 'Caroline', 'feminino', 'advogada', 'Florianópolis', 'Centro', '333.333.333-33', 27),
	(46, 'Lucas', 'masculino', 'professor', 'Itapema', 'Centro', '434.434.434-43', 41),
	(47, 'Lara', 'feminino', 'estudante', 'Balneário Camboriú', 'Centro', '535.535.535-53', 28),
	(48, 'Renato', 'masculino', 'médico', 'Navegantes', 'Centro', '636.636.636-63', 42),
	(49, 'Aline', 'feminino', 'engenheira', 'Joinville', 'Centro', '737.737.737-73', 29),
	(50, 'Rafael', 'masculino', 'arquiteto', 'Florianópolis', 'Centro', '838.838.838-83', 36),
	(51, 'Mariana', 'feminino', 'advogada', 'Itajaí', 'Centro', '939.939.939-93', 30);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
