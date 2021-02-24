Schedule<?php

namespace App\Domain\Schedule\Repository;

use App\Domain\Schedule\Model\Schedule;
use DomainException;
use PDO;

class ScheduleReaderRepository
{
    private $connection;

    public function __construct(PDO $connection)
    {
        $this->connection = $connection;
    }

    public function getScheduleById(int $scheduleId): Schedule
    {
        $sql = "SELECT id, name, email, phone, date, hour FROM schedules WHERE id = :id;";
        $statement = $this->connection->prepare($sql);
        $statement->execute(['id' => $id]);

        $row = $statement->fetch();

        if (!$row) {
            throw new DomainException(sprintf('Schedule not found: %s', $id));
        }

        $schedule = new Schedule();
        $schedule->id = (int)$row['id'];
        $schedule->name = (string)$row['name'];
        $schedule->email = (string)$row['email'];
        $schedule->phone = (int)$row['phone'];
        $schedule->date = (string)$row['date'];
        $schedule->hour = (string)$row['hour'];

        return $schedule;
    }
}
