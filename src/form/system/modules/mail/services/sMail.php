<?php
namespace modules\mail\services;

class sMail
{
    protected static $instance;

    public static function instance()
    {
        if (!isset(self::$instance)) {
            self::$instance = new self;
        }
        return self::$instance;
    }


    /**
     * Превратим данные в структурированный текст
     * @param $data
     * @return false|string
     */
    public function getData($data)
    {
        return $data;
    }

}
