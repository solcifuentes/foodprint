-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: foodprint
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `food_emi_data`
--

DROP TABLE IF EXISTS `food_emi_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_emi_data` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `food_item` varchar(200) DEFAULT NULL,
  `emi_kg` decimal(6,1) DEFAULT NULL,
  `emi_port` decimal(6,1) DEFAULT NULL,
  `food_cat` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=212 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_emi_data`
--

LOCK TABLES `food_emi_data` WRITE;
/*!40000 ALTER TABLE `food_emi_data` DISABLE KEYS */;
INSERT INTO `food_emi_data` VALUES (1,'Ale',0.5,0.1,'ALC'),(2,'Beer',0.7,0.2,'ALC'),(3,'Cider',1.1,0.3,'ALC'),(4,'Wine',1.7,0.4,'ALC'),(5,'Almond milk',0.7,0.2,'BEV'),(6,'Apple juice',0.5,0.1,'BEV'),(7,'Coconut milk',3.3,0.8,'BEV'),(8,'Coffee beans',16.8,4.2,'BEV'),(9,'Coffee pods',20.3,5.1,'BEV'),(10,'Cow\'s milk',3.7,0.9,'BEV'),(11,'Fruit smoothies',1.6,0.4,'BEV'),(12,'Instant coffee',28.8,7.2,'BEV'),(13,'Oat milk',0.5,0.1,'BEV'),(14,'Orange juice',0.5,0.1,'BEV'),(15,'Protein shake',1.7,0.4,'BEV'),(16,'Rice milk',1.4,0.4,'BEV'),(17,'Soy milk',0.9,0.2,'BEV'),(18,'Tea',17.6,4.4,'BEV'),(19,'Apricot jam',1.4,0.3,'DIY_bf'),(20,'Breakfast cereal',1.5,0.4,'DIY_bf'),(21,'Chocolate cereals',2.9,0.7,'DIY_bf'),(22,'Chocolate spread',5.4,1.3,'DIY_bf'),(23,'Marmalade',1.5,0.4,'DIY_bf'),(24,'Muesli',2.3,0.6,'DIY_bf'),(25,'Pancakes',1.5,0.4,'DIY_bf'),(26,'Porridge (oatmeal)',1.6,0.4,'DIY_bf'),(27,'Raspberry jam',5.1,1.3,'DIY_bf'),(28,'Soy yoghurt',0.5,0.1,'DIY_bf'),(29,'Strawberry jam',2.6,0.6,'DIY_bf'),(30,'Yoghurt',3.1,0.8,'DIY_bf'),(31,'Baguette',1.0,0.2,'DIY_bread'),(32,'Bread',0.9,0.2,'DIY_bread'),(33,'Naan',1.0,0.3,'DIY_bread'),(34,'Pitta bread',0.6,0.1,'DIY_bread'),(35,'Poppadoms',1.5,0.4,'DIY_bread'),(36,'Sourdough bread',0.9,0.2,'DIY_bread'),(37,'Tortilla wraps',0.9,0.2,'DIY_bread'),(38,'Blue cheese',20.1,5.0,'DIY_chee'),(39,'Brie',19.1,4.8,'DIY_chee'),(40,'Camembert',16.3,4.1,'DIY_chee'),(41,'Cheddar cheese',20.7,5.2,'DIY_chee'),(42,'Cottage cheese',25.3,6.3,'DIY_chee'),(43,'Feta cheese',14.8,3.7,'DIY_chee'),(44,'Goat\'s cheese',19.3,4.8,'DIY_chee'),(45,'Halloumi cheese',16.2,4.0,'DIY_chee'),(46,'Mozzarella cheese',16.2,4.1,'DIY_chee'),(47,'Parmesan cheese',24.0,6.0,'DIY_chee'),(48,'Ricotta cheese',16.3,4.1,'DIY_chee'),(49,'Eggs',4.4,1.1,'DIY_eggs'),(50,'Butter',3.3,0.3,'DIY_fat'),(51,'Coconut oil',0.5,0.1,'DIY_fat'),(52,'Olive oil',5.2,0.5,'DIY_fat'),(53,'Rapeseed oil',3.3,0.3,'DIY_fat'),(54,'Sugar',1.9,0.2,'DIY_fat'),(55,'Sunflower oil',3.7,0.4,'DIY_fat'),(56,'Tomato ketchup',2.6,0.3,'DIY_fat'),(57,'Cod',10.9,2.7,'DIY_fish'),(58,'Mackerel',13.6,3.4,'DIY_fish'),(59,'Prawns',20.9,5.2,'DIY_fish'),(60,'Tuna',13.1,3.3,'DIY_fish'),(61,'Apples',0.5,0.1,'DIY_fruit'),(62,'Avocados',0.9,0.2,'DIY_fruit'),(63,'Bananas',0.9,0.2,'DIY_fruit'),(64,'Grapes',8.3,2.1,'DIY_fruit'),(65,'Kiwis',1.6,0.4,'DIY_fruit'),(66,'Lemons',0.5,0.1,'DIY_fruit'),(67,'Limes',0.5,0.1,'DIY_fruit'),(68,'Melon',1.1,0.3,'DIY_fruit'),(69,'Oranges',0.5,0.1,'DIY_fruit'),(70,'Pears',0.9,0.2,'DIY_fruit'),(71,'Pineapple',0.9,0.2,'DIY_fruit'),(72,'Raspberries',8.4,2.1,'DIY_fruit'),(73,'Strawberries',3.2,0.8,'DIY_fruit'),(74,'Watermelon',1.0,0.2,'DIY_fruit'),(75,'Bacon',19.3,4.8,'DIY_meat'),(76,'Beef mince',95.0,23.8,'DIY_meat'),(77,'Beef steak',129.7,32.4,'DIY_meat'),(78,'Chicken breast',9.3,2.3,'DIY_meat'),(79,'Chicken sausages',8.2,2.0,'DIY_meat'),(80,'Chicken thighs',10.0,2.5,'DIY_meat'),(81,'Lamb (leg)',30.7,7.7,'DIY_meat'),(82,'Lamb chops',30.9,7.7,'DIY_meat'),(83,'Pork chops',12.2,3.0,'DIY_meat'),(84,'Pork loin',12.0,3.0,'DIY_meat'),(85,'Pork sausages',9.8,2.4,'DIY_meat'),(86,'Salmon',10.4,2.6,'DIY_meat'),(87,'Almond butter',0.4,0.0,'DIY_nut'),(88,'Almonds',0.6,0.1,'DIY_nut'),(89,'Brazil nuts',2.5,0.3,'DIY_nut'),(90,'Cashew nuts',2.1,0.2,'DIY_nut'),(91,'Chia seeds',1.2,0.1,'DIY_nut'),(92,'Peanut butter',3.4,0.3,'DIY_nut'),(93,'Peanuts',3.1,0.3,'DIY_nut'),(94,'Pecan nuts',2.5,0.3,'DIY_nut'),(95,'Pumpkin seeds',1.3,0.1,'DIY_nut'),(96,'Quinoa',1.1,0.1,'DIY_nut'),(97,'Sunflower seeds',1.9,0.2,'DIY_nut'),(98,'Walnuts',2.4,0.2,'DIY_nut'),(99,'Couscous',1.2,0.3,'DIY_pasta'),(100,'Egg noodles',1.4,0.3,'DIY_eggs'),(101,'Lasagne sheets',2.0,0.5,'DIY_pasta'),(102,'Pasta shells',1.0,0.3,'DIY_pasta'),(103,'Penne pasta',1.6,0.4,'DIY_pasta'),(104,'Rice',3.9,1.0,'DIY_pasta'),(105,'Rice noodles',3.4,0.9,'DIY_pasta'),(106,'Spaghetti',1.6,0.4,'DIY_pasta'),(107,'Dairy-free cheese',2.0,0.5,'DIY_plantb'),(108,'Dairy-free ice cream',2.5,0.6,'DIY_plantb'),(109,'Meat-free mince',0.9,0.2,'DIY_plantb'),(110,'Meat-free sausages',1.0,0.2,'DIY_plantb'),(111,'Tofu',1.0,0.3,'DIY_plantb'),(112,'Bagels',0.8,0.2,'DIY_swee'),(113,'Biscuits',4.0,1.0,'DIY_swee'),(114,'Cereal bars',2.9,0.7,'DIY_swee'),(115,'Chocolate biscuits',5.1,1.3,'DIY_swee'),(116,'Cookies',3.4,0.8,'DIY_swee'),(117,'Cracker biscuits',2.4,0.6,'DIY_swee'),(118,'Crisps',3.0,0.8,'DIY_swee'),(119,'Croissants',1.7,0.4,'DIY_swee'),(120,'Dark chocolate',20.6,5.2,'DIY_swee'),(121,'Doughnuts',2.2,0.5,'DIY_swee'),(122,'Flapjack',1.9,0.5,'DIY_swee'),(123,'Ice lollies',1.3,0.3,'DIY_swee'),(124,'Milk chocolate',10.8,2.7,'DIY_swee'),(125,'Muffins',2.6,0.6,'DIY_swee'),(126,'Pain au chocolat',2.8,0.7,'DIY_swee'),(127,'Popcorn',1.8,0.5,'DIY_swee'),(128,'Protein bar',3.4,0.8,'DIY_swee'),(129,'Shortbread biscuits',2.2,0.6,'DIY_swee'),(130,'Soy desert',1.1,0.3,'DIY_swee'),(131,'Asparagus',0.9,0.2,'DIY_veg'),(132,'Beans',1.4,0.3,'DIY_veg'),(133,'Beetroot',2.7,0.7,'DIY_veg'),(134,'Broccoli',0.9,0.2,'DIY_veg'),(135,'Cabbage',0.9,0.2,'DIY_veg'),(136,'Carrots',0.9,0.2,'DIY_veg'),(137,'Cauliflower',0.9,0.2,'DIY_veg'),(138,'Cherry tomatoes',2.3,0.6,'DIY_veg'),(139,'Chickpeas',1.3,0.3,'DIY_veg'),(140,'Courgettes',0.8,0.2,'DIY_veg'),(141,'Cucumber',0.8,0.2,'DIY_veg'),(142,'Frozen chips (french fries)',0.8,0.2,'DIY_veg'),(143,'Frozen jacket potatoes',0.5,0.1,'DIY_veg'),(144,'Frozen mashed potato',0.8,0.2,'DIY_veg'),(145,'Frozen onion rings',0.8,0.2,'DIY_veg'),(146,'Frozen potato wedges',0.7,0.2,'DIY_veg'),(147,'Frozen roast potatoes',1.2,0.3,'DIY_veg'),(148,'Frozen sweet potato fries',0.4,0.1,'DIY_veg'),(149,'Garden peas',1.0,0.3,'DIY_veg'),(150,'Kale',0.9,0.2,'DIY_veg'),(151,'Lentils',2.5,0.6,'DIY_veg'),(152,'Lettuce',4.9,1.2,'DIY_veg'),(153,'Mushrooms',2.4,0.6,'DIY_veg'),(154,'Onions',0.4,0.1,'DIY_veg'),(155,'Parsnips',1.0,0.2,'DIY_veg'),(156,'Peppers',0.9,0.2,'DIY_veg'),(157,'Potatoes',0.2,0.1,'DIY_veg'),(158,'Spinach',1.0,0.3,'DIY_veg'),(159,'Sweetcorn',1.0,0.2,'DIY_veg'),(160,'Tomatoes',2.3,0.6,'DIY_veg'),(161,'Granola',1.8,0.4,'DIY_bf'),(162,'Apple pie',1.2,0.3,'MENU_des'),(163,'Banana loaf',1.9,0.5,'MENU_des'),(164,'Carrot cake',2.0,0.5,'MENU_des'),(165,'Cheesecake',2.4,0.6,'MENU_des'),(166,'Chocolate cake',4.0,1.0,'MENU_des'),(167,'Chocolate cheesecake',4.9,1.2,'MENU_des'),(168,'Fruit cake',3.5,0.9,'MENU_des'),(169,'Ice cream',3.7,0.9,'MENU_des'),(170,'Nut loaf',0.7,0.2,'MENU_des'),(171,'Sponge cake',1.9,0.5,'MENU_des'),(172,'Cod fish fingers',9.3,2.3,'MENU_fish'),(173,'Cod fishcakes',7.8,2.0,'MENU_fish'),(174,'Haddock risotto',4.9,1.2,'MENU_fish'),(175,'Prawn crackers',4.9,1.2,'MENU_fish'),(176,'Salmon fishcakes',6.5,1.6,'MENU_fish'),(177,'Beef burger',54.0,13.5,'MENU_meat'),(178,'Beef curry',17.4,4.3,'MENU_meat'),(179,'Beef meatballs',70.8,17.7,'MENU_meat'),(180,'Beef noodles',2.3,0.6,'MENU_meat'),(181,'Caesar salad',2.1,0.5,'MENU_meat'),(182,'Chicken burger',5.4,1.4,'MENU_meat'),(183,'Chicken curry',3.6,0.9,'MENU_meat'),(184,'Chicken noodles',2.4,0.6,'MENU_meat'),(185,'Chicken pasta',2.9,0.7,'MENU_meat'),(186,'Chicken wings',9.6,2.4,'MENU_meat'),(187,'Chilli con carne',13.5,3.4,'MENU_meat'),(188,'Cottage pie',11.9,3.0,'MENU_meat'),(189,'Lamb Hotpot',11.2,2.8,'MENU_meat'),(190,'Lamb burgers',26.9,6.7,'MENU_meat'),(191,'Lamb casserole',30.9,7.7,'MENU_meat'),(192,'Lamb curry',10.2,2.5,'MENU_meat'),(193,'Lamb moussaka',7.3,1.8,'MENU_meat'),(194,'Meat pizza',7.4,1.9,'MENU_meat'),(195,'Meat-free nuggets',0.9,0.2,'MENU_meat'),(196,'Pork sausage rolls',6.2,1.5,'MENU_meat'),(197,'Sausage rolls',5.8,1.5,'MENU_meat'),(198,'Shepherd\'s pie',7.7,1.9,'MENU_meat'),(199,'Spaghetti bolognese',7.8,2.0,'MENU_meat'),(200,'Steak pie',7.1,1.8,'MENU_meat'),(201,'Falafels',1.1,0.3,'MENU_veg'),(202,'Macaroni cheese',16.8,4.2,'MENU_veg'),(203,'Meat-free burger',1.0,0.3,'MENU_veg'),(204,'Mixed salad',0.9,0.2,'MENU_veg'),(205,'Potato croquettes',0.8,0.2,'MENU_veg'),(206,'Quiche',4.7,1.2,'MENU_veg'),(207,'Vegan pizza',1.9,0.5,'MENU_veg'),(208,'Vegetable lasagne',3.4,0.8,'MENU_veg'),(209,'Vegetarian chilli con carne',1.4,0.4,'MENU_veg'),(210,'Vegetarian curry',1.3,0.3,'MENU_veg'),(211,'Vegetarian pizza',5.2,1.3,'MENU_veg');
/*!40000 ALTER TABLE `food_emi_data` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-01 15:37:04
