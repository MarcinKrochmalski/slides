# Widget slides

## Uruchomienie 

- W terminalu przechodzimy do katalogu widget i odpalamy
### `npm install`
### `npm run build:widget`
- Wracamy do głównego katalogu
- Tworzymy plik `.env.local` i dodajemy połączenie z bazą danych.
- Odpalamy kompostera 
### `composer install`
- Odpalamy migrację 
### `php bin/console doctrine:migrations:migrate`

