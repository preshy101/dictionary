 ## Dictionary App
the dictionary app helps uses to find definitions of word and their parts of speech.
it also limit two searches for every two minutes interval.
the dictionary app enable user to store favorite words for future reference 
## About 

its built on an Api(wordsapi.com) which retrieves definitions of word searched by the user.
with React, an intuitive user interface was designed to represent data for user consumption as
it also sends and receive data from the serve side (Laravel).

## Requirements for Backend(laravel)
- install composer
- install Xampp
## Requirements for Frontend(React)
- install nodeJS
- npm

## How to install and run Dictionary App(Backend)
- stand the backend(Laravel) 
- navigate into api directory 
- in the command line type
- composer install
- create a database in phpMyAdmin through the Xampp
- fill your credentials in .env file
- in the command line type(at /api directory)
- php artisan migrate
- php artisan serve
## How to install and run Dictionary App(Frontend)
- navigate into frontend_dic
- in the command line type
- npm install
- npm start
## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
