<?php

namespace App\Domain\Schedule\Service;

use App\Domain\Schedule\Repository\ScheduleListRepository;

final class ScheduleList
{

  private $repository;

  public function __construct(ScheduleListRepository $repository)
  {
    $this->repository = $repository;
  }

  public function listSchedule()
  {
  $schedules = $this->repository->findAll();

  return $schedules;
  }
}
