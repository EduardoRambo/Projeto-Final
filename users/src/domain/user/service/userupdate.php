<?php

namespace App\Domain\User\Service;

use App\Domain\User\Repository\UserUpdateRepository;
use App\Exception\ValidationException;

final class UserUpdate
{

  private $repository;

  public function __construct(UserUpdateRepository $repository)
  {
    $this->repository = $repository;
  }

  public function updateUser(array $data): int
  {
      $this->validateNewUser($data);

      $rowCount = $this->repository->updateUser($data);

      return $rowCount;
  }

  private function validateNewUser(array $data): void
  {
    $errors = [];

    if(empty($data['username'])) {
      $errors['username'] = 'Digite o usuário';
    }

    if(empty($data['email'])) {
      $errors['username'] = 'Digite o email';
    } else if(filter_var($data['email'], FILTER_VALIDATE_EMAIL) === false) {
      $errors['email'] = 'Email Inválido!';
    }

    if($errors) {
      throw new ValidationException("Por favor, verifique os dados digitados", $errors);

    }
  }
}
