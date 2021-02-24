<?php
namespace App\Domain\Schedule\Repository;

use PDO;

class ScheduleUpdateRepository
{
    private $connection;

    public function __construct(PDO $connection)
    {
        $this->connection = $connection;
    }

    public function updateSchedule(array $schedule): int
    {
        $row = [
            'id' => $schedule['id'],
            'name' => $schedule['schedulename'],
            'first_name' => $schedule['first_name'],
            'last_name' => $schedule['last_name'],
            'email' => $schedule['email'],
        ];

        $sql = "UPDATE schedules SET
                schedulename=:schedulename,
                first_name=:first_name,
                last_name=:last_name,
                email=:email
                WHERE id=:id;";

        $statement = $this->connection->prepare($sql);
        $statement->execute($row);

        return (int) $statement->rowCount();

    }
}
