## Rates

This site is intended for viewing the exchange rates of Ukrainian banks.

## Instructions for deployment

#

Installing all dependencies

```console
$ composer install
```

Lifting containers

```console
$ sail up -d
```

Application of migrations

```console
$ sail artisan migrate
```

Installing all dependencies node

```console
$ sail npm install
```

Build frontend

```console
$ sail npm run build
```

Seeded database

```console
$ sail artisan db:seed
```


Running the scheduler

```console
$ sail artisan schedule:work
```

