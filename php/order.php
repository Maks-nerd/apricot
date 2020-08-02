<?php


if ( strlen($_POST["g-recaptcha-response"]) == 0 ) exit('0');

// if ( strlen($_POST["checkbox"]) == 0 ) exit('0');


$name = isset($_POST["name"]) 	? '<br><b>Имя:</b> '.$_POST["name"] : null;
$phone = isset($_POST["phone"]) ? '<br><b>Телефон:</b> '.$_POST["phone"] : null;
$email = isset($_POST["email"]) ? '<br><b>Email:</b> '.$_POST["email"] : null;
$subject = isset($_POST["subject"]) ? '<br><b>Сообщения:</b> '.$_POST["subject"] : null;

//if ($phone) $adminemail = "artur@planetatalantov.ru";
$adminemail = "v.sinitsyn87@gmail.com";

$subject_mail = "Отзыв";


if ($name) {	
	if ($name)
		$content .= $name;
	if ($phone)
		$content .= $phone;
	if ($email)
		$content .= $email;
	if ($subject)
		$content .= $subject;
	
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";
	if (mail($adminemail, $subject_mail, $content, $headers))
		echo 'Спасибо за заявку!';
	else
		echo 'Ошибка';
} else echo 'Form not require';

?>