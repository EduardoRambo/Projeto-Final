<?php
namespace App\Domain\Schedule\Repository;

use PDO;
use App\Domain\Schedule\Model\Schedule;

class ScheduleListRepository
{

    private $connection;

    public function __construct(PDO $connection)
    {
        $this->connection = $connection;
    }

    public function findAll()
    {
      $sql = "SELECT id, name, email, phone, date, hour FROM schedules;";
      $statement = $this->connection->prepare($sql);
      $statement->execute();

      $rows = $statement->fetchAll();

      $schedules = [];
      foreach($rows as $row) {

        $schedule = new Schedule();
        $schedule->id = (int)$row['id'];
        $schedule->name = (string)$row['name'];
        $schedule->email = (string)$row['email'];
        $schedule->phone = (int)$row['phone'];
        $schedule->date = (string)$row['date'];
        $schedule->hour = (string)$row['hour'];
        $schedules[] = $schedule;
      }
      return $schedules;
    }
}
