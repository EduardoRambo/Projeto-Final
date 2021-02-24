<?php
use Slim\App;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

return function (App $app) {

    $app->get('/', function (
        ServerRequestInterface $request,
        ResponseInterface $response
    ) {
        $response->getBody()->write('Hello, World!');

        return $response;
    });

    $app->get('/home',\App\Action\HomeAction::class)->setName('home');

    $app->post('/schedules', \App\Action\ScheduleCreateAction::class);

    $app->get('/schedules', \App\Action\ScheduleListAction::class);

    $app->get('/schedules/{id}', \App\Action\ScheduleReaderAction::class);

    $app->put('/schedules', \App\Action\ScheduleUpdateAction::class);

    $app->delete('/schedules/{id}', \App\Action\ScheduleDeleteAction::class);

};
