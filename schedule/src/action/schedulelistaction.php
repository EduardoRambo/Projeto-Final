<?php
namespace App\Action;

use App\Domain\Schedule\Service\ScheduleList;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

final class ScheduleListAction
{
    private $scheduleList;

    public function __construct(ScheduleList $scheduleList)
    {
        $this->scheduleList = $scheduleList;
    }

    public function __invoke(
        ServerRequestInterface $request,
        ResponseInterface $response
    ): ResponseInterface {

        $schedules = $this->scheduleList->listSchedule();

        $result = [
            'schedules' => $schedules
        ];

        // Build the HTTP response
        $response->getBody()->write((string)json_encode($result));

        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }
}
