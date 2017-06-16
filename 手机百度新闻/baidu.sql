-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:8889
-- Generation Time: Apr 10, 2017 at 07:21 AM
-- Server version: 5.6.34-log
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `baidu`
--

CREATE TABLE IF NOT EXISTS `baidu` (
  `id` int(11) NOT NULL COMMENT '主键',
  `title` text NOT NULL,
  `content` text NOT NULL,
  `adress` text NOT NULL,
  `source` text NOT NULL,
  `date` date NOT NULL,
  `tag` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `baidu`
--

INSERT INTO `baidu` (`id`, `title`, `content`, `adress`, `source`, `date`, `tag`) VALUES
(1, '习近平主持会议', '习近平主持政治局会议听取脱贫攻坚工作报告贫攻坚工作报告', 'images/xi.jpg', '凤凰网', '2017-04-05', '推荐'),
(8, '雄安新区', '京津冀发展专家：雄安新区将试点房产改革', 'images/xiong.JPEG', '凤凰头条', '2017-04-05', '推荐'),
(9, '微信支付', '微信支付这么好，为什么我还是不看好腾讯', 'images/qq.JPEG', '猜你喜欢', '2017-04-05', '推荐'),
(10, '雄安楼市', '雄安新区96小时：楼市有价无市 周边三城紧急限购', 'images/xinqu.JPEG', '搜狐头条', '2017-04-05', '推荐'),
(11, '李湘一家', '李湘一家三口游迪拜，一家幸福肥', 'images/li1.png', '搜狐头条', '2017-04-05', '百家'),
(12, '高通', '高通豪掷470亿收购恩智浦半导体', 'images/dao.JPEG', '搜狐头条', '2017-04-05', '百家'),
(13, '共享单车', '当前的共享单车热，靠什么来赚钱的', 'images/gongxiang.JPEG', '搜狐头条', '2017-04-05', '百家'),
(14, '买房', '房价还是会上涨么？中国经济的走向到底会怎样呢', 'images/fangzi.JPEG', '搜狐头条', '2017-04-05', '百家'),
(61, '李湘', '李湘一家三口游迪拜', 'images/li2.JPEG', '芒果tv', '2017-04-07', '百家'),
(63, '11', '111', 'images/li2.JPNG', '11', '0000-00-00', '本地'),
(64, '11', '111', 'images/li2.JPNG', '11', '0000-00-00', '本地'),
(65, '11', '111', 'images/li2.JPEG', '11', '0000-00-00', '本地'),
(66, '11', '111', 'images/li2.JPEG', '11', '0000-00-00', '本地');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `baidu`
--
ALTER TABLE `baidu`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `baidu`
--
ALTER TABLE `baidu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',AUTO_INCREMENT=67;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
