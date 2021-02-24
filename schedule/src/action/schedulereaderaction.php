<?php
namespace App\Action;

use App\Domain\Schedule\Service\ScheduleReader;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

final class ScheduleReaderAction
{
  private $scheduleReader;

    public function __construct(ScheduleReader $scheduleReader)
    {
        $this->scheduleReader = $scheduleReader;
    }

    public function __invoke(
      ServerRequestInterface $request,
      ResponseInterface $response,
      array $args = []
      ): ResponseInterface {

        $id = (int) $args['id'];

        $schedule = $this->scheduleReader->getScheduleById($id);

        $result = [
            'id' => $schedule->id,
            'name' => $schedule->name,
            'email' => $schedule->email,
            'phone' => $schedule->phone,
            'date' => $schedule->date,
            'hour' => $schedule->hour,
        ];

        $response->getBody()->write((string)json_encode($result));

        return $response->
        withHeader('Content-Type', 'application/json')
        ->withStatus(200);
    }
}
