<?php

namespace App\Domain\Schedule\Service;

use App\Domain\Schedule\Repository\ScheduleCreatorRepository;
use App\Exception\ValidationException;


final class ScheduleCreator
{
    private $repository;

    public function __construct(ScheduleCreatorRepository $repository)
    {
        $this->repository = $repository;
    }

    public function createSchedule(array $data): int
    {
        $this->validateNewSchedule($data);
        $id = $this->repository->insertSchedule($data);

        return $id;
    }

    private function validateNewSchedule(array $data): void
    {
        $errors = [];

        // Here you can also use your preferred validation library

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
