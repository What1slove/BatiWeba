<?php
	if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['message']) ||
		!filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)
	){
		echo "Ошибка в аргументах";
		return false;
	}

	$type = strip_tags(htmlspecialchars($_POST['type']));
	$name = strip_tags(htmlspecialchars($_POST['name']));
	$email = strip_tags(htmlspecialchars($_POST['email']));
	$phone = strip_tags(htmlspecialchars($_POST['phone']));
	$message = strip_tags(htmlspecialchars($_POST['message']));
	$params = strip_tags($_POST['params']);

	$to = "commerce@ayva.pro";
	$from = "noreply@dinamika-rosta.ru";
	$subject = "Заявка с сайта ТЛЦ";
	$body = "Заявка с сайта\n\n" .
			"Тип: $type\n" .
			"Имя: $name\n" .
			"Email: $email\n" .
			"Телефон: $phone\n" .
			"Сообщение: $message\n\n" .
			"Параметры: $params\n";

	$headers = "From: $from\n" .
			"Content-Type: text/plain; charset=UTF-8\n" .
			"Reply-To: $email";

	if (!mail($to, $subject, $body, $headers)){
		echo "Ошибка при отправке";
		return false;
	}

	$to1 = "hello@dinamika-rosta.ru";
	if (!mail($to1, $subject, $body, $headers)){
		echo "Ошибка при отправке";
		return false;
	}
?>
