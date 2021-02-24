<?php
namespace App\Action;

use App\Domain\Schedule\Service\ScheduleDelete;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

/**
 * Action
 */
final class ScheduleDeleteAction
{

    private $scheduleDelete;

    public function __construct(ScheduleDelete $scheduleDelete)
    {
        $this->scheduleDelete = $scheduleDelete;
    }

    public function __invoke(
        ServerRequestInterface $request,
        ResponseInterface $response,
        array $args = []
    ): ResponseInterface {
        $id = (int) $args['id'];
        $ok = $this->scheduleDelete->deleteScheduleById($id);

        $result = [
            'success' => $ok == 1 ? true : false,
        ];

        // Build the HTTP response
        $response->getBody()->write((string)json_encode($result));

        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }
}
