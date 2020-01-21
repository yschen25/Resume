SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";


CREATE TABLE IF NOT EXISTS `msg_user` (
  `userNo` int(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `userName` varchar(25) NOT NULL,
  `ip` varchar(25) NOT NULL,
  PRIMARY KEY (`userNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `msg_user` (`userNo`, `userName`, `ip`) VALUES
(1, 'Dino', '59.124.64.85'),
(2, 'Ka', '123.194.133.169'),
(3, 'YC Liu', '218.32.239.148'),
(4, 'Edsger Dijkstra', '125.36.25.64'),
(5, 'Titor', '1.129.104.12'),
(6, 'Jeff Wong', '111.241.90.163'),
(7, 'Feng', '223.137.84.103');


CREATE TABLE IF NOT EXISTS `msg_message` (
  `messageNo` int(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ip` varchar(25) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`messageNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `msg_message` (`messageNo`, `ip`, `msg`, `time`) VALUES
(1, '123.194.133.169', 'Things aren’t always #000000 and #FFFFFF', '2018-09-25 15:51:17'),
(2, '59.124.64.85', '卡卡好正', '2018-09-23 16:10:12'),
(3, '218.32.239.148', 'yo', '2018-08-07 16:44:14'),
(4, '125.36.25.64', 'If debugging is the process of removing software bugs, then programming must be the process of putting them in', '2018-08-15 17:02:55'),
(5, '12.94.253.891', '“Software Developer” – An organism that turns caffeine into software', '2018-09-12 17:05:36'),
(6, '144.194.133.169', 'If Internet Explorer is brave enough to ask to be your default browser, You are brave enough to ask that girl out', '2018-09-02 17:15:34'),
(7, '103.54.33.169', 'My code DOESN’T work, I have no idea why. My code WORKS, I have no idea why', '2018-09-21 17:16:06'),
(9, '1.129.104.12', 'How do you turn this on', '2018-06-12 17:20:55'),
(11, '123.194.133.169', 'It’s not a bug. It’s an undocumented feature!', '2018-07-10 17:25:00'),
(12, '123.194.133.169', 'You are CSS to my HTML', '2018-09-25 18:45:29'),
(17, '111.241.90.163', '我缺錢ˊˊˊ', '2018-09-25 23:02:20'),
(18, '111.241.90.163', '給我錢拜託拜託', '2018-09-25 23:04:45'),
(19, '123.194.133.169', 'Hey,this text is from mobile', '2018-09-26 17:12:33'),
(20, '111.241.90.163', 'I Need Money', '2018-09-26 20:39:35'),
(21, '223.137.84.103', '阿阿阿阿阿看的頭好暈阿~~~', '2018-09-27 09:57:46'),
(22, '223.137.84.103', '上班好想睡XDDDD', '2018-09-27 09:58:02');


CREATE TABLE IF NOT EXISTS `msg_manager` (
  `managerNo` int(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `managerName` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  PRIMARY KEY (`managerNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `msg_manager` (`managerNo`, `managerName`, `password`) VALUES
(1, 'ka', '123qwe'),
(2, 'dino', '1234qwer'),
(3, 'guest', '123456');