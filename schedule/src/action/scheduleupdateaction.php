<?php
namespace App\Action;

use App\Domain\Schedule\Service\ScheduleUpdate;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

final class ScheduleUpdateAction
{
    private $scheduleUpdate;

    public function __construct(ScheduleUpdate $scheduleUpdate)
    {
        $this->scheduleUpdate = $scheduleUpdate;
    }

    public function __invoke(
        ServerRequestInterface $request,
        ResponseInterface $response
    ): ResponseInterface {
        // Collect input from the HTTP request
        $data = (array) $request->getParsedBody();

        // Invoke the Domain with inputs and retain the result
        $rowCount = $this->scheduleUpdate->updateSchedule($data);

        // Transform the result into the JSON representation
        $result = [
            'success' => $rowCount == 1 ? true : false
        ];

        // Build the HTTP response
        $response->getBody()->write((string)json_encode($result));

        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }
}
