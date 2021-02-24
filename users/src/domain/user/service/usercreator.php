<?php

namespace App\Domain\User\Service;

use App\Domain\User\Repository\UserCreatorRepository;
use App\Exception\ValidationException;

final class UserCreator
{

  private $repository;

  public function __construct(UserCreatorRepository $repository)
  {
    $this->repository = $repository;
  }

  public function createUser(array $data): int
  {
      $this->validateNewUser($data);

      $userId = $this->repository->insertUser($data);

      return $userId;
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
