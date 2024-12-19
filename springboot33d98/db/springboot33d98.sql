-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: springboot33d98
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `springboot33d98`
--

/*!40000 DROP DATABASE IF EXISTS `springboot33d98`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `springboot33d98` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `springboot33d98`;

--
-- Table structure for table `baomingzhuangtai`
--

DROP TABLE IF EXISTS `baomingzhuangtai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `baomingzhuangtai` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `baomingzhuangtai` varchar(200) DEFAULT NULL COMMENT '报名状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8 COMMENT='报名状态';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `baomingzhuangtai`
--

LOCK TABLES `baomingzhuangtai` WRITE;
/*!40000 ALTER TABLE `baomingzhuangtai` DISABLE KEYS */;
INSERT INTO `baomingzhuangtai` VALUES (71,'2023-03-08 11:31:16','报名状态1'),(72,'2023-03-08 11:31:16','报名状态2'),(73,'2023-03-08 11:31:16','报名状态3'),(74,'2023-03-08 11:31:16','报名状态4'),(75,'2023-03-08 11:31:16','报名状态5'),(76,'2023-03-08 11:31:16','报名状态6'),(77,'2023-03-08 11:31:16','报名状态7'),(78,'2023-03-08 11:31:16','报名状态8');
/*!40000 ALTER TABLE `baomingzhuangtai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `config`
--

DROP TABLE IF EXISTS `config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `config` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(100) NOT NULL COMMENT '配置参数名称',
  `value` varchar(100) DEFAULT NULL COMMENT '配置参数值',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='配置文件';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `config`
--

LOCK TABLES `config` WRITE;
/*!40000 ALTER TABLE `config` DISABLE KEYS */;
INSERT INTO `config` VALUES (1,'picture1','upload/picture1.jpg'),(2,'picture2','upload/picture2.jpg'),(3,'picture3','upload/picture3.jpg');
/*!40000 ALTER TABLE `config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qianbao`
--

DROP TABLE IF EXISTS `qianbao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qianbao` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `qianbaobianhao` varchar(200) DEFAULT NULL COMMENT '钱包编号',
  `yongjin` int(11) DEFAULT NULL COMMENT '佣金',
  `yanyuanzhanghao` varchar(200) DEFAULT NULL COMMENT '演员账号',
  `nicheng` varchar(200) DEFAULT NULL COMMENT '昵称',
  `touxiang` longtext COMMENT '头像',
  PRIMARY KEY (`id`),
  UNIQUE KEY `qianbaobianhao` (`qianbaobianhao`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8 COMMENT='钱包';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qianbao`
--

LOCK TABLES `qianbao` WRITE;
/*!40000 ALTER TABLE `qianbao` DISABLE KEYS */;
INSERT INTO `qianbao` VALUES (101,'2023-03-08 11:31:16','1111111111',1,'演员账号1','昵称1','upload/qianbao_touxiang1.jpg,upload/qianbao_touxiang2.jpg,upload/qianbao_touxiang3.jpg'),(102,'2023-03-08 11:31:16','2222222222',2,'演员账号2','昵称2','upload/qianbao_touxiang2.jpg,upload/qianbao_touxiang3.jpg,upload/qianbao_touxiang4.jpg'),(103,'2023-03-08 11:31:16','3333333333',3,'演员账号3','昵称3','upload/qianbao_touxiang3.jpg,upload/qianbao_touxiang4.jpg,upload/qianbao_touxiang5.jpg'),(104,'2023-03-08 11:31:17','4444444444',4,'演员账号4','昵称4','upload/qianbao_touxiang4.jpg,upload/qianbao_touxiang5.jpg,upload/qianbao_touxiang6.jpg'),(105,'2023-03-08 11:31:17','5555555555',5,'演员账号5','昵称5','upload/qianbao_touxiang5.jpg,upload/qianbao_touxiang6.jpg,upload/qianbao_touxiang7.jpg'),(106,'2023-03-08 11:31:17','6666666666',6,'演员账号6','昵称6','upload/qianbao_touxiang6.jpg,upload/qianbao_touxiang7.jpg,upload/qianbao_touxiang8.jpg'),(107,'2023-03-08 11:31:17','7777777777',7,'演员账号7','昵称7','upload/qianbao_touxiang7.jpg,upload/qianbao_touxiang8.jpg,upload/qianbao_touxiang9.jpg'),(108,'2023-03-08 11:31:17','8888888888',8,'演员账号8','昵称8','upload/qianbao_touxiang8.jpg,upload/qianbao_touxiang9.jpg,upload/qianbao_touxiang10.jpg');
/*!40000 ALTER TABLE `qianbao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shangjia`
--

DROP TABLE IF EXISTS `shangjia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shangjia` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `shangjiazhanghao` varchar(200) NOT NULL COMMENT '商家账号',
  `shangjianicheng` varchar(200) NOT NULL COMMENT '商家昵称',
  `mima` varchar(200) NOT NULL COMMENT '密码',
  `shangjiaxingming` varchar(200) NOT NULL COMMENT '商家姓名',
  `shangjiajianjie` varchar(200) DEFAULT NULL COMMENT '商家简介',
  `lianxifangshi` varchar(200) DEFAULT NULL COMMENT '联系方式',
  `shangjiazhaopian` longtext COMMENT '商家照片',
  PRIMARY KEY (`id`),
  UNIQUE KEY `shangjiazhanghao` (`shangjiazhanghao`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COMMENT='商家';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shangjia`
--

LOCK TABLES `shangjia` WRITE;
/*!40000 ALTER TABLE `shangjia` DISABLE KEYS */;
INSERT INTO `shangjia` VALUES (21,'2023-03-08 11:31:16','商家账号1','商家昵称1','123456','商家姓名1','商家简介1','13823888881','upload/shangjia_shangjiazhaopian1.jpg'),(22,'2023-03-08 11:31:16','商家账号2','商家昵称2','123456','商家姓名2','商家简介2','13823888882','upload/shangjia_shangjiazhaopian2.jpg'),(23,'2023-03-08 11:31:16','商家账号3','商家昵称3','123456','商家姓名3','商家简介3','13823888883','upload/shangjia_shangjiazhaopian3.jpg'),(24,'2023-03-08 11:31:16','商家账号4','商家昵称4','123456','商家姓名4','商家简介4','13823888884','upload/shangjia_shangjiazhaopian4.jpg'),(25,'2023-03-08 11:31:16','商家账号5','商家昵称5','123456','商家姓名5','商家简介5','13823888885','upload/shangjia_shangjiazhaopian5.jpg'),(26,'2023-03-08 11:31:16','商家账号6','商家昵称6','123456','商家姓名6','商家简介6','13823888886','upload/shangjia_shangjiazhaopian6.jpg'),(27,'2023-03-08 11:31:16','商家账号7','商家昵称7','123456','商家姓名7','商家简介7','13823888887','upload/shangjia_shangjiazhaopian7.jpg'),(28,'2023-03-08 11:31:16','商家账号8','商家昵称8','123456','商家姓名8','商家简介8','13823888888','upload/shangjia_shangjiazhaopian8.jpg');
/*!40000 ALTER TABLE `shangjia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `token` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `tablename` varchar(100) DEFAULT NULL COMMENT '表名',
  `role` varchar(100) DEFAULT NULL COMMENT '角色',
  `token` varchar(200) NOT NULL COMMENT '密码',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增时间',
  `expiratedtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '过期时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='token表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES (1,1,'admin','users','管理员','ndv3xy40pvq5vl9lv8gtn9b8x0woiejo','2023-03-08 12:00:34','2023-03-08 13:10:50'),(2,21,'商家账号1','shangjia','商家','t3peqqqgsiegejcpianvtebxmttdgylc','2023-03-08 12:04:58','2023-03-08 13:04:59'),(3,11,'演员账号1','xiaoyanyuan','小演员','3q88988dh958jmb2kvx1ehzww7qxs677','2023-03-08 12:11:41','2023-03-08 13:11:41');
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tonggao`
--

DROP TABLE IF EXISTS `tonggao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tonggao` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `tonggaobiaoti` varchar(200) DEFAULT NULL COMMENT '通告标题',
  `tonggaoleixing` varchar(200) DEFAULT NULL COMMENT '通告类型',
  `tonggaozhuangtai` varchar(200) DEFAULT NULL COMMENT '通告状态',
  `zhaomurenshu` varchar(200) DEFAULT NULL COMMENT '招募人数',
  `jiezhiriqi` varchar(200) DEFAULT NULL COMMENT '截止日期',
  `paisheshijian` date DEFAULT NULL COMMENT '拍摄时间',
  `paishedidian` varchar(200) DEFAULT NULL COMMENT '拍摄地点',
  `yongjin` varchar(200) DEFAULT NULL COMMENT '佣金',
  `tonggaoneirong` longtext COMMENT '通告内容',
  `tonggaofengmian` longtext COMMENT '通告封面',
  `fabushijian` date DEFAULT NULL COMMENT '发布时间',
  `shangjiazhanghao` varchar(200) DEFAULT NULL COMMENT '商家账号',
  `shangjianicheng` varchar(200) DEFAULT NULL COMMENT '商家昵称',
  `shangjiaxingming` varchar(200) DEFAULT NULL COMMENT '商家姓名',
  `lianxifangshi` varchar(200) DEFAULT NULL COMMENT '联系方式',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8 COMMENT='通告';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tonggao`
--

LOCK TABLES `tonggao` WRITE;
/*!40000 ALTER TABLE `tonggao` DISABLE KEYS */;
INSERT INTO `tonggao` VALUES (41,'2023-03-08 11:31:16','通告标题1','演员招募','通告状态1','招募人数1','截止日期1','2023-03-08','拍摄地点1','佣金1','通告内容1','upload/tonggao_tonggaofengmian1.jpg,upload/tonggao_tonggaofengmian2.jpg,upload/tonggao_tonggaofengmian3.jpg','2023-03-08','商家账号1','商家昵称1','商家姓名1','联系方式1'),(42,'2023-03-08 11:31:16','通告标题2','演员招募','通告状态2','招募人数2','截止日期2','2023-03-08','拍摄地点2','佣金2','通告内容2','upload/tonggao_tonggaofengmian2.jpg,upload/tonggao_tonggaofengmian3.jpg,upload/tonggao_tonggaofengmian4.jpg','2023-03-08','商家账号2','商家昵称2','商家姓名2','联系方式2'),(43,'2023-03-08 11:31:16','通告标题3','演员招募','通告状态3','招募人数3','截止日期3','2023-03-08','拍摄地点3','佣金3','通告内容3','upload/tonggao_tonggaofengmian3.jpg,upload/tonggao_tonggaofengmian4.jpg,upload/tonggao_tonggaofengmian5.jpg','2023-03-08','商家账号3','商家昵称3','商家姓名3','联系方式3'),(44,'2023-03-08 11:31:16','通告标题4','演员招募','通告状态4','招募人数4','截止日期4','2023-03-08','拍摄地点4','佣金4','通告内容4','upload/tonggao_tonggaofengmian4.jpg,upload/tonggao_tonggaofengmian5.jpg,upload/tonggao_tonggaofengmian6.jpg','2023-03-08','商家账号4','商家昵称4','商家姓名4','联系方式4'),(45,'2023-03-08 11:31:16','通告标题5','演员招募','通告状态5','招募人数5','截止日期5','2023-03-08','拍摄地点5','佣金5','通告内容5','upload/tonggao_tonggaofengmian5.jpg,upload/tonggao_tonggaofengmian6.jpg,upload/tonggao_tonggaofengmian7.jpg','2023-03-08','商家账号5','商家昵称5','商家姓名5','联系方式5'),(46,'2023-03-08 11:31:16','通告标题6','演员招募','通告状态6','招募人数6','截止日期6','2023-03-08','拍摄地点6','佣金6','通告内容6','upload/tonggao_tonggaofengmian6.jpg,upload/tonggao_tonggaofengmian7.jpg,upload/tonggao_tonggaofengmian8.jpg','2023-03-08','商家账号6','商家昵称6','商家姓名6','联系方式6'),(47,'2023-03-08 11:31:16','通告标题7','演员招募','通告状态7','招募人数7','截止日期7','2023-03-08','拍摄地点7','佣金7','通告内容7','upload/tonggao_tonggaofengmian7.jpg,upload/tonggao_tonggaofengmian8.jpg,upload/tonggao_tonggaofengmian9.jpg','2023-03-08','商家账号7','商家昵称7','商家姓名7','联系方式7'),(48,'2023-03-08 11:31:16','通告标题8','演员招募','通告状态8','招募人数8','截止日期8','2023-03-08','拍摄地点8','佣金8','通告内容8','upload/tonggao_tonggaofengmian8.jpg,upload/tonggao_tonggaofengmian9.jpg,upload/tonggao_tonggaofengmian10.jpg','2023-03-08','商家账号8','商家昵称8','商家姓名8','联系方式8');
/*!40000 ALTER TABLE `tonggao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tonggaozhuangtai`
--

DROP TABLE IF EXISTS `tonggaozhuangtai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tonggaozhuangtai` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `tonggaozhuangtai` varchar(200) DEFAULT NULL COMMENT '通告状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1678276945852 DEFAULT CHARSET=utf8 COMMENT='通告状态';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tonggaozhuangtai`
--

LOCK TABLES `tonggaozhuangtai` WRITE;
/*!40000 ALTER TABLE `tonggaozhuangtai` DISABLE KEYS */;
INSERT INTO `tonggaozhuangtai` VALUES (1678276910642,'2023-03-08 12:01:50','发布中'),(1678276933374,'2023-03-08 12:02:12','待结束'),(1678276945851,'2023-03-08 12:02:24','已结束');
/*!40000 ALTER TABLE `tonggaozhuangtai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `role` varchar(100) DEFAULT '管理员' COMMENT '角色',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin','管理员','2023-03-08 11:31:17');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `woyaobaoming`
--

DROP TABLE IF EXISTS `woyaobaoming`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `woyaobaoming` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `tonggaobiaoti` varchar(200) DEFAULT NULL COMMENT '通告标题',
  `tonggaoleixing` varchar(200) DEFAULT NULL COMMENT '通告类型',
  `zhaomurenshu` varchar(200) DEFAULT NULL COMMENT '招募人数',
  `jiezhiriqi` varchar(200) DEFAULT NULL COMMENT '截止日期',
  `paisheshijian` varchar(200) DEFAULT NULL COMMENT '拍摄时间',
  `paishedidian` varchar(200) DEFAULT NULL COMMENT '拍摄地点',
  `yongjin` varchar(200) DEFAULT NULL COMMENT '佣金',
  `tonggaoneirong` longtext COMMENT '通告内容',
  `shangjiazhanghao` varchar(200) DEFAULT NULL COMMENT '商家账号',
  `shangjianicheng` varchar(200) DEFAULT NULL COMMENT '商家昵称',
  `shangjiaxingming` varchar(200) DEFAULT NULL COMMENT '商家姓名',
  `lianxifangshi` varchar(200) DEFAULT NULL COMMENT '联系方式',
  `baomingshenqing` varchar(200) DEFAULT NULL COMMENT '报名申请',
  `baomingshijian` date DEFAULT NULL COMMENT '报名时间',
  `baomingzhuangtai` varchar(200) DEFAULT NULL COMMENT '报名状态',
  `yanyuanzhanghao` varchar(200) DEFAULT NULL COMMENT '演员账号',
  `nicheng` varchar(200) DEFAULT NULL COMMENT '昵称',
  `xingming` varchar(200) DEFAULT NULL COMMENT '姓名',
  `lianxidianhua` varchar(200) DEFAULT NULL COMMENT '联系电话',
  `touxiang` longtext COMMENT '头像',
  `sfsh` varchar(200) DEFAULT '待审核' COMMENT '是否审核',
  `shhf` longtext COMMENT '审核回复',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8 COMMENT='我要报名';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `woyaobaoming`
--

LOCK TABLES `woyaobaoming` WRITE;
/*!40000 ALTER TABLE `woyaobaoming` DISABLE KEYS */;
INSERT INTO `woyaobaoming` VALUES (51,'2023-03-08 11:31:16','通告标题1','通告类型1','招募人数1','截止日期1','拍摄时间1','拍摄地点1','佣金1','通告内容1','商家账号1','商家昵称1','商家姓名1','联系方式1','报名申请1','2023-03-08','报名状态1','演员账号1','昵称1','姓名1','联系电话1','upload/woyaobaoming_touxiang1.jpg,upload/woyaobaoming_touxiang2.jpg,upload/woyaobaoming_touxiang3.jpg','是',''),(52,'2023-03-08 11:31:16','通告标题2','通告类型2','招募人数2','截止日期2','拍摄时间2','拍摄地点2','佣金2','通告内容2','商家账号2','商家昵称2','商家姓名2','联系方式2','报名申请2','2023-03-08','报名状态2','演员账号2','昵称2','姓名2','联系电话2','upload/woyaobaoming_touxiang2.jpg,upload/woyaobaoming_touxiang3.jpg,upload/woyaobaoming_touxiang4.jpg','是',''),(53,'2023-03-08 11:31:16','通告标题3','通告类型3','招募人数3','截止日期3','拍摄时间3','拍摄地点3','佣金3','通告内容3','商家账号3','商家昵称3','商家姓名3','联系方式3','报名申请3','2023-03-08','报名状态3','演员账号3','昵称3','姓名3','联系电话3','upload/woyaobaoming_touxiang3.jpg,upload/woyaobaoming_touxiang4.jpg,upload/woyaobaoming_touxiang5.jpg','是',''),(54,'2023-03-08 11:31:16','通告标题4','通告类型4','招募人数4','截止日期4','拍摄时间4','拍摄地点4','佣金4','通告内容4','商家账号4','商家昵称4','商家姓名4','联系方式4','报名申请4','2023-03-08','报名状态4','演员账号4','昵称4','姓名4','联系电话4','upload/woyaobaoming_touxiang4.jpg,upload/woyaobaoming_touxiang5.jpg,upload/woyaobaoming_touxiang6.jpg','是',''),(55,'2023-03-08 11:31:16','通告标题5','通告类型5','招募人数5','截止日期5','拍摄时间5','拍摄地点5','佣金5','通告内容5','商家账号5','商家昵称5','商家姓名5','联系方式5','报名申请5','2023-03-08','报名状态5','演员账号5','昵称5','姓名5','联系电话5','upload/woyaobaoming_touxiang5.jpg,upload/woyaobaoming_touxiang6.jpg,upload/woyaobaoming_touxiang7.jpg','是',''),(56,'2023-03-08 11:31:16','通告标题6','通告类型6','招募人数6','截止日期6','拍摄时间6','拍摄地点6','佣金6','通告内容6','商家账号6','商家昵称6','商家姓名6','联系方式6','报名申请6','2023-03-08','报名状态6','演员账号6','昵称6','姓名6','联系电话6','upload/woyaobaoming_touxiang6.jpg,upload/woyaobaoming_touxiang7.jpg,upload/woyaobaoming_touxiang8.jpg','是',''),(57,'2023-03-08 11:31:16','通告标题7','通告类型7','招募人数7','截止日期7','拍摄时间7','拍摄地点7','佣金7','通告内容7','商家账号7','商家昵称7','商家姓名7','联系方式7','报名申请7','2023-03-08','报名状态7','演员账号7','昵称7','姓名7','联系电话7','upload/woyaobaoming_touxiang7.jpg,upload/woyaobaoming_touxiang8.jpg,upload/woyaobaoming_touxiang9.jpg','是',''),(58,'2023-03-08 11:31:16','通告标题8','通告类型8','招募人数8','截止日期8','拍摄时间8','拍摄地点8','佣金8','通告内容8','商家账号8','商家昵称8','商家姓名8','联系方式8','报名申请8','2023-03-08','报名状态8','演员账号8','昵称8','姓名8','联系电话8','upload/woyaobaoming_touxiang8.jpg,upload/woyaobaoming_touxiang9.jpg,upload/woyaobaoming_touxiang10.jpg','是','');
/*!40000 ALTER TABLE `woyaobaoming` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xiaomingxingzhanshi`
--

DROP TABLE IF EXISTS `xiaomingxingzhanshi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `xiaomingxingzhanshi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `yanyuanzhanghao` varchar(200) DEFAULT NULL COMMENT '演员账号',
  `nicheng` varchar(200) DEFAULT NULL COMMENT '昵称',
  `xingming` varchar(200) DEFAULT NULL COMMENT '姓名',
  `xingbie` varchar(200) DEFAULT NULL COMMENT '性别',
  `shengao` varchar(200) DEFAULT NULL COMMENT '身高',
  `tizhong` varchar(200) DEFAULT NULL COMMENT '体重',
  `jianjie` varchar(200) DEFAULT NULL COMMENT '简介',
  `zuopin` longtext COMMENT '作品',
  `lianxidianhua` varchar(200) DEFAULT NULL COMMENT '联系电话',
  `touxiang` longtext COMMENT '头像',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 COMMENT='小明星展示';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xiaomingxingzhanshi`
--

LOCK TABLES `xiaomingxingzhanshi` WRITE;
/*!40000 ALTER TABLE `xiaomingxingzhanshi` DISABLE KEYS */;
INSERT INTO `xiaomingxingzhanshi` VALUES (31,'2023-03-08 11:31:16','演员账号1','昵称1','姓名1','性别1','身高1','体重1','简介1','','联系电话1','upload/xiaomingxingzhanshi_touxiang1.jpg,upload/xiaomingxingzhanshi_touxiang2.jpg,upload/xiaomingxingzhanshi_touxiang3.jpg'),(32,'2023-03-08 11:31:16','演员账号2','昵称2','姓名2','性别2','身高2','体重2','简介2','','联系电话2','upload/xiaomingxingzhanshi_touxiang2.jpg,upload/xiaomingxingzhanshi_touxiang3.jpg,upload/xiaomingxingzhanshi_touxiang4.jpg'),(33,'2023-03-08 11:31:16','演员账号3','昵称3','姓名3','性别3','身高3','体重3','简介3','','联系电话3','upload/xiaomingxingzhanshi_touxiang3.jpg,upload/xiaomingxingzhanshi_touxiang4.jpg,upload/xiaomingxingzhanshi_touxiang5.jpg'),(34,'2023-03-08 11:31:16','演员账号4','昵称4','姓名4','性别4','身高4','体重4','简介4','','联系电话4','upload/xiaomingxingzhanshi_touxiang4.jpg,upload/xiaomingxingzhanshi_touxiang5.jpg,upload/xiaomingxingzhanshi_touxiang6.jpg'),(35,'2023-03-08 11:31:16','演员账号5','昵称5','姓名5','性别5','身高5','体重5','简介5','','联系电话5','upload/xiaomingxingzhanshi_touxiang5.jpg,upload/xiaomingxingzhanshi_touxiang6.jpg,upload/xiaomingxingzhanshi_touxiang7.jpg'),(36,'2023-03-08 11:31:16','演员账号6','昵称6','姓名6','性别6','身高6','体重6','简介6','','联系电话6','upload/xiaomingxingzhanshi_touxiang6.jpg,upload/xiaomingxingzhanshi_touxiang7.jpg,upload/xiaomingxingzhanshi_touxiang8.jpg'),(37,'2023-03-08 11:31:16','演员账号7','昵称7','姓名7','性别7','身高7','体重7','简介7','','联系电话7','upload/xiaomingxingzhanshi_touxiang7.jpg,upload/xiaomingxingzhanshi_touxiang8.jpg,upload/xiaomingxingzhanshi_touxiang9.jpg'),(38,'2023-03-08 11:31:16','演员账号8','昵称8','姓名8','性别8','身高8','体重8','简介8','','联系电话8','upload/xiaomingxingzhanshi_touxiang8.jpg,upload/xiaomingxingzhanshi_touxiang9.jpg,upload/xiaomingxingzhanshi_touxiang10.jpg');
/*!40000 ALTER TABLE `xiaomingxingzhanshi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xiaoxi`
--

DROP TABLE IF EXISTS `xiaoxi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `xiaoxi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `tonggaobiaoti` varchar(200) DEFAULT NULL COMMENT '通告标题',
  `tongzhineirong` longtext COMMENT '通知内容',
  `tongzhileixing` varchar(200) DEFAULT NULL COMMENT '通知类型',
  `tongzhishijian` datetime DEFAULT NULL COMMENT '通知时间',
  `yanyuanzhanghao` varchar(200) DEFAULT NULL COMMENT '演员账号',
  `nicheng` varchar(200) DEFAULT NULL COMMENT '昵称',
  `lianxidianhua` varchar(200) DEFAULT NULL COMMENT '联系电话',
  `shangjiazhanghao` varchar(200) DEFAULT NULL COMMENT '商家账号',
  `shangjianicheng` varchar(200) DEFAULT NULL COMMENT '商家昵称',
  `lianxifangshi` varchar(200) DEFAULT NULL COMMENT '联系方式',
  `shangjiazhaopian` longtext COMMENT '商家照片',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8 COMMENT='消息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xiaoxi`
--

LOCK TABLES `xiaoxi` WRITE;
/*!40000 ALTER TABLE `xiaoxi` DISABLE KEYS */;
INSERT INTO `xiaoxi` VALUES (81,'2023-03-08 11:31:16','通告标题1','通知内容1','已入选','2023-03-08 19:31:16','演员账号1','昵称1','联系电话1','商家账号1','商家昵称1','联系方式1','upload/xiaoxi_shangjiazhaopian1.jpg,upload/xiaoxi_shangjiazhaopian2.jpg,upload/xiaoxi_shangjiazhaopian3.jpg'),(82,'2023-03-08 11:31:16','通告标题2','通知内容2','已入选','2023-03-08 19:31:16','演员账号2','昵称2','联系电话2','商家账号2','商家昵称2','联系方式2','upload/xiaoxi_shangjiazhaopian2.jpg,upload/xiaoxi_shangjiazhaopian3.jpg,upload/xiaoxi_shangjiazhaopian4.jpg'),(83,'2023-03-08 11:31:16','通告标题3','通知内容3','已入选','2023-03-08 19:31:16','演员账号3','昵称3','联系电话3','商家账号3','商家昵称3','联系方式3','upload/xiaoxi_shangjiazhaopian3.jpg,upload/xiaoxi_shangjiazhaopian4.jpg,upload/xiaoxi_shangjiazhaopian5.jpg'),(84,'2023-03-08 11:31:16','通告标题4','通知内容4','已入选','2023-03-08 19:31:16','演员账号4','昵称4','联系电话4','商家账号4','商家昵称4','联系方式4','upload/xiaoxi_shangjiazhaopian4.jpg,upload/xiaoxi_shangjiazhaopian5.jpg,upload/xiaoxi_shangjiazhaopian6.jpg'),(85,'2023-03-08 11:31:16','通告标题5','通知内容5','已入选','2023-03-08 19:31:16','演员账号5','昵称5','联系电话5','商家账号5','商家昵称5','联系方式5','upload/xiaoxi_shangjiazhaopian5.jpg,upload/xiaoxi_shangjiazhaopian6.jpg,upload/xiaoxi_shangjiazhaopian7.jpg'),(86,'2023-03-08 11:31:16','通告标题6','通知内容6','已入选','2023-03-08 19:31:16','演员账号6','昵称6','联系电话6','商家账号6','商家昵称6','联系方式6','upload/xiaoxi_shangjiazhaopian6.jpg,upload/xiaoxi_shangjiazhaopian7.jpg,upload/xiaoxi_shangjiazhaopian8.jpg'),(87,'2023-03-08 11:31:16','通告标题7','通知内容7','已入选','2023-03-08 19:31:16','演员账号7','昵称7','联系电话7','商家账号7','商家昵称7','联系方式7','upload/xiaoxi_shangjiazhaopian7.jpg,upload/xiaoxi_shangjiazhaopian8.jpg,upload/xiaoxi_shangjiazhaopian9.jpg'),(88,'2023-03-08 11:31:16','通告标题8','通知内容8','已入选','2023-03-08 19:31:16','演员账号8','昵称8','联系电话8','商家账号8','商家昵称8','联系方式8','upload/xiaoxi_shangjiazhaopian8.jpg,upload/xiaoxi_shangjiazhaopian9.jpg,upload/xiaoxi_shangjiazhaopian10.jpg');
/*!40000 ALTER TABLE `xiaoxi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xiaoxihuifu`
--

DROP TABLE IF EXISTS `xiaoxihuifu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `xiaoxihuifu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `huifubiaoti` varchar(200) DEFAULT NULL COMMENT '回复标题',
  `huifuneirong` longtext COMMENT '回复内容',
  `huifushijian` datetime DEFAULT NULL COMMENT '回复时间',
  `yanyuanzhanghao` varchar(200) DEFAULT NULL COMMENT '演员账号',
  `nicheng` varchar(200) DEFAULT NULL COMMENT '昵称',
  `touxiang` longtext COMMENT '头像',
  `shangjiazhanghao` varchar(200) DEFAULT NULL COMMENT '商家账号',
  `shangjianicheng` varchar(200) DEFAULT NULL COMMENT '商家昵称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8 COMMENT='消息回复';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xiaoxihuifu`
--

LOCK TABLES `xiaoxihuifu` WRITE;
/*!40000 ALTER TABLE `xiaoxihuifu` DISABLE KEYS */;
INSERT INTO `xiaoxihuifu` VALUES (91,'2023-03-08 11:31:16','回复标题1','回复内容1','2023-03-08 19:31:16','演员账号1','昵称1','upload/xiaoxihuifu_touxiang1.jpg,upload/xiaoxihuifu_touxiang2.jpg,upload/xiaoxihuifu_touxiang3.jpg','商家账号1','商家昵称1'),(92,'2023-03-08 11:31:16','回复标题2','回复内容2','2023-03-08 19:31:16','演员账号2','昵称2','upload/xiaoxihuifu_touxiang2.jpg,upload/xiaoxihuifu_touxiang3.jpg,upload/xiaoxihuifu_touxiang4.jpg','商家账号2','商家昵称2'),(93,'2023-03-08 11:31:16','回复标题3','回复内容3','2023-03-08 19:31:16','演员账号3','昵称3','upload/xiaoxihuifu_touxiang3.jpg,upload/xiaoxihuifu_touxiang4.jpg,upload/xiaoxihuifu_touxiang5.jpg','商家账号3','商家昵称3'),(94,'2023-03-08 11:31:16','回复标题4','回复内容4','2023-03-08 19:31:16','演员账号4','昵称4','upload/xiaoxihuifu_touxiang4.jpg,upload/xiaoxihuifu_touxiang5.jpg,upload/xiaoxihuifu_touxiang6.jpg','商家账号4','商家昵称4'),(95,'2023-03-08 11:31:16','回复标题5','回复内容5','2023-03-08 19:31:16','演员账号5','昵称5','upload/xiaoxihuifu_touxiang5.jpg,upload/xiaoxihuifu_touxiang6.jpg,upload/xiaoxihuifu_touxiang7.jpg','商家账号5','商家昵称5'),(96,'2023-03-08 11:31:16','回复标题6','回复内容6','2023-03-08 19:31:16','演员账号6','昵称6','upload/xiaoxihuifu_touxiang6.jpg,upload/xiaoxihuifu_touxiang7.jpg,upload/xiaoxihuifu_touxiang8.jpg','商家账号6','商家昵称6'),(97,'2023-03-08 11:31:16','回复标题7','回复内容7','2023-03-08 19:31:16','演员账号7','昵称7','upload/xiaoxihuifu_touxiang7.jpg,upload/xiaoxihuifu_touxiang8.jpg,upload/xiaoxihuifu_touxiang9.jpg','商家账号7','商家昵称7'),(98,'2023-03-08 11:31:16','回复标题8','回复内容8','2023-03-08 19:31:16','演员账号8','昵称8','upload/xiaoxihuifu_touxiang8.jpg,upload/xiaoxihuifu_touxiang9.jpg,upload/xiaoxihuifu_touxiang10.jpg','商家账号8','商家昵称8');
/*!40000 ALTER TABLE `xiaoxihuifu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xiaoyanyuan`
--

DROP TABLE IF EXISTS `xiaoyanyuan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `xiaoyanyuan` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `yanyuanzhanghao` varchar(200) NOT NULL COMMENT '演员账号',
  `nicheng` varchar(200) DEFAULT NULL COMMENT '昵称',
  `mima` varchar(200) NOT NULL COMMENT '密码',
  `xingming` varchar(200) NOT NULL COMMENT '姓名',
  `xingbie` varchar(200) DEFAULT NULL COMMENT '性别',
  `shengao` varchar(200) DEFAULT NULL COMMENT '身高（cm)',
  `tizhong` varchar(200) DEFAULT NULL COMMENT '体重（kg)',
  `jianjie` varchar(200) DEFAULT NULL COMMENT '简介',
  `lianxidianhua` varchar(200) DEFAULT NULL COMMENT '联系电话',
  `touxiang` longtext COMMENT '头像',
  PRIMARY KEY (`id`),
  UNIQUE KEY `yanyuanzhanghao` (`yanyuanzhanghao`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COMMENT='小演员';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xiaoyanyuan`
--

LOCK TABLES `xiaoyanyuan` WRITE;
/*!40000 ALTER TABLE `xiaoyanyuan` DISABLE KEYS */;
INSERT INTO `xiaoyanyuan` VALUES (11,'2023-03-08 11:31:16','演员账号1','昵称1','123456','姓名1','男','身高（cm)1','体重（kg)1','简介1','13823888881','upload/xiaoyanyuan_touxiang1.jpg'),(12,'2023-03-08 11:31:16','演员账号2','昵称2','123456','姓名2','男','身高（cm)2','体重（kg)2','简介2','13823888882','upload/xiaoyanyuan_touxiang2.jpg'),(13,'2023-03-08 11:31:16','演员账号3','昵称3','123456','姓名3','男','身高（cm)3','体重（kg)3','简介3','13823888883','upload/xiaoyanyuan_touxiang3.jpg'),(14,'2023-03-08 11:31:16','演员账号4','昵称4','123456','姓名4','男','身高（cm)4','体重（kg)4','简介4','13823888884','upload/xiaoyanyuan_touxiang4.jpg'),(15,'2023-03-08 11:31:16','演员账号5','昵称5','123456','姓名5','男','身高（cm)5','体重（kg)5','简介5','13823888885','upload/xiaoyanyuan_touxiang5.jpg'),(16,'2023-03-08 11:31:16','演员账号6','昵称6','123456','姓名6','男','身高（cm)6','体重（kg)6','简介6','13823888886','upload/xiaoyanyuan_touxiang6.jpg'),(17,'2023-03-08 11:31:16','演员账号7','昵称7','123456','姓名7','男','身高（cm)7','体重（kg)7','简介7','13823888887','upload/xiaoyanyuan_touxiang7.jpg'),(18,'2023-03-08 11:31:16','演员账号8','昵称8','123456','姓名8','男','身高（cm)8','体重（kg)8','简介8','13823888888','upload/xiaoyanyuan_touxiang8.jpg');
/*!40000 ALTER TABLE `xiaoyanyuan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zhifuyongjin`
--

DROP TABLE IF EXISTS `zhifuyongjin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zhifuyongjin` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `qianbaobianhao` varchar(200) DEFAULT NULL COMMENT '钱包编号',
  `yanyuanzhanghao` varchar(200) DEFAULT NULL COMMENT '演员账号',
  `nicheng` varchar(200) DEFAULT NULL COMMENT '昵称',
  `yongjin` int(11) DEFAULT NULL COMMENT '佣金',
  `beizhu` varchar(200) DEFAULT NULL COMMENT '备注',
  `fukuanshijian` datetime DEFAULT NULL COMMENT '付款时间',
  `shangjiazhanghao` varchar(200) DEFAULT NULL COMMENT '商家账号',
  `shangjianicheng` varchar(200) DEFAULT NULL COMMENT '商家昵称',
  `lianxifangshi` varchar(200) DEFAULT NULL COMMENT '联系方式',
  `shangjiazhaopian` longtext COMMENT '商家照片',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8 COMMENT='支付佣金';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zhifuyongjin`
--

LOCK TABLES `zhifuyongjin` WRITE;
/*!40000 ALTER TABLE `zhifuyongjin` DISABLE KEYS */;
INSERT INTO `zhifuyongjin` VALUES (111,'2023-03-08 11:31:17','钱包编号1','演员账号1','昵称1',1,'备注1','2023-03-08 19:31:17','商家账号1','商家昵称1','联系方式1','upload/zhifuyongjin_shangjiazhaopian1.jpg,upload/zhifuyongjin_shangjiazhaopian2.jpg,upload/zhifuyongjin_shangjiazhaopian3.jpg'),(112,'2023-03-08 11:31:17','钱包编号2','演员账号2','昵称2',2,'备注2','2023-03-08 19:31:17','商家账号2','商家昵称2','联系方式2','upload/zhifuyongjin_shangjiazhaopian2.jpg,upload/zhifuyongjin_shangjiazhaopian3.jpg,upload/zhifuyongjin_shangjiazhaopian4.jpg'),(113,'2023-03-08 11:31:17','钱包编号3','演员账号3','昵称3',3,'备注3','2023-03-08 19:31:17','商家账号3','商家昵称3','联系方式3','upload/zhifuyongjin_shangjiazhaopian3.jpg,upload/zhifuyongjin_shangjiazhaopian4.jpg,upload/zhifuyongjin_shangjiazhaopian5.jpg'),(114,'2023-03-08 11:31:17','钱包编号4','演员账号4','昵称4',4,'备注4','2023-03-08 19:31:17','商家账号4','商家昵称4','联系方式4','upload/zhifuyongjin_shangjiazhaopian4.jpg,upload/zhifuyongjin_shangjiazhaopian5.jpg,upload/zhifuyongjin_shangjiazhaopian6.jpg'),(115,'2023-03-08 11:31:17','钱包编号5','演员账号5','昵称5',5,'备注5','2023-03-08 19:31:17','商家账号5','商家昵称5','联系方式5','upload/zhifuyongjin_shangjiazhaopian5.jpg,upload/zhifuyongjin_shangjiazhaopian6.jpg,upload/zhifuyongjin_shangjiazhaopian7.jpg'),(116,'2023-03-08 11:31:17','钱包编号6','演员账号6','昵称6',6,'备注6','2023-03-08 19:31:17','商家账号6','商家昵称6','联系方式6','upload/zhifuyongjin_shangjiazhaopian6.jpg,upload/zhifuyongjin_shangjiazhaopian7.jpg,upload/zhifuyongjin_shangjiazhaopian8.jpg'),(117,'2023-03-08 11:31:17','钱包编号7','演员账号7','昵称7',7,'备注7','2023-03-08 19:31:17','商家账号7','商家昵称7','联系方式7','upload/zhifuyongjin_shangjiazhaopian7.jpg,upload/zhifuyongjin_shangjiazhaopian8.jpg,upload/zhifuyongjin_shangjiazhaopian9.jpg'),(118,'2023-03-08 11:31:17','钱包编号8','演员账号8','昵称8',8,'备注8','2023-03-08 19:31:17','商家账号8','商家昵称8','联系方式8','upload/zhifuyongjin_shangjiazhaopian8.jpg,upload/zhifuyongjin_shangjiazhaopian9.jpg,upload/zhifuyongjin_shangjiazhaopian10.jpg');
/*!40000 ALTER TABLE `zhifuyongjin` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-09 17:01:31
