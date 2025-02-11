import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

import { Users } from 'src/entities/Users';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  getUsers() {}
  async join(email: string, nickname: string, password: string) {
    if (!email) {
      throw new Error('No Email');
    }
    if (!nickname) {
      throw new Error('No Nickname');
    }
    if (!password) {
      throw new Error('No Password');
    }
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      throw new Error('Exist User');
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    await this.usersRepository.save({
      email,
      nickname,
      password: hashedPassword,
    });
  }
}
