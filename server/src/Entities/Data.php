<?php

namespace Src\Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 * @ORM\Table(name="data")
 */
class Data
{
    /**
     * @ORM\Id 
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer") 
     */
    public int $id = 0;

    /**
     * @ORM\Column(type="string") 
     */
    public string|null $name;

    /**
     * @ORM\Column(type="integer")
     */
    public int|null $age;

    /**
     * @ORM\Column(type="string")
     */
    public string|null $email;

    public function getId(): int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getAge(): int
    {
        return $this->age;
    }

    public function setAge(int $age): void
    {
        $this->age = $age;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): void
    {
        $this->email = $email;
    }
}
