<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>PHP веб сайт</title>
</head>
<body>
    <?php require "blocks/header.php"?>
    <div class="container">
        <h3 class="mb-5">Наши статьи</h3>
        <div class="d-flex flex-wrap">
            <?php
            for( $i = 0; $i < 5; $i++ ):
            ?>
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">Просто текст</h4>
                    </div>
                    <div class="card-body">
                        <img src="img/<?php echo ($i+1) ?>.jpg" class="img-thumbnail">
                        <ul class="list-unstyled mt-3 mb-4">
                        <li>Красивое место</li>
                        <li>Интересный ланшафт</li>
                        <li>Отличное время преровождения</li>
                        <li>Увлекателный кемепинг</li>
                        </ul>
                        <button type="button" class="w-100 btn btn-lg btn-outline-primary">Подробнее</button>
                    </div>
                </div>
            <?php endfor; ?>
        </div>
    </div>
    <?php require "blocks/footer.php"?>
   
   
</body>
</html>