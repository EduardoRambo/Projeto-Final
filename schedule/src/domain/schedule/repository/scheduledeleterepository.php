<?php

namespace App\Domain\Schedule\Repository;

use App\Domain\Schedule\Model\Schedule;
use DomainException;
use PDO;


class ScheduleDeleteRepository
{

    private $connection;

    public function __construct(PDO $connection)
    {
        $this->connection = $connection;
    }

    public function deleteScheduleById(int $scheduleId)
    {
        $sql = "DELETE FROM schedules WHERE id = :id;";
        $statement = $this->connection->prepare($sql);
        $statement->execute(['id' => $scheduleId]);

        return $statement->rowCount();
    }
}
