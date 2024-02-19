<div class=" d-flex flex-column flex-md-row align-items-center pb-3 mb-5 mt-2 m-4 border-bottom">
    <a href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
        <img src="img/icon.png" alt="" width="45" height="40" class="me-2">
        <span class="fs-4">Сайт S+S</span>
    </a>

    <nav class="d-inline-flex mt-md-0 ms-md-auto">
        <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="/sitePhp">Главная</a>
        <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="/sitePhp/about.php">Контакты</a>
    </nav>
    <?php
        if($_COOKIE['user'] == 'Да'):
    ?>
    <a class="btn btn-outline-primary" href="/sitePhp/auth.php">Кабинет пользователя</a>
    <?php else: ?>
    <a class="btn btn-outline-primary" href="/sitePhp/auth.php">Войти</a>
    <?php endif; ?>
</div>