<?php

namespace App\Domain\Schedule\Service;

use App\Domain\Schedule\Model\Schedule;
use App\Domain\Schedule\Repository\ScheduleDeleteRepository;
use App\Exception\ValidationException;

/**
 * Service.
 */
final class ScheduleDelete
{

    private $repository;

    public function __construct(ScheduleDeleteRepository $repository)
    {
        $this->repository = $repository;
    }

    public function deleteScheduleById(int $id)
    {
        // Validation
        if (empty($id)) {
            throw new ValidationException('Schedule ID required');
        }

        $row = $this->repository->deleteScheduleById($id);

        return $row;
    }
}
