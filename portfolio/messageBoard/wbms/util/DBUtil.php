<?php
require_once('OUtil.php');

class DBUtil
{
    const _user = 'i6333129_pi1';
    const _password = 'iv66net19891125';

    const _DB_type = 'mysql';
    const _DB_host = 'localhost';
    const _DB_name = 'i6333129_pi1';
    const _DB_port = '3306';

    public static $DB = null;

    public function __construct()
    {
        $_DSN = self::_DB_type . ':host=' . self::_DB_host . ';dbname=' . self::_DB_name . ';severPort=' . self::_DB_port;
        try {
            self::$DB = new PDO(
                $_DSN, self::_user, self::_password,
                array(
                    PDO::ATTR_PERSISTENT => true
                )
            );
            self::$DB->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
            self::$DB->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);
            self::$DB->exec("SET NAMES 'utf8'");
        } catch (PDOException $PDOException) {
            die ('Connect Error :' . $PDOException->getMessage());
        }
    }

    /**
     * 確認登入狀態
     *
     * @param $managerName
     * @param $password
     * @return bool
     */
    public function checkLogin($managerName, $password)
    {
        $sql = "SELECT * FROM `msg_manager` WHERE managerName = :managerName AND password = :password";
        $sql = self::$DB->prepare($sql);
        $sql->bindValue(':managerName', $managerName);
        $sql->bindValue(':password', $password);
        $sql->execute();
        $result = $sql->fetchAll();
        return count($result) > 0;
    }

    /**
     * 傳送信息
     *
     * @param $msg
     * @return bool
     */
    public function sendMessage($msg)
    {
        $sql = "INSERT INTO `i6333129_pi1`.`msg_message` (`msg`, `ip`, `time`) VALUES (:msg, :ip, :time)";
        $sql = self::$DB->prepare($sql);
        $sql->bindValue(':msg', $msg);
        $sql->bindValue(':ip', OUtil::getIP());
        $sql->bindValue(':time', date('Y-m-d H:i:s'));
        $result = $sql->execute();
        return $result;
    }

    /**
     * 獲取信息
     *
     * @return array
     */
    public function queryMessage()
    {
        $sql = "SELECT IF(m.ip = user.ip, user.userName, m.ip) username, m.msg message, m.time date FROM user RIGHT JOIN msg_message m on user.ip = m.ip ORDER BY m.time DESC";
        $sql = self::$DB->prepare($sql);
        $sql->execute();
        $result = $sql->fetchAll();
        return $result;
    }
}