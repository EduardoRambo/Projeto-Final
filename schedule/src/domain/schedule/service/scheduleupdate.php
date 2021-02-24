<?php

namespace App\Domain\Schedule\Service;

use App\Domain\Schedule\Repository\ScheduleUpdateRepository;
use App\Exception\ValidationException;

final class ScheduleUpdate
{

    private $repository;

    public function __construct(ScheduleUpdateRepository $repository)
    {
        $this->repository = $repository;
    }

    public function updateSchedule(array $data): int
    {

        $this->validateNewSchedule($data);
        $rowCount = $this->repository->updateSchedule($data);
        return $rowCount;
    }

    private function validateNewSchedule(array $data): void
    {
        $errors = [];

        if (empty($data['name'])) {
            $errors['name'] = 'Input required';
        }

        if (empty($data['email'])) {
            $errors['email'] = 'Input required';
        } elseif (filter_var($data['email'], FILTER_VALIDATE_EMAIL) === false) {
            $errors['email'] = 'Invalid email address';
        }

        if ($errors) {
            throw new ValidationException('Please check your input', $errors);
        }
    }
}
