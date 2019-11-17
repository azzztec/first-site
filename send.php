<?php
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $tel = $_POST['tel'];
    $text = $_POST['text'];

    $name = htmlspecialchars($name);
    $mail = htmlspecialchars($mail);
    $tel = htmlspecialchars($tel);
    $text = htmlspecialchars($text);

    $name = urldecode($name);
    $mail = urldecode($mail);
    $tel = urldecode($tel);
    $text = urldecode($text);

    $name = trim($name);
    $mail = trim($mail);
    $tel = trim($tel);
    $text = trim($text);
    //echo $fio;
    //echo "<br>";
    //echo $email;
    if (mail("zkhstudio@gmail.com", "Заявка с сайта", "Имя отправителя: ".$name."\r\n \r\nE-mail: ".$mail."\r\n \r\nТелефон: ".$tel."\r\n \r\nСообщение: ".$text))
    {     echo "сообщение успешно отправлено";
    } else {
        echo "при отправке сообщения возникли ошибки";
    }
?>