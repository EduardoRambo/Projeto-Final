<?php
namespace App\Action;

use App\Domain\Schedule\Service\ScheduleCreator;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

final class ScheduleCreateAction
{
    private $scheduleCreator;

    public function __construct(scheduleCreator $scheduleCreator)
    {
        $this->scheduleCreator = $scheduleCreator;
    }

    public function __invoke(
        ServerRequestInterface $request,
        ResponseInterface $response
    ): ResponseInterface {

        $data = (array) $request->getParsedBody();
        $id = $this->scheduleCreator->createSchedule($data);
        $result = [
            'id' => $id
        ];

        $response->getBody()->write((string)json_encode($result));

        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(201);
    }
}
