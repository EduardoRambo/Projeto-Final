<?php
namespace App\Domain\Schedule\Repository;

use PDO;

class ScheduleCreatorRepository
{

    private $connection;


    public function __construct(PDO $connection)
    {
        $this->connection = $connection;
    }

    public function insertSchedule(array $schedule): int
    {
        $row = [
            'name' => $schedule['name'],
            'email' => $schedule['email'],
            'phone' => $schedule['phone'],
            'date' => $schedule['date'],
            'hour' => $schedule['hour']
        ];

        $sql = "INSERT INTO schedules SET
                name=:name,
                email=:email,
                phone=:phone,
                date=:date,
                hour=:hour;";

        $this->connection->prepare($sql)->execute($row);

        return (int) $this->connection->lastInsertId();
    }
}
