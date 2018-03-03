# Калькулятор цен

## Установка

* Склонировать `git clone https://github.com/ivbesp/discount-calc.git` или [скачать](https://github.com/ivbesp/discount-calc/archive/master.zip) этот репозиторий.
* Установить зависимости: `npm install`
* Запустить проект: `npm start`
* Удалить папку «.git» командой `npm run clean:git` (данная команда удалит «.git» каталог, привязанный к репозиторию) и следовать [инструкции](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) для инициализации нового репозитория.

## npm scripts

* `npm start` – запускает dev-сервер с автообновлением
* `npm run deploy` – cобирает проект в папку «public», создает новую ветку «gh-pages» для публикации содержимого папки «public» на Github pages.
* `npm run prettier` – форматирует js и jsx файлы в папках public/*
* `npm run clear:git` – удаляет директорию «.git»
* `npm run clear:public` – удаляет директорию «public»
* `npm run prettier` – форматирует js и jsx файлы в папках public/*


