<?php

namespace App\Domain\Schedule\Service;

use App\Domain\Schedule\Model\Schedule;
use App\Domain\Schedule\Repository\ScheduleReaderRepository;
use App\Exception\ValidationException;


final class ScheduleReader
{

  private $repository;

  public function __construct(ScheduleReaderRepository $repository)
  {
    $this->repository = $repository;
  }


  public function getScheduleById(int $id): Schedule
  {
    if (empty($id)) {
      throw new ValidationException('ID required');
    }

    $schedule = $this->repository->getScheduleById($id);

    return $schedule;
  }
}
