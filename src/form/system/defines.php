<?php

//Почта администратора, кому будут приходить письма
define("_ADMIN_EMAIL_", "key.idc.m@gmail.com");

/*
 * Настройки почты по умолчанию
 */
define('_MAIL_TYPE_', 'SMTP');
define('_SMTP_HOST_', 'mail.adm.tools'); //вставили с UKRAINE
define('_SMTP_LOGIN_', 'aura@key-it.tech'); // email с которого будут отправлятся письма
define('_SMTP_PASSWORD_', '9TvuX9C4euZ2'); // пароль от почты с которой будут отправлятся письма
define('_SMTP_SECURE_', 'tls'); // tls
define('_SMTP_PORT_', 587);

/*
 * Настрйоки ReCaptha
 */
define('_RECAPTCHA_', false); // Если включить CAPTCHA то true, если отключить то false
define('_PRIVATE_KEY_', ''); //секретный ключ
define('_RESPONCE_NAME_', 'g-recaptcha-response');
